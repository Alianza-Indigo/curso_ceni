import "server-only";
import { randomUUID } from "crypto";
import { prisma } from "@/lib/db";
import { modulos, getModuloById, actividadesCompletas } from "@/lib/data/modulos";
import { UMBRAL_APROBATORIO_PCT } from "@/lib/constantes";

const UN_ANIO_MS = 365 * 24 * 60 * 60 * 1000;

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
  entregasPorModulo: Record<string, Record<string, string>>;
  examenFinal?: ResultadoQuiz & { folio?: string | null; vigenciaHasta?: string | null; vigente?: boolean };
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
  const [modulosProgreso, examen, entregas] = await Promise.all([
    prisma.progresoModulo.findMany({ where: { userId } }),
    prisma.resultadoExamen.findUnique({ where: { userId } }),
    prisma.entregaActividad.findMany({ where: { userId } }),
  ]);

  const entregasPorModulo: Record<string, Record<string, string>> = {};
  for (const e of entregas) {
    (entregasPorModulo[e.moduloId] ??= {})[e.actividadCodigo] = e.contenido;
  }

  const resultadosQuiz: Record<string, ResultadoQuiz> = {};
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
  }

  const modulosCompletados = modulos
    .filter((m) => {
      const codigosEntregados = Object.keys(entregasPorModulo[m.id] ?? {});
      return Boolean(resultadosQuiz[m.id]?.aprobado) && actividadesCompletas(m, codigosEntregados);
    })
    .map((m) => m.id);

  return {
    modulosCompletados,
    resultadosQuiz,
    entregasPorModulo,
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
          vigenciaHasta: examen.vigenciaHasta?.toISOString() ?? null,
          vigente: Boolean(examen.vigenciaHasta && examen.vigenciaHasta.getTime() > Date.now()),
        }
      : undefined,
  };
}

export async function guardarEntregaActividad(
  userId: string,
  moduloId: string,
  actividadCodigo: string,
  contenido: string
): Promise<void> {
  const modulo = getModuloById(moduloId);
  if (!modulo || !modulo.actividades.some((a) => a.codigo === actividadCodigo)) {
    throw new Error("Actividad desconocida");
  }
  await prisma.entregaActividad.upsert({
    where: { userId_moduloId_actividadCodigo: { userId, moduloId, actividadCodigo } },
    create: { userId, moduloId, actividadCodigo, contenido },
    update: { contenido },
  });
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
): Promise<ResultadoQuiz & { folio?: string | null; vigenciaHasta?: string | null }> {
  const fecha = new Date();
  const resultado = calcularResultado("examen-final", respuestas, aciertos, total, fecha);

  const existente = await prisma.resultadoExamen.findUnique({ where: { userId } });
  const folio = resultado.aprobado ? existente?.folio ?? `CENI-${randomUUID().slice(0, 8).toUpperCase()}` : null;
  // Vigencia de 1 año desde la aprobación, como especifica el curso original.
  const vigenciaHasta = resultado.aprobado ? new Date(fecha.getTime() + UN_ANIO_MS) : null;

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
      vigenciaHasta,
    },
    update: {
      respuestas,
      aciertos,
      total,
      porcentaje: resultado.porcentaje,
      aprobado: resultado.aprobado,
      fecha,
      folio,
      vigenciaHasta,
    },
  });

  return { ...resultado, folio, vigenciaHasta: vigenciaHasta?.toISOString() ?? null };
}

export async function reiniciarProgreso(userId: string) {
  await prisma.$transaction([
    prisma.progresoModulo.deleteMany({ where: { userId } }),
    prisma.resultadoExamen.deleteMany({ where: { userId } }),
    prisma.entregaActividad.deleteMany({ where: { userId } }),
  ]);
}

/** Usado por la página pública de verificación de folio — no requiere sesión. */
export async function buscarConstanciaPorFolio(folio: string) {
  const examen = await prisma.resultadoExamen.findUnique({
    where: { folio },
    include: { user: { select: { name: true, email: true } } },
  });
  if (!examen || !examen.aprobado) return null;
  return {
    folio: examen.folio as string,
    nombre: examen.user.name ?? examen.user.email ?? "Participante",
    fecha: examen.fecha.toISOString(),
    porcentaje: examen.porcentaje,
    vigenciaHasta: examen.vigenciaHasta?.toISOString() ?? null,
    vigente: Boolean(examen.vigenciaHasta && examen.vigenciaHasta.getTime() > Date.now()),
  };
}
