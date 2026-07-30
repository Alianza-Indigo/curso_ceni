"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Modulo } from "@/lib/types";
import Quiz from "@/components/Quiz";
import { cargarProgreso, registrarResultadoQuiz, ResultadoQuiz } from "@/lib/progress";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ModuloAcciones({
  modulo,
  anterior,
  siguiente,
}: {
  modulo: Modulo;
  anterior?: { id: string; titulo: string; numero: number };
  siguiente?: { id: string; titulo: string; numero: number };
}) {
  const [resultado, setResultado] = useState<ResultadoQuiz | null>(null);

  useEffect(() => {
    const progreso = cargarProgreso();
    setResultado(progreso.resultadosQuiz[modulo.id] ?? null);
  }, [modulo.id]);

  function onFinalizar(respuestas: Record<string, number>, aciertos: number, total: number) {
    const r = registrarResultadoQuiz(modulo.id, respuestas, aciertos, total);
    setResultado(r);
  }

  return (
    <div>
      <section className="mb-8">
        <h3 className="font-serif text-xl font-bold text-[#070b2f]">
          Quiz de evaluación · {modulo.quiz.length} preguntas
        </h3>
        {resultado ? (
          <div
            className={`mt-3 flex items-center gap-3 rounded-xl border p-4 ${
              resultado.aprobado ? "border-green-500 bg-green-50" : "border-[#dda632] bg-[#fff8e8]"
            }`}
          >
            {resultado.aprobado && <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600" />}
            <p className="text-sm text-[#20234a]">
              Ya completaste este quiz: <strong>{resultado.porcentaje}%</strong> (
              {resultado.aciertos}/{resultado.total}).{" "}
              {resultado.aprobado ? "Módulo aprobado." : "Puedes volver a intentarlo."}
            </p>
          </div>
        ) : (
          <p className="mt-2 text-sm text-[#6c6690]">
            Necesitas 70% o más para aprobar este módulo. Tu progreso se guarda en este navegador.
          </p>
        )}

        {(!resultado || !resultado.aprobado) && (
          <div className="mt-5">
            <Quiz preguntas={modulo.quiz} onFinalizar={onFinalizar} />
          </div>
        )}
      </section>

      <nav className="flex flex-wrap items-center justify-between gap-3 border-t border-[#e5def4] pt-6">
        {anterior ? (
          <Link
            href={`/curso/${anterior.id}`}
            className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-[#e3dfef] px-4 text-sm font-bold text-[#4b18a8] hover:bg-[#f5f1ff]"
          >
            <ArrowLeft className="h-4 w-4" /> Módulo {anterior.numero}: {anterior.titulo}
          </Link>
        ) : (
          <span />
        )}
        {siguiente ? (
          <Link
            href={`/curso/${siguiente.id}`}
            className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#4b18a8] px-4 text-sm font-bold text-white hover:bg-[#351176]"
          >
            Módulo {siguiente.numero}: {siguiente.titulo} <ArrowRight className="h-4 w-4" />
          </Link>
        ) : (
          <Link
            href="/examen-final"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#dda632] px-4 text-sm font-black uppercase text-[#070b2f] hover:bg-[#f0c85b]"
          >
            Ir al examen final <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </nav>
    </div>
  );
}
