import "server-only";
import { randomBytes } from "crypto";
import type { Invitacion } from "@prisma/client";
import { prisma } from "@/lib/db";
import { enviarEmailInvitacion } from "@/lib/email/invitacion";
import { DIAS_EXPIRACION_INVITACION, LIMITE_INVITACIONES_POR_HORA_POR_ORG } from "@/lib/constantes";

function generarToken(): string {
  return randomBytes(32).toString("base64url");
}

export type ResultadoCrearInvitacion =
  | { ok: true; token: string; expiraEn: string; emailEnviado: boolean }
  | { ok: false; motivo: "ya_pertenece" | "ya_pertenece_a_otra_organizacion" | "limite_excedido" };

/**
 * Crea (o reutiliza, si ya hay una pendiente vigente) una invitación y envía
 * el correo. Llamada desde POST /api/partner/invitaciones.
 */
export async function crearInvitacion(params: {
  email: string;
  organizacionId: string;
  invitadoPor?: string;
  origin: string;
}): Promise<ResultadoCrearInvitacion> {
  const email = params.email.trim().toLowerCase();

  const usuarioExistente = await prisma.user.findUnique({ where: { email } });
  if (usuarioExistente?.organizacionId) {
    return {
      ok: false,
      motivo:
        usuarioExistente.organizacionId === params.organizacionId
          ? "ya_pertenece"
          : "ya_pertenece_a_otra_organizacion",
    };
  }

  const haceUnaHora = new Date(Date.now() - 60 * 60 * 1000);
  const invitacionesRecientes = await prisma.invitacion.count({
    where: { organizacionId: params.organizacionId, createdAt: { gte: haceUnaHora } },
  });
  if (invitacionesRecientes >= LIMITE_INVITACIONES_POR_HORA_POR_ORG) {
    return { ok: false, motivo: "limite_excedido" };
  }

  // Reutiliza una invitación PENDIENTE vigente para el mismo (email,
  // organizacionId) en vez de crear una fila nueva — evita proliferar tokens
  // válidos para la misma invitación si la empresa hace clic en "invitar" más
  // de una vez.
  const pendienteVigente = await prisma.invitacion.findFirst({
    where: {
      email,
      organizacionId: params.organizacionId,
      estado: "PENDIENTE",
      expiresAt: { gt: new Date() },
    },
    orderBy: { createdAt: "desc" },
  });

  let invitacion: Invitacion;
  if (pendienteVigente) {
    invitacion = pendienteVigente;
  } else {
    invitacion = await prisma.invitacion.create({
      data: {
        email,
        organizacionId: params.organizacionId,
        token: generarToken(),
        expiresAt: new Date(Date.now() + DIAS_EXPIRACION_INVITACION * 24 * 60 * 60 * 1000),
        invitadoPor: params.invitadoPor,
      },
    });
  }

  const urlInvitacion = new URL(`/invitacion/${invitacion.token}`, params.origin).toString();
  // Si el envío falla, la invitación ya persistida NO se revierte: quien
  // llamó puede reintentar (reutilizará el mismo token, ver arriba) sin
  // duplicar filas. emailEnviado:false le indica al caller que reintente.
  const envio = await enviarEmailInvitacion({ email, urlInvitacion });

  return {
    ok: true,
    token: invitacion.token,
    expiraEn: invitacion.expiresAt.toISOString(),
    emailEnviado: envio.ok,
  };
}

/**
 * Busca una invitación por token y hace la transición perezosa a EXPIRADA si
 * ya venció (no hay infraestructura de cron en este repo para hacerlo
 * proactivamente).
 */
export async function obtenerInvitacionPorToken(token: string): Promise<Invitacion | null> {
  const invitacion = await prisma.invitacion.findUnique({ where: { token } });
  if (!invitacion) return null;

  if (invitacion.estado === "PENDIENTE" && invitacion.expiresAt.getTime() < Date.now()) {
    return prisma.invitacion.update({ where: { id: invitacion.id }, data: { estado: "EXPIRADA" } });
  }
  return invitacion;
}

export type ResultadoAceptarInvitacion =
  | { ok: true }
  | { ok: false; motivo: "no_encontrada" | "no_pendiente" | "email_no_coincide" };

/**
 * Vincula al usuario autenticado con la organización de la invitación.
 * Exige que el correo de la sesión coincida con el invitado — evita que
 * alguien logueado con otra cuenta "cobre" un link reenviado/copiado.
 */
export async function aceptarInvitacion(
  token: string,
  userId: string,
  emailSesion: string
): Promise<ResultadoAceptarInvitacion> {
  const invitacion = await obtenerInvitacionPorToken(token);
  if (!invitacion) return { ok: false, motivo: "no_encontrada" };
  if (invitacion.estado !== "PENDIENTE") return { ok: false, motivo: "no_pendiente" };
  if (invitacion.email.toLowerCase() !== emailSesion.trim().toLowerCase()) {
    return { ok: false, motivo: "email_no_coincide" };
  }

  await prisma.$transaction([
    prisma.user.update({
      where: { id: userId },
      data: { organizacionId: invitacion.organizacionId },
    }),
    prisma.invitacion.update({
      where: { id: invitacion.id },
      data: { estado: "ACEPTADA", userId },
    }),
  ]);

  return { ok: true };
}
