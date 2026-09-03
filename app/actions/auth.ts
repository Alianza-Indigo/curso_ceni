"use server";

import { redirect } from "next/navigation";
import { signIn, signOut } from "@/auth";
import { prisma } from "@/lib/db";
import { crearContrasena, crearSesionDeBaseDeDatos, verificarCredenciales } from "@/lib/credenciales-auth";
import { aceptarInvitacion, obtenerInvitacionPorToken } from "@/lib/invitaciones-server";
import { MINUTOS_BLOQUEO_PASSWORD } from "@/lib/constantes";

export async function signOutAction() {
  // El parámetro `salir=1` le indica a la landing que active el blindaje del
  // botón "Atrás" del navegador (evita volver al curso o al OAuth de Google).
  await signOut({ redirectTo: "/?salir=1" });
}

export async function signInGoogleAction() {
  await signIn("google", { redirectTo: "/" });
}

export async function signInGoogleDiplomadoAction() {
  await signIn("google", { redirectTo: "/diplomado" });
}

export async function signInGoogleParaInvitacionAction(token: string) {
  await signIn("google", { redirectTo: `/invitacion/${token}` });
}

export type EstadoLoginCredenciales = { error?: string } | undefined;

const MENSAJES_LOGIN_CREDENCIALES: Record<string, string> = {
  no_encontrado: "Correo o contraseña incorrectos.",
  sin_password: "Esta cuenta usa Google para iniciar sesión. Usa el botón «Continuar con Google».",
  incorrecta: "Correo o contraseña incorrectos.",
  bloqueada: `Demasiados intentos fallidos. Intenta de nuevo en ${MINUTOS_BLOQUEO_PASSWORD} minutos.`,
};

export async function iniciarSesionConCredencialesAction(
  _estadoPrevio: EstadoLoginCredenciales,
  formData: FormData
): Promise<EstadoLoginCredenciales> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const callbackUrl = String(formData.get("callbackUrl") ?? "") || "/";

  if (!email || !password) {
    return { error: "Correo o contraseña incorrectos." };
  }

  const resultado = await verificarCredenciales(email, password);
  if (!resultado.ok) {
    return { error: MENSAJES_LOGIN_CREDENCIALES[resultado.motivo] };
  }

  await crearSesionDeBaseDeDatos(resultado.userId);
  redirect(callbackUrl);
}

export type EstadoAceptarInvitacion = { error?: string } | undefined;

/**
 * Crea (o reutiliza) el User del correo invitado, le asigna una contraseña,
 * abre sesión y acepta la invitación — todo en un solo paso, para el botón
 * "Crear contraseña" de /invitacion/[token] cuando el visitante aún no tiene
 * sesión.
 */
export async function crearContrasenaYAceptarAction(
  token: string,
  _estadoPrevio: EstadoAceptarInvitacion,
  formData: FormData
): Promise<EstadoAceptarInvitacion> {
  const password = String(formData.get("password") ?? "");
  const confirmacion = String(formData.get("confirmacion") ?? "");

  if (password.length < 8) {
    return { error: "La contraseña debe tener al menos 8 caracteres." };
  }
  if (password !== confirmacion) {
    return { error: "La confirmación no coincide con la contraseña." };
  }

  const invitacion = await obtenerInvitacionPorToken(token);
  if (!invitacion) {
    return { error: "Esta invitación no existe." };
  }
  if (invitacion.estado !== "PENDIENTE") {
    return { error: "Esta invitación ya no está disponible." };
  }

  const user =
    (await prisma.user.findUnique({ where: { email: invitacion.email } })) ??
    (await prisma.user.create({ data: { email: invitacion.email } }));

  await crearContrasena(user.id, password);
  await crearSesionDeBaseDeDatos(user.id);

  const resultado = await aceptarInvitacion(token, user.id, invitacion.email);
  if (!resultado.ok) {
    return { error: "No se pudo aceptar la invitación. Intenta de nuevo." };
  }

  redirect("/");
}
