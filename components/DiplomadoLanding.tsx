"use client";

import { useState } from "react";
import LoginModal from "@/components/LoginModal";
import { signInGoogleDiplomadoAction } from "@/app/actions/auth";
import {
  ArrowRight,
  ArrowLeft,
  Clock,
  Layers,
  ShieldCheck,
  FileCheck,
  BadgeCheck,
  Scale,
  Calculator,
  Briefcase,
  ClipboardCheck,
  Building2,
  Brain,
} from "lucide-react";

const CENI_URL = "https://ceni.alianzaindigo.org";

type ModuloResumen = { numero: number; titulo: string; duracion: string };

const CHIPS = [
  { icon: Clock, text: "226 horas de formación" },
  { icon: Layers, text: "23 módulos" },
  { icon: FileCheck, text: "Constancia DC-3 (STPS)" },
  { icon: Brain, text: "Enfoque de neurodivergencia" },
];

const STATS = [
  { icon: Scale, title: "NOM-035 COMPLETA", sub: "Del diagnóstico a la evidencia auditable" },
  { icon: Calculator, title: "TALLER DE EXCEL", sub: "Calcula resultados con instrumentos oficiales" },
  { icon: ClipboardCheck, title: "SIMULACIÓN STPS", sub: "Prepárate para una inspección real" },
  { icon: Briefcase, title: "PRÁCTICA CONSULTIVA", sub: "Ejerce como especialista NOM-035" },
  { icon: Building2, title: "CASOS SECTORIALES", sub: "9 sectores de México" },
  { icon: BadgeCheck, title: "PROYECTO FINAL", sub: "Implementación sobre una organización real" },
];

const PARA_QUIEN = [
  "Consultores y especialistas que quieren ofrecer servicios de NOM-035.",
  "Responsables internos de Recursos Humanos y de Seguridad y Salud en el Trabajo.",
  "Auditores y responsables de neuroinclusión.",
];

const FAQS = [
  {
    q: "¿En qué se diferencia del Curso CENI?",
    a: "El Curso CENI (17 h) es introductorio en neuroinclusión. Este Diplomado (226 h) forma especialistas para implementar la NOM-035 completa en organizaciones, con lente de neurodivergencia.",
  },
  {
    q: "¿La constancia tiene valor oficial?",
    a: "Al acreditar se expide Constancia DC-3 (formato STPS) a través del agente capacitador, además del diploma de Alianza Índigo. El DC-3 requiere completarse y firmarse con los datos del trabajador y la empresa.",
  },
  {
    q: "¿Necesito conocimientos previos?",
    a: "Es un programa profesional, pero autocontenido: cada módulo desarrolla el marco legal, los instrumentos y la práctica paso a paso.",
  },
  {
    q: "¿Es en línea?",
    a: "Sí, 100% en línea y a tu ritmo. Incluye talleres prácticos (Excel, protocolo ATS, expediente) y un proyecto final aplicado.",
  },
];

