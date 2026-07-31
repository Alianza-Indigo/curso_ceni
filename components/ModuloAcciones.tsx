"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Modulo, PreguntaQuiz } from "@/lib/types";
import Quiz from "@/components/Quiz";
import { armarIntento } from "@/lib/quiz-shuffle";
import { ArrowLeft, ArrowRight, CheckCircle2, Lock } from "lucide-react";

type ResultadoQuiz = {
  moduloId: string;
  respuestas: Record<string, number>;
  aciertos: number;
  total: number;
  porcentaje: number;
  aprobado: boolean;
  fecha: string;
};

export default function ModuloAcciones({
  modulo,
  preguntasIniciales,
  resultadoInicial,
  actividadesCompletas,
  anterior,
  siguiente,
}: {
  modulo: Modulo;
  preguntasIniciales: PreguntaQuiz[];
  resultadoInicial: ResultadoQuiz | null;
  actividadesCompletas: boolean;
  anterior?: { id: string; titulo: string; numero: number };
  siguiente?: { id: string; titulo: string; numero: number };
}) {
  const router = useRouter();
  const [resultado, setResultado] = useState<ResultadoQuiz | null>(resultadoInicial);
  const [intento, setIntento] = useState(0);
  // El primer intento usa la selección ya armada por el servidor (evita mismatch de
  // hidratación: Math.random() no puede correr en un Client Component que también se
  // renderiza en el servidor). Los reintentos sí arman una nueva selección en el cliente.
  const [preguntasIntento, setPreguntasIntento] = useState(preguntasIniciales);
  const moduloCompleto = Boolean(resultado?.aprobado) && actividadesCompletas;

  async function onFinalizar(respuestas: Record<string, number>, aciertos: number, total: number) {
    const res = await fetch("/api/progreso/modulo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ moduloId: modulo.id, respuestas, aciertos, total }),
    });
    if (res.ok) {
      const data: ResultadoQuiz = await res.json();
      setResultado(data);
      router.refresh();
    }
  }

  return (
    <div>
      <section className="mb-8">
        <h3 className="font-serif text-xl font-bold text-[#070b2f]">
          Quiz de evaluación · {modulo.preguntasPorIntento} preguntas
        </h3>
        {resultado ? (
          <div
            className={`mt-3 flex items-center gap-3 rounded-xl border p-4 ${
              moduloCompleto ? "border-green-500 bg-green-50" : "border-[#dda632] bg-[#fff8e8]"
            }`}
          >
            {moduloCompleto && <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600" />}
            <p className="text-sm text-[#20234a]">
              Ya completaste este quiz: <strong>{resultado.porcentaje}%</strong> (
              {resultado.aciertos}/{resultado.total}).{" "}
              {!resultado.aprobado
                ? "Puedes volver a intentarlo."
                : moduloCompleto
                  ? "Módulo aprobado."
                  : "Quiz aprobado — entrega también las actividades de abajo para completar el módulo."}
            </p>
          </div>
        ) : (
          <p className="mt-2 text-sm text-[#6c6690]">
            Necesitas 70% o más para aprobar este módulo. Tu progreso se guarda en tu cuenta.
          </p>
        )}

        {(!resultado || !resultado.aprobado) && (
          <div className="mt-5">
            <Quiz
              key={intento}
              preguntas={preguntasIntento}
              onFinalizar={onFinalizar}
              onReintentar={() => {
                setPreguntasIntento(armarIntento(modulo.quiz, modulo.preguntasPorIntento));
                setIntento((n) => n + 1);
              }}
            />
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
          moduloCompleto ? (
            <Link
              href={`/curso/${siguiente.id}`}
              className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#4b18a8] px-4 text-sm font-bold text-white hover:bg-[#351176]"
            >
              Módulo {siguiente.numero}: {siguiente.titulo} <ArrowRight className="h-4 w-4" />
            </Link>
          ) : (
            <span
              className="inline-flex min-h-11 cursor-not-allowed items-center gap-2 rounded-lg border border-[#e3dfef] px-4 text-sm font-bold text-[#a6a2b8]"
              title="Aprueba el quiz y entrega las actividades de este módulo para desbloquear el siguiente"
            >
              <Lock className="h-4 w-4" /> Módulo {siguiente.numero}: {siguiente.titulo}
            </span>
          )
        ) : moduloCompleto ? (
          <Link
            href="/examen-final"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#dda632] px-4 text-sm font-black uppercase text-[#070b2f] hover:bg-[#f0c85b]"
          >
            Ir al examen final <ArrowRight className="h-4 w-4" />
          </Link>
        ) : (
          <span
            className="inline-flex min-h-11 cursor-not-allowed items-center gap-2 rounded-lg border border-[#e3dfef] px-4 text-sm font-bold text-[#a6a2b8]"
            title="Aprueba el quiz y entrega las actividades de este módulo para desbloquear el examen final"
          >
            <Lock className="h-4 w-4" /> Ir al examen final
          </span>
        )}
      </nav>
    </div>
  );
}
