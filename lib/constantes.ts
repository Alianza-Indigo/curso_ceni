export const UMBRAL_APROBATORIO_PCT = 70;

export const LIMITE_MENSAJES_ASISTENTE_DIA = 50;
export const CONTACTO_ALIANZA_INDIGO = "contacto@alianzaindigo.org";
export const MARCADOR_REDIRECCION_HUMANA = "[[REDIRECCION_HUMANA]]";

// El caso práctico final pide "formato escrito (mínimo 1,000 palabras)" — ver
// lib/data/examenFinal.ts#casoPracticoFinal.formato.
export const MIN_PALABRAS_CASO_PRACTICO = 1000;
// La retroalimentación del curso es cualitativa y abierta; el PDF no fija un mínimo,
// solo se exige un comentario real, no un campo vacío o trivial.
export const MIN_CARACTERES_RETROALIMENTACION = 30;

// --- Invitaciones de organizaciones (ceni_vercel) ---
export const DIAS_EXPIRACION_INVITACION = 7;
// Límite de invitaciones que una misma organización puede crear por hora —
// protege contra un bug/loop del lado de ceni_vercel, no contra un atacante
// externo (el tráfico es server-to-server con una sola API key compartida).
export const LIMITE_INVITACIONES_POR_HORA_POR_ORG = 100;

// --- Login por contraseña (empleados invitados) ---
export const LIMITE_INTENTOS_PASSWORD = 5;
export const MINUTOS_BLOQUEO_PASSWORD = 15;
