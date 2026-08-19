import { NextResponse } from "next/server";
import { verificarApiKeyPartner } from "@/lib/partner-auth";
import { crearInvitacion } from "@/lib/invitaciones-server";

/**
 * Server-to-server: crea (o reutiliza) una invitación de curso para un
 * empleado y dispara el correo. Consumido por ceni_vercel desde el panel de
 * la organización. Autenticado con `Authorization: Bearer PARTNER_API_KEY`.
 */
export async function POST(request: Request) {
  if (!verificarApiKeyPartner(request)) {
    return NextResponse.json({ ok: false, motivo: "no_autorizado" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const email = body?.email;
  const organizacionId = body?.organizacionId;
  const invitadoPor = body?.invitadoPor;

  if (
    typeof email !== "string" ||
    !email.includes("@") ||
    typeof organizacionId !== "string" ||
    !organizacionId ||
    (invitadoPor !== undefined && typeof invitadoPor !== "string")
  ) {
    return NextResponse.json({ ok: false, motivo: "cuerpo_invalido" }, { status: 400 });
  }

  const resultado = await crearInvitacion({
    email,
    organizacionId,
    invitadoPor,
    origin: new URL(request.url).origin,
  });

  if (!resultado.ok) {
    const status = resultado.motivo === "limite_excedido" ? 429 : 409;
    return NextResponse.json(resultado, { status });
  }

  return NextResponse.json(resultado, { status: 201 });
}
