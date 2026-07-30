import { Modulo } from "@/lib/types";

const modulo7: Modulo = {
  id: "m7",
  numero: 7,
  titulo: "CENI Espacios — Certificación de Espacios Físicos y Virtuales",
  duracion: "150 minutos",
  dirigidoA: "Propietarios, gestores de espacios, arquitectos, administradores públicos",
  objetivos: [
    "Conocer las seis dimensiones y treinta criterios de CENI Espacios con énfasis en umbrales sensoriales objetivos.",
    "Distinguir la aplicación de CENI Espacios en contextos educativos, comerciales, de salud y gubernamentales.",
    "Elaborar el expediente de evidencias para una solicitud de certificación de espacios.",
    "Diseñar un plan de adecuación física y protocolar para cumplir los criterios de certificación.",
  ],
  secciones: [
    {
      titulo: "7.1 Sistema de puntuación CENI Espacios",
      parrafos: [
        "CENI Espacios, al igual que CENI Laboral, evalúa 30 criterios en 6 dimensiones con un máximo de 1,000 puntos, y los mismos niveles: Bronce (600–749, 1 año), Plata (750–899, 2 años) y Oro (900–1000, 3 años).",
      ],
      tabla: {
        encabezados: ["Dimensión", "Puntos"],
        filas: [
          ["D1 — Accesibilidad sensorial del espacio físico", "200 (5 × 40)"],
          ["D2 — Accesibilidad cognitiva y señalización", "150 (5 × 30)"],
          ["D3 — Comunicación y atención accesible", "150 (5 × 30)"],
          ["D4 — Recursos y apoyos disponibles", "150 (5 × 30)"],
          ["D5 — Inclusión en servicios y procesos", "200 (5 × 40)"],
          ["D6 — Gobernanza y mejora continua", "150 (5 × 30)"],
        ],
      },
    },
    {
      titulo: "7.2 Criterios clave por dimensión",
      parrafos: [],
      lista: {
        titulo: "D1 — Accesibilidad sensorial del espacio físico (40 pts cada criterio)",
        items: [
          "E1-C1: ruido en áreas de atención ≤ 55 dB con medición semestral",
          "E1-C2: iluminación 200–400 lux, sin parpadeo, regulable o con zonas de menor intensidad",
          "E1-C3: política de fragancia cero en todas las áreas de atención al público",
          "E1-C4: espacio de calma accesible al público durante todo el horario de servicio",
          "E1-C5: rutas de circulación con contrastes visuales claros, sin patrones complejos en zonas de tránsito",
        ],
      },
      destacado: {
        titulo: "D2, D3 y D4 — resumen operativo",
        texto:
          "D2: pictogramas ARASAAC junto a texto, mapa visual en la entrada, fuente sans-serif 16pt+, documentos en Lectura Fácil, señalización de advertencia previa a zonas de alta estimulación. D3: personal capacitado en comunicación neuroafirmativa, SAAC básico en el punto de atención, protocolo de tiempos de procesamiento extendidos, opción de atención escrita, canal de retroalimentación específico. D4: kit sensorial de libre acceso, opciones de espera alternativa, catálogos digitales accesibles, acompañante de servicio sin costo adicional, horarios de baja estimulación publicados.",
      },
    },
    {
      titulo: "7.3 D5 — Inclusión en servicios y procesos (40 pts cada criterio)",
      parrafos: [],
      lista: {
        items: [
          "E5-C1: servicios accesibles sin ninguna política escrita o informal que excluya a personas neurodivergentes",
          "E5-C2: proceso de queja accesible, resuelto en máximo 5 días hábiles",
          "E5-C3: al menos dos sesiones anuales de mystery client neurodivergente con informe y compromisos de mejora",
          "E5-C4: al menos una consulta o co-diseño con personas neurodivergentes en los últimos 12 meses",
          "E5-C5: precios y condiciones de servicio exactamente iguales, sin recargo por apoyos o acompañante",
        ],
      },
    },
    {
      titulo: "7.4 D6 — Gobernanza y mejora continua",
      parrafos: [],
      lista: {
        items: [
          "Responsable de Accesibilidad Neurodivergente designado formalmente con tiempo y presupuesto asignados",
          "Manual Operativo de Neuroinclusión del Espacio (MONE) aprobado por la dirección",
          "Auditoría interna semestral usando el instrumento CENI Espacios",
          "Distintivo CENI publicado visiblemente con vigencia actualizada",
          "Plan de Mejora Continua (PMC) anual, con al menos una acción derivada del mystery client más reciente",
        ],
      },
    },
  ],
  actividades: [
    {
      codigo: "7.A",
      titulo: "Autoevaluación CENI Espacios",
      duracion: "en equipo",
      descripcion: "Evalúa el espacio en los 30 criterios con evidencia real disponible; calcula la puntuación por dimensión y total, e identifica la brecha hacia el nivel objetivo.",
    },
    {
      codigo: "7.B",
      titulo: "Planificación de horario de baja estimulación",
      duracion: "en equipo",
      descripcion: "Diseña un horario de baja estimulación: horarios, estímulos que se reducen, forma de comunicarlo al público, y responsable de implementación.",
    },
  ],
  evaluacion: [
    { componente: "Quiz de 15 preguntas sobre dimensiones y umbrales CENI Espacios", tipo: "Opción múltiple", valor: "25%" },
    { componente: "Autoevaluación CENI Espacios completada", tipo: "Práctica aplicada", valor: "50%" },
    { componente: "Planificación horario de baja estimulación", tipo: "Práctica estratégica", valor: "25%" },
  ],
  quiz: [
    {
      id: "m7q1",
      pregunta: "¿Cuál es el rango de iluminación recomendado en áreas de atención al público según CENI Espacios?",
      opciones: ["50–200 lux", "100–300 lux", "200–400 lux", "500–700 lux"],
      correcta: 2,
      explicacion: "E1-C2 establece un rango de 200–400 lux en todas las áreas de atención, sin parpadeo.",
    },
    {
      id: "m7q2",
      pregunta: "¿Cuál es el nivel máximo de ruido en áreas de atención y espera según E1-C1?",
      opciones: ["45 dB", "55 dB", "65 dB", "75 dB"],
      correcta: 1,
      explicacion: "E1-C1 exige ruido ≤ 55 dB durante el horario de servicio, con medición semestral.",
    },
    {
      id: "m7q3",
      pregunta: "¿Cuántas sesiones anuales de mystery client neurodivergente exige el criterio E5-C3?",
      opciones: ["Ninguna, es opcional", "Una", "Al menos dos", "Doce, una mensual"],
      correcta: 2,
      explicacion: "E5-C3 exige al menos dos sesiones anuales de mystery client neurodivergente, con informe y compromisos de mejora.",
    },
    {
      id: "m7q4",
      pregunta: "¿Qué tamaño mínimo debe tener el pictograma respecto al texto que acompaña, según E2-C1?",
      opciones: ["10% del tamaño del texto", "25% del tamaño del texto", "50% del tamaño del texto", "El doble del tamaño del texto"],
      correcta: 2,
      explicacion: "E2-C1 exige que el pictograma tenga al menos el 50% del tamaño del texto que acompaña.",
    },
    {
      id: "m7q5",
      pregunta: "¿En cuántos días hábiles como máximo debe procesarse una queja por barrera de accesibilidad neurodivergente (E5-C2)?",
      opciones: ["1 día", "5 días hábiles", "15 días hábiles", "30 días hábiles"],
      correcta: 1,
      explicacion: "E5-C2 exige que una queja se procese en máximo 5 días hábiles.",
    },
    {
      id: "m7q6",
      pregunta: "El kit sensorial de libre acceso al público (E4-C1) debe:",
      opciones: [
        "Requerir identificación y depósito",
        "No requerir identificación ni depósito",
        "Estar disponible solo para clientes VIP",
        "Cobrarse como servicio adicional",
      ],
      correcta: 1,
      explicacion: "E4-C1 exige que el kit sensorial no requiera identificación ni depósito.",
    },
    {
      id: "m7q7",
      pregunta: "¿Qué exige el criterio E5-C5 sobre precios y tarifas?",
      opciones: [
        "Pueden variar según el uso de apoyos",
        "Deben ser exactamente iguales, sin recargo por apoyos, tiempo adicional o acompañante",
        "Pueden tener un descuento pero no recargo",
        "No están regulados por CENI",
      ],
      correcta: 1,
      explicacion: "E5-C5 exige que los precios sean exactamente iguales, sin recargo por uso de apoyos, tiempo adicional o necesidad de acompañante.",
    },
    {
      id: "m7q8",
      pregunta: "¿Qué documento de gobernanza es específico de CENI Espacios (equivalente al RIN de CENI Laboral)?",
      opciones: ["El PMCN", "El MONE (Manual Operativo de Neuroinclusión del Espacio)", "El RIS", "El PDI"],
      correcta: 1,
      explicacion: "El MONE es el Manual Operativo de Neuroinclusión del Espacio, documento de gobernanza propio de CENI Espacios.",
    },
    {
      id: "m7q9",
      pregunta: "¿Qué formato de documentos exige E2-C4 para uso público frecuente?",
      opciones: ["Lenguaje técnico especializado", "Lectura Fácil", "Solo formato PDF sin imágenes", "Braille exclusivamente"],
      correcta: 1,
      explicacion: "E2-C4 exige que formularios e instrucciones de uso público estén disponibles en formato de Lectura Fácil.",
    },
    {
      id: "m7q10",
      pregunta: "¿Cuántas dimensiones valen 200 puntos en CENI Espacios?",
      opciones: ["Ninguna", "Una", "Dos (D1 y D5)", "Las seis"],
      correcta: 2,
      explicacion: "D1 (Accesibilidad sensorial) y D5 (Inclusión en servicios y procesos) valen 200 puntos cada una; el resto vale 150.",
    },
    {
      id: "m7q11",
      pregunta: "El acompañante de servicio (E4-C4) debe ofrecerse:",
      opciones: [
        "Con costo adicional siempre",
        "Sin costo adicional y sin tiempos de espera",
        "Solo si el usuario presenta diagnóstico",
        "Únicamente en horario nocturno",
      ],
      correcta: 1,
      explicacion: "E4-C4 exige que el acompañante de servicio se ofrezca sin costo adicional y sin tiempos de espera.",
    },
    {
      id: "m7q12",
      pregunta: "¿Qué exige E1-C5 sobre las rutas de circulación?",
      opciones: [
        "Deben tener contrastes visuales claros y evitar patrones complejos en zonas de tránsito",
        "Deben estar completamente vacías de señalización",
        "Deben tener alfombras con diseños llamativos",
        "No es un criterio contemplado en CENI Espacios",
      ],
      correcta: 0,
      explicacion: "E1-C5 exige contrastes visuales claros entre suelo, paredes y mobiliario, evitando patrones visuales complejos en zonas de tránsito.",
    },
    {
      id: "m7q13",
      pregunta: "El horario de baja estimulación (E4-C5) implica:",
      opciones: [
        "Cerrar el negocio completamente",
        "Periodos específicos donde se reducen intencionalmente los estímulos y el horario está publicado",
        "Aumentar la música ambiental para atraer más clientes",
        "Un beneficio exclusivo para empleados",
      ],
      correcta: 1,
      explicacion: "E4-C5 exige franjas de baja estimulación publicadas, con reducción intencional de música, luces fuertes y afluencia.",
    },
    {
      id: "m7q14",
      pregunta: "El co-diseño con personas neurodivergentes (E5-C4) debe realizarse:",
      opciones: [
        "Nunca, es opcional y no se evalúa",
        "Al menos una vez en los últimos 12 meses",
        "Una sola vez en la historia del espacio",
        "Solo si lo exige una autoridad",
      ],
      correcta: 1,
      explicacion: "E5-C4 exige al menos una consulta o co-diseño con personas neurodivergentes y/o familias en los últimos 12 meses.",
    },
    {
      id: "m7q15",
      pregunta: "¿Qué debe mostrar el espacio de forma visible al público según E6-C4?",
      opciones: [
        "Solo el logotipo de la empresa",
        "Su nivel de certificación CENI, fecha de vigencia y canal de contacto con Alianza Índigo",
        "Los estados financieros del negocio",
        "El organigrama interno",
      ],
      correcta: 1,
      explicacion: "E6-C4 exige publicar de manera visible el nivel de certificación, la fecha de vigencia y el canal de contacto con Alianza Índigo.",
    },
  ],
};

export default modulo7;
