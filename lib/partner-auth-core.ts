import { timingSafeEqual } from "crypto";

/**
 * Lógica pura de lib/partner-auth.ts, separada para poder probarla con
 * Vitest sin arrastrar `import "server-only"` (ese paquete lanza un error
 * incondicional fuera del bundler de Next.js, así que ningún archivo que lo
 * importe puede probarse directamente en este repo — ver tests existentes).
 */

export function extraerBearer(header: string | null): string | null {
  if (!header) return null;
  const [esquema, key] = header.split(" ");
  if (esquema !== "Bearer" || !key) return null;
  return key;
}

export function compararEnTiempoConstante(a: string, b: string): boolean {
  const bufferA = Buffer.from(a);
  const bufferB = Buffer.from(b);
  if (bufferA.length !== bufferB.length) return false;
  return timingSafeEqual(bufferA, bufferB);
}
