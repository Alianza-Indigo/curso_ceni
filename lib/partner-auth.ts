import "server-only";
import { extraerBearer, compararEnTiempoConstante } from "@/lib/partner-auth-core";

/**
 * Autenticación server-to-server para las rutas /api/partner/* consumidas por
 * ceni_vercel. Requiere `Authorization: Bearer <PARTNER_API_KEY>`. Si la env
 * var no está configurada, rechaza siempre — nunca queda "abierto por
 * default".
 */
export function verificarApiKeyPartner(request: Request): boolean {
  const esperado = process.env.PARTNER_API_KEY;
  if (!esperado) return false;

  const key = extraerBearer(request.headers.get("authorization"));
  if (!key) return false;

  return compararEnTiempoConstante(key, esperado);
}
