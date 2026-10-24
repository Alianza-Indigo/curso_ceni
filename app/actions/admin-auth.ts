"use server";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { auth, signIn, signOut } from "@/auth";
import { crearSesionAdmin, cerrarSesionAdmin, verificarSesionAdmin } from "@/lib/admin-auth";

export type EstadoLoginAdmin = { error?: string } | undefined;

// La clave inicial estuvo incluida en una migracion publica y no debe servir.
const HASH_ADMIN_INICIAL = "$2b$12$bicuHHnkFFpuN7iOsLo8IuZKZSVgzXgFCQ11QdD/0zbTTEF2n6tDC";

export async function signInGoogleAdminAction() {
  await signIn("google", { redirectTo: "/admin" });
}

export async function loginAdminAction(
  _estadoPrevio: EstadoLoginAdmin,
  formData: FormData
): Promise<EstadoLoginAdmin> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");

  if (!email || !password) {
    return { error: "Correo o contraseña incorrectos." };
  }

  const admin = await prisma.adminUsuario.findUnique({ where: { email } });
  if (!admin) {
    return { error: "Correo o contraseña incorrectos." };
  }

  if (admin.id === "admin-seed-001" && admin.passwordHash === HASH_ADMIN_INICIAL) {
    return { error: "Por seguridad, accede con Google y establece una contraseña nueva desde el panel." };
  }

  const valido = await bcrypt.compare(password, admin.passwordHash);
  if (!valido) {
    return { error: "Correo o contraseña incorrectos." };
  }

  await crearSesionAdmin(email);
  redirect("/admin");
}

export async function logoutAdminAction() {
  await cerrarSesionAdmin();
  await signOut({ redirectTo: "/admin/login" });
}

export type EstadoCambiarPassword = { error?: string; ok?: boolean } | undefined;

export async function cambiarPasswordAdminAction(
  _estadoPrevio: EstadoCambiarPassword,
  formData: FormData
): Promise<EstadoCambiarPassword> {
  const sesion = await verificarSesionAdmin();
  if (!sesion) {
    return { error: "Tu sesión expiró. Vuelve a iniciar sesión." };
  }

  const actual = String(formData.get("actual") ?? "");
  const nueva = String(formData.get("nueva") ?? "");
  const confirmacion = String(formData.get("confirmacion") ?? "");

  if (nueva.length < 8) {
    return { error: "La nueva contraseña debe tener al menos 8 caracteres." };
  }
  if (nueva !== confirmacion) {
    return { error: "La confirmación no coincide con la nueva contraseña." };
  }

  const admin = await prisma.adminUsuario.findUnique({ where: { email: sesion.email } });
  if (!admin) {
    return { error: "No se encontró la cuenta de administrador." };
  }

  let valido = await bcrypt.compare(actual, admin.passwordHash);
  if (!valido && admin.id === "admin-seed-001" && admin.passwordHash === HASH_ADMIN_INICIAL) {
    const google = await auth();
    valido = Boolean(google?.user?.id && google.user.email?.trim().toLowerCase() === admin.email.toLowerCase());
  }
  if (!valido) {
    return { error: "La contraseña actual no es correcta. Si utilizas el acceso inicial, inicia sesión con Google." };
  }

  const nuevoHash = await bcrypt.hash(nueva, 12);
  await prisma.adminUsuario.update({
    where: { email: sesion.email },
    data: { passwordHash: nuevoHash },
  });

  return { ok: true };
}

