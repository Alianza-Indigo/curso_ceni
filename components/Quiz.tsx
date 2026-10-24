"use client";

import { useState } from "react";
import type { PreguntaPublica } from "@/lib/evaluacion-publica";
import { RotateCcw } from "lucide-react";

export type ResultadoEvaluacion = {
  aciertos: number; total: number; porcentaje: number; aprobado: boolean; quizAprobado?: boolean;
};

type Props = {
  preguntas: PreguntaPublica[];
  onFinalizar: (respuestas: Record<string, string>) => Promise<ResultadoEvaluacion>;
  tituloBoton?: string;
  onReintentar?: () => Promise<void>;
};

export default function Quiz({ preguntas, onFinalizar, tituloBoton = "Calificar quiz", onReintentar }: Props) {
  const [respuestas, setRespuestas] = useState<Record<string, number>>({});
  const [estado, setEstado] = useState<"respondiendo" | "enviando" | "calificado" | "reintentando">("respondiendo");
  const [resultado, setResultado] = useState<ResultadoEvaluacion | null>(null);
  const [error, setError] = useState("");

  const todasRespondidas = preguntas.length > 0 && preguntas.every((p) => respuestas[p.id] !== undefined);
  const bloqueado = estado !== "respondiendo";

  async function calificar() {
    if (!todasRespondidas || bloqueado) return;
    setEstado("enviando");
    setError("");
    const respuestasTexto: Record<string, string> = {};
    for (const p of preguntas) respuestasTexto[p.id] = p.opciones[respuestas[p.id]];
    try {
      const calificacion = await onFinalizar(respuestasTexto);
      setResultado(calificacion);
      setEstado("calificado");
    } catch (err) {
      setError(err instanceof Error ? err.message : "No fue posible guardar tu resultado. Intenta de nuevo.");
      setEstado("respondiendo");
    }
  }

  async function reintentar() {
    if (estado !== "calificado") return;
    setError("");
    setEstado("reintentando");
    try {
      await onReintentar?.();
      setRespuestas({});
      setResultado(null);
      setEstado("respondiendo");
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo preparar otro intento.");
      setEstado("calificado");
    }
  }

  return (
    <div className="space-y-6">
      {preguntas.map((p, i) => (
        <fieldset key={p.id} disabled={bloqueado} className="rounded-2xl border border-[#e5def4] bg-white p-5">
          <legend className="mb-3 text-sm font-black text-[#070b2f]">{i + 1}. {p.pregunta}</legend>
          <div className="grid gap-2">
            {p.opciones.map((op, idx) => (
              <label key={idx} className={`flex min-h-11 cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-sm text-[#20234a] ${respuestas[p.id] === idx ? "border-[#4b18a8] bg-[#f5f1ff]" : "border-[#e3dfef] hover:bg-[#f5f1ff]"}`}>
                <input
                  type="radio"
                  name={p.id}
                  className="h-4 w-4 accent-[#4b18a8]"
                  checked={respuestas[p.id] === idx}
                  onChange={() => setRespuestas((r) => ({ ...r, [p.id]: idx }))}
                  disabled={bloqueado}
                />
                <span className="flex-1">{op}</span>
              </label>
            ))}
          </div>
        </fieldset>
      ))}
      {error && <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>}
      {(estado === "respondiendo" || estado === "enviando") ? (
        <button
          type="button"
          onClick={calificar}
          disabled={!todasRespondidas || estado === "enviando"}
          className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-[#4b18a8] px-6 text-sm font-black uppercase text-white disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
        >
          {estado === "enviando" ? "Guardando resultado..." : tituloBoton}
        </button>
      ) : resultado && (
        <div className={`rounded-xl border p-5 ${(resultado.quizAprobado ?? resultado.aprobado) ? "border-green-500 bg-green-50" : "border-[#dda632] bg-[#fff8e8]"}`}>
          <p className="font-black text-[#070b2f]">Resultado: {resultado.aciertos}/{resultado.total} ({resultado.porcentaje}%)</p>
          {(resultado.quizAprobado ?? resultado.aprobado) ? (
            <p className="mt-1 text-sm">Quiz aprobado. Tu resultado está guardado.</p>
          ) : (
            <>
              <p className="mt-1 text-sm">No alcanzaste el 70%. Puedes intentar de nuevo.</p>
              <button type="button" onClick={reintentar} disabled={estado === "reintentando"} className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-lg border border-[#4b18a8] px-5 text-sm font-black uppercase text-[#4b18a8] disabled:opacity-50">
                <RotateCcw className="h-4 w-4" /> {estado === "reintentando" ? "Preparando..." : "Reintentar quiz"}
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
