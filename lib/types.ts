export type Seccion = {
  titulo: string;
  parrafos: string[];
  lista?: { titulo?: string; items: string[] };
  tabla?: { encabezados: string[]; filas: string[][] };
  destacado?: { titulo: string; texto: string };
};

export type Actividad = {
  codigo: string;
  titulo: string;
  duracion: string;
  descripcion: string;
};

export type EvaluacionComponente = {
  componente: string;
  tipo: string;
  valor: string;
};

export type PreguntaQuiz = {
  id: string;
  pregunta: string;
  opciones: string[];
  correcta: number;
  explicacion: string;
};

export type Modulo = {
  id: string;
  numero: number;
  titulo: string;
  duracion: string;
  dirigidoA: string;
  objetivos: string[];
  secciones: Seccion[];
  actividades: Actividad[];
  evaluacion: EvaluacionComponente[];
  // Banco completo de reactivos del módulo. Debe ser más grande que
  // `preguntasPorIntento` para que cada intento muestre una selección distinta.
  quiz: PreguntaQuiz[];
  // Cuántas preguntas de `quiz` se muestran (al azar) en cada intento.
  preguntasPorIntento: number;
  // Formatos descargables asociados al módulo (plantillas e instrumentos).
  recursos?: { codigo: string; nombre: string; archivo: string; formato?: string }[];
};
