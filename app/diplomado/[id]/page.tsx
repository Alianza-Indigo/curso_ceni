import {
  getCurso,
  getModuloDeCurso,
  getModuloAdyacenteCurso,
  moduloDesbloqueadoCurso,
} from "@/lib/data/cursos";
import { actividadesCompletas } from "@/lib/data/modulos";
import MarkdownContenido from "@/components/MarkdownContenido";
import { EvaluacionBloque } from "@/components/ContenidoModulo";
import ActividadesEntrega from "@/components/ActividadesEntrega";
import ModuloAcciones from "@/components/ModuloAcciones";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Users } from "lucide-react";
import { auth } from "@/auth";
import { obtenerProgreso } from "@/lib/progreso-server";
import { armarIntento } from "@/lib/quiz-shuffle";

export default async function ModuloDiplomadoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const curso = getCurso("diplomado")!;
  const modulo = getModuloDeCurso(curso, id);
  if (!modulo) return notFound();

  const session = await auth();
  if (!session?.user?.id) redirect("/login");
  const progreso = await obtenerProgreso(session.user.id, curso.modulos);

  if (!moduloDesbloqueadoCurso(curso, modulo, progreso.modulosCompletados)) {
    redirect(`/diplomado?bloqueado=${modulo.id}`);
  }

  const anteriorM = getModuloAdyacenteCurso(curso, id, -1);
  const siguienteM = getModuloAdyacenteCurso(curso, id, 1);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <Link
        href="/diplomado"
        className="mb-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-wide text-[#4b18a8] hover:underline"
      >
        <ArrowLeft className="h-4 w-4" /> Volver al diplomado
      </Link>

      <p className="text-xs font-black uppercase tracking-wide text-[#dda632]">
        Módulo {modulo.numero} de {curso.modulos.length} · {curso.titulo}
      </p>
      <h1 className="mt-1 font-serif text-4xl font-black leading-tight text-[#070b2f]">
        {modulo.titulo}
      </h1>
      <div className="mt-3 flex flex-wrap gap-4 text-sm text-[#6c6690]">
        <span className="inline-flex items-center gap-1.5">
          <Clock className="h-4 w-4" /> {modulo.duracion}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Users className="h-4 w-4" /> {modulo.dirigidoA}
        </span>
      </div>

      <article className="mt-8">
        {modulo.contenidoMarkdown && <MarkdownContenido contenido={modulo.contenidoMarkdown} />}
      </article>

      <div className="mt-8">
        <EvaluacionBloque evaluacion={modulo.evaluacion} />
        <ActividadesEntrega
          moduloId={modulo.id}
          actividades={modulo.actividades}
          entregasIniciales={progreso.entregasPorModulo[modulo.id] ?? {}}
        />
      </div>

      <ModuloAcciones
        modulo={modulo}
        basePath="/diplomado"
        examenFinalHref={null}
        preguntasIniciales={armarIntento(modulo.quiz, modulo.preguntasPorIntento)}
        resultadoInicial={progreso.resultadosQuiz[modulo.id] ?? null}
        actividadesCompletas={actividadesCompletas(
          modulo,
          Object.keys(progreso.entregasPorModulo[modulo.id] ?? {})
        )}
        anterior={
          anteriorM ? { id: anteriorM.id, titulo: anteriorM.titulo, numero: anteriorM.numero } : undefined
        }
        siguiente={
          siguienteM ? { id: siguienteM.id, titulo: siguienteM.titulo, numero: siguienteM.numero } : undefined
        }
      />
    </div>
  );
}
