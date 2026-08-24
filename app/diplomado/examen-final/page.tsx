import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import ExamenFinalClient from "@/components/ExamenFinalClient";
import EntregaFinalForm from "@/components/EntregaFinalForm";
import {
  construirExamenFinalDiplomado,
  proyectoFinalDiplomado,
  componentesEvaluacionFinalDiplomado,
} from "@/lib/data/diplomado/examenFinal";
import { getCurso } from "@/lib/data/cursos";
import { obtenerProgreso } from "@/lib/progreso-server";
import { accesoSinRestriccion } from "@/lib/curso-acceso";
import { ArrowLeft, FileText } from "lucide-react";

export const metadata = { title: "Examen final · Diplomado NOM-035 ND" };

export default async function ExamenFinalDiplomadoPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const curso = getCurso("diplomado")!;
  const progreso = await obtenerProgreso(session.user.id, curso.modulos, "diplomado");
  const modulosCompletados = progreso.modulosCompletados.filter((id) =>
    curso.modulos.some((m) => m.id === id)
  ).length;

  const libre = await accesoSinRestriccion(session.user.email);
  if (!libre && modulosCompletados < curso.modulos.length) redirect("/diplomado?examenBloqueado=1");

  const preguntas = construirExamenFinalDiplomado();

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <Link
        href="/diplomado"
        className="mb-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-wide text-[#4b18a8] hover:underline"
      >
        <ArrowLeft className="h-4 w-4" /> Volver al diplomado
      </Link>

      <p className="text-xs font-black uppercase tracking-wide text-[#dda632]">
        Evaluación final y emisión de constancia · {curso.titulo}
      </p>
      <h1 className="mt-1 font-serif text-4xl font-black text-[#070b2f]">Examen integrador</h1>
      <p className="mt-3 max-w-2xl text-[#20234a]">
        Cubre los {curso.modulos.length} módulos del diplomado. Puntaje mínimo aprobatorio: 70%.
        Puedes repetirlo hasta dos veces.
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
            {componentesEvaluacionFinalDiplomado.map((c, i) => (
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
          <FileText className="h-5 w-5 text-[#4b18a8]" /> {proyectoFinalDiplomado.titulo}
        </h2>
        <pre className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-[#20234a]" style={{ fontFamily: "inherit" }}>
          {proyectoFinalDiplomado.contexto}
        </pre>
        <p className="mt-4 text-xs font-black uppercase tracking-wide text-[#4b18a8]">Tu proyecto</p>
        <ol className="mt-2 list-decimal space-y-1.5 pl-5 text-sm text-[#20234a]">
          {proyectoFinalDiplomado.tareas.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ol>
        <p className="mt-3 text-xs italic text-[#6c6690]">{proyectoFinalDiplomado.formato}</p>

        <EntregaFinalForm
          cursoId="diplomado"
          casoPracticoTitulo="Entrega del proyecto final"
          casoPracticoAyuda="Pega aquí tu proyecto final de implementación (mínimo 1,000 palabras) o el resumen escrito de tus entregables."
          casoPracticoInicial={progreso.casoPractico}
          retroalimentacionInicial={progreso.retroalimentacion}
          casoPracticoEntregado={progreso.casoPracticoEntregado}
          retroalimentacionEntregada={progreso.retroalimentacionEntregada}
        />
      </section>

      <ExamenFinalClient
        cursoId="diplomado"
        preguntas={preguntas}
        resultadoInicial={progreso.examenFinal ?? null}
        casoPracticoEntregado={progreso.casoPracticoEntregado}
        retroalimentacionEntregada={progreso.retroalimentacionEntregada}
      />
    </div>
  );
}
