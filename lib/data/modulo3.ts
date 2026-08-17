import { Modulo } from "@/lib/types";

const modulo3: Modulo = {
  id: "m3",
  numero: 3,
  titulo: "Manejo de Crisis Sensoriales",
  duracion: "90 minutos",
  dirigidoA: "Todo público",
  preguntasPorIntento: 10,
  recursos: [
    { codigo: "F-01", nombre: "Registro de Incidentes Sensoriales (RIS)", formato: "Excel", archivo: "/recursos/formatos/F-01_Registro_Incidentes_Sensoriales.xlsx" },
  ],
  objetivos: [
    "Distinguir correctamente entre meltdown y shutdown y su etiología sensorial/emocional.",
    "Aplicar protocolos no punitivos de acompañamiento durante una crisis.",
    "Diseñar e implementar espacios de calma funcionales en el entorno de la organización.",
    "Ejecutar primeros auxilios emocionales neuroafirmativos con seguridad y respeto.",
    "Documentar incidentes sensoriales y proponer ajustes preventivos.",
  ],
  secciones: [
    {
      titulo: "3.1 Meltdown vs Shutdown",
      parrafos: [
        'Las crisis sensoriales son respuestas neurológicas involuntarias a la sobreestimulación o sobrecarga cognitiva y emocional. No son caprichos, manipulaciones ni "berrinches". Son la respuesta del sistema nervioso cuando alcanza su límite de procesamiento.',
      ],
      tabla: {
        encabezados: ["Meltdown (crisis de activación)", "Shutdown (crisis de desconexión)"],
        filas: [
          [
            "El sistema nervioso se activa de manera explosiva: llanto intenso, gritos, movimientos no controlados, caída al suelo. La persona está en modo de supervivencia sin acceso a la regulación racional.",
            'El sistema nervioso se apaga: inmovilidad, mutismo, mirada fija, sin respuesta a estímulos externos. Puede parecer que "ya se calmó" cuando en realidad está en colapso neurológico interno.',
          ],
        ],
      },
      destacado: {
        titulo: "Ambos estados requieren el mismo enfoque",
        texto: "No intervención correctiva, reducción de estímulos, presencia calmada y espera.",
      },
    },
    {
      titulo: "3.2 Protocolo de acompañamiento no punitivo (cinco fases)",
      parrafos: [],
      lista: {
        items: [
          "Fase 1 — Reconocimiento (antes de que escale): aumento del stimming, retiro del contacto visual, cambios de postura, verbalización repetitiva, mayor sensibilidad a estímulos menores.",
          "Fase 2 — Reducción inmediata de estímulos: apagar o reducir luces intensas, bajar el volumen, retirar personas, detener la instrucción en curso, ofrecer acceso al espacio de calma.",
          "Fase 3 — Presencia sin intervención: permanecer cerca, sin tocar (salvo que se solicite), sin hablar, sin preguntas, sin intentar razonar.",
          "Fase 4 — Primeros auxilios emocionales: una vez que la crisis disminuye, ofrecer agua, preguntar con voz suave qué se necesita, escuchar sin interrumpir ni juzgar, evitar preguntas de \"¿por qué?\".",
          "Fase 5 — Registro y ajuste ambiental: documentar en el Registro de Incidentes Sensoriales (RIS) fecha, hora, espacio, desencadenante probable, duración, protocolo aplicado y propuesta de ajuste preventivo.",
        ],
      },
      destacado: {
        titulo: "Lo que NUNCA debe hacerse durante una crisis sensorial",
        texto:
          'Decir "cálmate" o "tranquilízate". Intentar razonar, negociar o dar instrucciones. Tocar sin consentimiento previo. Sacar fotografías o llamar la atención de otros. Aplicar consecuencias negativas posteriores. Interpretar la crisis como manipulación. Exigir que la persona "explique qué pasó" inmediatamente después.',
      },
    },
    {
      titulo: "3.3 Diseño de espacios de calma",
      parrafos: [
        "Un espacio de calma es un área específicamente diseñada para que cualquier persona pueda autorregularse de manera segura y sin intervención. No es un espacio de castigo ni de aislamiento: es una herramienta de accesibilidad.",
      ],
      tabla: {
        encabezados: ["Requisito CENI", "Puntos"],
        filas: [
          ["Luz regulable o natural indirecta (máximo 200 lux)", "20"],
          ["Nivel de ruido ≤ 45 dB en reposo", "20"],
          ["Sin pantallas ni estímulos visuales en movimiento", "10"],
          ["Superficie de descanso (cojín, colchoneta, asiento con respaldo)", "15"],
          ["Recursos sensoriales disponibles (fidgets, manta de peso, texturas)", "20"],
          ["Señalización externa de disponibilidad (libre/ocupado)", "10"],
          ["Protocolo de uso publicado y accesible", "15"],
          ["Acceso libre sin pedir permiso", "20"],
        ],
      },
    },
  ],
  actividades: [
    {
      codigo: "3.A",
      titulo: "Análisis de un caso de crisis sensorial",
      duracion: "individual",
      descripcion: "A partir de un caso escrito de crisis de shutdown, identifica las señales de pre-crisis, enumera paso a paso las acciones correctas del protocolo de acompañamiento no punitivo (por fase) y las que nunca deben hacerse.",
    },
    {
      codigo: "3.B",
      titulo: "Diseño de espacio de calma",
      duracion: "individual",
      descripcion: "Identifica un espacio disponible en tu organización y elabora un plano de adecuación que cumpla los ocho requisitos CENI, con presupuesto estimado y cronograma.",
    },
    {
      codigo: "3.C",
      titulo: "Formato RIS",
      duracion: "individual",
      descripcion: "Completa un Registro de Incidentes Sensoriales usando un caso hipotético proporcionado en el material del módulo.",
    },
  ],
  evaluacion: [
    { componente: "Quiz de 10 preguntas sobre meltdown, shutdown y protocolos", tipo: "Opción múltiple", valor: "30%" },
    { componente: "Análisis de caso de crisis sensorial (entregable escrito)", tipo: "Práctica aplicada", valor: "40%" },
    { componente: "Diseño de espacio de calma (plano + presupuesto)", tipo: "Práctica aplicada", valor: "30%" },
  ],
  quiz: [
    {
      id: "m3q1",
      pregunta: "Un shutdown se caracteriza principalmente por:",
      opciones: [
        "Llanto intenso y gritos",
        "Inmovilidad, mutismo y ausencia de respuesta a estímulos",
        "Aumento de energía y euforia",
        "Búsqueda activa de contacto social",
      ],
      correcta: 1,
      explicacion: "El shutdown es una crisis de desconexión: el sistema nervioso se apaga, produciendo inmovilidad, mutismo y ausencia de respuesta.",
    },
    {
      id: "m3q2",
      pregunta: "Durante una crisis sensorial activa, ¿qué se debe hacer?",
      opciones: [
        "Razonar con la persona para que se calme",
        "Reducir estímulos y mantener presencia calmada sin intervenir",
        "Pedirle que explique qué le pasa",
        "Tomar fotos para documentar el incidente en el momento",
      ],
      correcta: 1,
      explicacion: "El protocolo indica reducción de estímulos, presencia sin intervención y espera; nunca razonar ni documentar con fotos en el momento.",
    },
    {
      id: "m3q3",
      pregunta: "¿Cuál es el nivel máximo de ruido permitido en un espacio de calma certificable, en estado de reposo?",
      opciones: ["45 dB", "55 dB", "65 dB", "No hay límite"],
      correcta: 0,
      explicacion: "El requisito CENI establece un nivel de ruido ≤ 45 dB en estado de reposo para espacios de calma.",
    },
    {
      id: "m3q4",
      pregunta: "¿Qué documento debe usarse para registrar toda crisis sensorial ocurrida en el espacio?",
      opciones: ["El RIN", "El PMCN", "El RIS (Registro de Incidentes Sensoriales)", "El MONE"],
      correcta: 2,
      explicacion: "El RIS documenta fecha, hora, espacio, desencadenante probable, duración, protocolo aplicado y ajuste preventivo.",
    },
    {
      id: "m3q5",
      pregunta: "¿Cuál de las siguientes NUNCA debe hacerse durante una crisis sensorial?",
      opciones: [
        "Reducir la luz y el ruido del ambiente",
        "Permanecer cerca sin tocar",
        "Decir \"cálmate\" o \"tranquilízate\"",
        "Ofrecer acceso al espacio de calma",
      ],
      correcta: 2,
      explicacion: "Decir \"cálmate\" no es útil y aumenta la presión sobre la persona en crisis.",
    },
    {
      id: "m3q6",
      pregunta: "Un espacio de calma certificable debe tener acceso:",
      opciones: [
        "Solo con autorización previa de un supervisor",
        "Libre, sin necesidad de pedir permiso",
        "Restringido a personas con diagnóstico formal",
        "Únicamente en horario de comida",
      ],
      correcta: 1,
      explicacion: "El acceso libre, sin necesidad de solicitud previa, es uno de los ocho requisitos CENI para un espacio de calma.",
    },
    {
      id: "m3q7",
      pregunta: "En la Fase 4 (primeros auxilios emocionales), ¿qué pregunta es más apropiada?",
      opciones: [
        "\"¿Por qué actuaste así?\"",
        "\"¿Qué te ayudaría ahora mismo?\"",
        "\"¿Puedes explicarme qué pasó?\"",
        "\"¿Vas a hacer esto de nuevo?\"",
      ],
      correcta: 1,
      explicacion: "Se prefiere preguntar \"¿qué te ayudaría ahora?\" en lugar de preguntas de \"¿por qué?\" que exigen explicación inmediata.",
    },
    {
      id: "m3q8",
      pregunta: "Las señales de pre-crisis (Fase 1 de reconocimiento) incluyen:",
      opciones: [
        "Aumento del stimming y retiro del contacto visual",
        "Mayor participación verbal espontánea",
        "Búsqueda de más estímulos sensoriales",
        "Ninguna señal es identificable previamente",
      ],
      correcta: 0,
      explicacion: "El aumento del stimming, el retiro del contacto visual y los cambios de postura son señales de pre-crisis.",
    },
    {
      id: "m3q9",
      pregunta: "¿Cuál es la iluminación máxima recomendada para un espacio de calma?",
      opciones: ["50 lux", "100 lux", "200 lux", "500 lux"],
      correcta: 2,
      explicacion: "El requisito CENI establece luz regulable o natural indirecta con un máximo de 200 lux.",
    },
    {
      id: "m3q10",
      pregunta: "Aplicar una consecuencia disciplinaria a una persona después de una crisis sensorial es:",
      opciones: [
        "Una práctica correcta de gestión de conducta",
        "Una violación del protocolo no punitivo de manejo de crisis",
        "Necesario para prevenir futuras crisis",
        "Opcional según el criterio del supervisor",
      ],
      correcta: 1,
      explicacion: "Aplicar consecuencias negativas posteriores a una crisis está explícitamente prohibido en el protocolo CENI.",
    },
    {
      id: "m3q11",
      pregunta: "Un meltdown se caracteriza principalmente por:",
      opciones: [
        "Inmovilidad, mutismo y mirada fija",
        "Activación explosiva: llanto intenso, gritos, movimientos no controlados, caída al suelo",
        "Búsqueda tranquila de un espacio de calma",
        "Aumento de la sociabilidad y el contacto visual",
      ],
      correcta: 1,
      explicacion: "El meltdown es una crisis de activación: el sistema nervioso se activa de manera explosiva, con llanto intenso, gritos, movimientos no controlados y caída al suelo, sin acceso a la regulación racional.",
    },
    {
      id: "m3q12",
      pregunta: "Según el módulo, las crisis sensoriales son, ante todo:",
      opciones: [
        "Berrinches o manipulaciones intencionales",
        "Respuestas neurológicas involuntarias a la sobreestimulación o sobrecarga",
        "Estrategias para llamar la atención",
        "Conductas que deben corregirse con disciplina",
      ],
      correcta: 1,
      explicacion: "El texto indica que las crisis sensoriales son respuestas neurológicas involuntarias a la sobreestimulación o sobrecarga cognitiva y emocional, no caprichos ni manipulaciones.",
    },
    {
      id: "m3q13",
      pregunta: "¿Qué enfoque requieren tanto el meltdown como el shutdown, según el módulo?",
      opciones: [
        "Intervención correctiva inmediata para detener la conducta",
        "No intervención correctiva, reducción de estímulos, presencia calmada y espera",
        "Aislamiento de la persona en un cuarto cerrado",
        "Explicación firme de las normas de conducta",
      ],
      correcta: 1,
      explicacion: "El destacado de la sección 3.1 señala que ambos estados requieren el mismo enfoque: no intervención correctiva, reducción de estímulos, presencia calmada y espera.",
    },
    {
      id: "m3q14",
      pregunta: "En la Fase 2 del protocolo (reducción inmediata de estímulos), ¿qué acción corresponde?",
      opciones: [
        "Aumentar el volumen para captar la atención de la persona",
        "Apagar o reducir luces intensas, bajar el volumen y detener la instrucción en curso",
        "Convocar a más personas para ayudar a contener la crisis",
        "Iniciar de inmediato el registro del incidente",
      ],
      correcta: 1,
      explicacion: "La Fase 2 consiste en reducir estímulos: apagar o reducir luces intensas, bajar el volumen, retirar personas, detener la instrucción en curso y ofrecer acceso al espacio de calma.",
    },
    {
      id: "m3q15",
      pregunta: "En la Fase 3 (presencia sin intervención), ¿cómo debe actuar la persona que acompaña?",
      opciones: [
        "Permanecer cerca, sin tocar, sin hablar y sin hacer preguntas",
        "Alejarse para dar espacio y regresar más tarde",
        "Sostener a la persona con firmeza para contenerla",
        "Hacer preguntas para entender qué desencadenó la crisis",
      ],
      correcta: 0,
      explicacion: "La Fase 3 indica permanecer cerca, sin tocar (salvo que se solicite), sin hablar, sin preguntas y sin intentar razonar.",
    },
    {
      id: "m3q16",
      pregunta: "¿Qué información debe incluir el Registro de Incidentes Sensoriales (RIS) según la Fase 5?",
      opciones: [
        "Solo el nombre de la persona y la fecha",
        "Fecha, hora, espacio, desencadenante probable, duración, protocolo aplicado y propuesta de ajuste preventivo",
        "Un diagnóstico clínico formal de la persona",
        "La lista de testigos y sus declaraciones firmadas",
      ],
      correcta: 1,
      explicacion: "La Fase 5 exige documentar en el RIS fecha, hora, espacio, desencadenante probable, duración, protocolo aplicado y propuesta de ajuste preventivo.",
    },
    {
      id: "m3q17",
      pregunta: "¿Cuál de las siguientes acciones también está explícitamente prohibida durante o justo después de una crisis sensorial, según el módulo?",
      opciones: [
        "Interpretar la crisis como manipulación y exigir que la persona explique qué pasó de inmediato",
        "Reducir el volumen del ambiente",
        "Ofrecer agua una vez que la crisis disminuye",
        "Permanecer cerca sin tocar",
      ],
      correcta: 0,
      explicacion: "El destacado de la sección 3.2 prohíbe interpretar la crisis como manipulación y exigir que la persona explique qué pasó inmediatamente después.",
    },
    {
      id: "m3q18",
      pregunta: "¿Qué es un espacio de calma, según el módulo?",
      opciones: [
        "Un área de aislamiento usada como forma de castigo",
        "Un área diseñada para que cualquier persona pueda autorregularse de manera segura y sin intervención, como herramienta de accesibilidad",
        "Una sala exclusiva para personas con diagnóstico formal",
        "Un espacio de uso exclusivo del personal directivo",
      ],
      correcta: 1,
      explicacion: "El módulo define el espacio de calma como un área específicamente diseñada para que cualquier persona pueda autorregularse de manera segura, sin intervención, y aclara que es una herramienta de accesibilidad, no un espacio de castigo o aislamiento.",
    },
    {
      id: "m3q19",
      pregunta: "Según la tabla de requisitos CENI, ¿cuántos puntos corresponde a la 'Superficie de descanso (cojín, colchoneta, asiento con respaldo)'?",
      opciones: ["10", "15", "20", "25"],
      correcta: 1,
      explicacion: "La tabla de requisitos CENI asigna 15 puntos al requisito de superficie de descanso.",
    },
    {
      id: "m3q20",
      pregunta: "¿Cuáles son ejemplos de 'recursos sensoriales disponibles' listados como requisito CENI para un espacio de calma?",
      opciones: [
        "Fidgets, manta de peso y texturas",
        "Pantallas con videos relajantes",
        "Altavoces con música ambiental a volumen alto",
        "Juegos de mesa y libros de texto",
      ],
      correcta: 0,
      explicacion: "El requisito CENI de recursos sensoriales disponibles enumera fidgets, manta de peso y texturas.",
    },
  ],
};

export default modulo3;
