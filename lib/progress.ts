"use client";

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
  examenFinal?: ResultadoQuiz;
  ultimaVisita?: string;
};

const KEY = "ceni-curso-progreso-v1";
const UMBRAL_APROBATORIO = 0.7;

function progresoVacio(): ProgresoCurso {
  return { modulosCompletados: [], resultadosQuiz: {} };
}

export function cargarProgreso(): ProgresoCurso {
  if (typeof window === "undefined") return progresoVacio();
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return progresoVacio();
    return { ...progresoVacio(), ...JSON.parse(raw) };
  } catch {
    return progresoVacio();
  }
}

export function guardarProgreso(p: ProgresoCurso) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(p));
}

export function registrarResultadoQuiz(
  moduloId: string,
  respuestas: Record<string, number>,
  aciertos: number,
  total: number
): ResultadoQuiz {
  const porcentaje = total === 0 ? 0 : Math.round((aciertos / total) * 100);
  const resultado: ResultadoQuiz = {
    moduloId,
    respuestas,
    aciertos,
    total,
    porcentaje,
    aprobado: porcentaje >= UMBRAL_APROBATORIO * 100,
    fecha: new Date().toISOString(),
  };
  const progreso = cargarProgreso();
  progreso.resultadosQuiz[moduloId] = resultado;
  if (resultado.aprobado && !progreso.modulosCompletados.includes(moduloId)) {
    progreso.modulosCompletados.push(moduloId);
  }
  progreso.ultimaVisita = new Date().toISOString();
  guardarProgreso(progreso);
  return resultado;
}

export function registrarExamenFinal(
  respuestas: Record<string, number>,
  aciertos: number,
  total: number
): ResultadoQuiz {
  const porcentaje = total === 0 ? 0 : Math.round((aciertos / total) * 100);
  const resultado: ResultadoQuiz = {
    moduloId: "examen-final",
    respuestas,
    aciertos,
    total,
    porcentaje,
    aprobado: porcentaje >= UMBRAL_APROBATORIO * 100,
    fecha: new Date().toISOString(),
  };
  const progreso = cargarProgreso();
  progreso.examenFinal = resultado;
  guardarProgreso(progreso);
  return resultado;
}

export function reiniciarProgreso() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(KEY);
}

export const UMBRAL_APROBATORIO_PCT = UMBRAL_APROBATORIO * 100;
