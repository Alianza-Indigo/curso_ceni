import { Modulo } from "@/lib/types";

const modulo1: Modulo = {
  id: "m1",
  numero: 1,
  titulo: "Neurodiversidad 101",
  duracion: "20 minutos",
  dirigidoA: "Todo público",
  preguntasPorIntento: 10,
  objetivos: [
    "Distinguir los conceptos de neurodiversidad, neurodivergencia y neurotipicidad con precisión y sin lenguaje patologizante.",
    "Aplicar el paradigma neuroafirmativo en conversaciones cotidianas y documentos institucionales.",
    "Identificar las principales variaciones del neurodesarrollo y sus características funcionales.",
    "Comprender el stimming, el masking y la autorregulación como procesos legítimos e identitarios.",
    "Reconocer los seis Derechos Índigo y explicar por qué constituyen derechos de cuarta generación.",
  ],
  secciones: [
    {
      titulo: "1.1 Definiciones operativas",
      parrafos: [
        'El término neurodiversidad, acuñado por la socióloga autista Judy Singer en 1998, describe el hecho biológico de que los cerebros humanos presentan variaciones naturales en su funcionamiento, igual que los cuerpos humanos presentan variaciones en estatura, pigmentación o metabolismo. La neurodiversidad no es una patología: es un descriptor de la realidad biológica de la especie.',
        "Se dice que una persona es neurodivergente cuando su neurología difiere del patrón estadísticamente mayoritario (llamado \"neurotípico\") de manera que afecta —positiva o negativamente— su forma de procesar información, comunicarse, relacionarse, aprender o experimentar el entorno sensorial.",
        "Una persona neurotípica es aquella cuya neurología sigue el patrón estadísticamente dominante. Es un término descriptivo, no un elogio. El mundo está mayoritariamente diseñado para personas neurotípicas, lo que genera barreras sistemáticas para personas neurodivergentes.",
      ],
      lista: {
        titulo: "Variaciones del neurodesarrollo más documentadas",
        items: [
          "Trastorno del Espectro Autista (TEA) — también llamado autismo o condición autista",
          "Trastorno por Déficit de Atención con o sin Hiperactividad (TDAH)",
          "Dislexia (diferencia en procesamiento del lenguaje escrito)",
          "Discalculia (diferencia en procesamiento numérico)",
          "Dispraxia / Trastorno del Desarrollo de la Coordinación (DCD)",
          "Síndrome de Tourette",
          "Procesamiento Sensorial Atípico (PSA)",
          "Altas capacidades / Superdotación",
          "Síndrome de Down y otras variaciones cromosómicas",
          "Cualquier otra condición neurológica congénita o del desarrollo",
        ],
      },
      destacado: {
        titulo: "Lenguaje neuroafirmativo",
        texto:
          'Este curso usa lenguaje neuroafirmativo en todo momento. Decimos "condición autista" o "persona autista", NO "persona con autismo". Decimos "variación del neurodesarrollo", NO "trastorno" o "déficit". Decimos "neurodivergente", NO "con capacidades diferentes" ni "especial". Nunca usamos "sufre de" o "padece" en relación con rasgos neurodivergentes.',
      },
    },
    {
      titulo: "1.2 El paradigma neuroafirmativo",
      parrafos: [
        "El paradigma neuroafirmativo reemplaza al modelo médico-patologizante que durante décadas dominó la comprensión de la neurodivergencia.",
      ],
      tabla: {
        encabezados: ["Modelo médico-patologizante", "Paradigma neuroafirmativo"],
        filas: [
          [
            "La neurodivergencia es un déficit a diagnosticar, tratar y normalizar. El objetivo es que la persona \"funcione\" lo más parecido posible a una persona neurotípica.",
            "La neurodivergencia es una variación legítima del neurodesarrollo. El objetivo es adaptar el entorno a la persona, no a la persona al entorno. La diferencia no es el problema; las barreras sí lo son.",
          ],
        ],
      },
      lista: {
        titulo: "Consecuencias prácticas inmediatas en la organización",
        items: [
          "Los protocolos de selección eliminan criterios que discriminan por perfil neurodivergente (contacto visual, respuesta en tiempo real, tolerancia al ruido).",
          "Los espacios se evalúan por su accesibilidad sensorial, no solo por su cumplimiento arquitectónico.",
          "La capacitación del equipo sustituye el lenguaje de \"déficit\" por lenguaje de \"diferencia funcional\".",
          "Los planes de ajuste razonable se diseñan con la persona, no para la persona.",
        ],
      },
    },
    {
      titulo: "1.3 Stimming, masking y autorregulación",
      parrafos: [
        "El stimming (autoestimulación) es cualquier comportamiento repetitivo, rítmico o sensorial que una persona neurodivergente realiza para regular su sistema nervioso: motor (balanceo, aleteo de manos, saltar), sensorial (tocar texturas, presión profunda), vocal (tararear, repetir palabras) o visual (mirar objetos giratorios, luces).",
        "El stimming es funcional, no problemático. Suprimirlo —mediante regaños, \"corrección de conducta\" o cualquier forma de presión social— produce ansiedad, desregulación y daño psicológico. El Derecho 1 de los Derechos Índigo protege explícitamente el stimming sin sanción.",
        "El masking (enmascaramiento) es el proceso por el cual una persona neurodivergente suprime o camufla sus rasgos neurodivergentes naturales para cumplir expectativas sociales neurotípicas. Implica un esfuerzo cognitivo y emocional enorme —equivalente a actuar en un idioma extranjero todo el día— y su práctica sostenida está asociada con agotamiento severo (burnout autista), depresión y pérdida de identidad.",
        "CENI evalúa si los entornos promueven o exigen el masking como condición de participación. Los entornos que lo exigen no pueden certificarse, independientemente de sus puntuaciones en otras dimensiones.",
        "La autorregulación es la capacidad de modular el estado interno (sensorial, emocional, cognitivo) para funcionar de manera efectiva en el entorno. Las personas neurodivergentes pueden tener umbrales de autorregulación diferentes: mayor sensibilidad a la sobreestimulación, mayor dificultad para recuperarse de estados de alta activación o mayor necesidad de rutina y predictibilidad.",
        "Los entornos CENI deben diseñarse para apoyar —no obstaculizar— los procesos de autorregulación: zonas de calma, señalización predecible, reducción de estímulos no esenciales y tiempos de transición adecuados.",
      ],
      destacado: {
        titulo: "Protocolo CENI — Stimming en entornos laborales y de servicio",
        texto:
          "1) Nunca interrumpir, corregir o comentar el stimming de una persona. 2) No interpretar el stimming como señal de incomodidad, desacuerdo o falta de atención. 3) Proporcionar recursos de estimulación sensorial accesibles (fidgets, cojines, zonas con texturas). 4) Incluir cláusula anti-represalia por stimming en el Reglamento Interno de Neuroinclusión.",
      },
    },
    {
      titulo: "1.4 Los seis Derechos Índigo",
      parrafos: [
        "Los Derechos Índigo son seis derechos específicos de cuarta generación que protegen la existencia neurodivergente en su integralidad. Su reconocimiento, operacionalización y garantía son el núcleo de toda evaluación CENI.",
      ],
      lista: {
        items: [
          "Derecho 1 — Derecho al stimming sin sanción: nadie puede ser castigado, corregido o patologizado por autorregularse.",
          "Derecho 2 — Derecho a la autoidentificación sin diagnóstico: ninguna persona requiere un documento médico para reconocerse y ser reconocida como neurodivergente.",
          "Derecho 3 — Prohibición de terapias normalizadoras: quedan prohibidas las intervenciones cuyo objetivo sea suprimir, disminuir o modificar rasgos neurodivergentes con fines de conformidad social.",
          "Derecho 4 — Derecho al masking libre: nadie puede ser forzado a ocultar sus rasgos identitarios como condición de participación social, laboral o educativa.",
          "Derecho 5 — Protección frente a discriminación algorítmica: los sistemas de IA, selección de personal y evaluación de desempeño no pueden discriminar por perfil neurodivergente.",
          "Derecho 6 — Derecho a la existencia neurodivergente plena: existir tal como se es, sin condicionar la existencia a tratamiento, corrección o adaptación social.",
        ],
      },
    },
  ],
  actividades: [
    {
      codigo: "1.A",
      titulo: "Glosario personal neuroafirmativo",
      duracion: "15 minutos · individual o en parejas",
      descripcion:
        'Revisa una lista de 20 frases comunes sobre neurodivergencia y reescríbelas usando lenguaje neuroafirmativo. Ejemplo: "El niño sufre de autismo severo" → "El niño es autista y requiere apoyos de alta intensidad."',
    },
    {
      codigo: "1.B",
      titulo: "Mapa de mi entorno",
      duracion: "20 minutos · equipos de 3-5",
      descripcion:
        "Selecciona un espacio de tu organización y analízalo desde la perspectiva de una persona neurodivergente: ¿qué barreras sensoriales existen? ¿Qué situaciones podrían requerir masking? ¿Hay espacio para el stimming?",
    },
    {
      codigo: "1.C",
      titulo: "Reflexión: los Derechos Índigo en mi organización",
      duracion: "individual",
      descripcion:
        "Lee los seis Derechos Índigo y responde: ¿cuáles ya se garantizan en mi organización? ¿cuáles se vulneran actualmente? ¿qué cambio inmediato puedo proponer?",
    },
  ],
  evaluacion: [
    { componente: "Quiz de 10 preguntas (definiciones y paradigma neuroafirmativo)", tipo: "Opción múltiple", valor: "40%" },
    { componente: "Actividad 1.B — Mapa del entorno (entregable escrito)", tipo: "Práctica", valor: "40%" },
    { componente: "Participación en plenaria", tipo: "Observacional", valor: "20%" },
  ],
  quiz: [
    {
      id: "m1q1",
      pregunta: "¿Cuál de los siguientes describe correctamente el paradigma neuroafirmativo?",
      opciones: [
        "La neurodivergencia es un déficit que requiere tratamiento médico",
        "La neurodivergencia es una variación legítima del neurodesarrollo que el entorno debe acomodar",
        "Las personas neurodivergentes deben adaptarse al entorno existente",
        "La neurodivergencia solo aplica al autismo",
      ],
      correcta: 1,
      explicacion:
        "El paradigma neuroafirmativo sostiene que el objetivo es adaptar el entorno a la persona, no al revés. La diferencia no es el problema; las barreras sí lo son.",
    },
    {
      id: "m1q2",
      pregunta: "El stimming es:",
      opciones: [
        "Una conducta problemática que debe eliminarse",
        "Una forma de manipulación conductual",
        "Una respuesta neurológica de autorregulación sensorial",
        "Un síntoma exclusivo del TDAH",
      ],
      correcta: 2,
      explicacion:
        "El stimming es funcional: regula el sistema nervioso. Suprimirlo produce ansiedad y daño psicológico.",
    },
    {
      id: "m1q3",
      pregunta: "¿Quién acuñó el término \"neurodiversidad\" y en qué año?",
      opciones: [
        "Judy Singer, 1998",
        "Damian Milton, 2012",
        "Robert Chapman, 2021",
        "La ONU, 2006",
      ],
      correcta: 0,
      explicacion: "La socióloga autista Judy Singer acuñó el término en 1998.",
    },
    {
      id: "m1q4",
      pregunta: "El masking sostenido en el tiempo está asociado principalmente con:",
      opciones: [
        "Mejora del desempeño social",
        "Burnout autista, depresión y pérdida de identidad",
        "Ninguna consecuencia relevante",
        "Mayor tolerancia sensorial",
      ],
      correcta: 1,
      explicacion:
        "El masking sostenido implica un esfuerzo cognitivo y emocional enorme, asociado con agotamiento severo, depresión y pérdida de identidad.",
    },
    {
      id: "m1q5",
      pregunta: "¿Cuál de los seis Derechos Índigo protege el uso de diagnóstico como requisito de reconocimiento?",
      opciones: [
        "Derecho 1 — Stimming sin sanción",
        "Derecho 2 — Autoidentificación sin diagnóstico",
        "Derecho 4 — Masking libre",
        "Derecho 6 — Existencia neurodivergente plena",
      ],
      correcta: 1,
      explicacion: "El Derecho 2 establece que ninguna persona requiere un documento médico para reconocerse como neurodivergente.",
    },
    {
      id: "m1q6",
      pregunta: "Según el lenguaje neuroafirmativo del curso, ¿cuál expresión es correcta?",
      opciones: [
        "\"Persona con autismo\"",
        "\"Persona autista\" / \"condición autista\"",
        "\"Con capacidades diferentes\"",
        "\"Sufre de autismo\"",
      ],
      correcta: 1,
      explicacion: "El curso usa \"persona autista\" o \"condición autista\", evitando lenguaje que reduce la identidad a una condición médica o que patologiza.",
    },
    {
      id: "m1q7",
      pregunta: "Un compañero de trabajo se balancea repetidamente en su silla durante una reunión. ¿Cuál es la respuesta correcta según el protocolo CENI?",
      opciones: [
        "Pedirle que se detenga porque distrae",
        "No interrumpir, corregir ni comentar el stimming",
        "Preguntarle frente al grupo si está incómodo",
        "Reportarlo a Recursos Humanos",
      ],
      correcta: 1,
      explicacion: "El protocolo CENI indica nunca interrumpir, corregir ni comentar el stimming, y no interpretarlo como señal de incomodidad o falta de atención.",
    },
    {
      id: "m1q8",
      pregunta: "La neurotipicidad es:",
      opciones: [
        "Un elogio hacia quienes la poseen",
        "Un término descriptivo: neurología que sigue el patrón estadísticamente dominante",
        "Sinónimo de \"persona sana\"",
        "Un diagnóstico clínico",
      ],
      correcta: 1,
      explicacion: "Neurotipicidad es un término descriptivo, no un elogio ni un diagnóstico.",
    },
    {
      id: "m1q9",
      pregunta: "¿Qué Derecho Índigo prohíbe explícitamente intervenciones que buscan suprimir rasgos neurodivergentes para lograr conformidad social?",
      opciones: [
        "Derecho 3 — Prohibición de terapias normalizadoras",
        "Derecho 5 — Protección frente a discriminación algorítmica",
        "Derecho 1 — Stimming sin sanción",
        "Derecho 2 — Autoidentificación sin diagnóstico",
      ],
      correcta: 0,
      explicacion: "El Derecho 3 prohíbe todas las intervenciones cuyo objetivo sea suprimir, disminuir o modificar rasgos neurodivergentes con fines de conformidad social.",
    },
    {
      id: "m1q10",
      pregunta: "¿Cuál de las siguientes NO es una variación del neurodesarrollo mencionada en el curso?",
      opciones: ["Dispraxia", "Discalculia", "Hipertensión arterial", "Síndrome de Tourette"],
      correcta: 2,
      explicacion: "La hipertensión arterial es una condición médica no relacionada con el neurodesarrollo; no aparece en el listado del curso.",
    },
    {
      id: "m1q11",
      pregunta: "El módulo describe la neurodiversidad como un hecho biológico comparándola con variaciones naturales del cuerpo humano en:",
      opciones: [
        "Estatura, pigmentación o metabolismo",
        "Inteligencia, personalidad o carácter",
        "Cultura, idioma o religión",
        "Edad, género o nacionalidad",
      ],
      correcta: 0,
      explicacion:
        "El texto compara las variaciones del funcionamiento cerebral con las variaciones que los cuerpos humanos presentan en estatura, pigmentación o metabolismo.",
    },
    {
      id: "m1q12",
      pregunta: "Según el módulo, ¿qué determina que una persona sea considerada neurodivergente?",
      opciones: [
        "Contar con un diagnóstico médico formal vigente",
        "Que su neurología difiera del patrón estadísticamente mayoritario de forma que afecte su procesamiento, comunicación, relación, aprendizaje o experiencia sensorial",
        "Presentar una discapacidad visible",
        "Haber nacido con una condición cromosómica",
      ],
      correcta: 1,
      explicacion:
        "El módulo define neurodivergente como la persona cuya neurología difiere del patrón mayoritario (\"neurotípico\") afectando su forma de procesar información, comunicarse, relacionarse, aprender o experimentar el entorno sensorial.",
    },
    {
      id: "m1q13",
      pregunta: "Según las consecuencias prácticas del paradigma neuroafirmativo, ¿qué criterios de selección de personal deben eliminarse por discriminar el perfil neurodivergente?",
      opciones: [
        "Contacto visual, respuesta en tiempo real y tolerancia al ruido",
        "Años de experiencia laboral",
        "Nivel de estudios formales",
        "Dominio de idiomas extranjeros",
      ],
      correcta: 0,
      explicacion:
        "El módulo señala que los protocolos de selección deben eliminar criterios como contacto visual, respuesta en tiempo real y tolerancia al ruido, por discriminar el perfil neurodivergente.",
    },
    {
      id: "m1q14",
      pregunta: "¿Cuál de las siguientes es una forma de stimming vocal según la descripción del módulo?",
      opciones: [
        "Balancearse o aletear las manos",
        "Tararear o repetir palabras",
        "Tocar texturas o aplicar presión profunda",
        "Mirar objetos giratorios o luces",
      ],
      correcta: 1,
      explicacion:
        "El módulo clasifica el stimming vocal como tararear o repetir palabras, distinto del motor (balanceo, aleteo), sensorial (texturas, presión) o visual (objetos giratorios, luces).",
    },
    {
      id: "m1q15",
      pregunta: "El módulo compara el esfuerzo cognitivo y emocional del masking sostenido con:",
      opciones: [
        "Aprender a tocar un instrumento musical",
        "Actuar en un idioma extranjero todo el día",
        "Correr una maratón diariamente",
        "Memorizar un libro completo",
      ],
      correcta: 1,
      explicacion:
        "El texto describe el masking como un esfuerzo cognitivo y emocional enorme, equivalente a actuar en un idioma extranjero todo el día.",
    },
    {
      id: "m1q16",
      pregunta: "¿Cuál de los siguientes NO es un elemento que, según el módulo, deben incorporar los entornos CENI para apoyar la autorregulación?",
      opciones: [
        "Zonas de calma",
        "Señalización predecible",
        "Evaluaciones de desempeño constantes y sorpresivas",
        "Tiempos de transición adecuados",
      ],
      correcta: 2,
      explicacion:
        "El módulo indica que los entornos CENI deben diseñarse con zonas de calma, señalización predecible, reducción de estímulos no esenciales y tiempos de transición adecuados, no con evaluaciones sorpresivas.",
    },
    {
      id: "m1q17",
      pregunta: "Según el protocolo CENI sobre stimming, ¿qué debe incluir el Reglamento Interno de Neuroinclusión?",
      opciones: [
        "Una cláusula anti-represalia por stimming",
        "Un límite de tiempo permitido para el stimming",
        "Un listado de conductas de stimming prohibidas",
        "Un requisito de autorización previa para estimular",
      ],
      correcta: 0,
      explicacion:
        "El protocolo CENI establece incluir una cláusula anti-represalia por stimming en el Reglamento Interno de Neuroinclusión.",
    },
    {
      id: "m1q18",
      pregunta: "¿Qué establece el Derecho 4 — Derecho al masking libre?",
      opciones: [
        "Que nadie puede ser forzado a ocultar sus rasgos identitarios como condición de participación social, laboral o educativa",
        "Que el masking es obligatorio en entornos laborales formales",
        "Que el masking debe ser evaluado clínicamente antes de suprimirse",
        "Que el masking solo aplica a personas con diagnóstico de autismo",
      ],
      correcta: 0,
      explicacion:
        "El Derecho 4 establece que nadie puede ser forzado a ocultar sus rasgos identitarios como condición de participación social, laboral o educativa.",
    },
    {
      id: "m1q19",
      pregunta: "El Derecho 5 — Protección frente a discriminación algorítmica se refiere específicamente a:",
      opciones: [
        "Que los sistemas de IA, selección de personal y evaluación de desempeño no discriminen por perfil neurodivergente",
        "El uso de lenguaje patologizante en documentos institucionales",
        "La falta de zonas de calma en los espacios de trabajo",
        "La ausencia de un diagnóstico médico formal",
      ],
      correcta: 0,
      explicacion:
        "El Derecho 5 protege frente a que los sistemas de IA, selección de personal y evaluación de desempeño discriminen por perfil neurodivergente.",
    },
    {
      id: "m1q20",
      pregunta: "Según el módulo, los Derechos Índigo son:",
      opciones: [
        "Seis derechos específicos de cuarta generación que protegen la existencia neurodivergente en su integralidad",
        "Cuatro derechos de primera generación con carácter recomendatorio",
        "Ocho principios éticos sin carácter vinculante",
        "Una lista abierta de buenas prácticas internacionales no oficiales",
      ],
      correcta: 0,
      explicacion:
        "El módulo define los Derechos Índigo como seis derechos específicos de cuarta generación que protegen la existencia neurodivergente en su integralidad.",
    },
  ],
};

export default modulo1;
