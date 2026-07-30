import "server-only";
import { randomUUID } from "crypto";
import { prisma } from "@/lib/db";
import { modulos } from "@/lib/data/modulos";
import { UMBRAL_APROBATORIO_PCT } from "@/lib/constantes";

export type ResultadoQuiz = {
  moduloId: string;
  respuestas: Record<string, number>;
  aciertos: number;
  total: number;
  porcentaje: number;
  aprobado: boolean;
  fecha: string;
};

export type ProgresoCurso = {
  modulosCompletados: string[];
  resultadosQuiz: Record<string, ResultadoQuiz>;
  examenFinal?: ResultadoQuiz & { folio?: string | null };
};

function calcularResultado(
  moduloId: string,
  respuestas: Record<string, number>,
  aciertos: number,
  total: number,
  fecha: Date
): ResultadoQuiz {
  const porcentaje = total === 0 ? 0 : Math.round((aciertos / total) * 100);
  return {
    moduloId,
    respuestas,
    aciertos,
    total,
    porcentaje,
    aprobado: porcentaje >= UMBRAL_APROBATORIO_PCT,
    fecha: fecha.toISOString(),
  };
}

export async function obtenerProgreso(userId: string): Promise<ProgresoCurso> {
  const [modulosProgreso, examen] = await Promise.all([
    prisma.progresoModulo.findMany({ where: { userId } }),
    prisma.resultadoExamen.findUnique({ where: { userId } }),
  ]);

  const resultadosQuiz: Record<string, ResultadoQuiz> = {};
  const modulosCompletados: string[] = [];
  for (const p of modulosProgreso) {
    resultadosQuiz[p.moduloId] = {
      moduloId: p.moduloId,
      respuestas: p.respuestas as Record<string, number>,
      aciertos: p.aciertos,
      total: p.total,
      porcentaje: p.porcentaje,
      aprobado: p.aprobado,
      fecha: p.fecha.toISOString(),
    };
    if (p.aprobado) modulosCompletados.push(p.moduloId);
  }

  return {
    modulosCompletados,
    resultadosQuiz,
    examenFinal: examen
      ? {
          moduloId: "examen-final",
          respuestas: examen.respuestas as Record<string, number>,
          aciertos: examen.aciertos,
          total: examen.total,
          porcentaje: examen.porcentaje,
          aprobado: examen.aprobado,
          fecha: examen.fecha.toISOString(),
          folio: examen.folio,
        }
      : undefined,
  };
}

export async function registrarResultadoModulo(
  userId: string,
  moduloId: string,
  respuestas: Record<string, number>,
  aciertos: number,
  total: number
): Promise<ResultadoQuiz> {
  if (!modulos.some((m) => m.id === moduloId)) {
    throw new Error("Módulo desconocido");
  }
  const fecha = new Date();
  const resultado = calcularResultado(moduloId, respuestas, aciertos, total, fecha);

  await prisma.progresoModulo.upsert({
    where: { userId_moduloId: { userId, moduloId } },
    create: {
      userId,
      moduloId,
      respuestas,
      aciertos,
      total,
      porcentaje: resultado.porcentaje,
      aprobado: resultado.aprobado,
      fecha,
    },
    update: {
      respuestas,
      aciertos,
      total,
      porcentaje: resultado.porcentaje,
      aprobado: resultado.aprobado,
      fecha,
    },
  });

  return resultado;
}

export async function registrarResultadoExamen(
  userId: string,
  respuestas: Record<string, number>,
  aciertos: number,
  total: number
): Promise<ResultadoQuiz & { folio?: string | null }> {
  const fecha = new Date();
  const resultado = calcularResultado("examen-final", respuestas, aciertos, total, fecha);

  const existente = await prisma.resultadoExamen.findUnique({ where: { userId } });
  const folio = resultado.aprobado ? existente?.folio ?? `CENI-${randomUUID().slice(0, 8).toUpperCase()}` : null;

  await prisma.resultadoExamen.upsert({
    where: { userId },
    create: {
      userId,
      respuestas,
      aciertos,
      total,
      porcentaje: resultado.porcentaje,
      aprobado: resultado.aprobado,
      fecha,
      folio,
    },
    update: {
      respuestas,
      aciertos,
      total,
      porcentaje: resultado.porcentaje,
      aprobado: resultado.aprobado,
      fecha,
      folio,
    },
  });

  return { ...resultado, folio };
}

export async function reiniciarProgreso(userId: string) {
  await prisma.$transaction([
    prisma.progresoModulo.deleteMany({ where: { userId } }),
    prisma.resultadoExamen.deleteMany({ where: { userId } }),
  ]);
}
