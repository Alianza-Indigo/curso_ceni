import { Modulo } from "@/lib/types";

const modulo5: Modulo = {
  id: "m5",
  numero: 5,
  titulo: "Ética, Derechos Humanos y Ley Índigo",
  duracion: "180 minutos",
  dirigidoA: "Propietarios, directivos, RRHH, prestadores de servicios públicos",
  preguntasPorIntento: 14,
  objetivos: [
    "Ubicar los Derechos Índigo en el marco internacional de los derechos humanos de cuarta generación.",
    "Identificar las obligaciones legales aplicables a empresas, instituciones educativas y prestadores de servicios en materia de neuroinclusión.",
    "Analizar casos prácticos de vulneración de derechos neurodivergentes y su tratamiento jurídico.",
    "Aplicar el control de convencionalidad como herramienta de autoevaluación institucional.",
    "Explicar qué obliga la NOM-035-STPS-2018, a quién según el tamaño del centro de trabajo, y cómo se identifican, evalúan y clasifican por nivel de riesgo los factores de riesgo psicosocial.",
    "Identificar los puntos ciegos de la NOM-035 frente a la neurodivergencia y aplicar el anexo neurodivergente como complemento del cuestionario oficial.",
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
          "NOM-035-STPS-2018 (STPS): obligación vigente y exigible de identificar, analizar y prevenir los factores de riesgo psicosocial y promover un entorno organizacional favorable en todo centro de trabajo",
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
      titulo: "5.5 NOM-035-STPS-2018: qué obliga y a quién",
      parrafos: [
        "La NOM-035-STPS-2018 (\"Factores de riesgo psicosocial en el trabajo — Identificación, análisis y prevención\") es una Norma Oficial Mexicana de cumplimiento obligatorio en todo el territorio nacional. Obliga a todo centro de trabajo a identificar, analizar y prevenir los factores de riesgo psicosocial y a promover un entorno organizacional favorable. Las obligaciones se escalonan según el número de trabajadores, y se instrumentan con cinco guías de referencia oficiales (I a V).",
        "Un factor de riesgo psicosocial es, según la norma, aquel que puede provocar trastornos de ansiedad, del ciclo sueño-vigilia o de estrés grave y de adaptación, derivado de la naturaleza del puesto, el tipo de jornada, la exposición a acontecimientos traumáticos severos o los actos de violencia laboral.",
      ],
      tabla: {
        encabezados: ["Tamaño del centro de trabajo", "Qué debe hacer", "Guías aplicables"],
        filas: [
          ["Hasta 15 trabajadores", "Política de prevención, difusión de información e identificación de acontecimientos traumáticos severos (Guía I). No requiere aplicar cuestionario.", "Guía I + Guía IV"],
          ["16 a 50 trabajadores", "Lo anterior + identificación y análisis de los factores de riesgo psicosocial, a todos los trabajadores. No incluye evaluación del entorno organizacional.", "Guía I + Guía II + Guía IV"],
          ["Más de 50 trabajadores", "Lo anterior + evaluación del entorno organizacional. La aplicación puede hacerse sobre una muestra representativa.", "Guía I + Guía III + Guía IV"],
        ],
      },
      lista: {
        titulo: "Obligaciones del patrón (Capítulo 5) y de los trabajadores (Capítulo 6)",
        items: [
          "Patrón: establecer por escrito, implantar y difundir una política de prevención de riesgos psicosociales (aplica a cualquier tamaño).",
          "Patrón: identificar y analizar los factores de riesgo psicosocial (16+) y evaluar el entorno organizacional (50+).",
          "Patrón: adoptar medidas de prevención y control, difundir información, llevar registros y practicar exámenes médicos/psicológicos cuando el resultado o las quejas lo sugieran.",
          "Patrón: identificar a quienes vivieron acontecimientos traumáticos severos y canalizarlos a atención médica o psicológica.",
          "Trabajadores: observar las medidas de prevención, participar en la identificación, abstenerse de prácticas contrarias al entorno favorable y denunciar la violencia laboral.",
          "Trabajadores: informar por escrito al patrón sobre acontecimientos traumáticos severos y someterse a los exámenes médicos y evaluaciones que determine la norma.",
        ],
      },
    },
    {
      titulo: "5.6 Cómo se identifican, analizan y evalúan los factores",
      parrafos: [
        "El centro de trabajo puede usar las Guías de referencia oficiales (Guía II para 16–50 trabajadores, con 46 reactivos; Guía III para más de 50, con 72 reactivos) o un método propio que cumpla los numerales 7.4 y 7.5. Ambos cuestionarios se responden con una escala Likert de cinco opciones (Siempre / Casi siempre / Algunas veces / Casi nunca / Nunca) y agrupan los reactivos por dimensión, dominio y categoría.",
        "La diferencia clave entre ambas guías está en la última categoría: solo la Guía III —obligatoria para centros de más de 50 trabajadores— evalúa el entorno organizacional. La Guía II no lo hace.",
        "El curso incluye ambos cuestionarios oficiales listos para aplicar, con calificación automática y determinación del nivel de riesgo: el formato F-19 (Guía II, 46 reactivos) y el F-20 (Guía III, 72 reactivos). Con ellos la organización cumple el corazón de la norma; el anexo neurodivergente (F-18, sección 5.10) se aplica junto a ellos como complemento.",
      ],
      tabla: {
        encabezados: ["Categoría", "Qué agrupa", "Guía II (16–50)", "Guía III (+50)"],
        filas: [
          ["Ambiente de trabajo", "Condiciones peligrosas, inseguras, deficientes o insalubres", "Sí", "Sí"],
          ["Factores propios de la actividad", "Cargas de trabajo y falta de control sobre el trabajo", "Sí", "Sí"],
          ["Organización del tiempo de trabajo", "Jornada de trabajo e interferencia trabajo-familia", "Sí", "Sí"],
          ["Liderazgo y relaciones en el trabajo", "Liderazgo, relaciones y violencia laboral", "Sí", "Sí"],
          ["Entorno organizacional", "Reconocimiento del desempeño, sentido de pertenencia y estabilidad laboral", "No aplica", "Sí"],
        ],
      },
      lista: {
        titulo: "Además, la norma exige (numerales 5.8, 7.6 a 7.9)",
        items: [
          "Integrar el resultado al diagnóstico de seguridad y salud de la NOM-030-STPS-2009.",
          "Hacer constar el resultado en un informe con contenido definido (datos del centro, método, resultados, conclusiones, recomendaciones y responsable de la evaluación).",
          "Mantener el resultado disponible para consulta de los trabajadores, resguardando la confidencialidad de los datos individuales (Guía V — Datos del trabajador).",
          "Llevar registros de resultados, medidas de control y personal con exposición comprobada.",
          "Reevaluar los factores de riesgo psicosocial —y el entorno organizacional, en su caso— al menos cada dos años.",
        ],
      },
    },
    {
      titulo: "5.7 Niveles de riesgo y qué hacer con el resultado",
      parrafos: [
        "La calificación final del cuestionario ubica al centro de trabajo en uno de cinco niveles de riesgo. Cada nivel define la acción que la norma exige adoptar. Los cortes numéricos difieren entre la Guía II (46 reactivos) y la Guía III (72 reactivos), pero la lógica de cinco niveles es la misma.",
      ],
      tabla: {
        encabezados: ["Nivel de riesgo", "Acción que exige la norma (Tabla 4 / Tabla 7)"],
        filas: [
          ["Nulo o despreciable", "No se requieren medidas adicionales."],
          ["Bajo", "Mayor difusión de la política y de los programas de prevención."],
          ["Medio", "Revisar la política y los programas y reforzar su aplicación y difusión, mediante un Programa de intervención."],
          ["Alto", "Analizar cada categoría y dominio y aplicar un Programa de intervención (puede incluir evaluación específica), además de revisar la política."],
          ["Muy alto", "Analizar cada categoría y dominio y aplicar un Programa de intervención que debe incluir evaluaciones específicas y campañas de sensibilización, además de revisar la política."],
        ],
      },
      lista: {
        titulo: "Los tres niveles de intervención (numeral 8.5)",
        items: [
          "Primer nivel (organizacional): actuar sobre la política de prevención y la organización del trabajo.",
          "Segundo nivel (grupal): sensibilización, manejo de conflictos, trabajo en equipo, comunicación asertiva y refuerzo del apoyo social.",
          "Tercer nivel (individual): intervención clínica o terapéutica cuando hay signos de alteración a la salud; debe realizarla, invariablemente, un médico, psicólogo o psiquiatra.",
        ],
      },
      destacado: {
        titulo: "El Programa de intervención (numerales 8.3 y 8.4)",
        texto:
          "Cuando el resultado es medio, alto o muy alto, las acciones de control se implementan mediante un Programa que debe indicar: las áreas o trabajadores sujetos al programa, el tipo de acciones y medidas de control, las fechas de realización, el control de avances, la evaluación posterior y el responsable de su ejecución.",
      },
    },
    {
      titulo: "5.8 Guía I: acontecimientos traumáticos severos y derivación",
      parrafos: [
        "La Guía I identifica a las personas trabajadoras que fueron sujetos de un acontecimiento traumático severo durante o con motivo del trabajo (accidentes graves o mortales, asaltos, actos violentos, secuestros, amenazas o cualquier evento que ponga en riesgo la vida o la salud). Es obligatoria para todo centro de trabajo, sin importar su tamaño. Cuando el cuestionario detecta afectación, la norma obliga a canalizar a la persona a atención médica o psicológica (institución de seguridad social o privada, o el médico de la empresa).",
        "El patrón también debe practicar exámenes médicos y evaluaciones psicológicas cuando existan signos de alteración a la salud, cuando el análisis de los factores de riesgo lo sugiera, o cuando haya quejas de violencia laboral (numeral 5.6).",
        "Nota de práctica neuroafirmativa: para personal neurodivergente esta derivación tiene un riesgo específico. Una crisis sensorial (meltdown o shutdown) mal entendida por un evaluador sin formación neuroafirmativa puede patologizarse como una crisis psiquiátrica, cuando en realidad es una respuesta neurológica normal a la sobrecarga. Al derivar, la organización debe verificar que quien evalúa tenga formación neuroafirmativa o, como mínimo, advertir explícitamente ese contexto.",
      ],
    },
    {
      titulo: "5.9 Los puntos ciegos de la NOM-035 frente a la neurodivergencia",
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
      titulo: "5.10 Anexo neurodivergente al cuestionario de factores de riesgo psicosocial",
      parrafos: [
        "Este anexo no sustituye ni forma parte de las Guías oficiales de la NOM-035 — es un complemento que Alianza Índigo recomienda aplicar junto con el cuestionario oficial (Guía II o III, según el tamaño del centro de trabajo) para no dejar ciego el riesgo psicosocial específico de personal neurodivergente. Se responde con la misma escala Likert de 5 opciones (Siempre / Casi siempre / Algunas veces / Casi nunca / Nunca).",
        "Al ser un complemento y no el instrumento oficial, el anexo no reemplaza la validación estadística que el numeral 7.5 exige a los cuestionarios propios (alfa de Cronbach superior a 0.7, entre otros): esa exigencia recae sobre el cuestionario oficial que se sigue aplicando. El anexo aporta señales cualitativas para orientar ajustes y evaluaciones específicas, no una calificación formal de nivel de riesgo.",
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
      titulo: "5.11 Protocolo de violencia laboral con enfoque neuroafirmativo",
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
      titulo: "5.12 Verificación, evaluación de la conformidad y vigencia",
      parrafos: [
        "El cumplimiento de la NOM-035 lo verifica la autoridad laboral (STPS) mediante inspección, y el patrón puede además contratar de forma voluntaria una unidad de verificación acreditada, cuyo dictamen tiene una vigencia de dos años. La evaluación de la conformidad se realiza por constatación, revisión documental, registros o entrevistas.",
        "La norma entró en vigor de forma escalonada: la política de prevención, la difusión y la identificación de acontecimientos traumáticos severos al año de su publicación; y la identificación y análisis de los factores de riesgo psicosocial, la evaluación del entorno organizacional, el Programa de intervención y las acciones de control, a los dos años. Los centros con certificado vigente de la NMX-R-025-SCFI-2015 (Igualdad Laboral y No Discriminación) dan por cumplidos algunos numerales de la norma.",
        "Este bloque es el puente hacia el Módulo 10: buena parte de la evidencia documental de cumplimiento de la NOM-035 (política, informe de resultados, registros, Programa) se integra al mismo expediente que se prepara para la certificación CENI.",
      ],
    },
    {
      titulo: "5.13 Evaluación del módulo 5",
      parrafos: [
        "La evaluación del módulo pondera el quiz teórico junto con tres herramientas aplicadas. El quiz debe aprobarse y las tres actividades deben entregarse para dar el módulo por completo.",
      ],
    },
  ],
  actividades: [
    {
      codigo: "5.A",
      titulo: "Análisis de un cuarto caso práctico",
      duracion: "individual · 400 palabras",
      descripcion: "Se te proporciona un cuarto caso en el material del módulo. Analízalo con el mismo esquema jurídico: hechos, análisis jurídico y respuesta CENI aplicable.",
    },
    {
      codigo: "5.B",
      titulo: "Autoevaluación de convencionalidad",
      duracion: "individual",
      descripcion: "Aplica las cinco preguntas de control de convencionalidad a tu propia organización y documenta los hallazgos.",
    },
    {
      codigo: "5.C",
      titulo: "Diagnóstico de cumplimiento NOM-035 + anexo neurodivergente",
      duracion: "individual",
      descripcion:
        "Determina qué guías de la NOM-035 aplican a tu organización según su número de trabajadores; identifica qué obligaciones ya cumple y cuáles no. Después aplica los ocho reactivos del anexo neurodivergente (sección 5.10) e indica qué factor de riesgo psicosocial revela que el cuestionario oficial no habría detectado por sí solo.",
    },
  ],
  evaluacion: [
    { componente: "Quiz de 14 preguntas sobre derechos humanos, obligaciones legales y NOM-035", tipo: "Opción múltiple", valor: "25%" },
    { componente: "Análisis de un cuarto caso práctico", tipo: "Escrito — 400 palabras", valor: "30%" },
    { componente: "Autoevaluación de convencionalidad de la organización", tipo: "Herramienta aplicada", valor: "25%" },
    { componente: "Diagnóstico de cumplimiento NOM-035 + anexo neurodivergente", tipo: "Herramienta aplicada", valor: "20%" },
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
      explicacion: "Los centros de trabajo de 16 a 50 trabajadores aplican Guía I, Guía II (identificación y análisis de factores de riesgo psicosocial) y Guía IV (política).",
    },
    {
      id: "m5q24",
      pregunta: "¿Cuál es la diferencia central entre la Guía II y la Guía III de la NOM-035?",
      opciones: [
        "Solo la Guía III (más de 50 trabajadores) evalúa el entorno organizacional; la Guía II no lo hace",
        "La Guía II evalúa el entorno organizacional y la Guía III no",
        "Ambas evalúan exactamente lo mismo, solo cambia el número de páginas",
        "La Guía II es para más de 50 trabajadores y la Guía III para 16 a 50",
      ],
      correcta: 0,
      explicacion: "La Guía II (16–50 trabajadores) solo identifica y analiza factores de riesgo psicosocial; la evaluación del entorno organizacional es exclusiva de la Guía III, obligatoria para más de 50 trabajadores.",
    },
    {
      id: "m5q25",
      pregunta: "¿Cuáles son las cinco categorías que agrupa el cuestionario oficial (Guía III) de la NOM-035?",
      opciones: [
        "Ambiente de trabajo; factores propios de la actividad; organización del tiempo de trabajo; liderazgo y relaciones; entorno organizacional",
        "Salario, prestaciones, horario, vacaciones y aguinaldo",
        "Reclutamiento, selección, inducción, desarrollo y retención",
        "Iluminación, ruido, temperatura, olores y señalización",
      ],
      correcta: 0,
      explicacion: "El cuestionario agrupa los reactivos en cinco categorías: ambiente de trabajo; factores propios de la actividad; organización del tiempo de trabajo; liderazgo y relaciones en el trabajo; y entorno organizacional (esta última solo en la Guía III).",
    },
    {
      id: "m5q26",
      pregunta: "Cuando el resultado del cuestionario arroja un nivel de riesgo \"muy alto\", ¿qué exige la norma?",
      opciones: [
        "Analizar cada categoría y dominio y aplicar un Programa de intervención con evaluaciones específicas y campañas de sensibilización",
        "No tomar ninguna medida adicional",
        "Despedir al personal con mayor puntaje",
        "Reducir el cuestionario a la mitad de reactivos",
      ],
      correcta: 0,
      explicacion: "Para el nivel muy alto la norma exige analizar cada categoría y dominio y aplicar un Programa de intervención que debe incluir evaluaciones específicas y campañas de sensibilización, además de revisar la política.",
    },
    {
      id: "m5q27",
      pregunta: "El Programa de intervención de la NOM-035 (numerales 8.3–8.4) debe contener, entre otros:",
      opciones: [
        "Áreas o trabajadores sujetos, tipo de acciones, fechas, control de avances, evaluación posterior y responsable",
        "Solo el nombre del director general",
        "Únicamente el presupuesto de marketing",
        "El organigrama completo de la empresa",
      ],
      correcta: 0,
      explicacion: "El Programa debe indicar las áreas o trabajadores sujetos, el tipo de acciones y medidas de control, las fechas, el control de avances, la evaluación posterior y el responsable de su ejecución.",
    },
    {
      id: "m5q28",
      pregunta: "El tercer nivel de intervención de la NOM-035 (numeral 8.5) se refiere a:",
      opciones: [
        "Intervención clínica o terapéutica individual, realizada por médico, psicólogo o psiquiatra",
        "Acciones sobre la política de prevención de toda la organización",
        "Sensibilización grupal y trabajo en equipo",
        "La contratación de más personal de limpieza",
      ],
      correcta: 0,
      explicacion: "El tercer nivel es individual: se desarrolla cuando hay signos de alteración a la salud e incluye intervención clínica o terapéutica, que debe realizar invariablemente un médico, psicólogo o psiquiatra.",
    },
    {
      id: "m5q29",
      pregunta: "¿Con qué periodicidad mínima debe reevaluarse la identificación y análisis de los factores de riesgo psicosocial?",
      opciones: ["Al menos cada dos años", "Cada mes", "Una sola vez y nunca más", "Cada diez años"],
      correcta: 0,
      explicacion: "El numeral 7.9 exige realizar la identificación y análisis —y la evaluación del entorno organizacional, en su caso— al menos cada dos años.",
    },
    {
      id: "m5q30",
      pregunta: "Respecto al resultado de la evaluación, ¿qué exige la NOM-035 sobre su manejo?",
      opciones: [
        "Constar en un informe, estar disponible para consulta de los trabajadores y resguardar la confidencialidad de los datos individuales",
        "Publicarse con nombre y puntaje de cada trabajador en el periódico mural",
        "Destruirse inmediatamente después de aplicarse",
        "Entregarse únicamente a la competencia",
      ],
      correcta: 0,
      explicacion: "El resultado debe constar en un informe (7.7), estar disponible para consulta de los trabajadores (7.8) y resguardar la confidencialidad de los datos individuales (Guía V).",
    },
    {
      id: "m5q31",
      pregunta: "Según la NOM-035, ¿qué debe hacer el patrón cuando la Guía I detecta un acontecimiento traumático severo?",
      opciones: [
        "Canalizar a la persona a atención médica o psicológica",
        "Registrar el caso y no hacer nada más",
        "Descontar el día de trabajo",
        "Reasignar a la persona a otra sucursal sin más",
      ],
      correcta: 0,
      explicacion: "La norma obliga a identificar a quienes vivieron un acontecimiento traumático severo y canalizarlos a atención médica o psicológica (institución de seguridad social o privada, o médico de la empresa).",
    },
    {
      id: "m5q32",
      pregunta: "¿Cuál es una obligación de los trabajadores según el Capítulo 6 de la NOM-035?",
      opciones: [
        "Participar en la identificación de los factores de riesgo y denunciar la violencia laboral",
        "Diseñar por su cuenta la política de prevención",
        "Contratar a la unidad de verificación",
        "Aprobar el presupuesto anual del centro de trabajo",
      ],
      correcta: 0,
      explicacion: "Los trabajadores deben observar las medidas de prevención, participar en la identificación de los factores de riesgo, abstenerse de prácticas contrarias al entorno favorable y denunciar la violencia laboral.",
    },
    {
      id: "m5q33",
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
      id: "m5q34",
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
      id: "m5q35",
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
      id: "m5q36",
      pregunta: "Según el módulo, ¿qué le \"pasa desapercibido\" al dominio de carga de trabajo y control de la NOM-035 en personal neurodivergente?",
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
      id: "m5q37",
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
      id: "m5q38",
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
    {
      id: "m5q39",
      pregunta: "El dictamen de una unidad de verificación de la NOM-035 tiene una vigencia de:",
      opciones: ["Dos años", "Un mes", "Diez años", "No tiene vigencia definida"],
      correcta: 0,
      explicacion: "El dictamen emitido por una unidad de verificación acreditada tiene una vigencia de dos años, siempre que no se modifiquen las condiciones que sirvieron para su emisión.",
    },
    {
      id: "m5q40",
      pregunta: "¿Por qué el anexo neurodivergente no está sujeto a la validación estadística del numeral 7.5 (alfa de Cronbach, etc.)?",
      opciones: [
        "Porque es un complemento cualitativo, no el instrumento oficial que arroja la calificación de nivel de riesgo",
        "Porque la STPS lo eximió expresamente",
        "Porque ningún cuestionario en México requiere validación",
        "Porque reemplaza por completo a la Guía II o III",
      ],
      correcta: 0,
      explicacion: "La validación del 7.5 recae sobre el cuestionario oficial que sigue aplicándose; el anexo aporta señales cualitativas para orientar ajustes, no una calificación formal de nivel de riesgo.",
    },
  ],
};

export default modulo5;
