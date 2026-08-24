import "server-only";
import { randomUUID } from "crypto";
import { prisma } from "@/lib/db";
import { modulos, actividadesCompletas } from "@/lib/data/modulos";
import { getModuloGlobal } from "@/lib/data/cursos";
import type { Modulo } from "@/lib/types";
import {
  UMBRAL_APROBATORIO_PCT,
  MIN_PALABRAS_CASO_PRACTICO,
  MIN_CARACTERES_RETROALIMENTACION,
} from "@/lib/constantes";

const UN_ANIO_MS = 365 * 24 * 60 * 60 * 1000;

function contarPalabras(texto: string): number {
  const limpio = texto.trim();
  return limpio.length === 0 ? 0 : limpio.split(/\s+/).length;
}

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
  examenFinal?: ResultadoQuiz & {
    folio?: string | null;
    vigenciaHasta?: string | null;
    vigente?: boolean;
    // aprobado (heredado de ResultadoQuiz) = certificación completa (examen + caso
    // práctico + retroalimentación). quizAprobado es solo el 40% del examen de opción
    // múltiple, para poder mostrar el estado intermedio en la UI.
    quizAprobado: boolean;
  };
  casoPractico: string | null;
  retroalimentacion: string | null;
  casoPracticoEntregado: boolean;
  retroalimentacionEntregada: boolean;
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

export async function obtenerProgreso(
  userId: string,
  modulosCurso: Modulo[] = modulos
): Promise<ProgresoCurso> {
  const [modulosProgreso, examen, entregas, entregaFinal] = await Promise.all([
    prisma.progresoModulo.findMany({ where: { userId } }),
    prisma.resultadoExamen.findUnique({ where: { userId } }),
    prisma.entregaActividad.findMany({ where: { userId } }),
    prisma.entregaFinal.findUnique({ where: { userId } }),
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

  const modulosCompletados = modulosCurso
    .filter((m) => {
      const codigosEntregados = Object.keys(entregasPorModulo[m.id] ?? {});
      return Boolean(resultadosQuiz[m.id]?.aprobado) && actividadesCompletas(m, codigosEntregados);
    })
    .map((m) => m.id);

  const casoPractico = entregaFinal?.casoPractico ?? null;
  const retroalimentacion = entregaFinal?.retroalimentacion ?? null;

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
          quizAprobado: examen.porcentaje >= UMBRAL_APROBATORIO_PCT,
          fecha: examen.fecha.toISOString(),
          folio: examen.folio,
          vigenciaHasta: examen.vigenciaHasta?.toISOString() ?? null,
          vigente: Boolean(examen.vigenciaHasta && examen.vigenciaHasta.getTime() > Date.now()),
        }
      : undefined,
    casoPractico,
    retroalimentacion,
    casoPracticoEntregado: contarPalabras(casoPractico ?? "") >= MIN_PALABRAS_CASO_PRACTICO,
    retroalimentacionEntregada: (retroalimentacion ?? "").trim().length >= MIN_CARACTERES_RETROALIMENTACION,
  };
}

/**
 * Recalcula si la certificación final está completa (examen 40% + caso práctico 40% +
 * retroalimentación 20%, según componentesEvaluacionFinal) y actualiza folio/vigencia
 * en consecuencia. Se llama tanto al calificar el examen como al guardar cualquiera de
 * las otras dos entregas, porque cualquiera de las tres puede ser la última en llegar.
 */
async function recalcularCertificacionFinal(userId: string) {
  const [examen, entregaFinal] = await Promise.all([
    prisma.resultadoExamen.findUnique({ where: { userId } }),
    prisma.entregaFinal.findUnique({ where: { userId } }),
  ]);
  if (!examen) return;

  const quizAprobado = examen.porcentaje >= UMBRAL_APROBATORIO_PCT;
  const casoPracticoCompleto = contarPalabras(entregaFinal?.casoPractico ?? "") >= MIN_PALABRAS_CASO_PRACTICO;
  const retroalimentacionCompleta =
    (entregaFinal?.retroalimentacion ?? "").trim().length >= MIN_CARACTERES_RETROALIMENTACION;
  const completo = quizAprobado && casoPracticoCompleto && retroalimentacionCompleta;

  const folio = completo ? examen.folio ?? `CENI-${randomUUID().slice(0, 8).toUpperCase()}` : null;
  const fechaCertificacion = completo ? examen.fechaCertificacion ?? new Date() : null;
  const vigenciaHasta = fechaCertificacion ? new Date(fechaCertificacion.getTime() + UN_ANIO_MS) : null;

  await prisma.resultadoExamen.update({
    where: { userId },
    data: { aprobado: completo, folio, fechaCertificacion, vigenciaHasta },
  });
}

export async function guardarEntregaFinal(
  userId: string,
  campo: "casoPractico" | "retroalimentacion",
  contenido: string
): Promise<void> {
  const data = campo === "casoPractico" ? { casoPractico: contenido } : { retroalimentacion: contenido };
  await prisma.entregaFinal.upsert({
    where: { userId },
    create: { userId, ...data },
    update: data,
  });
  await recalcularCertificacionFinal(userId);
}

export async function guardarEntregaActividad(
  userId: string,
  moduloId: string,
  actividadCodigo: string,
  contenido: string
): Promise<void> {
  const modulo = getModuloGlobal(moduloId);
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
  if (!getModuloGlobal(moduloId)) {
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
): Promise<ResultadoQuiz & { folio?: string | null; vigenciaHasta?: string | null; quizAprobado: boolean }> {
  const fecha = new Date();
  const resultado = calcularResultado("examen-final", respuestas, aciertos, total, fecha);
  const quizAprobado = resultado.aprobado;

  // El examen de opción múltiple es solo 40% de la nota final (ver
  // componentesEvaluacionFinal): guarda el resultado crudo del quiz aquí, y
  // recalcularCertificacionFinal decide si folio/vigencia aplican, según también
  // el caso práctico y la retroalimentación.
  await prisma.resultadoExamen.upsert({
    where: { userId },
    create: {
      userId,
      respuestas,
      aciertos,
      total,
      porcentaje: resultado.porcentaje,
      aprobado: false,
      fecha,
    },
    update: {
      respuestas,
      aciertos,
      total,
      porcentaje: resultado.porcentaje,
      fecha,
    },
  });

  await recalcularCertificacionFinal(userId);
  const actualizado = await prisma.resultadoExamen.findUniqueOrThrow({ where: { userId } });

  return {
    ...resultado,
    aprobado: actualizado.aprobado,
    quizAprobado,
    folio: actualizado.folio,
    vigenciaHasta: actualizado.vigenciaHasta?.toISOString() ?? null,
  };
}

export async function reiniciarProgreso(userId: string) {
  await prisma.$transaction([
    prisma.progresoModulo.deleteMany({ where: { userId } }),
    prisma.resultadoExamen.deleteMany({ where: { userId } }),
    prisma.entregaActividad.deleteMany({ where: { userId } }),
    prisma.entregaFinal.deleteMany({ where: { userId } }),
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
