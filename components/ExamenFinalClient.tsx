"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Quiz from "@/components/Quiz";
import { PreguntaQuiz } from "@/lib/types";
import { construirExamenFinal } from "@/lib/data/examenFinal";
import { construirExamenFinalDiplomado } from "@/lib/data/diplomado/examenFinal";
import { Award, Download } from "lucide-react";

type ResultadoQuiz = {
  moduloId: string;
  respuestas: Record<string, number>;
  aciertos: number;
  total: number;
  porcentaje: number;
  aprobado: boolean;
  quizAprobado: boolean;
  fecha: string;
  folio?: string | null;
};

export default function ExamenFinalClient({
  preguntas: preguntasIniciales,
  resultadoInicial,
  casoPracticoEntregado,
  retroalimentacionEntregada,
  cursoId = "ceni",
}: {
  preguntas: PreguntaQuiz[];
  resultadoInicial: ResultadoQuiz | null;
  casoPracticoEntregado: boolean;
  retroalimentacionEntregada: boolean;
  cursoId?: string;
}) {
  const router = useRouter();
  const rearmarExamen = cursoId === "diplomado" ? construirExamenFinalDiplomado : construirExamenFinal;
  const [resultado, setResultado] = useState<ResultadoQuiz | null>(resultadoInicial);
  const [intento, setIntento] = useState(0);
  // El primer intento usa la selección ya armada (y barajada) por el servidor;
  // cada reintento arma una selección nueva para no repetir el examen.
  const [preguntas, setPreguntas] = useState(preguntasIniciales);

  // La certificación completa depende también del caso práctico y la retroalimentación,
  // que se entregan en un formulario hermano (EntregaFinalForm). Esas props sí llegan
  // frescas en cada re-render tras router.refresh(); `resultado.aprobado` en cambio es
  // el snapshot del último POST al quiz y no se entera de esas otras entregas, así que
  // la certificación completa se recalcula aquí en vez de leerla de ese estado viejo.
  const completo = Boolean(resultado?.quizAprobado) && casoPracticoEntregado && retroalimentacionEntregada;

  async function onFinalizar(respuestas: Record<string, number>, aciertos: number, total: number) {
    const res = await fetch("/api/progreso/examen", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ respuestas, aciertos, total, cursoId }),
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
            completo ? "border-green-500 bg-green-50" : "border-[#dda632] bg-[#fff8e8]"
          }`}
        >
          <p className="flex items-center gap-2 text-lg font-black text-[#070b2f]">
            <Award className="h-5 w-5" /> {resultado.porcentaje}% ({resultado.aciertos}/{resultado.total})
          </p>
          <p className="mt-1 text-sm text-[#20234a]">
            {!resultado.quizAprobado
              ? "No alcanzaste el 70% mínimo en el examen de opción múltiple. Puedes repetirlo."
              : completo
                ? "¡Felicidades! Completaste los tres componentes de la evaluación final."
                : "Aprobaste el examen de opción múltiple (40% de tu nota). Faltan por entregar:"}
          </p>
          {resultado.quizAprobado && !completo && (
            <ul className="mt-2 space-y-1 text-sm text-[#5a4300]">
              {!casoPracticoEntregado && <li>— El caso práctico aplicado (40%)</li>}
              {!retroalimentacionEntregada && <li>— La retroalimentación del curso (20%)</li>}
            </ul>
          )}
          {completo && (
            <a
              href={`/api/constancia?curso=${cursoId}`}
              className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#4b18a8] px-5 text-sm font-black uppercase text-white hover:bg-[#351176]"
            >
              <Download className="h-4 w-4" /> Descargar constancia (PDF)
            </a>
          )}
        </div>
      ) : null}

      {(!resultado || !resultado.quizAprobado) && (
        <div className="mt-5">
          <Quiz
            key={intento}
            preguntas={preguntas}
            onFinalizar={onFinalizar}
            tituloBoton="Calificar examen final"
            onReintentar={() => {
              setPreguntas(rearmarExamen());
              setIntento((n) => n + 1);
            }}
          />
        </div>
      )}
    </section>
  );
}
