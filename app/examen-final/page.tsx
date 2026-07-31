import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import ExamenFinalClient from "@/components/ExamenFinalClient";
import EntregaFinalForm from "@/components/EntregaFinalForm";
import { construirExamenFinal, casoPracticoFinal, componentesEvaluacionFinal } from "@/lib/data/examenFinal";
import { obtenerProgreso } from "@/lib/progreso-server";
import { modulos } from "@/lib/data/modulos";
import { ArrowLeft, FileText } from "lucide-react";

export default async function ExamenFinalPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const progreso = await obtenerProgreso(session.user.id);
  const modulosCompletados = progreso.modulosCompletados.length;

  if (modulosCompletados < modulos.length) redirect("/?examenBloqueado=1");

  const preguntas = construirExamenFinal();

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-wide text-[#4b18a8] hover:underline"
      >
        <ArrowLeft className="h-4 w-4" /> Volver a mi progreso
      </Link>

      <p className="text-xs font-black uppercase tracking-wide text-[#dda632]">
        Evaluación final y emisión de constancia
      </p>
      <h1 className="mt-1 font-serif text-4xl font-black text-[#070b2f]">Examen integrador</h1>
      <p className="mt-3 max-w-2xl text-[#20234a]">
        Cubre los 10 módulos del curso. Puntaje mínimo aprobatorio: 70%. Puedes repetirlo hasta
        dos veces.
      </p>

      <div className="mt-6 overflow-x-auto rounded-xl border border-[#e5def4]">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#f5f1ff] text-xs font-black uppercase text-[#4b18a8]">
            <tr>
              <th className="px-4 py-3">Componente</th>
              <th className="px-4 py-3">Tipo</th>
              <th className="px-4 py-3">Valor</th>
            </tr>
          </thead>
          <tbody>
            {componentesEvaluacionFinal.map((c, i) => (
              <tr key={i} className="border-t border-[#e5def4]">
                <td className="px-4 py-3 text-[#20234a]">{c.componente}</td>
                <td className="px-4 py-3 text-[#6c6690]">{c.tipo}</td>
                <td className="px-4 py-3 font-bold text-[#4b18a8]">{c.valor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="mt-8 rounded-2xl border border-[#e5def4] bg-[#fbfaff] p-6">
        <h2 className="flex items-center gap-2 font-serif text-xl font-bold text-[#070b2f]">
          <FileText className="h-5 w-5 text-[#4b18a8]" /> {casoPracticoFinal.titulo}
        </h2>
        <pre className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-[#20234a]" style={{ fontFamily: "inherit" }}>
          {casoPracticoFinal.contexto}
        </pre>
        <p className="mt-4 text-xs font-black uppercase tracking-wide text-[#4b18a8]">Tu tarea</p>
        <ol className="mt-2 list-decimal space-y-1.5 pl-5 text-sm text-[#20234a]">
          {casoPracticoFinal.tareas.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ol>
        <p className="mt-3 text-xs italic text-[#6c6690]">{casoPracticoFinal.formato}</p>

        <EntregaFinalForm
          casoPracticoInicial={progreso.casoPractico}
          retroalimentacionInicial={progreso.retroalimentacion}
          casoPracticoEntregado={progreso.casoPracticoEntregado}
          retroalimentacionEntregada={progreso.retroalimentacionEntregada}
        />
      </section>

      <ExamenFinalClient
        preguntas={preguntas}
        resultadoInicial={progreso.examenFinal ?? null}
        casoPracticoEntregado={progreso.casoPracticoEntregado}
        retroalimentacionEntregada={progreso.retroalimentacionEntregada}
      />
    </div>
  );
}
