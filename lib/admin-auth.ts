import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const COOKIE_NOMBRE = "admin-session";
const DURACION_MS = 12 * 60 * 60 * 1000; // 12 horas

function claveSecreta() {
  const secreto = process.env.AUTH_SECRET;
  if (!secreto) throw new Error("Falta AUTH_SECRET");
  return new TextEncoder().encode(secreto);
}

export async function crearSesionAdmin(email: string) {
  const expira = new Date(Date.now() + DURACION_MS);
  const token = await new SignJWT({ email, rol: "admin" })
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
  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, claveSecreta());
    if (payload.rol !== "admin" || typeof payload.email !== "string") return null;
    return { email: payload.email };
  } catch {
    return null;
  }
}

export async function cerrarSesionAdmin() {
  const store = await cookies();
  store.delete(COOKIE_NOMBRE);
}
