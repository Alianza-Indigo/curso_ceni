import { modulos, getModuloById, getModuloAdyacente } from "@/lib/data/modulos";
import { SeccionBloque, ActividadesBloque, EvaluacionBloque } from "@/components/ContenidoModulo";
import ModuloAcciones from "@/components/ModuloAcciones";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Users } from "lucide-react";
import { auth } from "@/auth";
import { obtenerProgreso } from "@/lib/progreso-server";

export default async function ModuloPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const modulo = getModuloById(id);
  if (!modulo) return notFound();

  const session = await auth();
  if (!session?.user?.id) redirect("/login");
  const progreso = await obtenerProgreso(session.user.id);

  const anteriorM = getModuloAdyacente(id, -1);
  const siguienteM = getModuloAdyacente(id, 1);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <Link
        href="/"
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
        <ActividadesBloque actividades={modulo.actividades} />
        <EvaluacionBloque evaluacion={modulo.evaluacion} />
      </div>

      <ModuloAcciones
        modulo={modulo}
        resultadoInicial={progreso.resultadosQuiz[modulo.id] ?? null}
        anterior={anteriorM ? { id: anteriorM.id, titulo: anteriorM.titulo, numero: anteriorM.numero } : undefined}
        siguiente={siguienteM ? { id: siguienteM.id, titulo: siguienteM.titulo, numero: siguienteM.numero } : undefined}
      />
    </div>
  );
}
