import { Curso, Modulo } from "@/lib/types";
import { modulos as modulosCeni } from "./modulos";
import { modulosDiplomado } from "./diplomado/modulos";

export const CURSO_CENI: Curso = {
  id: "ceni",
  slug: "ceni",
  titulo: "Curso CENI",
  subtitulo: "Certificación de Entornos Neuroinclusivos",
  descripcion:
    "Formación introductoria en neuroinclusión: comunicación neuroafirmativa, manejo de crisis sensoriales, diseño universal y preparación para la certificación CENI, con la NOM-035 integrada.",
  duracion: "17 horas",
  nivel: "Introductorio",
  dirigidoA: "Todo público y organizaciones",
  modulos: modulosCeni,
  tieneExamenFinal: true,
};

export const CURSO_DIPLOMADO: Curso = {
  id: "diplomado",
  slug: "diplomado",
  titulo: "Diplomado NOM-035 ND",
  subtitulo: "NOM-035-STPS-2018 con enfoque de neurodivergencia",
  descripcion:
    "Formación profesional para implementar la NOM-035 de principio a fin con lente de neurodivergencia: factores de riesgo psicosocial, instrumentos y cálculo, ATS, inspección STPS, práctica consultiva y proyecto final.",
  duracion: "226 horas",
  nivel: "Profesional",
  dirigidoA: "Consultores, responsables de RH/SST y de neuroinclusión",
  modulos: modulosDiplomado,
  tieneExamenFinal: true,
};

export const cursos: Curso[] = [CURSO_CENI, CURSO_DIPLOMADO];

/** Todos los módulos de todos los cursos (los ids de módulo son únicos entre cursos). */
export const todosLosModulos: Modulo[] = cursos.flatMap((c) => c.modulos);

export function getCurso(slug: string): Curso | undefined {
  return cursos.find((c) => c.slug === slug);
}

/** Busca un módulo en cualquier curso por su id global. */
export function getModuloGlobal(id: string): Modulo | undefined {
  return todosLosModulos.find((m) => m.id === id);
}

/** Curso al que pertenece un módulo dado. */
export function getCursoDeModulo(moduloId: string): Curso | undefined {
  return cursos.find((c) => c.modulos.some((m) => m.id === moduloId));
}

export function getModuloDeCurso(curso: Curso, id: string): Modulo | undefined {
  return curso.modulos.find((m) => m.id === id);
}

export function getModuloAdyacenteCurso(
  curso: Curso,
  id: string,
  direccion: 1 | -1
): Modulo | undefined {
  const idx = curso.modulos.findIndex((m) => m.id === id);
  if (idx === -1) return undefined;
  return curso.modulos[idx + direccion];
}

/**
 * Un módulo está desbloqueado si es el primero del curso o si el módulo
 * anterior (dentro del mismo curso) ya fue aprobado. Secuencial por curso.
 */
export function moduloDesbloqueadoCurso(
  curso: Curso,
  modulo: Modulo,
  modulosCompletados: string[]
): boolean {
  const idx = curso.modulos.findIndex((m) => m.id === modulo.id);
  if (idx <= 0) return true;
  const anterior = curso.modulos[idx - 1];
  return modulosCompletados.includes(anterior.id);
}
