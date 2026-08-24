import { Modulo, Actividad, EvaluacionComponente, PreguntaQuiz } from "@/lib/types";
import { recursosPorModuloDiplomado } from "./materiales";
import cd01 from "./contenido/d01";
import qd01 from "./quizzes/d01.json";
import cd02 from "./contenido/d02";
import qd02 from "./quizzes/d02.json";
import cd03 from "./contenido/d03";
import qd03 from "./quizzes/d03.json";
import cd04 from "./contenido/d04";
import qd04 from "./quizzes/d04.json";
import cd05 from "./contenido/d05";
import qd05 from "./quizzes/d05.json";
import cd06 from "./contenido/d06";
import qd06 from "./quizzes/d06.json";
import cd07 from "./contenido/d07";
import qd07 from "./quizzes/d07.json";
import cd08 from "./contenido/d08";
import qd08 from "./quizzes/d08.json";
import cd09 from "./contenido/d09";
import qd09 from "./quizzes/d09.json";
import cd10 from "./contenido/d10";
import qd10 from "./quizzes/d10.json";
import cd11 from "./contenido/d11";
import qd11 from "./quizzes/d11.json";
import cd12 from "./contenido/d12";
import qd12 from "./quizzes/d12.json";
import cd13 from "./contenido/d13";
import qd13 from "./quizzes/d13.json";
import cd14 from "./contenido/d14";
import qd14 from "./quizzes/d14.json";
import cd15 from "./contenido/d15";
import qd15 from "./quizzes/d15.json";
import cd16 from "./contenido/d16";
import qd16 from "./quizzes/d16.json";
import cd17 from "./contenido/d17";
import qd17 from "./quizzes/d17.json";
import cd18 from "./contenido/d18";
import qd18 from "./quizzes/d18.json";
import cd19 from "./contenido/d19";
import qd19 from "./quizzes/d19.json";
import cd20 from "./contenido/d20";
import qd20 from "./quizzes/d20.json";
import cd21 from "./contenido/d21";
import qd21 from "./quizzes/d21.json";
import cd22 from "./contenido/d22";
import qd22 from "./quizzes/d22.json";
import cd23 from "./contenido/d23";
import qd23 from "./quizzes/d23.json";

type QuizData = {
  quiz: PreguntaQuiz[];
  preguntasPorIntento: number;
  actividades: Actividad[];
  evaluacion: EvaluacionComponente[];
};

// Cada módulo del Diplomado usa `contenidoMarkdown` (contenido íntegro, 100%
// sin cortes) para el cuerpo, y el banco de quiz/actividades/evaluación
// redactado a partir de ese mismo contenido. Los objetivos y secciones ya
// viven dentro del propio markdown, por eso `secciones` va vacío.
function build(numero: number, titulo: string, duracion: string, contenido: string, q: unknown): Modulo {
  const qd = q as QuizData;
  const id = "d" + String(numero).padStart(2, "0");
  return {
    id,
    numero,
    titulo,
    duracion,
    dirigidoA: "Consultores, responsables de RH/SST y de neuroinclusión",
    objetivos: [],
    secciones: [],
    contenidoMarkdown: contenido,
    actividades: qd.actividades,
    evaluacion: qd.evaluacion,
    quiz: qd.quiz,
    preguntasPorIntento: qd.preguntasPorIntento,
    recursos: recursosPorModuloDiplomado[id],
  };
}

export const modulosDiplomado: Modulo[] = [
  build(1, "Fundamentos Estratégicos de la NOM-035", "5 horas", cd01, qd01),
  build(2, "Fundamentos de la Neurodivergencia", "12 horas", cd02, qd02),
  build(3, "Factores de Riesgo Psicosocial", "10 horas", cd03, qd03),
  build(4, "Entorno Organizacional Favorable", "10 horas", cd04, qd04),
  build(5, "Clasificación de Centros de Trabajo y Obligaciones", "9 horas", cd05, qd05),
  build(6, "Integración con otras NOM, LFT y marco legal", "10 horas", cd06, qd06),
  build(7, "Marco de Derechos y Ajustes Razonables", "8 horas", cd07, qd07),
  build(8, "Acontecimientos Traumáticos Severos (ATS)", "9 horas", cd08, qd08),
  build(9, "Protocolo Operativo de Respuesta ante ATS", "9 horas", cd09, qd09),
  build(10, "Instrumentos de Evaluación de la NOM-035", "10 horas", cd10, qd10),
  build(11, "Metodología de Implementación Integral", "10 horas", cd11, qd11),
  build(12, "Taller de Captura, Procesamiento y Análisis en Excel", "12 horas", cd12, qd12),
  build(13, "Análisis de Resultados y Toma de Decisiones", "10 horas", cd13, qd13),
  build(14, "Diseño de Medidas de Prevención y Control", "12 horas", cd14, qd14),
  build(15, "Gestión del Cambio y Resistencia Organizacional", "10 horas", cd15, qd15),
  build(16, "Liderazgo, Cultura y Riesgo Psicosocial", "10 horas", cd16, qd16),
  build(17, "Documentación, Evidencias y Auditoría", "10 horas", cd17, qd17),
  build(18, "Simulación de Inspección STPS", "10 horas", cd18, qd18),
  build(19, "Ética, Confidencialidad y Protección de Datos", "10 horas", cd19, qd19),
  build(20, "Práctica Consultiva Profesional y Responsabilidad del Especialista", "8 horas", cd20, qd20),
  build(21, "Casos Prácticos Sectoriales México", "12 horas", cd21, qd21),
  build(22, "Del Cumplimiento a la Certificación CENI", "6 horas", cd22, qd22),
  build(23, "Proyecto Final de Implementación", "14 horas", cd23, qd23),
];
