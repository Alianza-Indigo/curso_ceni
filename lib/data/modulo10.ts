import { Modulo } from "@/lib/types";

const modulo10: Modulo = {
  id: "m10",
  numero: 10,
  titulo: "Preparación para la Certificación CENI",
  duracion: "60 minutos",
  dirigidoA: "Responsable de Neuroinclusión, propietarios, directivos",
  objetivos: [
    "Conocer el proceso completo de solicitud, evaluación y obtención de la certificación CENI.",
    "Organizar el expediente de evidencias de manera que cumpla los requisitos del auditor.",
    "Entender los plazos, costos, dictamen y renovación de la certificación.",
    "Preparar la organización para la visita de auditoría in situ.",
  ],
  secciones: [
    {
      titulo: "10.1 Proceso de certificación paso a paso",
      parrafos: ["La certificación CENI sigue un proceso estándar de seis etapas."],
      tabla: {
        encabezados: ["Etapa", "Descripción"],
        filas: [
          ["1 — Solicitud", "Formulario en alianzaindigo.org, especificando línea (Laboral, Espacios o ambas) y nivel objetivo"],
          ["2 — Asignación de auditor", "Alianza Índigo asigna un auditor certificado no vinculado con la organización"],
          ["3 — Expediente documental", "Se sube el expediente organizado por dimensión y criterio; el auditor acusa recibo en 5 días hábiles"],
          ["4 — Auditoría in situ", "Visita de 4–8 horas: mediciones sensoriales, entrevistas confidenciales a 3–5 personas, mystery client"],
          ["5 — Dictamen", "El auditor emite puntuación por dimensión, total, nivel y recomendaciones en 10 días hábiles"],
          ["6 — Emisión del certificado", "Certificado digital con folio verificable, distintivo físico y acceso al RENAP-ND"],
        ],
      },
    },
    {
      titulo: "10.2 Checklist de cumplimiento pre-auditoría",
      parrafos: [],
      lista: {
        titulo: "Documentación obligatoria",
        items: [
          "RIN o MONE aprobado y vigente",
          "Plan de Mejora Continua de Neuroinclusión vigente",
          "Registros de al menos dos auditorías internas",
          "Constancias de capacitación del 80% del personal de gestión",
          "Registro de Incidentes Sensoriales (aunque esté vacío)",
          "Canal de retroalimentación activo con al menos un registro de uso",
        ],
      },
      destacado: {
        titulo: "Condiciones físicas y de accesibilidad verificables",
        texto:
          "Espacio de calma implementado y señalizado; mediciones de ruido e iluminación de los últimos 6 meses; mapa sensorial publicado; señalización con pictogramas; kit sensorial documentado; tablero de comunicación o SAAC; documento en Lectura Fácil; canal de atención escrita señalizado.",
      },
    },
    {
      titulo: "10.3 Organización del expediente de evidencias",
      parrafos: [
        "El expediente se organiza siguiendo la estructura oficial: una carpeta por dimensión, una subcarpeta por criterio, con archivos nombrados como [LÍNEA]-[DIMENSIÓN]-[CRITERIO]-[NOMBRE_CORTO]. Ejemplo: LABORAL-D1-C2-PROTOCOLO_SELECCION.pdf",
      ],
      lista: {
        titulo: "Tipos de evidencia aceptados",
        items: [
          "Documentos PDF: protocolos, políticas, reglamentos, registros, informes",
          "Fotografías en alta resolución de espacios, señalización y recursos",
          "Registros de medición con fecha, hora e instrumento",
          "Constancias y diplomas de capacitación del personal",
          "Capturas de pantalla de canales digitales",
          "Videos cortos (máximo 3 minutos)",
        ],
      },
    },
    {
      titulo: "10.4 Renovación de la certificación",
      parrafos: [],
      tabla: {
        encabezados: ["Nivel", "Proceso de renovación"],
        filas: [
          ["Bronce (1 año)", "Informe de avances y nueva autoevaluación; puede solicitar subir a Plata si alcanza 750+ puntos"],
          ["Plata (2 años)", "Proceso completo con auditoría documental; visita in situ aleatoria (50% de renovaciones)"],
          ["Oro (3 años)", "Auditoría de renovación completa con visita in situ obligatoria y mystery client actualizado"],
        ],
      },
    },
  ],
  actividades: [
    {
      codigo: "10.A",
      titulo: "Checklist de cumplimiento completado",
      duracion: "individual",
      descripcion: "Completa el checklist de cumplimiento pre-auditoría para tu propia organización.",
    },
    {
      codigo: "10.B",
      titulo: "Simulacro de organización de expediente",
      duracion: "en equipo",
      descripcion: "Organiza un expediente de evidencias de muestra siguiendo la nomenclatura oficial CENI.",
    },
  ],
  evaluacion: [
    { componente: "Quiz de 10 preguntas sobre el proceso de certificación", tipo: "Opción múltiple", valor: "30%" },
    { componente: "Checklist de cumplimiento completado para la organización propia", tipo: "Práctica aplicada", valor: "40%" },
    { componente: "Simulacro de organización de expediente con evidencias de muestra", tipo: "Práctica documental", valor: "30%" },
  ],
  quiz: [
    {
      id: "m10q1",
      pregunta: "¿Cuántas etapas tiene el proceso de certificación CENI?",
      opciones: ["Tres", "Cuatro", "Seis", "Diez"],
      correcta: 2,
      explicacion: "El proceso de certificación tiene seis etapas: solicitud, asignación de auditor, expediente documental, auditoría in situ, dictamen y emisión del certificado.",
    },
    {
      id: "m10q2",
      pregunta: "¿En cuántos días hábiles emite el auditor el dictamen tras la auditoría in situ?",
      opciones: ["3 días", "5 días", "10 días", "30 días"],
      correcta: 2,
      explicacion: "El auditor emite el dictamen en 10 días hábiles después de la etapa de auditoría in situ.",
    },
    {
      id: "m10q3",
      pregunta: "¿Cuál es la duración típica de la visita de auditoría in situ?",
      opciones: ["1–2 horas", "4–8 horas", "24 horas", "Una semana completa"],
      correcta: 1,
      explicacion: "La visita in situ dura entre 4 y 8 horas, según el tamaño del espacio.",
    },
    {
      id: "m10q4",
      pregunta: "¿Qué nomenclatura de archivo es correcta según la estructura oficial del expediente?",
      opciones: [
        "documento_final.pdf",
        "LABORAL-D1-C2-PROTOCOLO_SELECCION.pdf",
        "IMG_2024.jpg",
        "sin_nombre.docx",
      ],
      correcta: 1,
      explicacion: "La nomenclatura oficial es [LÍNEA]-[DIMENSIÓN]-[CRITERIO]-[NOMBRE_CORTO], por ejemplo LABORAL-D1-C2-PROTOCOLO_SELECCION.pdf.",
    },
    {
      id: "m10q5",
      pregunta: "¿Qué porcentaje de las renovaciones de nivel Plata incluye visita in situ aleatoria?",
      opciones: ["10%", "25%", "50%", "100%, siempre obligatoria"],
      correcta: 2,
      explicacion: "En el nivel Plata, la auditoría in situ es aleatoria: 50% de las renovaciones Plata incluyen visita presencial.",
    },
    {
      id: "m10q6",
      pregunta: "¿Qué documento es obligatorio para el checklist de cumplimiento pre-auditoría, incluso si está vacío?",
      opciones: [
        "El Registro de Incidentes Sensoriales (RIS)",
        "El estado de resultados financiero",
        "El contrato de arrendamiento",
        "El manual de marca",
      ],
      correcta: 0,
      explicacion: "El RIS debe presentarse aunque esté vacío, ya que acredita que el sistema de registro está implementado.",
    },
    {
      id: "m10q7",
      pregunta: "¿Qué tipo de evidencia de video se acepta en el expediente CENI?",
      opciones: [
        "Videos de cualquier duración",
        "Videos cortos, máximo 3 minutos",
        "No se aceptan videos",
        "Solo videos en vivo durante la auditoría",
      ],
      correcta: 1,
      explicacion: "Se aceptan videos cortos de máximo 3 minutos como evidencia documental.",
    },
    {
      id: "m10q8",
      pregunta: "Para la renovación del nivel Oro, ¿qué se exige obligatoriamente?",
      opciones: [
        "Ninguna auditoría adicional",
        "Visita in situ obligatoria y mystery client actualizado del año anterior al vencimiento",
        "Solo una autoevaluación sin verificación externa",
        "Renovación automática sin trámite",
      ],
      correcta: 1,
      explicacion: "La renovación Oro exige auditoría de renovación completa con visita in situ obligatoria y mystery client actualizado.",
    },
    {
      id: "m10q9",
      pregunta: "¿Qué porcentaje mínimo del personal de gestión debe tener constancias de capacitación para pasar el checklist pre-auditoría?",
      opciones: ["50%", "80%", "100% sin excepción", "No se exige ningún porcentaje"],
      correcta: 1,
      explicacion: "El checklist exige constancias de capacitación del 80% del personal de gestión.",
    },
    {
      id: "m10q10",
      pregunta: "Cuando una organización con nivel Bronce alcanza 750+ puntos en su renovación, ¿qué puede solicitar?",
      opciones: ["Nada, debe esperar el ciclo completo de Bronce", "Subir directamente a nivel Plata", "Renunciar a la certificación", "Solicitar auditoría en otro país"],
      correcta: 1,
      explicacion: "Si al renovar su nivel Bronce la organización aumentó a 750+ puntos, puede solicitar subir a Plata.",
    },
  ],
};

export default modulo10;
