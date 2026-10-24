"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Quiz from "@/components/Quiz";
import type { PreguntaPublica } from "@/lib/evaluacion-publica";

import { Award, Download } from "lucide-react";

type ResultadoQuiz = {
  moduloId: string;
  respuestas: Record<string, string | number>;
  aciertos: number;
  total: number;
  porcentaje: number;
  aprobado: boolean;
  quizAprobado: boolean;
  fecha: string;
  folio?: string | null;
  vigenciaHasta?: string | null;
};

export default function ExamenFinalClient({
  preguntas: preguntasIniciales,
  tokenInicial,
  resultadoInicial,
  casoPracticoEntregado,
  retroalimentacionEntregada,
  cursoId = "ceni",
}: {
  preguntas: PreguntaPublica[];
  tokenInicial: string;
  resultadoInicial: ResultadoQuiz | null;
  casoPracticoEntregado: boolean;
  retroalimentacionEntregada: boolean;
  cursoId?: string;
}) {
  const router = useRouter();
  const [resultado, setResultado] = useState<ResultadoQuiz | null>(resultadoInicial);
  useEffect(() => { setResultado(resultadoInicial); }, [resultadoInicial]);
  const [intento, setIntento] = useState(0);
  // El primer intento usa la selección ya armada (y barajada) por el servidor;
  // cada reintento arma una selección nueva para no repetir el examen.
  const [preguntas, setPreguntas] = useState(preguntasIniciales);
  const [token, setToken] = useState(tokenInicial);

  const vigente = Boolean(resultado?.vigenciaHasta && new Date(resultado.vigenciaHasta).getTime() > Date.now());
  const completo = Boolean(resultado?.aprobado) && vigente;
  const renovar = Boolean(resultado?.aprobado) && !vigente;

  async function onFinalizar(respuestas: Record<string, string>): Promise<ResultadoQuiz> {
    const res = await fetch("/api/progreso/examen", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ respuestas, cursoId, token }),
    });
    if (!res.ok) {
      const error = await res.json().catch(() => ({}));
      throw new Error(error.error ?? "No se pudo guardar el examen.");
    }
    const data: ResultadoQuiz = await res.json();
    setResultado(data);
    router.refresh();
    return data;
  }

  return (
    <section className="mt-10">
      <h2 className="font-serif text-2xl font-bold text-[#070b2f]">
        Examen integrador · {preguntas.length} preguntas
      </h2>

      {resultado ? (
        <div
          className={`mt-4 rounded-2xl border p-5 ${
            completo ? "border-green-500 bg-green-50" : "border-[#dda632] bg-[#fff8e8]"
          }`}
        >
          <p className="flex items-center gap-2 text-lg font-black text-[#070b2f]">
            <Award className="h-5 w-5" /> {resultado.porcentaje}% ({resultado.aciertos}/{resultado.total})
          </p>
          <p className="mt-1 text-sm text-[#20234a]">
            {renovar ? "La constancia venció. Repite el examen para renovarla." : !resultado.quizAprobado
              ? "No alcanzaste el 70% mínimo en el examen de opción múltiple. Puedes repetirlo."
              : completo
                ? "¡Felicidades! Completaste los tres componentes de la evaluación final."
                : "Aprobaste el examen de opción múltiple. Guarda el proyecto final y la retroalimentación para recibir tu constancia automáticamente."}
          </p>
          {resultado.quizAprobado && !completo && (
            <ul className="mt-2 space-y-1 text-sm text-[#5a4300]">
              {!casoPracticoEntregado && <li>— El caso práctico aplicado (40%)</li>}
              {!retroalimentacionEntregada && <li>— La retroalimentación del curso (20%)</li>}
            </ul>
          )}
          {completo && (
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={`/api/constancia?curso=${cursoId}`}
                className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#4b18a8] px-5 text-sm font-black uppercase text-white hover:bg-[#351176]"
              >
                <Download className="h-4 w-4" /> Constancia (PDF)
              </a>
              <a
                href={`/api/dc3?curso=${cursoId}`}
                className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-[#4b18a8] px-5 text-sm font-black uppercase text-[#4b18a8] hover:bg-[#f5f1ff]"
              >
                <Download className="h-4 w-4" /> Constancia DC-3 (PDF)
              </a>
            </div>
          )}
        </div>
      ) : null}

      {(!resultado || !resultado.quizAprobado || renovar) && (
        <div className="mt-5">
          <Quiz
            key={intento}
            preguntas={preguntas}
            onFinalizar={onFinalizar}
            tituloBoton="Calificar examen final"
            onReintentar={async () => {
              const response = await fetch(`/api/progreso/intento?tipo=examen&id=${encodeURIComponent(cursoId)}`);
              if (!response.ok) throw new Error("No se pudo preparar el reintento.");
              const data = await response.json();
              setPreguntas(data.preguntas);
              setToken(data.token);
              setIntento((n) => n + 1);
            }}
          />
        </div>
      )}
    </section>
  );
}
