import "server-only";
import { Resend } from "resend";

function plantillaInvitacionHtml(urlInvitacion: string): string {
  return `
    <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto; color: #070b2f;">
      <p style="font-size: 12px; font-weight: 900; text-transform: uppercase; color: #dda632;">
        Curso CENI
      </p>
      <h1 style="font-size: 20px; margin: 8px 0 16px;">Te invitaron a certificarte</h1>
      <p style="font-size: 14px; line-height: 1.5;">
        Tu empresa te invitó a tomar el Curso CENI — Certificación de Entornos Neuroinclusivos.
        Da clic en el siguiente enlace para comenzar:
      </p>
      <p style="margin: 24px 0;">
        <a
          href="${urlInvitacion}"
          style="background: #4b18a8; color: #fff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 900; text-transform: uppercase; font-size: 13px;"
        >
          Aceptar invitación
        </a>
      </p>
      <p style="font-size: 12px; color: #6c6690;">
        Si el botón no funciona, copia y pega este enlace en tu navegador:<br />
        <a href="${urlInvitacion}">${urlInvitacion}</a>
      </p>
      <p style="font-size: 12px; color: #6c6690;">Este enlace expira en unos días.</p>
    </div>
  `.trim();
}

export type ResultadoEnvioEmail = { ok: boolean; error?: string };

export async function enviarEmailInvitacion(params: {
  email: string;
  urlInvitacion: string;
}): Promise<ResultadoEnvioEmail> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("enviarEmailInvitacion: RESEND_API_KEY no configurada, no se envió el correo");
    return { ok: false, error: "RESEND_API_KEY no configurada" };
  }

  const resend = new Resend(apiKey);
  const remitente = process.env.RESEND_FROM_EMAIL ?? "Curso CENI <curso@alianzaindigo.org>";

  const { error } = await resend.emails.send({
    from: remitente,
    to: params.email,
    subject: "Te invitaron a certificarte en el Curso CENI",
    html: plantillaInvitacionHtml(params.urlInvitacion),
    text: `Te invitaron a tomar el Curso CENI. Ingresa aquí: ${params.urlInvitacion} (el enlace expira en unos días).`,
  });

  if (error) {
    console.error("enviarEmailInvitacion: fallo al enviar con Resend", error);
    return { ok: false, error: error.message };
  }
  return { ok: true };
}
