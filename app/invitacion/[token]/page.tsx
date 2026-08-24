import { redirect } from "next/navigation";
import { GraduationCap, XCircle } from "lucide-react";
import { auth } from "@/auth";
import { obtenerInvitacionPorToken, aceptarInvitacion } from "@/lib/invitaciones-server";
import { signInGoogleParaInvitacionAction, crearContrasenaYAceptarAction, signOutAction } from "@/app/actions/auth";
import AceptarInvitacionForm from "@/components/AceptarInvitacionForm";

export const metadata = { title: "Invitación al curso · Curso CENI" };

function Encabezado({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center px-4 py-24 text-center">
      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#4b18a8] text-white">
        <GraduationCap className="h-7 w-7" aria-hidden="true" />
      </span>
      <h1 className="mt-6 font-serif text-2xl font-black text-[#070b2f]">Curso CENI</h1>
      {children}
    </div>
  );
}

function MensajeError({ titulo, detalle }: { titulo: string; detalle: string }) {
  return (
    <Encabezado>
      <div className="mt-6 flex w-full items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-4 text-left text-sm text-red-900">
        <XCircle className="h-5 w-5 shrink-0" />
        <div>
          <p className="font-bold">{titulo}</p>
          <p className="mt-1">{detalle}</p>
        </div>
      </div>
    </Encabezado>
  );
}

export default async function InvitacionPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  const invitacion = await obtenerInvitacionPorToken(token);

  if (!invitacion) {
    return (
      <MensajeError
        titulo="Invitación no encontrada"
        detalle="Este enlace no es válido. Pide a tu empresa que te envíe uno nuevo."
      />
    );
  }

  if (invitacion.estado === "EXPIRADA") {
    return (
      <MensajeError
        titulo="Invitación expirada"
        detalle="Este enlace ya venció. Pide a tu empresa que te reenvíe la invitación."
      />
    );
  }

  if (invitacion.estado === "ACEPTADA") {
    return (
      <MensajeError
        titulo="Invitación ya utilizada"
        detalle="Esta invitación ya fue aceptada. Inicia sesión normalmente desde /login."
      />
    );
  }

  const session = await auth();

  if (session?.user?.email) {
    const coincide = session.user.email.trim().toLowerCase() === invitacion.email.toLowerCase();
    if (!coincide) {
      return (
        <Encabezado>
          <div className="mt-6 w-full rounded-xl border border-[#dda632] bg-[#fff8e8] p-4 text-left text-sm text-[#5a4300]">
            <p className="font-bold">Esta invitación es para {invitacion.email}</p>
            <p className="mt-1">
              Tu sesión activa es de <span className="font-mono">{session.user.email}</span>. Cierra sesión e
              intenta de nuevo con la cuenta correcta.
            </p>
          </div>
          <form action={signOutAction} className="mt-4 w-full">
            <button
              type="submit"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-[#e3dfef] bg-white px-5 text-sm font-black uppercase text-[#070b2f] hover:bg-[#f5f1ff]"
            >
              Cerrar sesión
            </button>
          </form>
        </Encabezado>
      );
    }

    const resultado = await aceptarInvitacion(token, session.user.id, session.user.email);
    if (!resultado.ok) {
      return (
        <MensajeError
          titulo="No se pudo aceptar la invitación"
          detalle="Intenta de nuevo en unos minutos o pide a tu empresa un enlace nuevo."
        />
      );
    }
    redirect("/");
  }

  const signInGoogleAction = signInGoogleParaInvitacionAction.bind(null, token);
  const aceptarConPasswordAction = crearContrasenaYAceptarAction.bind(null, token);

  return (
    <Encabezado>
      <p className="mt-2 text-sm text-[#6c6690]">Tu empresa te invitó a certificarte</p>
      <p className="mt-6 text-sm text-[#20234a]">
        Te invitaron con el correo <span className="font-mono font-bold">{invitacion.email}</span>. Elige cómo
        quieres continuar:
      </p>

      <form action={signInGoogleAction} className="mt-8 w-full">
        <button
          type="submit"
          className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-lg border border-[#e3dfef] bg-white px-6 text-sm font-black uppercase text-[#070b2f] shadow-sm hover:bg-[#f5f1ff]"
        >
          Continuar con Google
        </button>
      </form>

      <div className="mt-6 flex w-full items-center gap-3 text-xs font-black uppercase tracking-wide text-[#6c6690]">
        <span className="h-px flex-1 bg-[#e3dfef]" />
        o
        <span className="h-px flex-1 bg-[#e3dfef]" />
      </div>

      <AceptarInvitacionForm accion={aceptarConPasswordAction} />
    </Encabezado>
  );
}
