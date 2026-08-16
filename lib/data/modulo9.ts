import { Modulo } from "@/lib/types";

const modulo9: Modulo = {
  id: "m9",
  numero: 9,
  titulo: "Implementación Práctica por Tipo de Actor",
  duracion: "90 minutos",
  dirigidoA: "Segmentado por perfil (elige tu ruta según tu rol)",
  preguntasPorIntento: 6,
  objetivos: [
    "Aplicar los principios CENI a las responsabilidades específicas de cada tipo de actor.",
    "Identificar los criterios de mayor impacto según el rol y el contexto de actuación.",
    "Elaborar un plan de acción inmediata personalizado para el primer mes post-capacitación.",
  ],
  secciones: [
    {
      titulo: "9.1 Propietarios y directivos",
      parrafos: ["La responsabilidad central es institucional: garantizar que la neuroinclusión esté integrada en la estrategia, el presupuesto y la cultura de la organización."],
      lista: {
        items: [
          "Designar formalmente al Responsable de Neuroinclusión en los primeros 30 días",
          "Asignar presupuesto anual para adecuaciones, capacitación y auditorías",
          "Aprobar y publicar el RIN o MONE antes de solicitar la certificación",
          "Participar personalmente en al menos una sesión de capacitación CENI anual",
          "Integrar indicadores de neuroinclusión en los tableros de desempeño organizacional",
        ],
      },
    },
    {
      titulo: "9.2 Empleados y colaboradores operativos",
      parrafos: ["La responsabilidad es de aplicación cotidiana: comunicación, manejo de crisis, respeto al stimming y uso de recursos de accesibilidad."],
      lista: {
        items: [
          "Completar el Curso CENI completo (17 horas) y las actualizaciones anuales",
          "Conocer la ubicación y el protocolo de acceso al espacio de calma",
          "Aplicar el protocolo de comunicación neuroafirmativa en todas las interacciones",
          "Reportar barreras de accesibilidad a través del canal oficial",
          "Nunca corregir, comentar ni sancionar el stimming de un compañero o usuario",
        ],
      },
    },
    {
      titulo: "9.3 Docentes y personal educativo",
      parrafos: ["CENI se articula con el Diseño Universal para el Aprendizaje (DUA): la accesibilidad pedagógica es un diseño universal, no una adaptación para \"alumnos especiales\"."],
      lista: {
        items: [
          "Eliminar de las evaluaciones criterios que midan habilidades comunicativas neurotípicas en lugar de conocimiento real",
          "Ofrecer múltiples formatos de presentación (oral, escrita, visual, digital)",
          "Diseñar el aula con los umbrales sensoriales CENI",
          "Eliminar la exigencia de contacto visual y mano alzada como criterios de evaluación",
          "Implementar protocolo de manejo de crisis sensoriales en el aula, acordado con el estudiante y su familia",
        ],
      },
    },
    {
      titulo: "9.4 Familias, salud, comercio y gobierno",
      parrafos: [],
      lista: {
        titulo: "Familias",
        items: [
          "Conocer los criterios CENI para exigir su cumplimiento en la comunidad",
          "Reportar barreras de accesibilidad usando el canal CENI oficial",
          "Participar como mystery client certificado",
        ],
      },
      destacado: {
        titulo: "Salud, comercio y gobierno — acciones de mayor impacto",
        texto:
          "Salud: eliminar objetivos de \"normalización\" de los protocolos clínicos; ofrecer horarios de baja estimulación; capacitar a recepción y triaje. Comercio: horario semanal de baja estimulación (mín. 2h); kit sensorial en el punto de atención; mapa sensorial publicado. Gobierno: declarar espacios de atención ciudadana como entornos CENI objetivo; eliminar requisitos de diagnóstico médico en trámites; fichas de turno con notificación por mensaje.",
      },
    },
  ],
  actividades: [
    {
      codigo: "9.A",
      titulo: "Plan de acción inmediata personalizado",
      duracion: "individual, según perfil",
      descripcion: "Elabora un plan con 5 acciones SMART para los primeros 30 días, con fechas y responsables, según tu rol.",
    },
    {
      codigo: "9.B",
      titulo: "Reflexión escrita",
      duracion: "300 palabras",
      descripcion: "Reflexiona sobre la barrera más frecuente en tu propio sector y cómo abordarla.",
    },
  ],
  evaluacion: [
    { componente: "Plan de acción inmediata personalizado (5 acciones SMART)", tipo: "Práctica aplicada por perfil", valor: "70%" },
    { componente: "Reflexión escrita sobre la barrera más frecuente en el propio sector", tipo: "Reflexiva", valor: "30%" },
  ],
  quiz: [
    {
      id: "m9q1",
      pregunta: "¿En cuántos días debe designarse formalmente al Responsable de Neuroinclusión según la responsabilidad de propietarios y directivos?",
      opciones: ["7 días", "30 días", "90 días", "1 año"],
      correcta: 1,
      explicacion: "La acción prioritaria indica designar formalmente al Responsable de Neuroinclusión en los primeros 30 días.",
    },
    {
      id: "m9q2",
      pregunta: "Para el personal operativo, ¿qué se debe hacer si un compañero está haciendo stimming?",
      opciones: [
        "Corregirlo discretamente",
        "Nunca corregir, comentar ni sancionar el stimming",
        "Reportarlo como incidente",
        "Ignorarlo pero documentarlo",
      ],
      correcta: 1,
      explicacion: "Una de las acciones prioritarias del personal operativo es nunca corregir, comentar ni sancionar el stimming de un compañero o usuario.",
    },
    {
      id: "m9q3",
      pregunta: "En el contexto educativo, el DUA (Diseño Universal para el Aprendizaje) implica que la accesibilidad pedagógica es:",
      opciones: [
        "Una adaptación exclusiva para \"alumnos especiales\"",
        "Un diseño universal que beneficia a todos",
        "Un costo adicional injustificado",
        "Responsabilidad exclusiva de la familia",
      ],
      correcta: 1,
      explicacion: "Los docentes certificados CENI comprenden que la accesibilidad pedagógica es un diseño universal que beneficia a todos, no una adaptación especial.",
    },
    {
      id: "m9q4",
      pregunta: "¿Cuál es una acción de alto impacto inmediato para el sector comercial según el curso?",
      opciones: [
        "Aumentar el volumen de la música ambiental",
        "Implementar un horario semanal de baja estimulación de mínimo 2 horas",
        "Exigir diagnóstico médico a los clientes con necesidades sensoriales",
        "Eliminar cualquier señalización del espacio",
      ],
      correcta: 1,
      explicacion: "Implementar un horario semanal de baja estimulación de al menos 2 horas por semana es una acción de alto impacto para el sector comercial.",
    },
    {
      id: "m9q5",
      pregunta: "En el sector gubernamental, ¿qué deben eliminarse de los formularios y trámites según el curso?",
      opciones: [
        "Los campos de contacto",
        "Los requisitos de diagnóstico médico como condición de acceso a servicios",
        "El nombre del solicitante",
        "La fecha de la solicitud",
      ],
      correcta: 1,
      explicacion: "Una acción prioritaria del sector gubernamental es eliminar de trámites los requisitos que exigen diagnóstico médico como condición de acceso.",
    },
    {
      id: "m9q6",
      pregunta: "¿Qué pueden hacer las familias para acompañar el proceso CENI en su comunidad?",
      opciones: [
        "Nada, no tienen ningún rol formal",
        "Participar como mystery client certificado y reportar barreras usando el canal oficial",
        "Solo esperar a que las organizaciones actúen espontáneamente",
        "Exigir diagnóstico formal a otras familias",
      ],
      correcta: 1,
      explicacion: "Las familias pueden participar como mystery client certificado y reportar barreras de accesibilidad usando el canal CENI oficial.",
    },
    {
      id: "m9q7",
      pregunta: "Según las responsabilidades de propietarios y directivos, ¿qué debe aprobarse y publicarse antes de solicitar la certificación?",
      opciones: [
        "El manual de recursos humanos",
        "El RIN o MONE",
        "El informe financiero anual",
        "El organigrama institucional",
      ],
      correcta: 1,
      explicacion: "Una responsabilidad de propietarios y directivos es aprobar y publicar el RIN o MONE antes de solicitar la certificación.",
    },
    {
      id: "m9q8",
      pregunta: "¿Qué deben completar los empleados y colaboradores operativos según sus responsabilidades de aplicación cotidiana?",
      opciones: [
        "Solo una charla informativa de 1 hora",
        "El Curso CENI completo (17 horas) y las actualizaciones anuales",
        "Un examen psicológico anual",
        "Una certificación internacional externa",
      ],
      correcta: 1,
      explicacion: "Los empleados y colaboradores operativos deben completar el Curso CENI completo (17 horas) y las actualizaciones anuales.",
    },
    {
      id: "m9q9",
      pregunta: "¿Qué exigencias deben eliminar los docentes como criterios de evaluación en el aula?",
      opciones: [
        "La entrega de tareas escritas",
        "El contacto visual y la mano alzada",
        "El uso de materiales digitales",
        "La asistencia a clase",
      ],
      correcta: 1,
      explicacion: "Entre las acciones docentes está eliminar la exigencia de contacto visual y mano alzada como criterios de evaluación.",
    },
    {
      id: "m9q10",
      pregunta: "¿Cómo debe implementarse el protocolo de manejo de crisis sensoriales en el aula?",
      opciones: [
        "De forma unilateral por el docente sin consultar a nadie",
        "Acordado con el estudiante y su familia",
        "Solo cuando lo apruebe la dirección escolar",
        "Únicamente por indicación médica externa",
      ],
      correcta: 1,
      explicacion: "Los docentes deben implementar el protocolo de manejo de crisis sensoriales en el aula, acordado con el estudiante y su familia.",
    },
    {
      id: "m9q11",
      pregunta: "¿Cuáles son acciones de mayor impacto para el sector salud según el curso?",
      opciones: [
        "Aumentar los objetivos de \"normalización\" en los protocolos clínicos",
        "Eliminar objetivos de \"normalización\", ofrecer horarios de baja estimulación y capacitar a recepción y triaje",
        "Reducir el personal de recepción",
        "Exigir diagnóstico médico previo a la atención",
      ],
      correcta: 1,
      explicacion: "En salud se recomienda eliminar objetivos de \"normalización\" de los protocolos clínicos, ofrecer horarios de baja estimulación y capacitar a recepción y triaje.",
    },
    {
      id: "m9q12",
      pregunta: "¿Qué acción se recomienda para las fichas de turno en el sector gubernamental?",
      opciones: [
        "Eliminar los turnos y atender por orden de llegada",
        "Que incluyan notificación por mensaje",
        "Que solo se entreguen impresas",
        "Que requieran cita previa telefónica exclusivamente",
      ],
      correcta: 1,
      explicacion: "Una acción recomendada para el sector gubernamental es que las fichas de turno cuenten con notificación por mensaje.",
    },
  ],
};

export default modulo9;
