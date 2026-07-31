import { Modulo } from "@/lib/types";

const modulo5: Modulo = {
  id: "m5",
  numero: 5,
  titulo: "Ética, Derechos Humanos y Ley Índigo",
  duracion: "90 minutos",
  dirigidoA: "Propietarios, directivos, RRHH, prestadores de servicios públicos",
  preguntasPorIntento: 12,
  objetivos: [
    "Ubicar los Derechos Índigo en el marco internacional de los derechos humanos de cuarta generación.",
    "Identificar las obligaciones legales aplicables a empresas, instituciones educativas y prestadores de servicios en materia de neuroinclusión.",
    "Analizar casos prácticos de vulneración de derechos neurodivergentes y su tratamiento jurídico.",
    "Aplicar el control de convencionalidad como herramienta de autoevaluación institucional.",
    "Identificar qué factores de riesgo psicosocial exigidos por la NOM-035-STPS-2018 pasan desapercibidos en personal neurodivergente, y aplicar el anexo neurodivergente al cuestionario oficial.",
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
    {
      titulo: "5.5 NOM-035-STPS-2018 y su relación con CENI",
      parrafos: [
        "La NOM-035-STPS-2018 (\"Factores de riesgo psicosocial en el trabajo — Identificación, análisis y prevención\") obliga a todo centro de trabajo en México a identificar, analizar y prevenir el riesgo psicosocial, y a promover un entorno organizacional favorable. Las obligaciones se escalonan según el tamaño del centro de trabajo, y se instrumentan con cuatro guías de referencia oficiales.",
      ],
      tabla: {
        encabezados: ["Tamaño del centro de trabajo", "Guías aplicables", "Obligación adicional"],
        filas: [
          ["1 a 15 trabajadores", "Guía I + Guía IV", "Política de prevención, difusión, identificación de acontecimientos traumáticos severos"],
          ["16 a 50 trabajadores", "Guía I + Guía II + Guía IV", "Identificación y análisis de factores de riesgo psicosocial (46 reactivos) y evaluación del entorno organizacional"],
          ["Más de 50 trabajadores", "Guía I + Guía III + Guía IV", "Versión completa del cuestionario (72 reactivos, escala Likert de 5 opciones)"],
        ],
      },
      lista: {
        titulo: "Qué cubre cada guía de referencia",
        items: [
          "Guía I — Identifica a quienes fueron sujetos de acontecimientos traumáticos severos durante o con motivo del trabajo (accidentes graves, asaltos, violencia extrema, riesgo de vida, muerte de compañeros). Obligatoria para cualquier tamaño de centro de trabajo; obliga a referir a la persona a atención médica o psicológica.",
          "Guía II — Cuestionario de identificación y análisis de factores de riesgo psicosocial y evaluación del entorno organizacional, para centros de 16 a 50 trabajadores.",
          "Guía III — La misma evaluación en su versión completa, para centros de más de 50 trabajadores.",
          "Guía IV — Ejemplo de política de prevención de riesgos psicosociales, aplicable a cualquier tamaño.",
        ],
      },
    },
    {
      titulo: "5.6 Los puntos ciegos de la NOM-035 frente a la neurodivergencia",
      parrafos: [
        "Los cuestionarios oficiales de la NOM-035 fueron diseñados pensando en una plantilla neurotípica. Eso no los invalida, pero sí significa que pueden no detectar riesgo psicosocial real y severo que sí está presente en personal neurodivergente, porque simplemente no preguntan por él.",
      ],
      tabla: {
        encabezados: ["Dominio que mide la NOM-035", "Qué evalúa el instrumento oficial", "Qué se le escapa en personal neurodivergente"],
        filas: [
          ["Carga de trabajo y control sobre las tareas", "Ritmo, cantidad de trabajo, autonomía", "Sobrecarga sensorial del entorno; necesidad de rutina y predictibilidad como condición para sostener el ritmo"],
          ["Liderazgo y relaciones en el trabajo", "Apoyo del liderazgo, relaciones interpersonales", "Exigencia de masking como condición de \"buena actitud\"; evaluación de desempeño con criterios comunicativos neurotípicos"],
          ["Violencia laboral", "Acoso, hostigamiento y malos tratos en su forma genérica", "Burla del stimming, exigencia de contacto visual, exclusión por diferencias comunicativas — formas de hostigamiento que no encajan en la definición genérica"],
          ["Acontecimientos traumáticos severos (Guía I)", "Violencia física, asaltos, accidentes graves", "Burnout autista por masking sostenido y crisis acumulada de sobrecarga sensorial: no es un evento único, sino una acumulación, y por eso el cuestionario —pensado para eventos puntuales— no la captura"],
          ["Entorno organizacional", "Liderazgo, relación trabajo-familia", "Ausencia de ajustes razonables y rigidez de horarios/rutinas como fuente de estrés crónico"],
        ],
      },
      destacado: {
        titulo: "El punto central",
        texto:
          "Cumplir la NOM-035 con el cuestionario oficial sin más no es incorrecto, pero sí es incompleto para una organización con personal neurodivergente: el riesgo psicosocial más severo para esa población puede quedar exactamente fuera de lo que el instrumento pregunta.",
      },
    },
    {
      titulo: "5.7 Anexo neurodivergente al cuestionario de factores de riesgo psicosocial",
      parrafos: [
        "Este anexo no sustituye ni forma parte de las Guías oficiales de la NOM-035 — es un complemento que Alianza Índigo recomienda aplicar junto con el cuestionario oficial (Guía II o III, según el tamaño del centro de trabajo) para no dejar ciego el riesgo psicosocial específico de personal neurodivergente. Se responde con la misma escala Likert de 5 opciones (Siempre / Casi siempre / Algunas veces / Casi nunca / Nunca).",
      ],
      lista: {
        titulo: "Reactivos sugeridos (aplicar junto con el cuestionario oficial vigente)",
        items: [
          "En mi trabajo, el ambiente sensorial (ruido, luces, olores) me impide concentrarme o me genera agotamiento.",
          "Siento que debo ocultar mis rasgos naturales (evitar estimular, forzar contacto visual, fingir seguir una conversación) para ser bien visto en mi trabajo.",
          "Se me exige responder de inmediato en reuniones o conversaciones, sin tiempo para procesar antes de contestar.",
          "Los cambios de horario, tareas o rutina se me informan con tan poca anticipación que me generan estrés desproporcionado.",
          "He solicitado un ajuste razonable (tiempo adicional, comunicación por escrito, reducción de estímulos) y no se me ha otorgado.",
          "Se ha cuestionado mi \"actitud\" o mi forma de comunicarme de manera que no tiene que ver con mi desempeño real.",
          "He sido objeto de burla, exclusión o comentarios por mi forma de comunicarme, de estimular o de relacionarme.",
          "Después de una jornada o semana laboral, necesito un tiempo de recuperación mucho mayor al que parece necesitar el resto de mi equipo.",
        ],
      },
    },
    {
      titulo: "5.8 Protocolo de violencia laboral con enfoque neuroafirmativo",
      parrafos: [
        "La NOM-035 obliga a prevenir y atender la violencia laboral, pero su definición genérica de acoso y hostigamiento no siempre reconoce formas de discriminación que solo se activan contra personal neurodivergente. El protocolo de la organización debe nombrarlas explícitamente para que de verdad proteja a esa población, no solo en el papel.",
      ],
      lista: {
        titulo: "Ejemplos que el protocolo debe reconocer explícitamente como violencia laboral",
        items: [
          "Burlarse, imitar o pedir que se detenga el stimming de una persona.",
          "Excluir de reuniones, proyectos o convivios por ser \"raro\" o \"difícil de tratar\" socialmente.",
          "Exigir contacto visual, tono de voz o lenguaje corporal específico como condición para tomar en serio a alguien.",
          "Divulgar o cuestionar la autoidentificación de una persona como neurodivergente ante el resto del equipo sin su consentimiento.",
          "Tomar represalias (formales o informales) contra quien solicita un ajuste razonable o reporta una barrera de accesibilidad.",
        ],
      },
    },
    {
      titulo: "5.9 Derivación a exámenes médicos o psicológicos: nota de práctica neuroafirmativa",
      parrafos: [
        "Cuando la Guía I detecta un acontecimiento traumático severo, la NOM-035 obliga a referir a la persona a atención médica o psicológica (IMSS, ISSSTE, institución privada o el médico de la empresa). Para personal neurodivergente esto tiene un riesgo específico: una crisis sensorial (meltdown o shutdown) mal entendida por un evaluador sin formación neuroafirmativa puede patologizarse como una crisis psiquiátrica, cuando en realidad es una respuesta neurológica normal a sobrecarga.",
        "Recomendación práctica: al referir a una persona neurodivergente a esta evaluación, la organización debe verificar que quien evalúa tenga formación en el paradigma neuroafirmativo o, como mínimo, advertir explícitamente ese contexto al derivar el caso.",
      ],
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
    {
      codigo: "5.C",
      titulo: "Aplicación del anexo neurodivergente NOM-035",
      duracion: "individual",
      descripcion:
        "Aplica los ocho reactivos del anexo neurodivergente (sección 5.7) a tu propia organización o a un caso hipotético, e identifica qué factor de riesgo psicosocial revela que el cuestionario oficial de la NOM-035 no habría detectado por sí solo.",
    },
  ],
  evaluacion: [
    { componente: "Quiz de 12 preguntas sobre derechos humanos, obligaciones legales y NOM-035", tipo: "Opción múltiple", valor: "25%" },
    { componente: "Análisis de un cuarto caso práctico", tipo: "Escrito — 400 palabras", valor: "30%" },
    { componente: "Autoevaluación de convencionalidad de la organización", tipo: "Herramienta aplicada", valor: "25%" },
    { componente: "Aplicación del anexo neurodivergente NOM-035", tipo: "Herramienta aplicada", valor: "20%" },
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
    {
      id: "m5q21",
      pregunta: "¿Qué obliga a establecer la NOM-035-STPS-2018 en todo centro de trabajo, sin importar su tamaño?",
      opciones: [
        "Identificar, analizar y prevenir factores de riesgo psicosocial, y promover un entorno organizacional favorable",
        "Otorgar un bono anual por productividad",
        "Contratar un seguro de gastos médicos privado",
        "Reducir la jornada laboral a 6 horas",
      ],
      correcta: 0,
      explicacion: "La NOM-035 obliga a identificar, analizar y prevenir el riesgo psicosocial y a promover un entorno organizacional favorable en cualquier centro de trabajo.",
    },
    {
      id: "m5q22",
      pregunta: "¿Qué guía de referencia de la NOM-035 identifica a quienes fueron sujetos de acontecimientos traumáticos severos, y a qué centros de trabajo aplica?",
      opciones: [
        "Guía I, obligatoria para cualquier tamaño de centro de trabajo",
        "Guía III, solo para centros de más de 50 trabajadores",
        "Guía IV, solo para centros de 16 a 50 trabajadores",
        "Guía II, solo para centros de hasta 15 trabajadores",
      ],
      correcta: 0,
      explicacion: "La Guía I identifica a los trabajadores sujetos de acontecimientos traumáticos severos y es obligatoria para todo centro de trabajo, sin importar su tamaño.",
    },
    {
      id: "m5q23",
      pregunta: "Un centro de trabajo con 30 empleados, ¿qué guías de la NOM-035 debe aplicar?",
      opciones: ["Guía I + Guía II + Guía IV", "Solo Guía I", "Guía I + Guía III + Guía IV", "Ninguna, está exento por su tamaño"],
      correcta: 0,
      explicacion: "Los centros de trabajo de 16 a 50 trabajadores aplican Guía I, Guía II (identificación y análisis de factores de riesgo psicosocial y entorno organizacional) y Guía IV (política).",
    },
    {
      id: "m5q24",
      pregunta: "Según el módulo, ¿qué le \"pasa desapercibido\" al dominio de Carga de trabajo y control de la NOM-035 en personal neurodivergente?",
      opciones: [
        "La sobrecarga sensorial del entorno y la necesidad de rutina y predictibilidad",
        "El número de horas trabajadas por semana",
        "El salario base del puesto",
        "La antigüedad en la empresa",
      ],
      correcta: 0,
      explicacion: "El cuestionario oficial mide ritmo y autonomía sobre las tareas, pero no pregunta por sobrecarga sensorial ni por la necesidad de rutina y predictibilidad.",
    },
    {
      id: "m5q25",
      pregunta: "¿Por qué el burnout autista por masking sostenido no queda bien capturado por la Guía I de acontecimientos traumáticos severos?",
      opciones: [
        "Porque la Guía I está pensada para eventos puntuales (accidentes, asaltos), no para una acumulación sostenida en el tiempo",
        "Porque el burnout autista no es un fenómeno real",
        "Porque la Guía I solo aplica a puestos directivos",
        "Porque el burnout autista solo ocurre fuera del trabajo",
      ],
      correcta: 0,
      explicacion: "La Guía I está diseñada para eventos traumáticos puntuales y severos; el burnout autista es una acumulación de agotamiento por masking sostenido, no un evento único, por lo que el instrumento no lo captura bien.",
    },
    {
      id: "m5q26",
      pregunta: "¿Qué es, según el módulo, el \"anexo neurodivergente\" al cuestionario de factores de riesgo psicosocial?",
      opciones: [
        "Un complemento recomendado por Alianza Índigo para aplicar junto con la Guía oficial, no un sustituto de esta",
        "Una guía oficial más de la NOM-035, publicada por la STPS",
        "Un requisito legal obligatorio que reemplaza la Guía II o III",
        "Un examen médico obligatorio para personal neurodivergente",
      ],
      correcta: 0,
      explicacion: "El anexo neurodivergente no sustituye ni forma parte de las guías oficiales; es un complemento que se aplica junto con el cuestionario oficial vigente.",
    },
    {
      id: "m5q27",
      pregunta: "¿Cuál de las siguientes es una forma de violencia laboral hacia personal neurodivergente que un protocolo genérico de acoso puede no reconocer, según el módulo?",
      opciones: [
        "Burlarse o pedir que se detenga el stimming de una persona",
        "Convocar una reunión con agenda escrita",
        "Ofrecer horario flexible como ajuste razonable",
        "Aplicar el cuestionario oficial de la NOM-035",
      ],
      correcta: 0,
      explicacion: "Burlarse del stimming es un ejemplo de violencia laboral específica hacia personas neurodivergentes que un protocolo genérico de acoso puede no nombrar explícitamente.",
    },
    {
      id: "m5q28",
      pregunta: "Cuando la Guía I detecta un acontecimiento traumático severo, ¿qué obliga a hacer la NOM-035?",
      opciones: [
        "Referir a la persona a atención médica o psicológica (IMSS, ISSSTE, institución privada o médico de la empresa)",
        "Despedir a la persona por seguridad de terceros",
        "Ignorar el resultado si la persona no lo solicita expresamente",
        "Notificar únicamente a Recursos Humanos, sin ninguna acción de atención",
      ],
      correcta: 0,
      explicacion: "La NOM-035 obliga a referir a la persona identificada a atención médica o psicológica, ya sea institucional, privada o de la empresa.",
    },
    {
      id: "m5q29",
      pregunta: "¿Qué riesgo específico señala el módulo al derivar a una persona neurodivergente a evaluación psicológica tras una crisis sensorial?",
      opciones: [
        "Que un evaluador sin formación neuroafirmativa patologice una respuesta neurológica normal como si fuera una crisis psiquiátrica",
        "Que la evaluación tarde más de lo previsto",
        "Que la persona deba pagar la consulta de su bolsillo en todos los casos",
        "Que se pierda el expediente médico",
      ],
      correcta: 0,
      explicacion: "Un meltdown o shutdown mal entendido por alguien sin formación neuroafirmativa puede patologizarse como crisis psiquiátrica, cuando es una respuesta neurológica normal a sobrecarga.",
    },
    {
      id: "m5q30",
      pregunta: "¿Con qué escala de respuesta se sugiere aplicar el anexo neurodivergente, para ser consistente con el cuestionario oficial de la NOM-035?",
      opciones: [
        "Escala Likert de 5 opciones (Siempre / Casi siempre / Algunas veces / Casi nunca / Nunca)",
        "Escala de sí/no únicamente",
        "Calificación numérica del 1 al 100",
        "Selección múltiple sin opción de frecuencia",
      ],
      correcta: 0,
      explicacion: "El anexo se responde con la misma escala Likert de 5 opciones que usa el cuestionario oficial de la NOM-035, para mantener consistencia metodológica.",
    },
  ],
};

export default modulo5;
