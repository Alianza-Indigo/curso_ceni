"use client";

import { useActionState } from "react";
import { KeyRound } from "lucide-react";
import { cambiarPasswordAdminAction } from "@/app/actions/admin-auth";

export default function AdminCambiarPassword() {
  const [state, formAction, pending] = useActionState(cambiarPasswordAdminAction, undefined);

  return (
    <div className="rounded-2xl border border-[#e5def4] bg-white p-5">
      <h2 className="flex items-center gap-2 font-serif text-lg font-bold text-[#070b2f]">
        <KeyRound className="h-4 w-4 text-[#4b18a8]" /> Cambiar contraseña
      </h2>
      <form action={formAction} className="mt-3 grid gap-3 sm:grid-cols-3">
        <input
          type="password"
          name="actual"
          placeholder="Contraseña actual"
          required
          autoComplete="current-password"
          className="min-h-11 rounded-lg border border-[#e3dfef] px-3 text-sm outline-none focus-visible:border-[#4b18a8]"
        />
        <input
          type="password"
          name="nueva"
          placeholder="Nueva contraseña"
          required
          minLength={8}
          autoComplete="new-password"
          className="min-h-11 rounded-lg border border-[#e3dfef] px-3 text-sm outline-none focus-visible:border-[#4b18a8]"
        />
        <input
          type="password"
          name="confirmacion"
          placeholder="Confirma la nueva"
          required
          minLength={8}
          autoComplete="new-password"
          className="min-h-11 rounded-lg border border-[#e3dfef] px-3 text-sm outline-none focus-visible:border-[#4b18a8]"
        />
        <div className="sm:col-span-3">
          {state?.error && (
            <p className="mb-3 rounded-lg bg-red-50 px-3 py-2 text-sm text-[#7a2b2b]">{state.error}</p>
          )}
          {state?.ok && (
            <p className="mb-3 rounded-lg bg-green-50 px-3 py-2 text-sm text-green-800">
              Contraseña actualizada. Úsala la próxima vez que inicies sesión.
            </p>
          )}
          <button
            type="submit"
            disabled={pending}
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#4b18a8] px-5 text-sm font-black uppercase text-white hover:bg-[#351176] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {pending ? "Guardando…" : "Actualizar contraseña"}
          </button>
        </div>
      </form>
    </div>
  );
}
