"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { RotateCcw } from "lucide-react";

export default function ReiniciarProgreso() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  function handleReiniciar() {
    if (!window.confirm("¿Reiniciar todo tu progreso del curso? Esta acción no se puede deshacer.")) {
      return;
    }
    startTransition(async () => {
      await fetch("/api/progreso/reset", { method: "POST" });
      router.refresh();
    });
  }

  return (
    <button
      type="button"
      onClick={handleReiniciar}
      disabled={pending}
      className="inline-flex items-center gap-2 text-xs font-bold text-[#a37f00] hover:underline disabled:opacity-50"
    >
      <RotateCcw className="h-3.5 w-3.5" /> {pending ? "Reiniciando…" : "Reiniciar mi progreso"}
    </button>
  );
}
