"use client";

import { useState } from "react";
import { PreguntaQuiz } from "@/lib/types";
import { CheckCircle2, XCircle, RotateCcw } from "lucide-react";
import { UMBRAL_APROBATORIO_PCT } from "@/lib/constantes";

type Props = {
  preguntas: PreguntaQuiz[];
  // Envía SOLO las respuestas (id de pregunta → texto de la opción elegida).
  // El puntaje lo recalcula el servidor; el cliente no lo reporta.
  onFinalizar: (respuestas: Record<string, string>) => void;
  tituloBoton?: string;
  // Si se provee, se invoca al reintentar (además de limpiar el estado interno).
  // Úsalo para pedirle al padre una nueva selección aleatoria de preguntas.
  onReintentar?: () => void;
};

export default function Quiz({ preguntas, onFinalizar, tituloBoton = "Calificar quiz", onReintentar }: Props) {
  const [respuestas, setRespuestas] = useState<Record<string, number>>({});
  const [enviado, setEnviado] = useState(false);

  const todasRespondidas = preguntas.every((p) => respuestas[p.id] !== undefined);
  const aciertos = preguntas.filter((p) => respuestas[p.id] === p.correcta).length;
  const porcentaje = preguntas.length ? Math.round((aciertos / preguntas.length) * 100) : 0;
  const aprobado = porcentaje >= UMBRAL_APROBATORIO_PCT;

  function elegir(preguntaId: string, opcionIdx: number) {
    if (enviado) return;
    setRespuestas((r) => ({ ...r, [preguntaId]: opcionIdx }));
  }

  function calificar() {
    setEnviado(true);
    // Se envía el TEXTO de la opción elegida por pregunta; el servidor lo
    // compara contra el banco oficial y recalcula el puntaje.
    const respuestasTexto: Record<string, string> = {};
    for (const p of preguntas) {
      const idx = respuestas[p.id];
      if (idx !== undefined) respuestasTexto[p.id] = p.opciones[idx];
    }
    onFinalizar(respuestasTexto);
  }

  function reintentar() {
    setRespuestas({});
    setEnviado(false);
    onReintentar?.();
  }

  return (
    <div className="space-y-6">
      {preguntas.map((p, i) => {
        const seleccion = respuestas[p.id];
        return (
          <fieldset
            key={p.id}
            className="rounded-2xl border border-[#e5def4] bg-white p-5"
          >
            <legend className="mb-3 text-sm font-black text-[#070b2f]">
              {i + 1}. {p.pregunta}
            </legend>
            <div className="grid gap-2">
              {p.opciones.map((op, idx) => {
                const isSelected = seleccion === idx;
                const isCorrect = idx === p.correcta;
                let estilo = "border-[#e3dfef] hover:bg-[#f5f1ff]";
                if (enviado && isSelected && isCorrect) estilo = "border-green-500 bg-green-50";
                else if (enviado && isSelected && !isCorrect) estilo = "border-red-400 bg-red-50";
                else if (enviado && isCorrect) estilo = "border-green-500 bg-green-50/60";
                else if (isSelected) estilo = "border-[#4b18a8] bg-[#f5f1ff]";

                return (
                  <label
                    key={idx}
                    className={`flex min-h-11 cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-sm text-[#20234a] ${estilo}`}
                  >
                    <input
                      type="radio"
                      name={p.id}
                      className="h-4 w-4 accent-[#4b18a8]"
                      checked={isSelected}
                      onChange={() => elegir(p.id, idx)}
                      disabled={enviado}
                    />
                    <span className="flex-1">{op}</span>
                    {enviado && isSelected && isCorrect && <CheckCircle2 className="h-4 w-4 shrink-0 text-green-600" />}
                    {enviado && isSelected && !isCorrect && <XCircle className="h-4 w-4 shrink-0 text-red-500" />}
                  </label>
                );
              })}
            </div>
            {enviado && (
              <p className="mt-3 rounded-lg bg-[#fbfaff] p-3 text-xs leading-relaxed text-[#4a4570]">
                {p.explicacion}
              </p>
            )}
          </fieldset>
        );
      })}

      {!enviado ? (
        <button
          type="button"
          onClick={calificar}
          disabled={!todasRespondidas}
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#4b18a8] px-6 text-sm font-black uppercase text-white hover:bg-[#351176] disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
        >
          {tituloBoton}
        </button>
      ) : (
        <div
          className={`rounded-2xl border p-5 ${
            aprobado ? "border-green-500 bg-green-50" : "border-[#dda632] bg-[#fff8e8]"
          }`}
        >
          <p className="text-lg font-black text-[#070b2f]">
            Resultado: {aciertos}/{preguntas.length} correctas ({porcentaje}%)
          </p>
          <p className="mt-1 text-sm text-[#20234a]">
            {aprobado
              ? "¡Aprobado! Puntaje mínimo aprobatorio: 70%."
              : "No alcanzaste el 70% mínimo aprobatorio. Puedes repetir el quiz."}
          </p>
          {!aprobado && (
            <button
              type="button"
              onClick={reintentar}
              className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-lg border border-[#4b18a8] px-5 text-sm font-black uppercase text-[#4b18a8] hover:bg-[#f5f1ff]"
            >
              <RotateCcw className="h-4 w-4" /> Reintentar quiz
            </button>
          )}
        </div>
      )}
    </div>
  );
}
