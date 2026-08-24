import "server-only";
import { prisma } from "@/lib/db";

/**
 * ¿Este usuario puede avanzar en el curso sin la restricción secuencial
 * (módulos bloqueados hasta aprobar el anterior, examen bloqueado hasta
 * completar todos)? Aplica a las cuentas de administrador:
 *  - correos listados en la variable de entorno CURSO_ADMIN_EMAILS (separados
 *    por coma), y
 *  - cualquier correo registrado en la tabla de administradores (AdminUsuario).
 * El resto de estudiantes mantiene el avance secuencial normal.
 */
export async function accesoSinRestriccion(email?: string | null): Promise<boolean> {
  if (!email) return false;
  const correo = email.toLowerCase().trim();

  const lista = (process.env.CURSO_ADMIN_EMAILS ?? "")
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
  if (lista.includes(correo)) return true;

  const admin = await prisma.adminUsuario.findFirst({
    where: { email: { equals: correo, mode: "insensitive" } },
    select: { id: true },
  });
  return Boolean(admin);
}
