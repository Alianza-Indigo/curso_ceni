import { PreguntaQuiz } from "@/lib/types";
import { getModuloGlobal, getCurso } from "@/lib/data/cursos";

// Puntuación AUTORITATIVA del lado del servidor. El cliente solo envía, por
// cada pregunta, el TEXTO de la opción elegida (las opciones se barajan en el
// cliente, por eso no se puede confiar en índices). El servidor compara ese
// texto contra la opción correcta del banco oficial. Nunca se confía en un
// puntaje calculado por el cliente.

export type Respuestas = Record<string, string>;
export type Puntaje = { aciertos: number; total: number };

function esTextoCorrecto(q: PreguntaQuiz, texto: string): boolean {
  return q.opciones[q.correcta] === texto;
}

/** Puntúa un intento de quiz de módulo contra el banco del módulo. */
export function puntuarModulo(moduloId: string, respuestas: Respuestas): Puntaje {
  const modulo = getModuloGlobal(moduloId);
  if (!modulo) return { aciertos: 0, total: 0 };
  let aciertos = 0;
  let total = 0;
  for (const q of modulo.quiz) {
    const texto = respuestas[q.id];
    if (typeof texto !== "string") continue;
    total++;
    if (esTextoCorrecto(q, texto)) aciertos++;
  }
  return { aciertos, total };
}

/**
 * Puntúa el examen integrador de un curso. Los ids del examen vienen con
 * prefijo (final-<modulo>-<q> en CENI, finaldip-<modulo>-<q> en el diplomado);
 * se reconstruye la clave de respuestas correctas a partir del banco del curso.
 */
export function puntuarExamen(cursoId: string, respuestas: Respuestas): Puntaje {
  const curso = getCurso(cursoId);
  if (!curso) return { aciertos: 0, total: 0 };
  const prefijo = cursoId === "diplomado" ? "finaldip-" : "final-";
  const clave = new Map<string, string>();
  for (const m of curso.modulos) {
    for (const q of m.quiz) {
      clave.set(`${prefijo}${m.id}-${q.id}`, q.opciones[q.correcta]);
    }
  }
  let aciertos = 0;
  let total = 0;
  for (const [id, texto] of Object.entries(respuestas)) {
    const correcto = clave.get(id);
    if (correcto === undefined || typeof texto !== "string") continue;
    total++;
    if (correcto === texto) aciertos++;
  }
  return { aciertos, total };
}
