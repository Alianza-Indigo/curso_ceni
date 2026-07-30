import { PreguntaQuiz } from "@/lib/types";

/** Fisher-Yates. No muta el arreglo original. */
export function barajar<T>(items: T[]): T[] {
  const copia = [...items];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

/** Baraja el orden de las opciones de una pregunta y remapea el índice correcto. */
export function barajarOpciones(pregunta: PreguntaQuiz): PreguntaQuiz {
  const indices = barajar(pregunta.opciones.map((_, i) => i));
  return {
    ...pregunta,
    opciones: indices.map((i) => pregunta.opciones[i]),
    correcta: indices.indexOf(pregunta.correcta),
  };
}

/**
 * Arma un intento de quiz: toma `n` preguntas al azar del banco completo,
 * baraja su orden y el orden de las opciones de cada una. Cada llamada
 * produce una selección distinta, para dificultar compartir respuestas.
 */
export function armarIntento(banco: PreguntaQuiz[], n: number): PreguntaQuiz[] {
  const seleccion = barajar(banco).slice(0, Math.min(n, banco.length));
  return seleccion.map(barajarOpciones);
}
