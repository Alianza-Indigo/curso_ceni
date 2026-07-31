"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { MIN_PALABRAS_CASO_PRACTICO, MIN_CARACTERES_RETROALIMENTACION } from "@/lib/constantes";

function contarPalabras(texto: string): number {
  const limpio = texto.trim();
  return limpio.length === 0 ? 0 : limpio.split(/\s+/).length;
}

function Entrega({
  campo,
  titulo,
  ayuda,
  placeholder,
  filas,
  valorInicial,
  entregadaInicial,
  mostrarContador,
}: {
  campo: "casoPractico" | "retroalimentacion";
  titulo: string;
  ayuda: string;
  placeholder: string;
  filas: number;
  valorInicial: string;
  entregadaInicial: boolean;
  mostrarContador: boolean;
}) {
  const router = useRouter();
  const [valor, setValor] = useState(valorInicial);
  const [entregada, setEntregada] = useState(entregadaInicial);
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState("");

  const palabras = contarPalabras(valor);

  async function guardar() {
    setEnviando(true);
    setError("");
    const res = await fetch("/api/progreso/entrega-final", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ campo, contenido: valor }),
    });
    setEnviando(false);
    if (res.ok) {
      setEntregada(true);
      router.refresh();
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data.error ?? "No se pudo guardar. Intenta de nuevo.");
    }
  }

  return (
    <div className="rounded-2xl border border-[#e5def4] bg-white p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="font-bold text-[#070b2f]">{titulo}</p>
        {entregada && (
          <span className="inline-flex items-center gap-1 text-xs font-bold text-green-700">
            <CheckCircle2 className="h-3.5 w-3.5" /> Entregado
          </span>
        )}
      </div>
      <p className="mt-1 text-sm text-[#6c6690]">{ayuda}</p>
      <textarea
        className="mt-3 w-full rounded-lg border border-[#e3dfef] p-3 text-sm text-[#20234a] focus:border-[#4b18a8] focus:outline-none"
        rows={filas}
        placeholder={placeholder}
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      {mostrarContador && (
        <p className={`mt-1 text-xs font-bold ${palabras >= MIN_PALABRAS_CASO_PRACTICO ? "text-green-700" : "text-[#6c6690]"}`}>
          {palabras} / {MIN_PALABRAS_CASO_PRACTICO} palabras mínimas
        </p>
      )}
      {error && <p className="mt-1 text-xs text-red-700">{error}</p>}
      <button
        type="button"
        onClick={guardar}
        disabled={enviando}
        className="mt-2 inline-flex min-h-9 items-center rounded-lg bg-[#4b18a8] px-4 text-xs font-black uppercase text-white hover:bg-[#351176] disabled:opacity-60"
      >
        {enviando ? "Guardando..." : entregada ? "Actualizar entrega" : "Guardar entrega"}
      </button>
    </div>
  );
}

export default function EntregaFinalForm({
  casoPracticoInicial,
  retroalimentacionInicial,
  casoPracticoEntregado,
  retroalimentacionEntregada,
}: {
  casoPracticoInicial: string | null;
  retroalimentacionInicial: string | null;
  casoPracticoEntregado: boolean;
  retroalimentacionEntregada: boolean;
}) {
  return (
    <div className="mt-6 grid gap-4">
      <Entrega
        campo="casoPractico"
        titulo="Entrega del caso práctico"
        ayuda="Pega aquí tu análisis de Distribuidora Los Pinos (mínimo 1,000 palabras) o el resumen escrito de tu presentación."
        placeholder="Escribe o pega tu caso práctico completo..."
        filas={10}
        valorInicial={casoPracticoInicial ?? ""}
        entregadaInicial={casoPracticoEntregado}
        mostrarContador
      />
      <Entrega
        campo="retroalimentacion"
        titulo="Retroalimentación del curso"
        ayuda={`Cuéntanos tu experiencia: qué te sirvió, qué mejorarías, cualquier comentario (mínimo ${MIN_CARACTERES_RETROALIMENTACION} caracteres).`}
        placeholder="Tu retroalimentación sobre el curso..."
        filas={4}
        valorInicial={retroalimentacionInicial ?? ""}
        entregadaInicial={retroalimentacionEntregada}
        mostrarContador={false}
      />
    </div>
  );
}
