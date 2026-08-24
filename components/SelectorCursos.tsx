import Link from "next/link";
import { Curso } from "@/lib/types";
import { ArrowRight, Clock, GraduationCap, Layers, BadgeCheck } from "lucide-react";

type CursoConProgreso = {
  curso: Curso;
  completados: number;
  total: number;
};

export default function SelectorCursos({ cursos }: { cursos: CursoConProgreso[] }) {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <header className="text-center">
        <p className="text-sm font-black uppercase tracking-wide text-[#dda632]">
          Alianza Índigo Neurodivergente A.C.
        </p>
        <h1 className="mt-2 font-serif text-4xl font-black text-[#070b2f]">Elige tu curso</h1>
        <p className="mt-3 text-[#6c6690]">
          Tu progreso se guarda por separado en cada curso.
        </p>
      </header>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {cursos.map(({ curso, completados, total }) => {
          const porcentaje = total > 0 ? Math.round((completados / total) * 100) : 0;
          return (
            <Link
              key={curso.id}
              href={`/${curso.slug}`}
              className="group flex flex-col rounded-2xl border border-[#e5def4] bg-white p-7 shadow-sm transition-colors hover:border-[#4b18a8]"
            >
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f3eefc] px-3 py-1 text-xs font-black uppercase tracking-wide text-[#4b18a8]">
                  <GraduationCap className="h-3.5 w-3.5" /> {curso.nivel}
                </span>
              </div>

              <h2 className="mt-4 font-serif text-2xl font-black text-[#070b2f] group-hover:text-[#4b18a8]">
                {curso.titulo}
              </h2>
              {curso.subtitulo && (
                <p className="mt-1 text-sm font-semibold text-[#4b18a8]">{curso.subtitulo}</p>
              )}
              <p className="mt-3 flex-1 text-sm text-[#4a4568]">{curso.descripcion}</p>

              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs font-bold text-[#6c6690]">
                <span className="inline-flex items-center gap-1.5">
                  <Layers className="h-4 w-4 text-[#4b18a8]" /> {total} módulos
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-[#4b18a8]" /> {curso.duracion}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <BadgeCheck className="h-4 w-4 text-[#4b18a8]" /> {curso.dirigidoA}
                </span>
              </div>

              <div className="mt-5">
                <div className="h-2 w-full overflow-hidden rounded-full bg-[#f1f0f4]">
                  <div
                    className="h-full rounded-full bg-[#dda632]"
                    style={{ width: `${porcentaje}%` }}
                  />
                </div>
                <p className="mt-2 text-xs font-bold text-[#6c6690]">
                  {completados} / {total} módulos aprobados
                </p>
              </div>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase text-[#4b18a8]">
                {completados > 0 ? "Continuar" : "Entrar al curso"} <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
