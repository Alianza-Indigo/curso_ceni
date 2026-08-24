import "server-only";
import { randomBytes } from "crypto";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { prisma } from "@/lib/db";
import { NOMBRE_COOKIE_SESION } from "@/auth";
import { LIMITE_INTENTOS_PASSWORD, MINUTOS_BLOQUEO_PASSWORD } from "@/lib/constantes";

const COSTO_BCRYPT = 12;
// Mismo horizonte que el default de las sesiones de Auth.js (30 días), para
// que una sesión creada por login-por-contraseña se comporte igual que una
// creada por el adapter de Google.
const DIAS_SESION = 30;

/**
 * Crea la contraseña de un usuario dentro del flujo de aceptación de
 * invitación. No hay signup público: este helper solo se llama desde
 * /invitacion/[token].
 */
export async function crearContrasena(userId: string, passwordPlano: string): Promise<void> {
  const passwordHash = await bcrypt.hash(passwordPlano, COSTO_BCRYPT);
  await prisma.user.update({
    where: { id: userId },
    data: {
      passwordHash,
      // La posesión del token de invitación (enviado al correo) ya demuestra
      // control del inbox, así que se marca el correo como verificado aquí.
      emailVerified: new Date(),
      passwordIntentosFallidos: 0,
      passwordBloqueadoHasta: null,
    },
  });
}

export type ResultadoVerificacionCredenciales =
  | { ok: true; userId: string }
  | { ok: false; motivo: "no_encontrado" | "sin_password" | "incorrecta" | "bloqueada" };

export async function verificarCredenciales(
  email: string,
  passwordPlano: string
): Promise<ResultadoVerificacionCredenciales> {
  const user = await prisma.user.findUnique({ where: { email: email.trim().toLowerCase() } });
  if (!user) return { ok: false, motivo: "no_encontrado" };
  if (!user.passwordHash) return { ok: false, motivo: "sin_password" };

  if (user.passwordBloqueadoHasta && user.passwordBloqueadoHasta.getTime() > Date.now()) {
    return { ok: false, motivo: "bloqueada" };
  }

  const valida = await bcrypt.compare(passwordPlano, user.passwordHash);
  if (!valida) {
    const intentos = user.passwordIntentosFallidos + 1;
    const bloqueada = intentos >= LIMITE_INTENTOS_PASSWORD;
    await prisma.user.update({
      where: { id: user.id },
      data: {
        passwordIntentosFallidos: bloqueada ? 0 : intentos,
        passwordBloqueadoHasta: bloqueada
          ? new Date(Date.now() + MINUTOS_BLOQUEO_PASSWORD * 60 * 1000)
          : null,
      },
    });
    return { ok: false, motivo: bloqueada ? "bloqueada" : "incorrecta" };
  }

  await prisma.user.update({
    where: { id: user.id },
    data: { passwordIntentosFallidos: 0, passwordBloqueadoHasta: null },
  });
  return { ok: true, userId: user.id };
}

/**
 * Crea una fila de sesión con el mismo shape que usa el PrismaAdapter para
 * Google (sessionToken/userId/expires) y setea la cookie correspondiente, ya
 * que Auth.js v5 no soporta un provider Credentials junto a
 * `session.strategy: "database"` — ver auth.ts.
 */
export async function crearSesionDeBaseDeDatos(userId: string): Promise<void> {
  const sessionToken = randomBytes(32).toString("base64url");
  const expires = new Date(Date.now() + DIAS_SESION * 24 * 60 * 60 * 1000);

  await prisma.session.create({ data: { sessionToken, userId, expires } });

  const cookieStore = await cookies();
  cookieStore.set(NOMBRE_COOKIE_SESION, sessionToken, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    secure: process.env.NODE_ENV === "production",
    expires,
  });
}
