import "server-only";
import { prisma } from "@/lib/db";
import { LIMITE_MENSAJES_ASISTENTE_DIA } from "@/lib/constantes";

function inicioDeHoyUTC(): Date {
  const ahora = new Date();
  return new Date(Date.UTC(ahora.getUTCFullYear(), ahora.getUTCMonth(), ahora.getUTCDate()));
}

// Dos actualizaciones condicionales atómicas: reinicia el día o incrementa
// el contador sin permitir que solicitudes simultáneas excedan el límite.
export async function consumirMensajeAsistente(
  userId: string
): Promise<{ permitido: boolean; usados: number; limite: number }> {
  const hoy = inicioDeHoyUTC();
  const primero = await prisma.user.updateMany({
    where: {
      id: userId,
      OR: [{ asistenteMensajesDia: null }, { asistenteMensajesDia: { lt: hoy } }],
    },
    data: { asistenteMensajesHoy: 1, asistenteMensajesDia: new Date() },
  });
  if (primero.count === 0) {
    const incremento = await prisma.user.updateMany({
      where: {
        id: userId,
        asistenteMensajesDia: { gte: hoy },
        asistenteMensajesHoy: { lt: LIMITE_MENSAJES_ASISTENTE_DIA },
      },
      data: { asistenteMensajesHoy: { increment: 1 } },
    });
    if (incremento.count === 0) {
      const ultimo = await prisma.user.findUniqueOrThrow({
        where: { id: userId },
        select: { asistenteMensajesHoy: true },
      });
      return { permitido: false, usados: ultimo.asistenteMensajesHoy, limite: LIMITE_MENSAJES_ASISTENTE_DIA };
    }
  }
  const usuario = await prisma.user.findUniqueOrThrow({
    where: { id: userId },
    select: { asistenteMensajesHoy: true },
  });
  return { permitido: true, usados: usuario.asistenteMensajesHoy, limite: LIMITE_MENSAJES_ASISTENTE_DIA };
}
