import { Modulo } from "@/lib/types";

const modulo2: Modulo = {
  id: "m2",
  numero: 2,
  titulo: "Comunicación Neuroafirmativa",
  duracion: "90 minutos",
  dirigidoA: "Todo público",
  objetivos: [
    "Identificar y aplicar los principios de la comunicación neuroafirmativa en situaciones cotidianas.",
    "Conocer y respetar los sistemas alternativos y aumentativos de comunicación (SAAC).",
    "Eliminar de los protocolos internos las formas de coerción social comunicativa.",
    "Adaptar los tiempos de respuesta y procesamiento a las necesidades neurodivergentes.",
    "Elaborar scripts de comunicación accesibles para situaciones de alta demanda.",
  ],
  secciones: [
    {
      titulo: "2.1 Principios de la comunicación neuroafirmativa",
      parrafos: [
        "La comunicación neuroafirmativa parte de un axioma fundamental: no existe una forma correcta de comunicarse. Las diferencias en comunicación no son déficits; son variaciones que el entorno debe acomodar activamente.",
      ],
      lista: {
        titulo: "Siete principios operativos",
        items: [
          'Literalidad: use lenguaje directo, concreto y sin metáforas ambiguas. "La reunión empieza a las 10:00" es más accesible que "lleguen tempranito".',
          "Predictibilidad: anticipe cambios, agenda y expectativas con suficiente antelación. Los cambios de último momento generan estrés desproporcionado.",
          "Tiempo de procesamiento: respete los silencios. Una persona puede necesitar entre 15 y 45 segundos para procesar una pregunta. Interrumpir ese proceso es discriminación comunicativa.",
          "Multimodalidad: ofrezca la misma información en múltiples formatos (verbal, escrito, visual, pictográfico) sin esperar que se solicite.",
          'Ausencia de coerción social: elimine frases como "mírame cuando te hablo" o "sonríe un poco" — exigen masking como condición de comunicación.',
          "Consentimiento comunicativo: antes de tocar a alguien, iniciar contacto visual forzado o hacer preguntas personales, solicite permiso explícito.",
          "Validación de la experiencia: las expresiones emocionales atípicas son válidas y no requieren \"corrección\".",
        ],
      },
    },
    {
      titulo: "2.2 Sistemas Alternativos y Aumentativos de Comunicación (SAAC)",
      parrafos: [
        "Muchas personas neurodivergentes se comunican de maneras que no incluyen el lenguaje verbal oral como canal primario. Los entornos CENI deben reconocer y facilitar distintos SAAC.",
      ],
      tabla: {
        encabezados: ["Tipo de SAAC", "Ejemplos"],
        filas: [
          ["Baja tecnología", "Tableros impresos, tarjetas PECS, cuadernos de comunicación, señas convencionales"],
          ["Alta tecnología", "Apps de comunicación aumentativa (Proloquo2Go, Grid, LetMeTalk), sintetizadores de voz, predicción de texto"],
          ["Comunicación escrita", "Chat de texto, mensajes escritos, correo como canal preferente sobre llamadas o reuniones verbales"],
          ["Comunicación simbólica", "Pictogramas ARASAAC, códigos de colores, señalización visual, tarjetas rojo/verde/amarillo"],
        ],
      },
      destacado: {
        titulo: "Criterio CENI — Comunicación accesible",
        texto:
          "CENI Laboral D3-C3: protocolos escritos de comunicación accesible para colaboradores neurodivergentes. CENI Espacios D3-C3: tableros de comunicación o SAAC en el punto de atención al público. Evidencia requerida: fotografía del material + protocolo escrito de uso.",
      },
    },
    {
      titulo: "2.3 Eliminación de coerción social comunicativa",
      parrafos: [
        "La coerción social comunicativa es cualquier práctica que condiciona la participación, evaluación o valoración de una persona a la demostración de comportamientos comunicativos neurotípicos. Es una forma de discriminación sistemática, frecuentemente invisible para quienes la ejercen.",
      ],
      lista: {
        titulo: "Prácticas que DEBEN eliminarse",
        items: [
          "Exigir contacto visual como señal de atención, respeto o confiabilidad",
          "Evaluar la \"actitud\" por tono de voz o expresión facial",
          "Rechazar candidatos por \"falta de habilidades sociales\"",
          "Calificar como \"poco participativo\" a quien no interviene verbalmente en reuniones",
          "Interpretar la literalidad como agresividad o falta de tacto",
          "Requerir disponibilidad telefónica inmediata sin alternativas escritas",
        ],
      },
      destacado: {
        titulo: "Protocolo de adaptación comunicativa en entrevistas y evaluaciones",
        texto:
          "1) Informar con antelación (mínimo 48 horas) formato, duración y tipo de preguntas. 2) Ofrecer la opción de responder por escrito. 3) Permitir apoyos visuales, notas escritas o dispositivos de comunicación. 4) No penalizar el silencio, el tiempo de procesamiento extendido o respuestas atípicas en forma. 5) Incluir un evaluador capacitado en comunicación neuroafirmativa.",
      },
    },
  ],
  actividades: [
    {
      codigo: "2.A",
      titulo: "Auditoría de comunicación interna",
      duracion: "individual",
      descripcion:
        "Analiza tres documentos internos de tu organización (reglamento, descripción de puesto, protocolo de atención) e identifica frases que exigen comunicación neurotípica. Propón una versión accesible de cada una.",
    },
    {
      codigo: "2.B",
      titulo: "Script de comunicación accesible",
      duracion: "en parejas",
      descripcion:
        "Diseña un script para tres situaciones de alta demanda: informar un cambio de servicio, dar retroalimentación negativa a un colaborador neurodivergente, y responder a una crisis sensorial en atención al público.",
    },
    {
      codigo: "2.C",
      titulo: "Roleplay con tiempos de procesamiento extendidos",
      duracion: "en parejas",
      descripcion:
        "Un participante adopta el rol de persona con tiempo de procesamiento extendido (espera 30 segundos antes de responder). Reflexión: ¿cómo se sintió la espera? ¿Cuántas veces llenaste el silencio innecesariamente?",
    },
  ],
  evaluacion: [
    { componente: "Quiz de 10 preguntas sobre principios y SAAC", tipo: "Opción múltiple", valor: "30%" },
    { componente: "Script de comunicación accesible (Actividad 2.B)", tipo: "Práctica escrita", valor: "50%" },
    { componente: "Reflexión del roleplay (Actividad 2.C) — 200 palabras", tipo: "Reflexión", valor: "20%" },
  ],
  quiz: [
    {
      id: "m2q1",
      pregunta: "¿Cuál de las siguientes es una forma de coerción social comunicativa?",
      opciones: [
        "Enviar la agenda por escrito antes de la reunión",
        "Exigir contacto visual como demostración de respeto y atención",
        "Ofrecer opción de respuesta escrita en entrevistas",
        "Dar 30 segundos de tiempo antes de repetir una pregunta",
      ],
      correcta: 1,
      explicacion: "Exigir contacto visual como señal de respeto o atención es una forma de coerción social comunicativa que debe eliminarse.",
    },
    {
      id: "m2q2",
      pregunta: "SAAC significa:",
      opciones: [
        "Sistemas de Actuación Ante Crisis",
        "Sistemas Alternativos y Aumentativos de Comunicación",
        "Servicios de Apoyo Académico Certificado",
        "Señales de Alerta Ante Comportamientos Complejos",
      ],
      correcta: 1,
      explicacion: "SAAC son los Sistemas Alternativos y Aumentativos de Comunicación.",
    },
    {
      id: "m2q3",
      pregunta: "Según el principio de literalidad, ¿cuál frase es más accesible?",
      opciones: [
        "\"Lleguen tempranito\"",
        "\"La reunión empieza puntualmente a las 10:00\"",
        "\"Nos vemos por ahí\"",
        "\"Es cuestión de minutos\"",
      ],
      correcta: 1,
      explicacion: "El lenguaje directo y concreto, con horas exactas, es más accesible que expresiones ambiguas.",
    },
    {
      id: "m2q4",
      pregunta: "¿Cuántos segundos de silencio se consideran normales como tiempo de procesamiento antes de responder una pregunta?",
      opciones: ["Menos de 5 segundos", "Entre 15 y 45 segundos", "Más de 5 minutos", "El silencio nunca es normal"],
      correcta: 1,
      explicacion: "Una persona neurodivergente puede necesitar entre 15 y 45 segundos para procesar y formular su respuesta.",
    },
    {
      id: "m2q5",
      pregunta: "Un candidato en un proceso de selección pide responder las preguntas por escrito. ¿Qué debe hacer una organización certificada CENI?",
      opciones: [
        "Explicar que el proceso estándar requiere entrevista oral",
        "Ofrecer la modalidad escrita como equivalente y válida",
        "Documentar la solicitud como \"falta de habilidades comunicativas\"",
        "Redirigirlo a un proceso especializado",
      ],
      correcta: 1,
      explicacion: "La modalidad escrita debe ofrecerse como opción equivalente y válida, no como excepción estigmatizada.",
    },
    {
      id: "m2q6",
      pregunta: "¿Cuál de los siguientes es un ejemplo de SAAC de baja tecnología?",
      opciones: ["Tarjetas PECS", "Aplicación Proloquo2Go", "Sintetizador de voz", "Predicción de texto por IA"],
      correcta: 0,
      explicacion: "Las tarjetas PECS (Picture Exchange Communication System) son un SAAC de baja tecnología.",
    },
    {
      id: "m2q7",
      pregunta: "El principio de \"multimodalidad\" en comunicación neuroafirmativa implica:",
      opciones: [
        "Usar solo comunicación verbal para ser más rápido",
        "Ofrecer la misma información en múltiples formatos sin que se solicite",
        "Requerir que la persona pida el formato que necesita",
        "Evitar el uso de imágenes",
      ],
      correcta: 1,
      explicacion: "La multimodalidad implica ofrecer proactivamente la información en varios formatos (verbal, escrito, visual, pictográfico).",
    },
    {
      id: "m2q8",
      pregunta: "Antes de tocar a alguien o iniciar contacto visual forzado, el principio de consentimiento comunicativo indica:",
      opciones: [
        "Hacerlo directamente, es una norma social aceptada",
        "Solicitar permiso de manera explícita",
        "Pedir autorización solo si la persona es menor de edad",
        "No es necesario en el entorno laboral",
      ],
      correcta: 1,
      explicacion: "Se debe solicitar permiso explícito antes de tocar a alguien o de iniciar contacto visual forzado.",
    },
    {
      id: "m2q9",
      pregunta: "¿Cuánto tiempo mínimo de antelación debe darse para informar el formato, duración y tipo de preguntas de una evaluación?",
      opciones: ["Ninguno, puede ser el mismo día", "24 horas", "48 horas", "Una semana obligatoriamente"],
      correcta: 2,
      explicacion: "El protocolo de adaptación comunicativa exige informar con mínimo 48 horas de antelación.",
    },
    {
      id: "m2q10",
      pregunta: "Interpretar la literalidad de una persona neurodivergente como \"agresividad o falta de tacto\" es un ejemplo de:",
      opciones: [
        "Buena práctica de retroalimentación",
        "Coerción social comunicativa",
        "Ajuste razonable",
        "Consentimiento comunicativo",
      ],
      correcta: 1,
      explicacion: "Interpretar la literalidad como agresividad es una de las prácticas de coerción social comunicativa que deben eliminarse.",
    },
  ],
};

export default modulo2;
