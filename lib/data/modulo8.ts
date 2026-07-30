import { Modulo } from "@/lib/types";

const modulo8: Modulo = {
  id: "m8",
  numero: 8,
  titulo: "Gobernanza, Mejora Continua y Supervisión",
  duracion: "90 minutos",
  dirigidoA: "Directivos, Responsable de Neuroinclusión, RRHH",
  preguntasPorIntento: 10,
  objetivos: [
    "Diseñar e implementar un Manual Interno de Neuroinclusión operativo y verificable.",
    "Establecer el rol del Responsable de Neuroinclusión con funciones, autoridad y recursos claros.",
    "Planificar y ejecutar auditorías internas de manera sistemática y objetiva.",
    "Implementar el sistema de mystery client neurodivergente como herramienta de evaluación.",
    "Diseñar un sistema de retroalimentación accesible y un Plan de Mejora Continua operativo.",
  ],
  secciones: [
    {
      titulo: "8.1 El Reglamento Interno de Neuroinclusión (RIN)",
      parrafos: [
        "El RIN es el documento normativo que establece derechos, obligaciones, protocolos y sanciones en materia de neuroinclusión. No es un anexo decorativo: es un documento independiente, aprobado por la dirección, con mecanismos propios de aplicación.",
      ],
      lista: {
        titulo: "Contenido mínimo del RIN",
        items: [
          "Declaración de principios neuroafirmativos de la organización",
          "Definición de términos operativos clave (neurodivergencia, ajuste razonable, masking, stimming, meltdown, etc.)",
          "Catálogo de derechos de las personas neurodivergentes en la organización",
          "Obligaciones de todos los miembros del equipo",
          "Protocolos específicos: manejo de crisis, comunicación accesible, ajustes razonables, selección neuroinclusiva",
          "Canal de queja y denuncia con protección anti-represalia",
          "Sanciones proporcionales por incumplimiento",
          "Proceso de revisión y actualización anual",
        ],
      },
    },
    {
      titulo: "8.2 El Responsable de Neuroinclusión",
      parrafos: [
        "No es un cargo honorario: requiere tiempo, recursos, autoridad y capacitación específica.",
      ],
      tabla: {
        encabezados: ["Aspecto", "Requisito"],
        filas: [
          ["Perfil", "Curso CENI completo (17h) + actualización anual; preferentemente neurodivergente o con experiencia directa"],
          ["Autoridad", "Suspender prácticas que vulneren derechos; acceso directo a la dirección; participación obligatoria en selección y evaluación"],
          ["Tiempo", "Mín. 10% de jornada (1–20 personas); 30% (21–100); tiempo completo (100+)"],
          ["Presupuesto", "Mínimo $5,000 MXN anuales para micro/pequeñas empresas, proporcional al tamaño"],
          ["Rendición de cuentas", "Informe semestral a la dirección; publicación interna de avances"],
        ],
      },
    },
    {
      titulo: "8.3 Auditorías internas, mystery client y retroalimentación",
      parrafos: [],
      lista: {
        titulo: "Requisitos de una auditoría interna válida como evidencia CENI",
        items: [
          "Periodicidad: al menos dos por año (cada seis meses)",
          "Instrumento: el oficial de autoevaluación CENI",
          "Responsable: el Responsable de Neuroinclusión, con participación de al menos un colaborador neurodivergente",
          "Documentación: informe escrito con fecha, evaluadores, puntuación por criterio y total, hallazgos y compromisos",
          "Seguimiento: cada compromiso con responsable y fecha de verificación",
        ],
      },
      destacado: {
        titulo: "Mystery client neurodivergente",
        texto:
          "Persona neurodivergente capacitada y registrada en el padrón de auditores de Alianza Índigo, que visita el espacio de manera anónima y evalúa: primera impresión sensorial, claridad de la señalización, calidad de la atención, disponibilidad del espacio de calma y de recursos sensoriales, y experiencia general de inclusión.",
      },
    },
    {
      titulo: "8.4 Plan de Mejora Continua de Neuroinclusión (PMCN)",
      parrafos: [
        "El PMCN conecta los resultados de auditorías, mystery client y canal de retroalimentación con acciones concretas de mejora.",
      ],
      lista: {
        items: [
          "Objetivos SMART (Específicos, Medibles, Alcanzables, Relevantes, Temporales)",
          "Al menos un objetivo por cada dimensión con puntuación inferior al 80% de su máximo",
          "Responsable con nombre y cargo por objetivo",
          "Fechas de cumplimiento trimestrales",
          "Revisión formal cada trimestre con registro escrito",
          "Aprobado por la dirección y publicado internamente",
        ],
      },
    },
  ],
  actividades: [
    {
      codigo: "8.A",
      titulo: "Borrador de estructura del RIN",
      duracion: "individual",
      descripcion: "Elabora un borrador de la estructura del RIN para tu propia organización, con los ocho componentes mínimos.",
    },
    {
      codigo: "8.B",
      titulo: "Diseño de canal de retroalimentación y log de seguimiento",
      duracion: "en equipo",
      descripcion: "Diseña un canal de retroalimentación simple, accesible, anónimo y trazable, con su log de seguimiento.",
    },
  ],
  evaluacion: [
    { componente: "Quiz de 10 preguntas sobre gobernanza, RIN y auditorías", tipo: "Opción múltiple", valor: "25%" },
    { componente: "Borrador de estructura del RIN", tipo: "Práctica escrita", valor: "40%" },
    { componente: "Diseño de canal de retroalimentación y log de seguimiento", tipo: "Práctica aplicada", valor: "35%" },
  ],
  quiz: [
    {
      id: "m8q1",
      pregunta: "El RIN debe estar aprobado por:",
      opciones: ["El sindicato", "La dirección de la organización", "Un auditor externo únicamente", "No requiere aprobación formal"],
      correcta: 1,
      explicacion: "El RIN es un documento normativo que debe ser aprobado por la dirección, con fecha y firma.",
    },
    {
      id: "m8q2",
      pregunta: "¿Cuál es el tiempo mínimo asignado al Responsable de Neuroinclusión en una organización de 1 a 20 personas?",
      opciones: ["5% de la jornada", "10% de la jornada", "50% de la jornada", "Tiempo completo obligatorio"],
      correcta: 1,
      explicacion: "Para organizaciones de 1–20 personas se exige un mínimo de 10% de jornada laboral.",
    },
    {
      id: "m8q3",
      pregunta: "¿Con qué frecuencia mínima deben realizarse las auditorías internas de cumplimiento CENI?",
      opciones: ["Una vez al año", "Dos veces al año (cada seis meses)", "Una vez cada tres años", "Solo cuando lo solicite un cliente"],
      correcta: 1,
      explicacion: "Las auditorías internas deben realizarse al menos dos veces por año para ser válidas como evidencia CENI.",
    },
    {
      id: "m8q4",
      pregunta: "El mystery client neurodivergente debe ser:",
      opciones: [
        "Cualquier persona sin capacitación específica",
        "Una persona neurodivergente capacitada y registrada en el padrón de Alianza Índigo",
        "Un empleado de la misma organización evaluada",
        "Un auditor gubernamental",
      ],
      correcta: 1,
      explicacion: "El mystery client debe ser una persona neurodivergente capacitada y registrada en el padrón de auditores de Alianza Índigo.",
    },
    {
      id: "m8q5",
      pregunta: "¿Qué significa que los objetivos del PMCN sean SMART?",
      opciones: [
        "Simples, Manuales, Anuales, Rápidos, Totales",
        "Específicos, Medibles, Alcanzables, Relevantes, Temporales",
        "Solidarios, Motivadores, Atractivos, Rentables, Técnicos",
        "No tiene un significado específico",
      ],
      correcta: 1,
      explicacion: "SMART significa Específicos, Medibles, Alcanzables, Relevantes y Temporales.",
    },
    {
      id: "m8q6",
      pregunta: "¿Cuál es el tiempo máximo de respuesta para un reporte en el canal de retroalimentación accesible?",
      opciones: ["24 horas", "5 días hábiles", "30 días naturales", "No hay plazo establecido"],
      correcta: 1,
      explicacion: "Todo reporte debe recibir acuse de recibo en 24 horas y respuesta completa en 5 días hábiles.",
    },
    {
      id: "m8q7",
      pregunta: "El canal de retroalimentación accesible debe ser, entre otras características:",
      opciones: [
        "Anónimo, sin requerir identificación del usuario",
        "Obligatoriamente identificado con nombre completo",
        "Solo disponible por teléfono",
        "Accesible únicamente para personal directivo",
      ],
      correcta: 0,
      explicacion: "El canal debe ser anónimo: no debe requerir identificación del usuario para reportar una barrera.",
    },
    {
      id: "m8q8",
      pregunta: "¿Puede el Responsable de Neuroinclusión ser simultáneamente responsable de procesos disciplinarios?",
      opciones: ["Sí, siempre", "No, no puede serlo simultáneamente", "Solo en empresas pequeñas", "Es indiferente"],
      correcta: 1,
      explicacion: "El perfil requerido establece que el Responsable de Neuroinclusión no puede ser simultáneamente responsable de procesos disciplinarios.",
    },
    {
      id: "m8q9",
      pregunta: "El PMCN debe incluir al menos un objetivo por cada dimensión que tenga:",
      opciones: [
        "Puntuación superior al 90% de su máximo",
        "Puntuación inferior al 80% de su máximo",
        "Cualquier puntuación, sin excepción",
        "Solo se aplica a la dimensión de gobernanza",
      ],
      correcta: 1,
      explicacion: "El PMCN debe incluir al menos un objetivo por cada dimensión con puntuación inferior al 80% de su máximo.",
    },
    {
      id: "m8q10",
      pregunta: "¿Con qué frecuencia debe revisarse formalmente el PMCN?",
      opciones: ["Cada semana", "Cada trimestre", "Cada cinco años", "Nunca, es un documento estático"],
      correcta: 1,
      explicacion: "El PMCN debe ser revisado formalmente cada trimestre con registro escrito de avance.",
    },
    {
      id: "m8q11",
      pregunta: "Según el módulo, ¿cómo debe entenderse el RIN respecto a su naturaleza documental?",
      opciones: [
        "Como un anexo decorativo sin mecanismos de aplicación",
        "Como un documento independiente, aprobado por la dirección, con mecanismos propios de aplicación",
        "Como una cláusula dentro del contrato laboral individual",
        "Como un documento opcional que no requiere aprobación",
      ],
      correcta: 1,
      explicacion: "El RIN no es un anexo decorativo: es un documento independiente, aprobado por la dirección, con mecanismos propios de aplicación.",
    },
    {
      id: "m8q12",
      pregunta: "¿Cuál de los siguientes elementos forma parte del contenido mínimo del RIN?",
      opciones: [
        "Un plan de marketing neuroinclusivo",
        "Canal de queja y denuncia con protección anti-represalia",
        "El presupuesto de publicidad anual de la organización",
        "Un convenio comercial con proveedores externos",
      ],
      correcta: 1,
      explicacion: "El contenido mínimo del RIN incluye un canal de queja y denuncia con protección anti-represalia.",
    },
    {
      id: "m8q13",
      pregunta: "Según el contenido mínimo del RIN, ¿con qué frecuencia debe revisarse y actualizarse este documento?",
      opciones: ["Cada mes", "Anualmente", "Cada cinco años", "Nunca, una vez aprobado es definitivo"],
      correcta: 1,
      explicacion: "El contenido mínimo del RIN incluye un proceso de revisión y actualización anual.",
    },
    {
      id: "m8q14",
      pregunta: "¿Cuál de los siguientes es un término operativo clave que el RIN debe definir?",
      opciones: ["Masking", "Depreciación acelerada", "Rentabilidad neta", "Onboarding corporativo genérico"],
      correcta: 0,
      explicacion: "El RIN debe incluir la definición de términos operativos clave como neurodivergencia, ajuste razonable, masking, stimming y meltdown.",
    },
    {
      id: "m8q15",
      pregunta: "Además de tiempo, ¿qué otros elementos requiere el rol del Responsable de Neuroinclusión, según el módulo?",
      opciones: [
        "Solo buena voluntad, sin recursos adicionales",
        "Recursos, autoridad y capacitación específica",
        "Únicamente un correo electrónico institucional",
        "Nada adicional, ya que es un cargo honorario",
      ],
      correcta: 1,
      explicacion: "El Responsable de Neuroinclusión no es un cargo honorario: requiere tiempo, recursos, autoridad y capacitación específica.",
    },
    {
      id: "m8q16",
      pregunta: "¿Cuál es el tiempo mínimo asignado al Responsable de Neuroinclusión en una organización de 21 a 100 personas?",
      opciones: ["10% de la jornada", "30% de la jornada", "50% de la jornada", "Tiempo completo obligatorio"],
      correcta: 1,
      explicacion: "Para organizaciones de 21–100 personas se exige un mínimo de 30% de jornada laboral.",
    },
    {
      id: "m8q17",
      pregunta: "¿Cuál es el presupuesto mínimo anual establecido para la función de Neuroinclusión en micro y pequeñas empresas?",
      opciones: ["$1,000 MXN", "$5,000 MXN", "$50,000 MXN", "No se establece un mínimo"],
      correcta: 1,
      explicacion: "El presupuesto mínimo anual es de $5,000 MXN para micro/pequeñas empresas, proporcional al tamaño de la organización.",
    },
    {
      id: "m8q18",
      pregunta: "¿Cuál es el instrumento oficial que debe utilizarse en las auditorías internas de cumplimiento CENI?",
      opciones: [
        "Una encuesta genérica de clima laboral",
        "El oficial de autoevaluación CENI",
        "Un cuestionario diseñado libremente por cada auditor",
        "La NOM-035",
      ],
      correcta: 1,
      explicacion: "El instrumento requerido para las auditorías internas válidas como evidencia CENI es el oficial de autoevaluación CENI.",
    },
    {
      id: "m8q19",
      pregunta: "Según los requisitos de la auditoría interna, ¿quién debe participar junto con el Responsable de Neuroinclusión?",
      opciones: [
        "Un representante sindical",
        "Al menos un colaborador neurodivergente",
        "Un abogado externo",
        "El director general de manera obligatoria",
      ],
      correcta: 1,
      explicacion: "La auditoría debe estar a cargo del Responsable de Neuroinclusión, con participación de al menos un colaborador neurodivergente.",
    },
    {
      id: "m8q20",
      pregunta: "¿Qué debe incluir la documentación escrita de una auditoría interna válida como evidencia CENI?",
      opciones: [
        "Solo una calificación numérica global",
        "Fecha, evaluadores, puntuación por criterio y total, hallazgos y compromisos",
        "Únicamente fotografías del espacio evaluado",
        "Un resumen verbal sin registro escrito",
      ],
      correcta: 1,
      explicacion: "La documentación de la auditoría debe ser un informe escrito con fecha, evaluadores, puntuación por criterio y total, hallazgos y compromisos.",
    },
  ],
};

export default modulo8;
