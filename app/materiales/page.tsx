import Link from "next/link";
import {
  glosario,
  historiasSociales,
  scriptsComunicacion,
  guiasRapidas,
  formatosDescargables,
  ejerciciosAdicionales,
  referenciasMarco,
} from "@/lib/data/materiales";
import { ArrowLeft, BookOpen, MessageSquareText, Zap, FileDown, ClipboardList, Library } from "lucide-react";

export const metadata = { title: "Materiales del curso · Curso CENI" };

export default function MaterialesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-wide text-[#4b18a8] hover:underline"
      >
        <ArrowLeft className="h-4 w-4" /> Volver a mi progreso
      </Link>

      <p className="text-xs font-black uppercase tracking-wide text-[#dda632]">Anexos del curso</p>
      <h1 className="mt-1 font-serif text-4xl font-black text-[#070b2f]">Materiales de apoyo</h1>
      <p className="mt-3 max-w-2xl text-[#20234a]">
        Historias sociales, scripts de comunicación, guías rápidas, glosario oficial y formatos
        descargables del programa CENI.
      </p>

      <section className="mt-10">
        <h2 className="flex items-center gap-2 font-serif text-2xl font-bold text-[#070b2f]">
          <Zap className="h-5 w-5 text-[#dda632]" /> Guías rápidas de bolsillo
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {guiasRapidas.map((g, i) => (
            <div key={i} className="rounded-2xl border border-[#070b2f] bg-[#070b2f] p-5 text-white">
              <p className="text-xs font-black uppercase tracking-wide text-[#dda632]">{g.titulo}</p>
              <ol className="mt-3 space-y-1.5 text-sm text-white/90">
                {g.items.map((it, j) => (
                  <li key={j}>{it}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="flex items-center gap-2 font-serif text-2xl font-bold text-[#070b2f]">
          <MessageSquareText className="h-5 w-5 text-[#4b18a8]" /> Historias sociales neuroafirmativas
        </h2>
        <div className="mt-4 grid gap-4">
          {historiasSociales.map((h, i) => (
            <div key={i} className="rounded-2xl border border-[#e5def4] bg-[#fbfaff] p-5">
              <p className="font-bold text-[#070b2f]">{h.titulo}</p>
              <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-[#20234a]">{h.texto}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="flex items-center gap-2 font-serif text-2xl font-bold text-[#070b2f]">
          <MessageSquareText className="h-5 w-5 text-[#4b18a8]" /> Scripts de comunicación accesible
        </h2>
        <div className="mt-4 grid gap-4">
          {scriptsComunicacion.map((s, i) => (
            <div key={i} className="rounded-2xl border border-[#e5def4] bg-white p-5">
              <p className="font-bold text-[#070b2f]">{s.titulo}</p>
              <p className="mt-1 text-xs text-[#6c6690]">{s.situacion}</p>
              <p className="mt-3 rounded-lg bg-green-50 p-3 text-sm italic text-[#20234a]">{s.script}</p>
              <p className="mt-2 rounded-lg bg-red-50 p-3 text-sm italic text-[#7a2b2b]">
                Evitar: {s.noHacer}
              </p>
              <p className="mt-2 text-xs text-[#6c6690]">{s.porQue}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="flex items-center gap-2 font-serif text-2xl font-bold text-[#070b2f]">
          <BookOpen className="h-5 w-5 text-[#4b18a8]" /> Glosario oficial de términos CENI
        </h2>
        <div className="mt-4 divide-y divide-[#e5def4] rounded-2xl border border-[#e5def4] bg-white">
          {glosario.map((g, i) => (
            <div key={i} className="p-4">
              <p className="font-bold text-[#4b18a8]">{g.termino}</p>
              <p className="mt-1 text-sm leading-relaxed text-[#20234a]">{g.definicion}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="flex items-center gap-2 font-serif text-2xl font-bold text-[#070b2f]">
          <FileDown className="h-5 w-5 text-[#4b18a8]" /> Formatos descargables (referencia)
        </h2>
        <p className="mt-2 text-sm text-[#6c6690]">
          Disponibles en alianzaindigo.org/ceni/recursos
        </p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {formatosDescargables.map((f) => (
            <li
              key={f.codigo}
              className="flex gap-3 rounded-lg border border-[#e5def4] bg-[#fbfaff] p-3 text-sm text-[#20234a]"
            >
              <span className="font-black text-[#dda632]">{f.codigo}</span>
              <span>{f.nombre}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="flex items-center gap-2 font-serif text-2xl font-bold text-[#070b2f]">
          <ClipboardList className="h-5 w-5 text-[#4b18a8]" /> Anexo E — Ejercicios prácticos adicionales
        </h2>
        <div className="mt-4 grid gap-4">
          {ejerciciosAdicionales.map((e) => (
            <div key={e.codigo} className="rounded-2xl border border-[#e5def4] bg-white p-5">
              <p className="font-bold text-[#070b2f]">
                Ejercicio {e.codigo} — {e.titulo}
              </p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wide text-[#6c6690]">{e.duracion}</p>
              <p className="mt-3 text-sm text-[#20234a]">
                <strong className="text-[#4b18a8]">Objetivo:</strong> {e.objetivo}
              </p>
              <p className="mt-2 text-sm text-[#20234a]">
                <strong className="text-[#4b18a8]">Instrucciones:</strong> {e.instrucciones}
              </p>
              {e.reflexion && (
                <p className="mt-2 text-sm italic text-[#6c6690]">Reflexión: {e.reflexion}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 mb-10">
        <h2 className="flex items-center gap-2 font-serif text-2xl font-bold text-[#070b2f]">
          <Library className="h-5 w-5 text-[#4b18a8]" /> Referencias y marco documental
        </h2>
        <div className="mt-4 grid gap-4">
          {referenciasMarco.map((r) => (
            <div key={r.categoria} className="rounded-2xl border border-[#e5def4] bg-[#fbfaff] p-5">
              <p className="font-bold text-[#070b2f]">{r.categoria}</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[#20234a]">
                {r.items.map((it, i) => (
                  <li key={i}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
