"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Actividad } from "@/lib/types";
import { Sparkles, CheckCircle2 } from "lucide-react";

const CONTENIDO_MIN = 20;

export default function ActividadesEntrega({
  moduloId,
  actividades,
  entregasIniciales,
}: {
  moduloId: string;
  actividades: Actividad[];
  entregasIniciales: Record<string, string>;
}) {
  const router = useRouter();
  const [valores, setValores] = useState<Record<string, string>>(() => {
    const v: Record<string, string> = {};
    actividades.forEach((a) => {
      v[a.codigo] = entregasIniciales[a.codigo] ?? "";
    });
    return v;
  });
  const [guardados, setGuardados] = useState<Record<string, boolean>>(() => {
    const g: Record<string, boolean> = {};
    actividades.forEach((a) => {
      g[a.codigo] = Boolean(entregasIniciales[a.codigo]);
    });
    return g;
  });
  const [enviando, setEnviando] = useState<string | null>(null);
  const [errores, setErrores] = useState<Record<string, string>>({});

  if (!actividades.length) return null;

  async function guardar(codigo: string) {
    const contenido = (valores[codigo] ?? "").trim();
    if (contenido.length < CONTENIDO_MIN) {
      setErrores((e) => ({ ...e, [codigo]: `Escribe al menos ${CONTENIDO_MIN} caracteres antes de guardar.` }));
      return;
    }
    setEnviando(codigo);
    setErrores((e) => ({ ...e, [codigo]: "" }));
    const res = await fetch("/api/progreso/actividad", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ moduloId, actividadCodigo: codigo, contenido }),
    });
    setEnviando(null);
    if (res.ok) {
      setGuardados((g) => ({ ...g, [codigo]: true }));
      router.refresh();
    } else {
      const data = await res.json().catch(() => ({}));
      setErrores((e) => ({ ...e, [codigo]: data.error ?? "No se pudo guardar. Intenta de nuevo." }));
    }
  }

  return (
    <section className="mb-8">
      <h3 className="flex items-center gap-2 font-serif text-xl font-bold text-[#070b2f]">
        <Sparkles className="h-5 w-5 text-[#dda632]" /> Actividades del módulo
      </h3>
      <p className="mt-1 text-sm text-[#6c6690]">
        Entrega tu producto de cada actividad — el módulo solo cuenta como completo cuando el quiz está
        aprobado y todas las actividades tienen entrega, tal como pondera la tabla de evaluación de arriba.
      </p>
      <div className="mt-3 grid gap-3">
        {actividades.map((a) => (
          <div key={a.codigo} className="rounded-xl border border-[#e5def4] bg-white p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-xs font-black uppercase tracking-wide text-[#4b18a8]">
                Actividad {a.codigo} · {a.duracion}
              </p>
              {guardados[a.codigo] && (
                <span className="inline-flex items-center gap-1 text-xs font-bold text-green-700">
                  <CheckCircle2 className="h-3.5 w-3.5" /> Entregada
                </span>
              )}
            </div>
            <p className="mt-1 font-bold text-[#070b2f]">{a.titulo}</p>
            <p className="mt-1 text-sm leading-relaxed text-[#3a3d63]">{a.descripcion}</p>
            <textarea
              className="mt-3 w-full rounded-lg border border-[#e3dfef] p-3 text-sm text-[#20234a] focus:border-[#4b18a8] focus:outline-none"
              rows={4}
              placeholder="Escribe aquí tu entregable de esta actividad..."
              value={valores[a.codigo] ?? ""}
              onChange={(e) => setValores((v) => ({ ...v, [a.codigo]: e.target.value }))}
            />
            {errores[a.codigo] && <p className="mt-1 text-xs text-red-700">{errores[a.codigo]}</p>}
            <button
              type="button"
              onClick={() => guardar(a.codigo)}
              disabled={enviando === a.codigo}
              className="mt-2 inline-flex min-h-9 items-center rounded-lg bg-[#4b18a8] px-4 text-xs font-black uppercase text-white hover:bg-[#351176] disabled:opacity-60"
            >
              {enviando === a.codigo ? "Guardando..." : guardados[a.codigo] ? "Actualizar entrega" : "Guardar entrega"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
