import { NextResponse } from "next/server";
import { verificarApiKeyPartner } from "@/lib/partner-auth";
import { obtenerProgresoResumenOrganizacion } from "@/lib/progreso-server";

/**
 * Server-to-server: progreso agregado de los empleados de una organización.
 * Consumido por el panel de ceni_vercel. Autenticado con
 * `Authorization: Bearer PARTNER_API_KEY`.
 */
export async function GET(request: Request) {
  if (!verificarApiKeyPartner(request)) {
    return NextResponse.json({ ok: false, motivo: "no_autorizado" }, { status: 401 });
  }

  const organizacionId = new URL(request.url).searchParams.get("organizacionId");
  if (!organizacionId) {
    return NextResponse.json({ ok: false, motivo: "falta_organizacionId" }, { status: 400 });
  }

  const resumen = await obtenerProgresoResumenOrganizacion(organizacionId);
  return NextResponse.json({ ok: true, ...resumen });
}
