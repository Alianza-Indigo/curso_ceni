import { PreguntaQuiz } from "@/lib/types";
import { modulos } from "./modulos";

// El examen integrador toma una muestra representativa de cada módulo para cubrir
// los 10 módulos, tal como especifica el curso: "50 preguntas cubriendo los 10
// módulos". Los módulos 6 y 7 (CENI Laboral / CENI Espacios, banco de 15 reactivos
// cada uno) aportan más preguntas por ser el núcleo de la certificación; el módulo 9
// aporta las 6 que tiene disponibles. 7×4 + 2×8 + 1×6 = 50.
export function construirExamenFinal(): PreguntaQuiz[] {
  const preguntas: PreguntaQuiz[] = [];
  modulos.forEach((m) => {
    const n = m.numero === 6 || m.numero === 7 ? 8 : m.numero === 9 ? m.quiz.length : 4;
    m.quiz.slice(0, n).forEach((q) => {
      preguntas.push({ ...q, id: `final-${m.id}-${q.id}` });
    });
  });
  return preguntas;
}

export const casoPracticoFinal = {
  titulo: "Caso práctico final — Distribuidora Los Pinos S.A. de C.V.",
  contexto: `Distribuidora Los Pinos tiene 45 empleados. En el último año, tres colaboradores neurodivergentes (dos autistas y una persona con TDAH) han renunciado alegando "ambiente laboral hostil".

Situación actual:
— Las reuniones se convocan el mismo día, sin agenda previa.
— La evaluación de desempeño incluye el criterio "actitud proactiva y trabajo en equipo" (30% de la calificación).
— La oficina tiene iluminación fluorescente sin regulación. La medición de ruido en áreas abiertas es de 68 dB en promedio.
— No existe espacio de calma ni política de fragancia.
— No hay Responsable de Neuroinclusión. El RRHH gestiona "lo que se pueda".
— El proceso de selección requiere entrevista oral presencial obligatoria.
— No existe ningún documento de política de neuroinclusión.`,
  tareas: [
    "Realiza una autoevaluación CENI Laboral estimada (puntúa cada dimensión con base en la información disponible).",
    "Identifica las tres brechas críticas de mayor impacto.",
    "Diseña un Plan de Mejora Prioritizado con 5 acciones SMART para los próximos 90 días.",
    "Propón el perfil del Responsable de Neuroinclusión que debería contratar Los Pinos.",
    "Indica qué nivel CENI podría alcanzar Los Pinos al implementar tu plan, y en cuánto tiempo.",
  ],
  formato: "Entrega en formato escrito (mínimo 1,000 palabras) o presentación de 10–15 diapositivas.",
};

export const componentesEvaluacionFinal = [
  { componente: "Examen integrador — preguntas de opción múltiple cubriendo los 10 módulos", tipo: "Opción múltiple", valor: "40%" },
  { componente: "Caso práctico aplicado — Distribuidora Los Pinos", tipo: "Práctico-escrito", valor: "40%" },
  { componente: "Retroalimentación del curso", tipo: "Cualitativo", valor: "20%" },
];
