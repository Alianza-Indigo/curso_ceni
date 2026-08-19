"use client";

import { useActionState } from "react";
import { iniciarSesionConCredencialesAction } from "@/app/actions/auth";

export default function PasswordLoginForm({ callbackUrl }: { callbackUrl?: string }) {
  const [state, formAction, pending] = useActionState(iniciarSesionConCredencialesAction, undefined);

  return (
    <form action={formAction} className="mt-6 w-full space-y-3 text-left">
      <input type="hidden" name="callbackUrl" value={callbackUrl ?? "/"} />
      <div>
        <label htmlFor="email" className="mb-1 block text-xs font-black uppercase tracking-wide text-[#6c6690]">
          Correo
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="username"
          className="min-h-11 w-full rounded-lg border border-[#e3dfef] px-3 text-sm outline-none focus-visible:border-[#4b18a8]"
        />
      </div>
      <div>
        <label htmlFor="password" className="mb-1 block text-xs font-black uppercase tracking-wide text-[#6c6690]">
          Contraseña
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          className="min-h-11 w-full rounded-lg border border-[#e3dfef] px-3 text-sm outline-none focus-visible:border-[#4b18a8]"
        />
      </div>

      {state?.error && <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-[#7a2b2b]">{state.error}</p>}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-[#4b18a8] px-5 text-sm font-black uppercase text-white hover:bg-[#351176] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {pending ? "Entrando…" : "Entrar con contraseña"}
      </button>
    </form>
  );
}
