import "server-only";
import { prisma } from "@/lib/db";
import { LIMITE_MENSAJES_ASISTENTE_DIA } from "@/lib/constantes";

function inicioDeHoyUTC(): Date {
  const ahora = new Date();
  return new Date(Date.UTC(ahora.getUTCFullYear(), ahora.getUTCMonth(), ahora.getUTCDate()));
}

/**
 * Verifica y consume una unidad del tope diario de mensajes al asistente para un
 * usuario. Reinicia el contador si el último uso registrado fue en un día UTC
 * anterior. No es perfectamente atómico bajo concurrencia alta, pero es
 * suficiente para su propósito: acotar el costo, no una garantía de seguridad.
 */
export async function consumirMensajeAsistente(
  userId: string
): Promise<{ permitido: boolean; usados: number; limite: number }> {
  const hoy = inicioDeHoyUTC();
  const user = await prisma.user.findUniqueOrThrow({
    where: { id: userId },
    select: { asistenteMensajesHoy: true, asistenteMensajesDia: true },
  });

  const esDiaNuevo = !user.asistenteMensajesDia || user.asistenteMensajesDia < hoy;
  const usadosPrevios = esDiaNuevo ? 0 : user.asistenteMensajesHoy;

  if (usadosPrevios >= LIMITE_MENSAJES_ASISTENTE_DIA) {
    return { permitido: false, usados: usadosPrevios, limite: LIMITE_MENSAJES_ASISTENTE_DIA };
  }

  const usados = usadosPrevios + 1;
  await prisma.user.update({
    where: { id: userId },
    data: { asistenteMensajesHoy: usados, asistenteMensajesDia: new Date() },
  });

  return { permitido: true, usados, limite: LIMITE_MENSAJES_ASISTENTE_DIA };
}
