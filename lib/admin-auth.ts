import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { auth } from "@/auth";
import { prisma } from "@/lib/db";

const COOKIE_NOMBRE = "admin-session";
// Sesion administrativa de doce horas; Google OAuth permite recuperar acceso
// solamente al correo de un administrador registrado.
const DURACION_MS = 12 * 60 * 60 * 1000;

function claveSecreta() {
  const secreto = process.env.AUTH_SECRET;
  if (!secreto) throw new Error("Falta AUTH_SECRET");
  return new TextEncoder().encode(secreto);
}

export async function crearSesionAdmin(email: string) {
  const expira = new Date(Date.now() + DURACION_MS);
  const token = await new SignJWT({ email, rol: "admin", version: 2 })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expira)
    .sign(claveSecreta());

  const store = await cookies();
  store.set(COOKIE_NOMBRE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    expires: expira,
    path: "/",
  });
}

export async function verificarSesionAdmin(): Promise<{ email: string } | null> {
  const store = await cookies();
  const token = store.get(COOKIE_NOMBRE)?.value;
  if (token) {
    try {
      const { payload } = await jwtVerify(token, claveSecreta());
      if (payload.rol === "admin" && payload.version === 2 && typeof payload.email === "string") {
        const admin = await prisma.adminUsuario.findUnique({ where: { email: payload.email } });
        if (admin) return { email: admin.email };
      }
    } catch {
      // La cookie invalida no impide comprobar una sesion Google autentica.
    }
  }

  const google = await auth();
  const correo = google?.user?.email?.trim().toLowerCase();
  if (!google?.user?.id || !correo) return null;
  const admin = await prisma.adminUsuario.findFirst({
    where: { email: { equals: correo, mode: "insensitive" } },
    select: { email: true },
  });
  return admin ? { email: admin.email } : null;
}

export async function cerrarSesionAdmin() {
  const store = await cookies();
  store.delete(COOKIE_NOMBRE);
}