export default function DiplomadoLanding({ modulos }: { modulos: ModuloResumen[] }) {
  const [open, setOpen] = useState(false);
  const abrir = () => setOpen(true);

  return (
    <div className="bg-white text-[#0e0a33]">
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-[#0b0a30] text-white">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 py-3">
          <a href="#inicio" className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#6d28d9]">
              <Scale className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="leading-none">
              <span className="block text-lg font-black tracking-tight">Diplomado NOM-035 ND</span>
              <span className="block text-[9px] font-semibold uppercase tracking-wide text-white/60">
                Alianza Índigo Neurodivergente A.C.
              </span>
            </span>
          </a>

          <a
            href={CENI_URL}
            className="ms-auto inline-flex min-h-11 items-center gap-1.5 rounded-xl border border-white/25 px-3.5 text-sm font-bold text-white/85 transition-colors hover:bg-white/10 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Volver a CENI</span>
          </a>
          <button
            type="button"
            onClick={abrir}
            className="inline-flex min-h-11 items-center rounded-xl bg-[#6d28d9] px-5 text-sm font-black text-white transition-colors hover:bg-[#5b21b6] lg:ms-2"
          >
            Accesar
          </button>
        </div>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="relative overflow-hidden bg-[radial-gradient(120%_120%_at_85%_0%,#ede8fb_0%,#f7f5fd_45%,#ffffff_100%)]"
      >
        <div className="mx-auto max-w-4xl px-5 py-16 text-center lg:py-20">
          <span className="inline-flex items-center rounded-full bg-[#efe7fb] px-4 py-1.5 text-xs font-black uppercase tracking-wide text-[#6d28d9]">
            Programa profesional · 100% en línea
          </span>
          <h1 className="mt-5 font-serif text-4xl font-black leading-[1.05] text-[#140a3f] sm:text-5xl">
            Diplomado NOM-035 ND:{" "}
            <span className="text-[#6d28d9]">forma especialistas en riesgo psicosocial</span> con
            enfoque de neurodivergencia
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#4a4568]">
            226 horas para implementar la NOM-035-STPS-2018 de principio a fin: factores de riesgo,
            instrumentos y cálculo, ATS, inspección, práctica consultiva y proyecto final.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {CHIPS.map((c) => (
              <span
                key={c.text}
                className="inline-flex items-center gap-2 rounded-xl border border-[#e7e0f7] bg-white px-3.5 py-2.5 text-sm font-semibold text-[#2c2550] shadow-sm"
              >
                <c.icon className="h-4 w-4 shrink-0 text-[#6d28d9]" aria-hidden="true" />
                {c.text}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={abrir}
              className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#6d28d9] px-6 py-3.5 text-sm font-black text-white transition-colors hover:bg-[#5b21b6]"
            >
              Quiero inscribirme <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="#contenido"
              className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-[#d9cef2] bg-white px-6 py-3.5 text-sm font-black text-[#6d28d9] transition-colors hover:bg-[#f5f1ff]"
            >
              Ver los 23 módulos
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto -mt-2 max-w-7xl px-5 py-10 lg:pt-14">
        <div className="grid gap-x-6 gap-y-6 rounded-2xl border border-[#efeafb] bg-white p-6 shadow-sm sm:grid-cols-2 lg:grid-cols-3">
          {STATS.map((s) => (
            <div key={s.title} className="flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#f3eefc] text-[#6d28d9]">
                <s.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-black text-[#140a3f]">{s.title}</span>
                <span className="block text-xs text-[#6c6690]">{s.sub}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ¿QUÉ ES? + PARA QUIÉN */}
      <section className="mx-auto max-w-7xl px-5 py-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl bg-[#140a3f] p-8 text-white">
            <Scale className="pointer-events-none absolute -right-6 -bottom-6 h-48 w-48 text-white/5" />
            <h2 className="font-serif text-2xl font-black">¿Qué es este diplomado?</h2>
            <p className="mt-4 max-w-md text-white/80">
              Un programa profesional que te capacita para diagnosticar, implementar, documentar y
              defender el cumplimiento de la NOM-035-STPS-2018 en cualquier centro de trabajo, con
              una capa de neurodivergencia que la norma por sí sola no cubre.
            </p>
            <p className="mt-3 max-w-md text-white/80">
              De la teoría a la evidencia auditable: instrumentos, cálculo, protocolos y práctica
              consultiva real.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-black text-[#140a3f]">¿Para quién es?</h2>
            <div className="mt-5 grid gap-3">
              {PARA_QUIEN.map((t) => (
                <div
                  key={t}
                  className="flex items-center gap-3 rounded-xl border border-[#efeafb] bg-white px-4 py-3.5 shadow-sm"
                >
                  <BadgeCheck className="h-5 w-5 shrink-0 text-[#6d28d9]" aria-hidden="true" />
                  <span className="font-semibold text-[#2c2550]">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTENIDO — 23 módulos */}
      <section id="contenido" className="mx-auto max-w-7xl px-5 py-12">
        <h2 className="font-serif text-3xl font-black text-[#140a3f]">Contenido del diplomado</h2>
        <p className="mt-2 text-[#4a4568]">
          {modulos.length} módulos, del marco estratégico a la certificación.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {modulos.map((m) => (
            <div
              key={m.numero}
              className="flex items-start gap-3 rounded-xl border border-[#efeafb] bg-white p-4 shadow-sm"
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#f3eefc] text-sm font-black text-[#6d28d9]">
                {m.numero}
              </span>
              <span className="pt-0.5">
                <span className="block font-semibold text-[#2c2550]">{m.titulo}</span>
                <span className="mt-0.5 flex items-center gap-1 text-xs text-[#6c6690]">
                  <Clock className="h-3 w-3" /> {m.duracion}
                </span>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICACIÓN */}
      <section className="bg-[#f7f5fd]">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <h2 className="font-serif text-3xl font-black text-[#140a3f]">Al terminar</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-[#efeafb] bg-white p-6 shadow-sm">
              <FileCheck className="h-6 w-6 text-[#6d28d9]" />
              <p className="mt-3 font-black text-[#140a3f]">Constancia DC-3</p>
              <p className="mt-1 text-sm text-[#6c6690]">
                Formato STPS expedido por el agente capacitador al acreditar la evaluación final.
              </p>
            </div>
            <div className="rounded-2xl border border-[#efeafb] bg-white p-6 shadow-sm">
              <BadgeCheck className="h-6 w-6 text-[#6d28d9]" />
              <p className="mt-3 font-black text-[#140a3f]">Diploma Alianza Índigo</p>
              <p className="mt-1 text-sm text-[#6c6690]">
                Con folio verificable en línea.
              </p>
            </div>
            <div className="rounded-2xl border border-[#efeafb] bg-white p-6 shadow-sm">
              <ShieldCheck className="h-6 w-6 text-[#6d28d9]" />
              <p className="mt-3 font-black text-[#140a3f]">Listo para la práctica</p>
              <p className="mt-1 text-sm text-[#6c6690]">
                Instrumentos, plantillas y un proyecto final aplicado a una organización real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-5 py-14">
        <h2 className="text-center font-serif text-3xl font-black text-[#140a3f]">
          Preguntas frecuentes
        </h2>
        <div className="mt-8 divide-y divide-[#efeafb] rounded-2xl border border-[#efeafb] bg-white">
          {FAQS.map((f) => (
            <details key={f.q} className="group px-6 py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-black text-[#140a3f]">
                {f.q}
                <ArrowRight className="h-4 w-4 shrink-0 text-[#6d28d9] transition-transform group-open:rotate-90" />
              </summary>
              <p className="mt-3 text-sm text-[#4a4568]">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={abrir}
            className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#6d28d9] px-7 py-3.5 text-sm font-black text-white transition-colors hover:bg-[#5b21b6]"
          >
            Quiero acceder al diplomado <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#efeafb] bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-8">
          <p className="flex items-center gap-2 font-black text-[#140a3f]">
            <Brain className="h-5 w-5 text-[#6d28d9]" /> Alianza Índigo Neurodivergente A.C.
          </p>
          <a href={CENI_URL} className="text-sm font-bold text-[#6d28d9] hover:underline">
            ← Volver a ceni.alianzaindigo.org
          </a>
        </div>
      </footer>

      <LoginModal
        open={open}
        onClose={() => setOpen(false)}
        action={signInGoogleDiplomadoAction}
        titulo="Ingresa al Diplomado NOM-035 ND"
        descripcion="Inicia sesión para acceder a los 23 módulos, tus evaluaciones y tu constancia."
      />
    </div>
  );
}
