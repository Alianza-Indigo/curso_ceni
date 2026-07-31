"use server";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { crearSesionAdmin, cerrarSesionAdmin } from "@/lib/admin-auth";

export type EstadoLoginAdmin = { error?: string } | undefined;

export async function loginAdminAction(
  _estadoPrevio: EstadoLoginAdmin,
  formData: FormData
): Promise<EstadoLoginAdmin> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");

  const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const hash = process.env.ADMIN_PASSWORD_HASH;

  if (!adminEmail || !hash) {
    return { error: "El panel de administración no está configurado en este entorno." };
  }

  if (!email || !password || email !== adminEmail) {
    return { error: "Correo o contraseña incorrectos." };
  }

  const valido = await bcrypt.compare(password, hash);
  if (!valido) {
    return { error: "Correo o contraseña incorrectos." };
  }

  await crearSesionAdmin(email);
  redirect("/admin");
}

export async function logoutAdminAction() {
  await cerrarSesionAdmin();
  redirect("/admin/login");
}
