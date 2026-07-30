import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { modulos } from "@/lib/data/modulos";
import { obtenerProgreso } from "@/lib/progreso-server";
import ReiniciarProgreso from "@/components/ReiniciarProgreso";
import { CheckCircle2, Circle, Clock, ArrowRight, Award } from "lucide-react";

export default async function Dashboard() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const progreso = await obtenerProgreso(session.user.id);

  const completados = progreso.modulosCompletados.length;
  const totalModulos = modulos.length;
  const porcentajeGeneral = Math.round((completados / totalModulos) * 100);
  const examenAprobado = progreso.examenFinal?.aprobado ?? false;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <section className="overflow-hidden rounded-2xl bg-[linear-gradient(150deg,#070b2f,#2b1163_62%,#4b18a8)] p-8 text-white">
        <p className="text-sm font-black uppercase tracking-wide text-[#dda632]">
          Programa CENI · Alianza Índigo Neurodivergente A.C.
        </p>
        <h1 className="mt-2 font-serif text-4xl font-black leading-[1.05] sm:text-5xl">
          Curso Integral de Capacitación
        </h1>
        <p className="mt-3 max-w-2xl text-white/85">
          10 módulos · 17 horas de capacitación · Certificación de Entornos Neuroinclusivos
          (CENI Laboral y CENI Espacios). Aprueba cada quiz con 70% o más para avanzar.
        </p>
        <p className="mt-4 border-l-2 border-[#dda632] pl-4 text-sm font-bold text-white">
          &quot;No necesitas PARECER para SER.&quot;
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <div className="h-2 w-full max-w-sm overflow-hidden rounded-full bg-white/20">
            <div
              className="h-full rounded-full bg-[#dda632]"
              style={{ width: `${porcentajeGeneral}%` }}
            />
          </div>
          <span className="text-sm font-bold text-white/90">
            {completados} / {totalModulos} módulos aprobados
          </span>
        </div>
      </section>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {modulos.map((m) => {
          const resultado = progreso.resultadosQuiz[m.id];
          const aprobado = resultado?.aprobado ?? false;
          return (
            <Link
              key={m.id}
              href={`/curso/${m.id}`}
              className="group rounded-2xl border border-[#e5def4] bg-white p-5 shadow-sm shadow-[#140a35]/5 transition-colors hover:border-[#4b18a8]"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f5f1ff] text-sm font-black text-[#4b18a8]">
                  {m.numero}
                </span>
                {aprobado ? (
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600" aria-label="Aprobado" />
                ) : (
                  <Circle className="h-5 w-5 shrink-0 text-[#e3dfef]" aria-label="Pendiente" />
                )}
              </div>
              <h2 className="mt-3 font-serif text-lg font-bold leading-snug text-[#070b2f] group-hover:text-[#4b18a8]">
                {m.titulo}
              </h2>
              <p className="mt-2 flex items-center gap-1.5 text-xs font-bold text-[#6c6690]">
                <Clock className="h-3.5 w-3.5" /> {m.duracion}
              </p>
              {resultado && (
                <p className="mt-2 text-xs text-[#6c6690]">
                  Último intento: <strong className="text-[#4b18a8]">{resultado.porcentaje}%</strong>
                </p>
              )}
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-black uppercase text-[#4b18a8]">
                {aprobado ? "Repasar módulo" : "Comenzar"} <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          );
        })}
      </div>

      <section className="mt-8 rounded-2xl border border-[#e5def4] bg-[#fbfaff] p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#dda632]/20 text-[#dda632]">
              <Award className="h-6 w-6" />
            </span>
            <div>
              <p className="font-bold text-[#070b2f]">Evaluación final y constancia</p>
              <p className="text-sm text-[#6c6690]">
                {examenAprobado
                  ? "Aprobaste el examen integrador. Descarga tu constancia."
                  : "Disponible al terminar los 10 módulos (puedes intentarlo antes también)."}
              </p>
            </div>
          </div>
          <Link
            href="/examen-final"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#4b18a8] px-5 text-sm font-black uppercase text-white hover:bg-[#351176]"
          >
            Ir al examen final <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <div className="mt-8 flex justify-end">
        <ReiniciarProgreso />
      </div>
    </div>
  );
}
