import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";
import type { PreguntaQuiz } from "@/lib/types";

export type PreguntaPublica = Omit<PreguntaQuiz, "correcta" | "explicacion">;
type DatosIntento = { usuario: string; evaluacion: string; ids: string[]; vence: number };

function secreto(): string {
  const value = process.env.AUTH_SECRET;
  if (!value || value.length < 24) throw new Error("AUTH_SECRET debe ser un secreto robusto");
  return value;
}

export function publicarPreguntas(preguntas: PreguntaQuiz[]): PreguntaPublica[] {
  return preguntas.map(({ id, pregunta, opciones }) => ({ id, pregunta, opciones }));
}

export function firmarIntento(userId: string, evaluacion: string, preguntas: PreguntaQuiz[]): string {
  const datos: DatosIntento = {
    usuario: userId,
    evaluacion,
    ids: preguntas.map((p) => p.id),
    vence: Date.now() + 2 * 60 * 60 * 1000,
  };
  const payload = Buffer.from(JSON.stringify(datos)).toString("base64url");
  const firma = createHmac("sha256", secreto()).update(payload).digest("base64url");
  return `${payload}.${firma}`;
}

export function verificarIntento(
  token: string, userId: string, evaluacion: string, respuestas: Record<string, string>, totalEsperado: number
): string[] {
  if (typeof token !== "string" || token.length > 12000) throw new Error("Intento inválido");
  const partes = token.split(".");
  if (partes.length !== 2) throw new Error("Intento inválido");
  const [payload, firma] = partes;
  const calculada = createHmac("sha256", secreto()).update(payload).digest();
  const recibida = Buffer.from(firma, "base64url");
  if (recibida.length !== calculada.length || !timingSafeEqual(recibida, calculada)) {
    throw new Error("Firma de intento inválida");
  }
  const datos = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as DatosIntento;
  if (
    datos.usuario !== userId || datos.evaluacion !== evaluacion ||
    !Number.isSafeInteger(datos.vence) || datos.vence < Date.now() ||
    !Array.isArray(datos.ids) || datos.ids.length !== totalEsperado ||
    new Set(datos.ids).size !== totalEsperado
  ) throw new Error("Intento vencido o incompleto");

  const recibidas = Object.keys(respuestas);
  if (recibidas.length !== totalEsperado || recibidas.some((id) => !datos.ids.includes(id))) {
    throw new Error("Debes responder todas las preguntas del intento asignado");
  }
  return datos.ids;
}
