import { Modulo } from "@/lib/types";

const modulo5: Modulo = {
  id: "m5",
  numero: 5,
  titulo: "Ética, Derechos Humanos y Ley Índigo",
  duracion: "90 minutos",
  dirigidoA: "Propietarios, directivos, RRHH, prestadores de servicios públicos",
  preguntasPorIntento: 10,
  objetivos: [
    "Ubicar los Derechos Índigo en el marco internacional de los derechos humanos de cuarta generación.",
    "Identificar las obligaciones legales aplicables a empresas, instituciones educativas y prestadores de servicios en materia de neuroinclusión.",
    "Analizar casos prácticos de vulneración de derechos neurodivergentes y su tratamiento jurídico.",
    "Aplicar el control de convencionalidad como herramienta de autoevaluación institucional.",
  ],
  secciones: [
    {
      titulo: "5.1 Derechos de cuarta generación y neurodivergencia",
      parrafos: [
        "Los Derechos Índigo son derechos de cuarta generación porque responden a formas de discriminación que no existían o no eran visibles en marcos normativos anteriores: la discriminación algorítmica, la exigencia de masking, la patologización forzada como requisito de acceso a servicios, la prohibición de terapias normalizadoras.",
      ],
      tabla: {
        encabezados: ["Generación", "Contenido"],
        filas: [
          ["Primera", "Derechos civiles y políticos: libertad de expresión, voto, garantías procesales"],
          ["Segunda", "Derechos económicos, sociales y culturales: trabajo, salud, educación, vivienda"],
          ["Tercera", "Derechos de solidaridad: paz, medio ambiente, desarrollo, patrimonio común"],
          ["Cuarta", "Derechos de la diversidad humana: identidad digital, privacidad algorítmica, existencia neurodivergente plena, autodeterminación identitaria"],
        ],
      },
    },
    {
      titulo: "5.2 Marco de obligaciones para organizaciones",
      parrafos: [
        'El "ajuste razonable" —Artículo 2 de la CDPD— es cualquier modificación necesaria y adecuada que no imponga una carga desproporcionada, y que garantice a la persona neurodivergente el disfrute de sus derechos en igualdad de condiciones. La negativa a realizarlo constituye discriminación bajo el Artículo 5 de la CDPD.',
      ],
      lista: {
        titulo: "Instrumentos que fundan obligaciones de neuroinclusión en México",
        items: [
          "Artículo 1° constitucional: obligación de no discriminar por cualquier condición",
          "CDPD (ONU): ajustes razonables y accesibilidad universal",
          "Ley Federal para Prevenir y Eliminar la Discriminación",
          "Ley General para la Inclusión de las Personas con Discapacidad",
          "Ley Índigo (en proceso legislativo): obligaciones específicas de certificación, capacitación y gobernanza",
        ],
      },
    },
    {
      titulo: "5.3 Casos prácticos",
      parrafos: [],
      lista: {
        items: [
          'Caso 1 — Despido por "bajo desempeño" encubierto: una empresa despide a un colaborador autista por "falta de trabajo en equipo" pese a cumplir sus objetivos cuantitativos. Análisis: discriminación por condición neurológica; ausencia de ajustes razonables; posible nulidad del despido. Un entorno CENI Laboral evalúa desempeño con criterios objetivos, no subjetivos.',
          "Caso 2 — Escuela que exige diagnóstico para apoyos: condicionar apoyos pedagógicos a un dictamen psicopedagógico viola el Derecho 2 (autoidentificación sin diagnóstico) y el principio de ajuste razonable. CENI Espacios exige apoyos universales sin requerir diagnóstico.",
          'Caso 3 — Comercio con política de "no niños con meltdowns": excluir a familias tras un meltdown constituye discriminación directa y viola el Artículo 5 de la CDPD y el Artículo 24 de la Convención de los Derechos del Niño. CENI Espacios exige protocolo de manejo de crisis sin exclusión.',
        ],
      },
    },
    {
      titulo: "5.4 Control de convencionalidad como herramienta institucional",
      parrafos: [
        "El control de convencionalidad es la obligación de verificar que actos, normas y políticas internas sean compatibles con los tratados internacionales de derechos humanos ratificados por México. Para una organización implica revisar periódicamente:",
      ],
      lista: {
        items: [
          "¿El reglamento interno contiene criterios que discriminan por condición neurológica, explícita o implícitamente?",
          "¿Los procesos de selección, evaluación y ascenso favorecen sistemáticamente perfiles neurotípicos?",
          "¿Los protocolos de atención garantizan ajustes razonables sin carga administrativa sobre el usuario?",
          "¿Las políticas de comunicación eliminan la coerción social comunicativa?",
          "¿Existen mecanismos efectivos de queja y corrección cuando se vulneran derechos neurodivergentes?",
        ],
      },
    },
  ],
  actividades: [
    {
      codigo: "5.A",
      titulo: "Análisis de un cuarto caso práctico",
      duracion: "individual · 400 palabras",
      descripcion: "El facilitador proporciona un cuarto caso. Analízalo con el mismo esquema jurídico: hechos, análisis jurídico, respuesta CENI aplicable.",
    },
    {
      codigo: "5.B",
      titulo: "Autoevaluación de convencionalidad",
      duracion: "individual",
      descripcion: "Aplica las cinco preguntas de control de convencionalidad a tu propia organización y documenta los hallazgos.",
    },
  ],
  evaluacion: [
    { componente: "Quiz de 10 preguntas sobre derechos humanos y obligaciones legales", tipo: "Opción múltiple", valor: "30%" },
    { componente: "Análisis de un cuarto caso práctico", tipo: "Escrito — 400 palabras", valor: "40%" },
    { componente: "Autoevaluación de convencionalidad de la organización", tipo: "Herramienta aplicada", valor: "30%" },
  ],
  quiz: [
    {
      id: "m5q1",
      pregunta: "Los Derechos Índigo se clasifican como derechos de:",
      opciones: ["Primera generación", "Segunda generación", "Tercera generación", "Cuarta generación"],
      correcta: 3,
      explicacion: "Los Derechos Índigo son de cuarta generación: responden a formas de discriminación no visibles en marcos normativos anteriores, como la discriminación algorítmica.",
    },
    {
      id: "m5q2",
      pregunta: "¿En qué artículo de la CDPD se define el \"ajuste razonable\"?",
      opciones: ["Artículo 1", "Artículo 2", "Artículo 5", "Artículo 24"],
      correcta: 1,
      explicacion: "El ajuste razonable está consagrado en el Artículo 2 de la CDPD.",
    },
    {
      id: "m5q3",
      pregunta: "En el Caso 1 (despido encubierto), ¿cuál es el problema jurídico central?",
      opciones: [
        "El colaborador no cumplía sus objetivos",
        "El despido usó criterios subjetivos discriminatorios pese al cumplimiento de objetivos cuantitativos",
        "No existe ningún problema jurídico",
        "El colaborador debió presentar un diagnóstico médico",
      ],
      correcta: 1,
      explicacion: "El despido configuró discriminación por condición neurológica al usar \"falta de trabajo en equipo\" como causal subjetiva, sin ofrecer ajustes razonables.",
    },
    {
      id: "m5q4",
      pregunta: "Exigir un diagnóstico psicopedagógico formal como condición para dar apoyos escolares viola:",
      opciones: [
        "El Derecho 2 — Autoidentificación sin diagnóstico",
        "El Derecho 5 — Protección frente a discriminación algorítmica",
        "Ningún derecho, es un procedimiento estándar válido",
        "El Derecho 1 — Stimming sin sanción",
      ],
      correcta: 0,
      explicacion: "Condicionar apoyos a un diagnóstico formal viola el Derecho 2 y el principio de ajuste razonable de la CDPD.",
    },
    {
      id: "m5q5",
      pregunta: "El control de convencionalidad es la obligación de:",
      opciones: [
        "Verificar que las normas y políticas sean compatibles con los tratados internacionales de DDHH ratificados",
        "Aplicar únicamente el derecho penal mexicano",
        "Ignorar los tratados internacionales si contradicen la ley local",
        "Una obligación exclusiva de jueces federales",
      ],
      correcta: 0,
      explicacion: "El control de convencionalidad exige verificar la compatibilidad de actos y normas con los tratados internacionales de derechos humanos ratificados por México.",
    },
    {
      id: "m5q6",
      pregunta: "La negativa a realizar un ajuste razonable constituye, según la CDPD:",
      opciones: [
        "Una decisión administrativa válida",
        "Discriminación en términos del Artículo 5 de la CDPD",
        "Un asunto sin relevancia jurídica",
        "Una falta menor sin consecuencias",
      ],
      correcta: 1,
      explicacion: "El Artículo 5 de la CDPD establece que la negativa a realizar ajustes razonables constituye discriminación.",
    },
    {
      id: "m5q7",
      pregunta: "En el Caso 3 (comercio con política de exclusión), ¿qué instrumento internacional se vulnera además de la CDPD?",
      opciones: [
        "La Convención sobre los Derechos del Niño",
        "El Protocolo de Kioto",
        "El Código de Comercio",
        "Ninguno, es un asunto puramente privado",
      ],
      correcta: 0,
      explicacion: "La política vulnera también el Artículo 24 de la Convención sobre los Derechos del Niño, además del Artículo 5 de la CDPD.",
    },
    {
      id: "m5q8",
      pregunta: "¿Cuál de las siguientes leyes mexicanas establece responsabilidad legal por discriminar por condición neurológica?",
      opciones: [
        "Ley Federal para Prevenir y Eliminar la Discriminación",
        "Ley de Vías Generales de Comunicación",
        "Ley Aduanera",
        "Ley del Mercado de Valores",
      ],
      correcta: 0,
      explicacion: "La Ley Federal para Prevenir y Eliminar la Discriminación establece responsabilidad legal en el ámbito laboral, educativo y de servicios.",
    },
    {
      id: "m5q9",
      pregunta: "La Ley Índigo, según el curso, es:",
      opciones: [
        "Una ley federal ya vigente y aplicada",
        "Una propuesta legislativa de 74 artículos desarrollada por Alianza Índigo",
        "Un tratado internacional ratificado por México",
        "Un reglamento interno de empresas privadas",
      ],
      correcta: 1,
      explicacion: "La Ley Índigo es la propuesta legislativa de 74 artículos desarrollada por Alianza Índigo Neurodivergente A.C., en proceso de aprobación.",
    },
    {
      id: "m5q10",
      pregunta: "Una de las preguntas del control de convencionalidad institucional es:",
      opciones: [
        "¿Cuánto factura la organización al año?",
        "¿Nuestros procesos de selección favorecen sistemáticamente perfiles neurotípicos?",
        "¿Cuántos empleados tiene la competencia?",
        "¿Cuál es el horario de atención al público?",
      ],
      correcta: 1,
      explicacion: "Una de las cinco preguntas de control de convencionalidad es si los procesos de selección, evaluación y ascenso favorecen sistemáticamente perfiles neurotípicos.",
    },
    {
      id: "m5q11",
      pregunta: "Según la tabla de generaciones de derechos, ¿qué corresponde a la primera generación?",
      opciones: [
        "Derechos civiles y políticos: libertad de expresión, voto, garantías procesales",
        "Derechos económicos, sociales y culturales: trabajo, salud, educación, vivienda",
        "Derechos de solidaridad: paz, medio ambiente, desarrollo, patrimonio común",
        "Derechos de la diversidad humana: identidad digital, privacidad algorítmica",
      ],
      correcta: 0,
      explicacion: "La tabla del módulo asigna a la primera generación los derechos civiles y políticos: libertad de expresión, voto y garantías procesales.",
    },
    {
      id: "m5q12",
      pregunta: "Según la tabla de generaciones de derechos, ¿qué corresponde a la segunda generación?",
      opciones: [
        "Libertad de expresión, voto y garantías procesales",
        "Derechos económicos, sociales y culturales: trabajo, salud, educación, vivienda",
        "Paz, medio ambiente, desarrollo, patrimonio común",
        "Autodeterminación identitaria",
      ],
      correcta: 1,
      explicacion: "La segunda generación corresponde a los derechos económicos, sociales y culturales: trabajo, salud, educación y vivienda, según la tabla del módulo.",
    },
    {
      id: "m5q13",
      pregunta: "Los derechos de tercera generación, según la tabla del módulo, son los derechos de:",
      opciones: [
        "Derechos civiles y políticos",
        "Derechos económicos, sociales y culturales",
        "Solidaridad: paz, medio ambiente, desarrollo, patrimonio común",
        "Diversidad humana: identidad digital, privacidad algorítmica",
      ],
      correcta: 2,
      explicacion: "La tercera generación corresponde a los derechos de solidaridad: paz, medio ambiente, desarrollo y patrimonio común.",
    },
    {
      id: "m5q14",
      pregunta: "Según el Artículo 2 de la CDPD, un ajuste razonable es una modificación que:",
      opciones: [
        "Debe ser aprobada previamente por un juez",
        "Es necesaria y adecuada, y no impone una carga desproporcionada",
        "Solo aplica a instituciones públicas",
        "Requiere un diagnóstico médico previo del solicitante",
      ],
      correcta: 1,
      explicacion: "El módulo define el ajuste razonable como cualquier modificación necesaria y adecuada que no imponga una carga desproporcionada y que garantice el disfrute de derechos en igualdad de condiciones.",
    },
    {
      id: "m5q15",
      pregunta: "¿Qué establece el Artículo 1° constitucional, citado como instrumento de neuroinclusión?",
      opciones: [
        "La obligación de no discriminar por cualquier condición",
        "El derecho exclusivo al voto",
        "El derecho a la vivienda digna",
        "La libertad de tránsito únicamente",
      ],
      correcta: 0,
      explicacion: "El listado de instrumentos que fundan obligaciones de neuroinclusión en México cita el Artículo 1° constitucional como la obligación de no discriminar por cualquier condición.",
    },
    {
      id: "m5q16",
      pregunta: "Además de la Ley Federal para Prevenir y Eliminar la Discriminación, ¿qué otra ley mexicana se cita como fundamento de obligaciones de neuroinclusión?",
      opciones: [
        "Ley General para la Inclusión de las Personas con Discapacidad",
        "Ley Aduanera",
        "Ley del Mercado de Valores",
        "Ley de Vías Generales de Comunicación",
      ],
      correcta: 0,
      explicacion: "El módulo lista la Ley General para la Inclusión de las Personas con Discapacidad como uno de los instrumentos que fundan obligaciones de neuroinclusión en México.",
    },
    {
      id: "m5q17",
      pregunta: "La Ley Índigo, en proceso legislativo, establecería obligaciones específicas de:",
      opciones: [
        "Certificación, capacitación y gobernanza",
        "Impuestos y aranceles aduaneros",
        "Propiedad intelectual e industrial",
        "Comercio exterior y aduanas",
      ],
      correcta: 0,
      explicacion: "El módulo describe la Ley Índigo como una propuesta en proceso legislativo que establece obligaciones específicas de certificación, capacitación y gobernanza.",
    },
    {
      id: "m5q18",
      pregunta: "En el Caso 1, ¿cómo evalúa el desempeño un entorno CENI Laboral?",
      opciones: [
        "Con criterios subjetivos como el trabajo en equipo",
        "Con criterios objetivos, no subjetivos",
        "Exigiendo un diagnóstico médico previo",
        "Mediante despido automático ante bajo desempeño",
      ],
      correcta: 1,
      explicacion: "El módulo señala que un entorno CENI Laboral evalúa el desempeño con criterios objetivos, no subjetivos, a diferencia del caso del despido encubierto.",
    },
    {
      id: "m5q19",
      pregunta: "En el Caso 2, ¿qué exige CENI Espacios respecto a los apoyos pedagógicos?",
      opciones: [
        "Un dictamen psicopedagógico previo",
        "Apoyos universales sin requerir diagnóstico",
        "Que las familias paguen terapias privadas",
        "La exclusión de estudiantes sin diagnóstico",
      ],
      correcta: 1,
      explicacion: "El módulo indica que CENI Espacios exige apoyos universales sin requerir diagnóstico, frente a la escuela que condiciona apoyos a un dictamen psicopedagógico.",
    },
    {
      id: "m5q20",
      pregunta: "¿Cuál de las siguientes es una de las preguntas de control de convencionalidad que debe hacerse una organización?",
      opciones: [
        "¿Existen mecanismos efectivos de queja y corrección cuando se vulneran derechos neurodivergentes?",
        "¿Cuántas sucursales tiene la empresa?",
        "¿Cuál es el logotipo institucional?",
        "¿Qué colores usa la marca de la organización?",
      ],
      correcta: 0,
      explicacion: "El listado de control de convencionalidad incluye preguntar si existen mecanismos efectivos de queja y corrección cuando se vulneran derechos neurodivergentes.",
    },
  ],
};

export default modulo5;
