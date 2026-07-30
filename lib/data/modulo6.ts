import { Modulo } from "@/lib/types";

const modulo6: Modulo = {
  id: "m6",
  numero: 6,
  titulo: "CENI Laboral — Certificación de Entornos Laborales Neuroinclusivos",
  duracion: "150 minutos",
  dirigidoA: "Propietarios, RRHH, directivos, responsables de neuroinclusión",
  objetivos: [
    "Conocer en profundidad las seis dimensiones y treinta criterios de CENI Laboral.",
    "Comprender el sistema de puntuación, evidencias requeridas y umbrales de certificación.",
    "Realizar una autoevaluación inicial de la organización usando el instrumento CENI Laboral.",
    "Diseñar un plan de mejora prioritizado para alcanzar el nivel de certificación objetivo.",
    "Entender el proceso de auditoría externa y preparar la organización para él.",
  ],
  secciones: [
    {
      titulo: "6.1 Sistema de puntuación CENI Laboral",
      parrafos: [
        "CENI Laboral evalúa 30 criterios organizados en 6 dimensiones, con una puntuación total posible de 1,000 puntos.",
      ],
      tabla: {
        encabezados: ["Nivel", "Puntos", "Vigencia"],
        filas: [
          ["🥉 Bronce", "600–749", "1 año"],
          ["🥈 Plata", "750–899", "2 años"],
          ["🥇 Oro", "900–1000", "3 años"],
        ],
      },
    },
    {
      titulo: "6.2 Las seis dimensiones",
      parrafos: [],
      tabla: {
        encabezados: ["Dimensión", "Puntos"],
        filas: [
          ["D1 — Selección y reclutamiento neuroinclusivo", "150 (5 × 30)"],
          ["D2 — Ambiente de trabajo sensorial", "200 (5 × 40)"],
          ["D3 — Comunicación y coordinación accesible", "150 (5 × 30)"],
          ["D4 — Carga de trabajo y gestión del tiempo", "200 (5 × 40)"],
          ["D5 — Desarrollo y permanencia", "150 (5 × 30)"],
          ["D6 — Gobernanza e institucionalización", "150 (5 × 30)"],
        ],
      },
    },
    {
      titulo: "6.3 Criterios clave por dimensión",
      parrafos: [],
      lista: {
        titulo: "D1 — Selección y reclutamiento (30 pts cada criterio)",
        items: [
          "D1-C1: las vacantes usan lenguaje funcional, sin perfiles de personalidad neurotípicos excluyentes",
          "D1-C2: el proceso ofrece al menos dos modalidades de entrevista (oral + escrita, asíncrona, video sin cámara obligatoria)",
          "D1-C3: los evaluadores completaron el curso CENI o equivalente (mínimo 8 horas)",
          "D1-C4: la descripción de puesto declara inclusión neurodivergente y ajustes disponibles",
          "D1-C5: protocolo de inducción adaptado — menor densidad de información, mentor asignado, primera semana sin evaluación",
        ],
      },
      destacado: {
        titulo: "D2 — Ambiente de trabajo sensorial (40 pts cada criterio)",
        texto:
          "Ruido en áreas de trabajo ≤ 55 dB medido semestralmente; iluminación 300–500 lux sin parpadeo; un espacio de calma por cada 50 colaboradores con acceso libre; política de fragancia cero escrita; opciones de personalización de estación de trabajo sin justificación médica.",
      },
    },
    {
      titulo: "6.4 Dimensiones 3 a 6 — resumen operativo",
      parrafos: [],
      lista: {
        items: [
          "D3 — Comunicación: agenda escrita con 24h de anticipación; minutas enviadas en 4h; protocolo de comunicación accesible; evaluaciones de desempeño con criterios objetivos y cuantitativos; canal de retroalimentación anónima con respuesta en máximo 5 días hábiles.",
          "D4 — Carga de trabajo: instrucciones escritas y desglosadas; derecho a extensiones de plazo sin justificación médica; dos descansos activos mínimo de 10 minutos; política de desconexión digital; modalidades flexibles de trabajo.",
          "D5 — Desarrollo y permanencia: Plan de Desarrollo Individual (PDI) revisado cada 6 meses; capacitación en formato accesible; política anti-represalia explícita; criterios de ascenso públicos y no discriminatorios; encuesta anual de clima neuroinclusivo.",
          "D6 — Gobernanza: Responsable de Neuroinclusión designado formalmente con presupuesto propio; Reglamento Interno de Neuroinclusión (RIN) aprobado; auditoría interna semestral; 80% del personal gerencial capacitado; Plan de Mejora Continua (PMCN) revisado trimestralmente.",
        ],
      },
    },
    {
      titulo: "6.5 Proceso de auditoría CENI Laboral",
      parrafos: [
        "La auditoría es realizada por auditores certificados por Alianza Índigo, en cuatro etapas: (1) Solicitud y documentación — semanas 1-2; (2) Revisión documental — semanas 3-4; (3) Visita de auditoría in situ — semana 5, incluye medición sensorial, entrevistas confidenciales y mystery client; (4) Dictamen y plan de mejora — semana 6.",
      ],
    },
  ],
  actividades: [
    {
      codigo: "6.A",
      titulo: "Autoevaluación CENI Laboral",
      duracion: "en equipo",
      descripcion: "Usando el instrumento oficial, evalúa tu organización en los 30 criterios, asigna puntuación parcial o plena e identifica prioridades de mejora.",
    },
    {
      codigo: "6.B",
      titulo: "Plan de Mejora Prioritizado",
      duracion: "en equipo",
      descripcion: "Con base en la autoevaluación, elabora un plan con los 5 criterios de mayor brecha: acción, responsable, presupuesto, fecha compromiso y evidencia.",
    },
  ],
  evaluacion: [
    { componente: "Quiz de 15 preguntas sobre dimensiones, criterios y puntuación", tipo: "Opción múltiple", valor: "25%" },
    { componente: "Autoevaluación CENI Laboral (completitud y precisión)", tipo: "Práctica aplicada", valor: "45%" },
    { componente: "Plan de Mejora Prioritizado", tipo: "Práctica estratégica", valor: "30%" },
  ],
  quiz: [
    {
      id: "m6q1",
      pregunta: "¿Cuántos puntos debe obtener una organización en CENI Laboral para alcanzar el nivel Plata?",
      opciones: ["600–749", "750–899", "900–1000", "500–699"],
      correcta: 1,
      explicacion: "El nivel Plata corresponde a un puntaje de 750–899 puntos, con vigencia de 2 años.",
    },
    {
      id: "m6q2",
      pregunta: "Un candidato en un proceso de selección pide responder las preguntas por escrito. La organización certificada CENI debe:",
      opciones: [
        "Explicar que el proceso estándar requiere entrevista oral",
        "Ofrecer la modalidad escrita como equivalente y válida",
        'Documentar la solicitud como "falta de habilidades comunicativas"',
        "Redirigir al candidato a un proceso de selección especializado",
      ],
      correcta: 1,
      explicacion: "El criterio D1-C2 exige ofrecer al menos dos modalidades de entrevista, incluyendo la escrita, como opciones válidas y equivalentes.",
    },
    {
      id: "m6q3",
      pregunta: "¿Cuántos puntos vale la Dimensión 2 (Ambiente de trabajo sensorial) en CENI Laboral?",
      opciones: ["150 puntos", "200 puntos", "100 puntos", "250 puntos"],
      correcta: 1,
      explicacion: "La Dimensión 2 vale 200 puntos (5 criterios de 40 puntos cada uno).",
    },
    {
      id: "m6q4",
      pregunta: "¿Con qué anticipación mínima deben enviarse las agendas de reunión según D3-C1?",
      opciones: ["2 horas", "12 horas", "24 horas", "72 horas"],
      correcta: 2,
      explicacion: "D3-C1 exige agenda escrita enviada con mínimo 24 horas de anticipación.",
    },
    {
      id: "m6q5",
      pregunta: "¿Cuántos espacios de calma como mínimo debe tener una organización según D2-C3?",
      opciones: [
        "Uno por cada 10 colaboradores",
        "Uno por cada 50 colaboradores",
        "Uno por cada 200 colaboradores",
        "No hay un mínimo establecido",
      ],
      correcta: 1,
      explicacion: "D2-C3 exige al menos un espacio de calma certificado CENI por cada 50 colaboradores, con acceso libre.",
    },
    {
      id: "m6q6",
      pregunta: "¿Qué porcentaje del personal con responsabilidades de gestión debe estar capacitado en CENI según D6-C4?",
      opciones: ["30%", "50%", "80%", "100%"],
      correcta: 2,
      explicacion: "D6-C4 exige que al menos el 80% del personal gerencial haya completado el Curso CENI o equivalente en el último año.",
    },
    {
      id: "m6q7",
      pregunta: "Las evaluaciones de desempeño en una organización certificada CENI deben basarse en:",
      opciones: [
        'Criterios subjetivos como "actitud" y "trabajo en equipo"',
        "Criterios objetivos y cuantitativos con descriptores conductuales específicos",
        "La opinión general del supervisor",
        "El número de horas presenciales en la oficina",
      ],
      correcta: 1,
      explicacion: "D3-C4 exige que las evaluaciones se basen en criterios objetivos y cuantitativos, no en criterios subjetivos sin descriptores conductuales.",
    },
    {
      id: "m6q8",
      pregunta: "¿Cuántas fases tiene el proceso de auditoría CENI Laboral?",
      opciones: ["Dos", "Tres", "Cuatro", "Seis"],
      correcta: 2,
      explicacion: "El proceso tiene cuatro etapas: solicitud y documentación, revisión documental, visita in situ, y dictamen y plan de mejora.",
    },
    {
      id: "m6q9",
      pregunta: "¿Qué instrumento evalúa la organización durante la visita de auditoría in situ, además de mediciones sensoriales y entrevistas?",
      opciones: ["El mystery client neurodivergente", "El Plan de Desarrollo Individual", "El RIN", "El PMCN"],
      correcta: 0,
      explicacion: "Durante la visita in situ, el auditor aplica el instrumento de mystery client además de mediciones y entrevistas confidenciales.",
    },
    {
      id: "m6q10",
      pregunta: "El Responsable de Neuroinclusión (D6-C1) debe tener:",
      opciones: [
        "Un rol voluntario sin tiempo asignado",
        "Cargo definido, tiempo asignado, presupuesto propio y reporte directo a la dirección",
        "Solo una función simbólica sin autoridad real",
        "Responsabilidad exclusivamente disciplinaria",
      ],
      correcta: 1,
      explicacion: "D6-C1 exige un nombramiento formal con tiempo asignado, presupuesto propio y reporte directo a la dirección; no puede ser un rol voluntario.",
    },
    {
      id: "m6q11",
      pregunta: "¿Cuántos periodos de descanso activo mínimo debe incluir la jornada laboral, además del tiempo de comida (D4-C3)?",
      opciones: ["Ninguno", "Uno de 5 minutos", "Dos de mínimo 10 minutos cada uno", "Cuatro de 30 minutos"],
      correcta: 2,
      explicacion: "D4-C3 exige al menos dos periodos de descanso activo de mínimo 10 minutos cada uno, como derechos, no recompensas.",
    },
    {
      id: "m6q12",
      pregunta: "¿Con qué frecuencia debe revisarse el Plan de Desarrollo Individual (PDI) de un colaborador neurodivergente?",
      opciones: ["Cada mes", "Cada 6 meses", "Cada 2 años", "Solo al ingreso"],
      correcta: 1,
      explicacion: "D5-C1 exige que el PDI se revise al menos cada 6 meses, diseñado con la persona.",
    },
    {
      id: "m6q13",
      pregunta: "¿Qué política debe existir en el ambiente de trabajo sensorial respecto a olores (D2-C4)?",
      opciones: [
        "Fragancia libre sin restricciones",
        "Fragancia cero en áreas de trabajo y reuniones",
        "Fragancia solo en recepción",
        "No se contempla en el estándar CENI",
      ],
      correcta: 1,
      explicacion: "D2-C4 exige una política de fragancia cero, escrita y publicada, en áreas de trabajo y reuniones.",
    },
    {
      id: "m6q14",
      pregunta: "¿Qué debe evitar la descripción de puestos según D1-C4?",
      opciones: [
        "Debe incluir declaración de inclusión neurodivergente y ajustes disponibles",
        "Debe omitir toda mención a la neurodivergencia",
        "Debe usar exclusivamente lenguaje técnico especializado",
        "No tiene relación con el estándar CENI",
      ],
      correcta: 0,
      explicacion: "D1-C4 exige que la descripción de puesto incluya una declaración explícita de inclusión neurodivergente y describa los ajustes razonables disponibles.",
    },
    {
      id: "m6q15",
      pregunta: "¿Qué elementos debe tener el canal de retroalimentación anónima según D3-C5?",
      opciones: [
        "Persona responsable y tiempo de respuesta definido (máximo 5 días hábiles)",
        "Solo un buzón físico sin seguimiento",
        "Respuesta únicamente si el reclamo es grave",
        "Requerir identificación completa del colaborador",
      ],
      correcta: 0,
      explicacion: "D3-C5 exige un canal dedicado con persona responsable y tiempo de respuesta definido de máximo 5 días hábiles.",
    },
  ],
};

export default modulo6;
