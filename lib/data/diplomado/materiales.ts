export type FormatoDiplomado = {
  codigo: string;
  nombre: string;
  formato: string;
  archivo: string;
  modulo: string;
  // true = instrumento oficial basado en las Guías de Referencia de la NOM-035
  // (texto normativo del DOF). false/undefined = plantilla de apoyo que el
  // centro de trabajo debe elaborar (la norma no publica un formato oficial).
  oficial?: boolean;
};

// Instrumentos oficiales de la NOM-035 (Guías de Referencia del DOF). Se
// reutilizan los mismos archivos ya generados para el curso CENI.
export const instrumentosOficialesDiplomado: FormatoDiplomado[] = [
  {
    codigo: "F-19",
    nombre: "Cuestionario oficial — Guía de Referencia II (16–50 trabajadores, 46 reactivos) con calificación automática",
    formato: "Excel",
    archivo: "/recursos/nom035/F-19_Cuestionario_Guia_II_NOM-035.xlsx",
    modulo: "Módulos 10 y 12 — Instrumentos y cálculo",
    oficial: true,
  },
  {
    codigo: "F-20",
    nombre: "Cuestionario oficial — Guía de Referencia III (más de 50 trabajadores, 72 reactivos) con calificación automática",
    formato: "Excel",
    archivo: "/recursos/nom035/F-20_Cuestionario_Guia_III_NOM-035.xlsx",
    modulo: "Módulos 10 y 12 — Instrumentos y cálculo",
    oficial: true,
  },
  {
    codigo: "F-16",
    nombre: "Modelo de política de prevención de riesgos psicosociales (base Guía de Referencia IV)",
    formato: "Word",
    archivo: "/recursos/nom035/F-16_Politica_Prevencion_Riesgos_Psicosociales_NOM-035.docx",
    modulo: "Módulo 5 — Obligaciones y política",
    oficial: true,
  },
  {
    codigo: "F-17",
    nombre: "Checklist de cumplimiento NOM-035-STPS-2018",
    formato: "Excel",
    archivo: "/recursos/nom035/F-17_Checklist_Cumplimiento_NOM-035.xlsx",
    modulo: "Módulo 17 — Documentación y auditoría",
    oficial: true,
  },
];

// Plantillas de apoyo: la NOM-035 obliga a elaborarlas, pero NO publica un
// formato oficial. Son plantillas de trabajo del diplomado, adaptables.
export const plantillasApoyoDiplomado: FormatoDiplomado[] = [
  {
    codigo: "DIP-06",
    nombre: "Modelo de costo de no-hacer y ROI",
    formato: "Excel",
    archivo: "/recursos/diplomado/DIP-06_Costo_No_Hacer_ROI.xlsx",
    modulo: "Módulo 1 — Fundamentos estratégicos",
  },
  {
    codigo: "DIP-04",
    nombre: "Procedimiento de ajustes razonables (solicitud y resolución)",
    formato: "Word",
    archivo: "/recursos/diplomado/DIP-04_Procedimiento_Ajustes_Razonables.docx",
    modulo: "Módulo 7 — Derechos y ajustes razonables",
  },
  {
    codigo: "DIP-02",
    nombre: "Protocolo de respuesta ante ATS",
    formato: "Word",
    archivo: "/recursos/diplomado/DIP-02_Protocolo_ATS.docx",
    modulo: "Módulos 8-9 — Acontecimientos Traumáticos Severos",
  },
  {
    codigo: "F-18",
    nombre: "Anexo neurodivergente al cuestionario de factores de riesgo psicosocial",
    formato: "Excel",
    archivo: "/recursos/nom035/F-18_Anexo_Neurodivergente_Instrumento.xlsx",
    modulo: "Módulo 10 — Instrumentos de evaluación",
  },
  {
    codigo: "DIP-07",
    nombre: "Programa de medidas de prevención y control",
    formato: "Excel",
    archivo: "/recursos/diplomado/DIP-07_Programa_Intervencion.xlsx",
    modulo: "Módulo 14 — Diseño de medidas",
  },
  {
    codigo: "DIP-05",
    nombre: "Matriz de trazabilidad y checklist de expediente",
    formato: "Excel",
    archivo: "/recursos/diplomado/DIP-05_Matriz_Trazabilidad_Expediente.xlsx",
    modulo: "Módulo 17 — Documentación y auditoría",
  },
  {
    codigo: "DIP-03",
    nombre: "Aviso de privacidad NOM-035",
    formato: "Word",
    archivo: "/recursos/diplomado/DIP-03_Aviso_Privacidad_NOM035.docx",
    modulo: "Módulo 19 — Ética y protección de datos",
  },
];

// Lista combinada (para validaciones y listados simples).
export const formatosDiplomado: FormatoDiplomado[] = [
  ...instrumentosOficialesDiplomado,
  ...plantillasApoyoDiplomado,
];

// Plantillas/instrumentos asociados a cada módulo (sección "Descargas del módulo").
export const recursosPorModuloDiplomado: Record<
  string,
  { codigo: string; nombre: string; archivo: string; formato: string }[]
