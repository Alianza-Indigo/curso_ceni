import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { getCurso, moduloDesbloqueadoCurso } from "@/lib/data/cursos";
import { obtenerProgreso } from "@/lib/progreso-server";
import { accesoSinRestriccion } from "@/lib/curso-acceso";
import { CheckCircle2, Circle, Clock, ArrowRight, Lock, ArrowLeft, Award } from "lucide-react";

export const metadata = { title: "Diplomado NOM-035 ND · CENI" };

export default async function DiplomadoDashboard({
  searchParams,
}: {
  searchParams: Promise<{ bloqueado?: string }>;
}) {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const curso = getCurso("diplomado")!;
  const progreso = await obtenerProgreso(session.user.id, curso.modulos, "diplomado");
  const libre = await accesoSinRestriccion(session.user.email);
  const { bloqueado } = await searchParams;

  const completados = progreso.modulosCompletados.filter((id) =>
    curso.modulos.some((m) => m.id === id)
  ).length;
  const total = curso.modulos.length;
  const porcentaje = Math.round((completados / total) * 100);
  const examenAprobado = progreso.examenFinal?.aprobado ?? false;
  const quizFinalAprobado = progreso.examenFinal?.quizAprobado ?? false;
  const examenDesbloqueado = libre || completados >= total;
  const constanciaVigente = progreso.examenFinal?.vigente ?? false;
  const vigenciaTexto = progreso.examenFinal?.vigenciaHasta
    ? new Date(progreso.examenFinal.vigenciaHasta).toLocaleDateString("es-MX", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-wide text-[#4b18a8] hover:underline"
      >
        <ArrowLeft className="h-4 w-4" /> Todos los cursos
      </Link>

      <section className="overflow-hidden rounded-2xl bg-[linear-gradient(150deg,#070b2f,#2b1163_62%,#4b18a8)] p-8 text-white">
        <p className="text-sm font-black uppercase tracking-wide text-[#dda632]">
          Programa profesional · Alianza Índigo Neurodivergente A.C.
        </p>
        <h1 className="mt-2 font-serif text-4xl font-black leading-[1.05] sm:text-5xl">
          {curso.titulo}
        </h1>
        <p className="mt-3 max-w-2xl text-white/85">
          {curso.descripcion} {curso.duracion} · {total} módulos. Aprueba el quiz de cada módulo
          con 70% o más y entrega sus actividades para avanzar al siguiente.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <div className="h-2 w-full max-w-sm overflow-hidden rounded-full bg-white/20">
            <div className="h-full rounded-full bg-[#dda632]" style={{ width: `${porcentaje}%` }} />
          </div>
          <span className="text-sm font-bold text-white/90">
            {completados} / {total} módulos aprobados
          </span>
        </div>
      </section>

      {bloqueado && (
        <div className="mt-6 flex items-center gap-3 rounded-xl border border-[#dda632] bg-[#fff8e8] p-4 text-sm text-[#5a4300]">
          <Lock className="h-4 w-4 shrink-0" />
          <p>Ese módulo está bloqueado. Aprueba y completa el módulo anterior para desbloquearlo.</p>
        </div>
      )}

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {curso.modulos.map((m) => {
          const resultado = progreso.resultadosQuiz[m.id];
          const completo = progreso.modulosCompletados.includes(m.id);
          const desbloqueado = libre || moduloDesbloqueadoCurso(curso, m, progreso.modulosCompletados);

          const contenido = (
            <>
              <div className="flex items-start justify-between gap-2">
                <span
                  className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-black ${
                    desbloqueado ? "bg-[#f5f1ff] text-[#4b18a8]" : "bg-[#f1f0f4] text-[#a6a2b8]"
                  }`}
                >
                  {m.numero}
                </span>
                {completo ? (
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600" aria-label="Aprobado" />
                ) : desbloqueado ? (
                  <Circle className="h-5 w-5 shrink-0 text-[#e3dfef]" aria-label="Pendiente" />
                ) : (
                  <Lock className="h-5 w-5 shrink-0 text-[#a6a2b8]" aria-label="Bloqueado" />
                )}
              </div>
              <h2
                className={`mt-3 font-serif text-lg font-bold leading-snug ${
                  desbloqueado ? "text-[#070b2f] group-hover:text-[#4b18a8]" : "text-[#8f8ba3]"
                }`}
              >
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
              {desbloqueado ? (
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-black uppercase text-[#4b18a8]">
                  {completo ? "Repasar módulo" : resultado?.aprobado ? "Completar actividades" : "Comenzar"}{" "}
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              ) : (
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-black uppercase text-[#a6a2b8]">
                  <Lock className="h-3.5 w-3.5" /> Completa el módulo {m.numero - 1} primero
                </span>
              )}
            </>
          );

          if (!desbloqueado) {
            return (
              <div
                key={m.id}
                aria-disabled="true"
                className="cursor-not-allowed rounded-2xl border border-[#e5def4] bg-[#fbfaff] p-5 opacity-70"
              >
                {contenido}
              </div>
            );
          }

          return (
            <Link
              key={m.id}
              href={`/diplomado/${m.id}`}
              className="group rounded-2xl border border-[#e5def4] bg-white p-5 shadow-sm shadow-[#140a35]/5 transition-colors hover:border-[#4b18a8]"
            >
              {contenido}
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
                  ? "Completaste la evaluación final. Descarga tu constancia."
                  : quizFinalAprobado
                    ? "Aprobaste el examen de opción múltiple — entrega el proyecto final y la retroalimentación para completar tu constancia."
                    : examenDesbloqueado
                      ? `Ya aprobaste los ${total} módulos. Puedes presentar el examen final.`
                      : `Aprueba los ${total} módulos para desbloquearlo (llevas ${completados}/${total}).`}
              </p>
              {examenAprobado && vigenciaTexto && (
                <p className={`mt-1 text-xs font-bold ${constanciaVigente ? "text-green-700" : "text-[#b45309]"}`}>
                  {constanciaVigente
                    ? `Vigente hasta el ${vigenciaTexto}.`
                    : `Venció el ${vigenciaTexto} — vuelve a presentar el examen final para renovarla.`}
                </p>
              )}
            </div>
          </div>
          {examenDesbloqueado ? (
            <Link
              href="/diplomado/examen-final"
              className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#4b18a8] px-5 text-sm font-black uppercase text-white hover:bg-[#351176]"
            >
              Ir al examen final <ArrowRight className="h-4 w-4" />
            </Link>
          ) : (
            <span
              className="inline-flex min-h-11 cursor-not-allowed items-center gap-2 rounded-lg border border-[#e3dfef] px-5 text-sm font-black uppercase text-[#a6a2b8]"
              title={`Aprueba los ${total} módulos para desbloquear el examen final`}
            >
              <Lock className="h-4 w-4" /> Ir al examen final
            </span>
          )}
        </div>
      </section>
    </div>
  );
}
