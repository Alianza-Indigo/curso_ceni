import { modulos, getModuloById, getModuloAdyacente, moduloDesbloqueado, actividadesCompletas } from "@/lib/data/modulos";
import { SeccionBloque, EvaluacionBloque } from "@/components/ContenidoModulo";
import ActividadesEntrega from "@/components/ActividadesEntrega";
import ModuloAcciones from "@/components/ModuloAcciones";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Users, FileDown } from "lucide-react";
import { auth } from "@/auth";
import { obtenerProgreso } from "@/lib/progreso-server";
import { accesoSinRestriccion } from "@/lib/curso-acceso";
import { armarIntento } from "@/lib/quiz-shuffle";

export default async function ModuloPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const modulo = getModuloById(id);
  if (!modulo) return notFound();

  const session = await auth();
  if (!session?.user?.id) redirect("/login");
  const progreso = await obtenerProgreso(session.user.id);
  const libre = await accesoSinRestriccion(session.user.email);

  if (!libre && !moduloDesbloqueado(modulo, progreso.modulosCompletados)) {
    redirect(`/ceni?bloqueado=${modulo.id}`);
  }

  const anteriorM = getModuloAdyacente(id, -1);
  const siguienteM = getModuloAdyacente(id, 1);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <Link
        href="/ceni"
        className="mb-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-wide text-[#4b18a8] hover:underline"
      >
        <ArrowLeft className="h-4 w-4" /> Volver a mi progreso
      </Link>

      <p className="text-xs font-black uppercase tracking-wide text-[#dda632]">
        Módulo {modulo.numero} de {modulos.length}
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

      <div className="mt-6 rounded-2xl border border-[#e5def4] bg-[#fbfaff] p-5">
        <p className="text-xs font-black uppercase tracking-wide text-[#4b18a8]">
          Objetivos del módulo
        </p>
        <ul className="mt-2 space-y-1.5">
          {modulo.objetivos.map((o, i) => (
            <li key={i} className="flex gap-2 text-sm text-[#20234a]">
              <span aria-hidden="true">✓</span>
              <span>{o}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        {modulo.secciones.map((s, i) => (
          <SeccionBloque key={i} seccion={s} />
        ))}

        {modulo.recursos && modulo.recursos.length > 0 && (
          <section className="mb-8 rounded-2xl border border-[#e5def4] bg-[#fbfaff] p-5">
            <h3 className="flex items-center gap-2 font-serif text-xl font-bold text-[#070b2f]">
              <FileDown className="h-5 w-5 text-[#4b18a8]" /> Descargas del módulo
            </h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {modulo.recursos.map((r) => (
                <li key={r.codigo}>
                  <a
                    href={r.archivo}
                    download
                    className="flex h-full items-start gap-3 rounded-lg border border-[#e5def4] bg-white p-3 text-sm text-[#20234a] transition-colors hover:border-[#4b18a8] hover:bg-[#f5f1ff]"
                  >
                    <span className="mt-0.5 font-black text-[#dda632]">{r.codigo}</span>
                    <span className="flex-1">
                      {r.nombre}
                      {r.formato && (
                        <span className="ms-2 inline-block rounded bg-[#f3eefc] px-1.5 py-0.5 text-[10px] font-black uppercase tracking-wide text-[#4b18a8]">
                          {r.formato}
                        </span>
                      )}
                    </span>
                    <FileDown className="mt-0.5 h-4 w-4 shrink-0 text-[#4b18a8]" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        <EvaluacionBloque evaluacion={modulo.evaluacion} />
        <ActividadesEntrega
          moduloId={modulo.id}
          actividades={modulo.actividades}
          entregasIniciales={progreso.entregasPorModulo[modulo.id] ?? {}}
        />
      </div>

      <ModuloAcciones
        modulo={modulo}
        libre={libre}
        preguntasIniciales={armarIntento(modulo.quiz, modulo.preguntasPorIntento)}
        resultadoInicial={progreso.resultadosQuiz[modulo.id] ?? null}
        actividadesCompletas={actividadesCompletas(modulo, Object.keys(progreso.entregasPorModulo[modulo.id] ?? {}))}
        anterior={anteriorM ? { id: anteriorM.id, titulo: anteriorM.titulo, numero: anteriorM.numero } : undefined}
        siguiente={siguienteM ? { id: siguienteM.id, titulo: siguienteM.titulo, numero: siguienteM.numero } : undefined}
      />
    </div>
  );
}
