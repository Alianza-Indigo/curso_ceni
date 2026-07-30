import modulo1 from "./modulo1";
import modulo2 from "./modulo2";
import modulo3 from "./modulo3";
import modulo4 from "./modulo4";
import modulo5 from "./modulo5";
import modulo6 from "./modulo6";
import modulo7 from "./modulo7";
import modulo8 from "./modulo8";
import modulo9 from "./modulo9";
import modulo10 from "./modulo10";
import { Modulo } from "@/lib/types";

export const modulos: Modulo[] = [
  modulo1,
  modulo2,
  modulo3,
  modulo4,
  modulo5,
  modulo6,
  modulo7,
  modulo8,
  modulo9,
  modulo10,
];

export function getModuloById(id: string): Modulo | undefined {
  return modulos.find((m) => m.id === id);
}

export function getModuloAdyacente(id: string, direccion: 1 | -1): Modulo | undefined {
  const idx = modulos.findIndex((m) => m.id === id);
  if (idx === -1) return undefined;
  return modulos[idx + direccion];
}

export const totalPreguntasQuiz = modulos.reduce((acc, m) => acc + m.quiz.length, 0);
