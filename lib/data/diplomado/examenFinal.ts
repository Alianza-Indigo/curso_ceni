import { PreguntaQuiz } from "@/lib/types";
import { modulosDiplomado } from "./modulos";
import { armarIntento, barajar } from "@/lib/quiz-shuffle";

// Examen integrador del Diplomado NOM-035 ND: toma una muestra representativa
// de cada uno de los 23 módulos (2 reactivos por módulo = 46) para cubrir todo
// el programa. La selección es aleatoria y el orden se baraja en cada intento.
export function construirExamenFinalDiplomado(): PreguntaQuiz[] {
  const preguntas: PreguntaQuiz[] = [];
  modulosDiplomado.forEach((m) => {
    armarIntento(m.quiz, 2).forEach((q) => {
      preguntas.push({ ...q, id: `finaldip-${m.id}-${q.id}` });
    });
  });
  return barajar(preguntas);
}

// Proyecto final consultivo (capstone del Módulo 23), adaptado a entrega escrita
// individual en línea. Integra todo el diplomado sobre una organización real.
export const proyectoFinalDiplomado = {
  titulo: "Proyecto Final de Implementación — organización real",
  contexto: `Elige una organización real (o una en la que trabajes o hayas trabajado) y desarrolla,
sobre ella, un proyecto integral de implementación de la NOM-035-STPS-2018 con enfoque de
neurodivergencia. El proyecto debe demostrar que sabes llevar el sistema completo del diagnóstico
a la evidencia auditable, sin diagnosticar personas y respetando la protección de datos.`,
  tareas: [
    "Diagnóstico inicial y clasificación del centro de trabajo (tramo de obligaciones según número de trabajadores).",
    "Marco documental: política de prevención de riesgos psicosociales integrada y su difusión.",
    "Aplicación e interpretación de instrumentos (Guías de Referencia) con cálculo por dominio, categoría y resultado final.",
    "Programa de medidas de prevención y control con al menos 60% de prevención primaria y evaluación de eficacia.",
    "Protocolo de Acontecimientos Traumáticos Severos (ATS) con flujograma y ruta de canalización/IMSS.",
    "Procedimiento de ajustes razonables con formatos de solicitud y resolución (sin exigir diagnóstico).",
    "Expediente de evidencias con índice y matriz de trazabilidad hallazgo → medida → verificación.",
    "Modelo de retorno (costo de no-hacer / ROI) y ruta de preparación hacia la certificación CENI.",
  ],
  formato:
    "Entrega escrita integral (mínimo 1,000 palabras) que resuma tu proyecto y sus entregables. Puede acompañarse de una presentación ejecutiva.",
};

export const componentesEvaluacionFinalDiplomado = [
  { componente: "Examen integrador — opción múltiple cubriendo los 23 módulos", tipo: "Opción múltiple", valor: "40%" },
  { componente: "Proyecto final de implementación sobre organización real", tipo: "Práctico-escrito", valor: "40%" },
  { componente: "Retroalimentación del diplomado", tipo: "Cualitativo", valor: "20%" },
];
