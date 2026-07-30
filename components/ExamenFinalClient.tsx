"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Quiz from "@/components/Quiz";
import { PreguntaQuiz } from "@/lib/types";
import { Award, Download } from "lucide-react";

type ResultadoQuiz = {
  moduloId: string;
  respuestas: Record<string, number>;
  aciertos: number;
  total: number;
  porcentaje: number;
  aprobado: boolean;
  fecha: string;
  folio?: string | null;
};

export default function ExamenFinalClient({
  preguntas,
  resultadoInicial,
}: {
  preguntas: PreguntaQuiz[];
  resultadoInicial: ResultadoQuiz | null;
}) {
  const router = useRouter();
  const [resultado, setResultado] = useState<ResultadoQuiz | null>(resultadoInicial);

  async function onFinalizar(respuestas: Record<string, number>, aciertos: number, total: number) {
    const res = await fetch("/api/progreso/examen", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ respuestas, aciertos, total }),
    });
    if (res.ok) {
      const data: ResultadoQuiz = await res.json();
      setResultado(data);
      router.refresh();
    }
  }

  return (
    <section className="mt-10">
      <h2 className="font-serif text-2xl font-bold text-[#070b2f]">
        Examen integrador · {preguntas.length} preguntas
      </h2>

      {resultado ? (
        <div
          className={`mt-4 rounded-2xl border p-5 ${
            resultado.aprobado ? "border-green-500 bg-green-50" : "border-[#dda632] bg-[#fff8e8]"
          }`}
        >
          <p className="flex items-center gap-2 text-lg font-black text-[#070b2f]">
            <Award className="h-5 w-5" /> {resultado.porcentaje}% ({resultado.aciertos}/{resultado.total})
          </p>
          <p className="mt-1 text-sm text-[#20234a]">
            {resultado.aprobado
              ? "¡Felicidades! Aprobaste el examen integrador. Junto con el caso práctico y la retroalimentación del curso, esto completa tu evaluación final."
              : "No alcanzaste el 70% mínimo. Puedes repetir el examen."}
          </p>
          {resultado.aprobado && (
            <a
              href="/api/constancia"
              className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#4b18a8] px-5 text-sm font-black uppercase text-white hover:bg-[#351176]"
            >
              <Download className="h-4 w-4" /> Descargar constancia (PDF)
            </a>
          )}
        </div>
      ) : null}

      {(!resultado || !resultado.aprobado) && (
        <div className="mt-5">
          <Quiz preguntas={preguntas} onFinalizar={onFinalizar} tituloBoton="Calificar examen final" />
        </div>
      )}
    </section>
  );
}
