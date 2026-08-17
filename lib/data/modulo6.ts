import { Modulo } from "@/lib/types";

const modulo6: Modulo = {
  id: "m6",
  numero: 6,
  titulo: "CENI Laboral — Certificación de Entornos Laborales Neuroinclusivos",
  duracion: "150 minutos",
  dirigidoA: "Propietarios, RRHH, directivos, responsables de neuroinclusión",
  preguntasPorIntento: 15,
  recursos: [
    { codigo: "F-02", nombre: "Instrumento de Autoevaluación CENI Laboral (con puntuación automática)", formato: "Excel", archivo: "/recursos/formatos/F-02_Autoevaluacion_CENI_Laboral.xlsx" },
    { codigo: "F-05", nombre: "Plan de Mejora Continua de Neuroinclusión (PMCN)", formato: "Excel", archivo: "/recursos/formatos/F-05_Plan_Mejora_Continua_PMCN.xlsx" },
    { codigo: "F-08", nombre: "Checklist pre-auditoría CENI Laboral", formato: "Excel", archivo: "/recursos/formatos/F-08_Checklist_Preauditoria_CENI_Laboral.xlsx" },
  ],
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
      titulo: "6.3 Dimensión 1 — Selección y reclutamiento neuroinclusivo (150 pts)",
      parrafos: [
        "Esta dimensión evalúa si el proceso de incorporación de nuevas personas colaboradoras está diseñado para permitir que personas neurodivergentes demuestren sus competencias reales, eliminando las barreras comunicativas, sociales y de formato que sistemáticamente las excluyen.",
      ],
      tabla: {
        encabezados: ["#", "Criterio", "Evidencia requerida", "Pts"],
        filas: [
          ["D1-C1", "Las vacantes usan lenguaje funcional (describe tareas, no perfiles de personalidad neurotípicos). No incluyen términos como \"proactivo\", \"dinámico\", \"trabajo en equipo intensivo\" como requisitos excluyentes.", "Últimas 3 ofertas de trabajo publicadas", "30"],
          ["D1-C2", "El proceso de selección ofrece al menos dos modalidades de entrevista (oral + escrita, asíncrona, por video sin cámara obligatoria). Los candidatos conocen las opciones con antelación.", "Protocolo escrito de proceso de selección", "30"],
          ["D1-C3", "Los evaluadores de selección han completado el curso CENI o equivalente de mínimo 8 horas en neurodiversidad. Registro de capacitación disponible.", "Constancias de capacitación del equipo evaluador", "30"],
          ["D1-C4", "La descripción de puesto incluye una declaración explícita de inclusión neurodivergente y describe los ajustes razonables disponibles.", "Formato de descripción de puesto + declaración", "30"],
          ["D1-C5", "Existe un protocolo de periodo de inducción adaptado para personas neurodivergentes: menor densidad de información por sesión, materiales escritos, mentor asignado, primera semana sin evaluación de desempeño.", "Protocolo de inducción neuroinclusiva", "30"],
        ],
      },
    },
    {
      titulo: "6.4 Dimensión 2 — Ambiente de trabajo sensorial (200 pts)",
      parrafos: [
        "El ambiente sensorial es frecuentemente la barrera más inmediata y menos visible para personas neurodivergentes en entornos laborales. Esta dimensión evalúa las condiciones físicas del espacio de trabajo.",
      ],
      tabla: {
        encabezados: ["#", "Criterio", "Evidencia requerida", "Pts"],
        filas: [
          ["D2-C1", "Nivel de ruido en áreas de trabajo concentrado ≤ 55 dB promedio en horario de jornada. Medición documentada con sonómetro al menos una vez por semestre.", "Registro de mediciones con fecha, instrumento y resultado", "40"],
          ["D2-C2", "Iluminación en áreas de trabajo entre 300–500 lux. Ausencia de luz fluorescente parpadeante (< 3 Hz). Al menos 40% de la iluminación puede ser natural o difusa.", "Registro de mediciones de luxómetro + fotografías", "40"],
          ["D2-C3", "Existe al menos un espacio de calma certificado CENI (criterios del Módulo 3) por cada 50 colaboradores. Acceso libre, sin solicitud previa.", "Fotografías + plano de ubicación + política de acceso libre", "40"],
          ["D2-C4", "Política de fragancia cero en áreas de trabajo y reuniones. La política está escrita, publicada y forma parte del Reglamento Interno de Neuroinclusión.", "Reglamento interno + evidencia de comunicación al equipo", "40"],
          ["D2-C5", "Las personas neurodivergentes tienen acceso a opciones de personalización de su estación de trabajo: auriculares, divisores, luz de escritorio, herramientas sensoriales. No requieren justificación médica.", "Política escrita + inventario de recursos disponibles", "40"],
        ],
      },
    },
    {
      titulo: "6.5 Dimensión 3 — Comunicación y coordinación accesible (150 pts)",
      parrafos: [],
      tabla: {
        encabezados: ["#", "Criterio", "Evidencia requerida", "Pts"],
        filas: [
          ["D3-C1", "Todas las reuniones cuentan con agenda escrita enviada con mínimo 24 horas de anticipación. Las reuniones sorpresa o convocadas con menos de 2 horas de anticipación requieren un procedimiento de excepción documentado.", "Registro de últimas 10 reuniones con evidencia de agenda anticipada", "30"],
          ["D3-C2", "Los acuerdos y resultados de reuniones se documentan siempre por escrito y se envían a todos los participantes en las siguientes 4 horas.", "Muestra de minutas de últimas 5 reuniones", "30"],
          ["D3-C3", "Existe un protocolo escrito de comunicación accesible para colaboradores neurodivergentes: opciones de comunicación escrita equivalente a verbal, canales asíncronos, políticas de tiempos de respuesta sin presión de inmediatez.", "Protocolo escrito aprobado + evidencia de comunicación al equipo", "30"],
          ["D3-C4", "Las evaluaciones de desempeño se basan en criterios objetivos y cuantitativos, no en criterios como \"actitud\", \"trabajo en equipo\" o \"comunicación\" sin descriptores conductuales específicos.", "Formato de evaluación de desempeño vigente", "30"],
          ["D3-C5", "Existe un canal dedicado de retroalimentación anónima para que colaboradores reporten barreras de comunicación o accesibilidad. El canal tiene una persona responsable y un tiempo de respuesta definido (máximo 5 días hábiles).", "Canal activo + registro de consultas y respuestas", "30"],
        ],
      },
    },
    {
      titulo: "6.6 Dimensión 4 — Carga de trabajo y gestión del tiempo (200 pts)",
      parrafos: [],
      tabla: {
        encabezados: ["#", "Criterio", "Evidencia requerida", "Pts"],
        filas: [
          ["D4-C1", "La asignación de tareas se hace con instrucciones escritas, desglosadas en pasos específicos y con fechas límite claramente definidas. No se asignan tareas exclusivamente de manera verbal en reuniones.", "Muestra de asignaciones de tareas de los últimos 30 días", "40"],
          ["D4-C2", "Las personas neurodivergentes tienen derecho a solicitar tiempos adicionales o extensiones en plazos sin penalización y sin requerir justificación médica, mediante un procedimiento simple y documentado.", "Política escrita de ajuste de tiempos + registro de solicitudes", "40"],
          ["D4-C3", "La jornada laboral incluye al menos dos periodos de descanso activo de mínimo 10 minutos cada uno, además del tiempo de comida. Los descansos son derechos, no recompensas.", "Política de descansos escrita + horario publicado", "40"],
          ["D4-C4", "No existe la cultura de la \"disponibilidad 24/7\": hay una política clara de desconexión digital fuera de horario laboral, con protocolos de urgencia definidos y limitados.", "Política de desconexión digital + evidencia de comunicación", "40"],
          ["D4-C5", "Existen modalidades flexibles de trabajo (horario flexible, trabajo remoto, trabajo híbrido) disponibles para personas neurodivergentes que las requieran como ajuste razonable, sin carga burocrática excesiva.", "Política de flexibilidad laboral + registro de solicitudes aprobadas", "40"],
        ],
      },
    },
    {
      titulo: "6.7 Dimensión 5 — Desarrollo y permanencia (150 pts)",
      parrafos: [],
      tabla: {
        encabezados: ["#", "Criterio", "Evidencia requerida", "Pts"],
        filas: [
          ["D5-C1", "Existe un Plan de Desarrollo Individual (PDI) para cada colaborador neurodivergente, diseñado con la persona y revisado al menos cada 6 meses. El PDI incluye objetivos, apoyos y cronograma.", "PDI de colaboradores identificados + evidencia de construcción conjunta", "30"],
          ["D5-C2", "Los programas de capacitación interna están disponibles en formato accesible: materiales escritos, ritmo flexible, posibilidad de completar de manera asíncrona o individual.", "Catálogo de capacitaciones + versiones accesibles disponibles", "30"],
          ["D5-C3", "Existe una política explícita anti-represalia: ningún colaborador puede ser perjudicado por solicitar ajustes razonables, por identificarse como neurodivergente o por reportar barreras de accesibilidad.", "Política escrita + mecanismo de denuncia activo", "30"],
          ["D5-C4", "Los procesos de ascenso y promoción usan criterios equivalentes a los de selección inicial: no discriminan por perfil comunicativo neurotípico. Los criterios están documentados y son públicos.", "Criterios de ascenso documentados + últimos 3 procesos", "30"],
          ["D5-C5", "La organización realiza una encuesta anónima anual de clima neuroinclusivo con al menos 5 indicadores específicos de neurodiversidad. Los resultados se publican internamente y generan compromisos de mejora.", "Encuesta más reciente + resultados + plan de acción", "30"],
        ],
      },
    },
    {
      titulo: "6.8 Dimensión 6 — Gobernanza e institucionalización (150 pts)",
      parrafos: [],
      tabla: {
        encabezados: ["#", "Criterio", "Evidencia requerida", "Pts"],
        filas: [
          ["D6-C1", "Existe un Responsable de Neuroinclusión designado formalmente: persona con cargo definido, tiempo asignado, presupuesto propio y reporte directo a la dirección. No es un rol voluntario ni de tiempo parcial mínimo.", "Nombramiento formal + descripción de puesto + presupuesto asignado", "30"],
          ["D6-C2", "Existe un Reglamento Interno de Neuroinclusión (RIN) aprobado por la dirección, que incluye: definiciones, derechos, protocolos, canal de queja y sanciones por incumplimiento.", "RIN aprobado + fecha + firma de la dirección", "30"],
          ["D6-C3", "Se realiza una auditoría interna semestral de cumplimiento CENI, utilizando el instrumento de autoevaluación oficial. Los resultados se documentan y se usan para actualizar el Plan de Mejora.", "Registros de últimas dos auditorías internas", "30"],
          ["D6-C4", "Al menos el 80% del personal con responsabilidades de gestión (supervisores, gerentes, directores) ha completado el Curso CENI o equivalente en el último año. Constancias disponibles.", "Listado de personal gerencial + constancias de capacitación", "30"],
          ["D6-C5", "Existe un Plan de Mejora Continua de Neuroinclusión (PMCN) anual, con objetivos SMART, responsables y fechas. El PMCN es revisado trimestralmente y está alineado a las observaciones de la auditoría externa CENI.", "PMCN vigente + últimas dos revisiones trimestrales", "30"],
        ],
      },
    },
    {
      titulo: "6.9 Proceso de auditoría CENI Laboral",
      parrafos: [
        "La auditoría es realizada por auditores certificados por Alianza Índigo, en cuatro etapas: (1) Solicitud y documentación — semanas 1-2; (2) Revisión documental — semanas 3-4; (3) Visita de auditoría in situ — semana 5, incluye medición sensorial, entrevistas confidenciales y mystery client; (4) Dictamen y plan de mejora — semana 6.",
      ],
      destacado: {
        titulo: "CENI Laboral y evidencia para la NOM-035 (ver módulo 5.5-5.9)",
        texto:
          "Buena parte de la evidencia que ya reúnes para certificarte en CENI Laboral sirve también para tu expediente de cumplimiento de la NOM-035: D2 (ambiente sensorial) alimenta el dominio de condiciones del entorno; D3 (comunicación) y D4 (carga de trabajo) cubren justo los dominios que el cuestionario oficial evalúa; y el canal de retroalimentación de D3-C5 puede ser el mismo canal de atención a violencia laboral que exige la norma. No sustituye las Guías oficiales, pero evita duplicar trabajo.",
      },
    },
  ],
  actividades: [
    {
      codigo: "6.A",
      titulo: "Autoevaluación CENI Laboral",
      duracion: "individual",
      descripcion: "Usando el instrumento oficial, evalúa tu organización en los 30 criterios, asigna puntuación parcial o plena e identifica prioridades de mejora.",
    },
    {
      codigo: "6.B",
      titulo: "Plan de Mejora Prioritizado",
      duracion: "individual",
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
    {
      id: "m6q16",
      pregunta: "Según el sistema de puntuación de CENI Laboral, ¿cuál es la puntuación total posible y cuántos criterios se evalúan en total?",
      opciones: [
        "800 puntos en 25 criterios",
        "1,000 puntos en 30 criterios",
        "1,200 puntos en 36 criterios",
        "900 puntos en 30 criterios",
      ],
      correcta: 1,
      explicacion: "CENI Laboral evalúa 30 criterios organizados en 6 dimensiones, con una puntuación total posible de 1,000 puntos.",
    },
    {
      id: "m6q17",
      pregunta: "¿Qué vigencia tiene la certificación CENI Laboral en el nivel Bronce (600–749 puntos)?",
      opciones: ["1 año", "2 años", "3 años", "6 meses"],
      correcta: 0,
      explicacion: "El nivel Bronce (600–749 puntos) tiene una vigencia de 1 año, la más corta de los tres niveles.",
    },
    {
      id: "m6q18",
      pregunta: "¿Cuántos años de vigencia otorga el nivel Oro de CENI Laboral (900–1000 puntos)?",
      opciones: ["1 año", "2 años", "3 años", "5 años"],
      correcta: 2,
      explicacion: "El nivel Oro (900–1000 puntos) otorga la vigencia más larga entre los tres niveles: 3 años.",
    },
    {
      id: "m6q19",
      pregunta: "Según el criterio D1-C1, ¿qué característica deben tener las vacantes publicadas por una organización certificada CENI?",
      opciones: [
        "Usar lenguaje funcional, sin perfiles de personalidad neurotípicos excluyentes",
        "Incluir pruebas psicométricas estandarizadas obligatorias",
        "Especificar rasgos de personalidad deseables como 'extrovertido' o 'dinámico'",
        "Limitar la descripción únicamente a los años de experiencia requeridos",
      ],
      correcta: 0,
      explicacion: "D1-C1 exige que las vacantes usen lenguaje funcional, sin perfiles de personalidad neurotípicos excluyentes.",
    },
    {
      id: "m6q20",
      pregunta: "Según el estándar D2 (Ambiente de trabajo sensorial), ¿cuáles son los rangos aceptables de ruido e iluminación en las áreas de trabajo?",
      opciones: [
        "Ruido ≤ 55 dB medido semestralmente; iluminación 300–500 lux sin parpadeo",
        "Ruido ≤ 70 dB medido anualmente; iluminación 100–200 lux",
        "Ruido ≤ 40 dB medido mensualmente; iluminación 600–800 lux",
        "No hay estándares específicos; cada organización define sus propios rangos",
      ],
      correcta: 0,
      explicacion: "D2 exige ruido en áreas de trabajo ≤ 55 dB medido semestralmente e iluminación de 300–500 lux sin parpadeo.",
    },
    {
      id: "m6q21",
      pregunta: "¿En qué plazo deben enviarse las minutas de una reunión después de esta, según D3-C2?",
      opciones: ["1 hora", "4 horas", "24 horas", "48 horas"],
      correcta: 1,
      explicacion: "D3 exige que las minutas de reunión se envíen dentro de las 4 horas posteriores a la reunión.",
    },
    {
      id: "m6q22",
      pregunta: "¿Qué política exige el criterio D4-C4 respecto al tiempo fuera del horario laboral?",
      opciones: [
        "Política de desconexión digital",
        "Obligación de estar disponible las 24 horas",
        "Prohibición total del trabajo remoto",
        "Registro biométrico obligatorio de horas extra",
      ],
      correcta: 0,
      explicacion: "D4 exige una política de desconexión digital como parte de la gestión de la carga de trabajo y el tiempo.",
    },
    {
      id: "m6q23",
      pregunta: "Según D5-C3, ¿qué tipo de política debe existir explícitamente en la organización?",
      opciones: [
        "Política anti-represalia explícita",
        "Política de rotación obligatoria de puestos",
        "Política de evaluación 360° anónima",
        "Política de bonificación por antigüedad",
      ],
      correcta: 0,
      explicacion: "D5 exige una política anti-represalia explícita, dentro de la dimensión de Desarrollo y permanencia.",
    },
    {
      id: "m6q24",
      pregunta: "¿Qué documento formal exige el criterio D6-C2 dentro de la dimensión de Gobernanza e institucionalización?",
      opciones: [
        "El Reglamento Interno de Neuroinclusión (RIN) aprobado",
        "El Plan de Desarrollo Individual (PDI)",
        "El Plan de Mejora Prioritizado",
        "El Manual de Selección Neurodivergente",
      ],
      correcta: 0,
      explicacion: "D6 exige un Reglamento Interno de Neuroinclusión (RIN) aprobado, distinto del PDI (D5) o el plan de mejora elaborado en la actividad 6.B.",
    },
    {
      id: "m6q25",
      pregunta: "¿Quién realiza la auditoría del proceso de certificación CENI Laboral?",
      opciones: [
        "Auditores certificados por Alianza Índigo",
        "El propio Responsable de Neuroinclusión de la organización",
        "Una firma internacional de auditoría financiera",
        "El Ministerio de Trabajo correspondiente",
      ],
      correcta: 0,
      explicacion: "La auditoría es realizada por auditores certificados por Alianza Índigo, en cuatro etapas a lo largo de seis semanas.",
    },
  ],
};

export default modulo6;
