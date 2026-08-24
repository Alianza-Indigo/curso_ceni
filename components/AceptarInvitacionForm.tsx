"use client";

import { useActionState } from "react";
import type { EstadoAceptarInvitacion } from "@/app/actions/auth";

type AccionAceptarInvitacion = (
  estadoPrevio: EstadoAceptarInvitacion,
  formData: FormData
) => Promise<EstadoAceptarInvitacion>;

export default function AceptarInvitacionForm({ accion }: { accion: AccionAceptarInvitacion }) {
  const [state, formAction, pending] = useActionState(accion, undefined);

  return (
    <form action={formAction} className="mt-4 w-full space-y-3 text-left">
      <div>
        <label htmlFor="password" className="mb-1 block text-xs font-black uppercase tracking-wide text-[#6c6690]">
          Crea una contraseña
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          minLength={8}
          autoComplete="new-password"
          className="min-h-11 w-full rounded-lg border border-[#e3dfef] px-3 text-sm outline-none focus-visible:border-[#4b18a8]"
        />
      </div>
      <div>
        <label
          htmlFor="confirmacion"
          className="mb-1 block text-xs font-black uppercase tracking-wide text-[#6c6690]"
        >
          Confirma tu contraseña
        </label>
        <input
          id="confirmacion"
          name="confirmacion"
          type="password"
          required
          minLength={8}
          autoComplete="new-password"
          className="min-h-11 w-full rounded-lg border border-[#e3dfef] px-3 text-sm outline-none focus-visible:border-[#4b18a8]"
        />
      </div>

      {state?.error && <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-[#7a2b2b]">{state.error}</p>}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-[#4b18a8] px-5 text-sm font-black uppercase text-[#4b18a8] hover:bg-[#f5f1ff] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {pending ? "Creando cuenta…" : "Crear contraseña y continuar"}
      </button>
    </form>
  );
}