> = {
  d01: [{ codigo: "DIP-06", nombre: "Modelo de costo de no-hacer y ROI", archivo: "/recursos/diplomado/DIP-06_Costo_No_Hacer_ROI.xlsx", formato: "Excel" }],
  d05: [{ codigo: "F-16", nombre: "Modelo de política de prevención (base Guía IV, oficial)", archivo: "/recursos/nom035/F-16_Politica_Prevencion_Riesgos_Psicosociales_NOM-035.docx", formato: "Word" }],
  d07: [{ codigo: "DIP-04", nombre: "Procedimiento de ajustes razonables", archivo: "/recursos/diplomado/DIP-04_Procedimiento_Ajustes_Razonables.docx", formato: "Word" }],
  d08: [{ codigo: "DIP-02", nombre: "Protocolo de respuesta ante ATS", archivo: "/recursos/diplomado/DIP-02_Protocolo_ATS.docx", formato: "Word" }],
  d09: [{ codigo: "DIP-02", nombre: "Protocolo de respuesta ante ATS", archivo: "/recursos/diplomado/DIP-02_Protocolo_ATS.docx", formato: "Word" }],
  d10: [
    { codigo: "F-19", nombre: "Cuestionario oficial Guía II (46 reactivos)", archivo: "/recursos/nom035/F-19_Cuestionario_Guia_II_NOM-035.xlsx", formato: "Excel" },
    { codigo: "F-20", nombre: "Cuestionario oficial Guía III (72 reactivos)", archivo: "/recursos/nom035/F-20_Cuestionario_Guia_III_NOM-035.xlsx", formato: "Excel" },
    { codigo: "F-18", nombre: "Anexo neurodivergente (complementario)", archivo: "/recursos/nom035/F-18_Anexo_Neurodivergente_Instrumento.xlsx", formato: "Excel" },
  ],
  d12: [
    { codigo: "F-19", nombre: "Cuestionario oficial Guía II con calificación automática", archivo: "/recursos/nom035/F-19_Cuestionario_Guia_II_NOM-035.xlsx", formato: "Excel" },
    { codigo: "F-20", nombre: "Cuestionario oficial Guía III con calificación automática", archivo: "/recursos/nom035/F-20_Cuestionario_Guia_III_NOM-035.xlsx", formato: "Excel" },
  ],
  d14: [{ codigo: "DIP-07", nombre: "Programa de medidas de prevención y control", archivo: "/recursos/diplomado/DIP-07_Programa_Intervencion.xlsx", formato: "Excel" }],
  d17: [
    { codigo: "F-17", nombre: "Checklist de cumplimiento NOM-035", archivo: "/recursos/nom035/F-17_Checklist_Cumplimiento_NOM-035.xlsx", formato: "Excel" },
    { codigo: "DIP-05", nombre: "Matriz de trazabilidad y checklist de expediente", archivo: "/recursos/diplomado/DIP-05_Matriz_Trazabilidad_Expediente.xlsx", formato: "Excel" },
  ],
  d19: [{ codigo: "DIP-03", nombre: "Aviso de privacidad NOM-035", archivo: "/recursos/diplomado/DIP-03_Aviso_Privacidad_NOM035.docx", formato: "Word" }],
};

export const glosarioDiplomado: { termino: string; definicion: string }[] = [
  { termino: "Factor de riesgo psicosocial", definicion: "Condición del trabajo (carga, control, jornada, liderazgo, violencia, etc.) que puede provocar trastornos por estrés según la NOM-035." },
  { termino: "Entorno organizacional favorable (EOF)", definicion: "Conjunto de condiciones que promueven el sentido de pertenencia, la formación y la definición clara de responsabilidades." },
  { termino: "Acontecimiento Traumático Severo (ATS)", definicion: "Evento que puede generar trastorno de estrés postraumático; se identifica y canaliza con la Guía I, sin diagnosticar." },
  { termino: "Guías de Referencia", definicion: "Los cinco cuestionarios/anexos de la NOM-035 (I a V): Guía I (ATS), Guía II (46 reactivos, 16–50 trabajadores), Guía III (72 reactivos, +50), Guía IV (ejemplo de política) y Guía V (datos y confidencialidad)." },
  { termino: "Prevención primaria", definicion: "Medidas que actúan sobre la fuente del riesgo (rediseño del trabajo); al menos el 60% del programa debe ser de este tipo." },
  { termino: "Ajuste razonable", definicion: "Modificación necesaria y adecuada que no impone carga desproporcionada; nunca exige diagnóstico ni revelación." },
  { termino: "Control de convencionalidad", definicion: "Obligación de verificar que normas y actos internos sean compatibles con los tratados de derechos humanos." },
  { termino: "Neurodivergencia", definicion: "Variación natural del funcionamiento neurológico (autismo, TDAH, dislexia, etc.); se leen entornos, no se diagnostican personas." },
  { termino: "Enmascaramiento (masking)", definicion: "Esfuerzo por ocultar rasgos neurodivergentes para encajar; tiene un costo de agotamiento y salud." },
  { termino: "Discriminación indirecta", definicion: "Norma o práctica aparentemente neutral que desfavorece a un grupo protegido sin justificación objetiva." },
  { termino: "Trazabilidad", definicion: "Cadena verificable hallazgo → medida → verificación de eficacia dentro del expediente NOM-035." },
  { termino: "Umbral mínimo de agregación", definicion: "Tamaño mínimo de grupo para reportar resultados sin permitir reidentificar a las personas." },
  { termino: "Agente Capacitador Externo (ACE)", definicion: "Persona o entidad registrada ante la STPS que puede emitir constancias DC-3 a trabajadores." },
  { termino: "Constancia DC-3", definicion: "Formato oficial de la STPS de competencias/habilidades laborales; se emite a trabajadores vía un ACE, no a particulares." },
  { termino: "Certificación CENI", definicion: "Esquema privado y voluntario de Alianza Índigo (Bronce/Plata/Oro); no es oficial ni sustituye a la NOM-035." },
];
