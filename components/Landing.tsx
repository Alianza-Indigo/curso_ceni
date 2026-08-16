"use client";

import { useState } from "react";
import LoginModal from "@/components/LoginModal";
import {
  ArrowRight,
  Download,
  Lock,
  Clock,
  CalendarCheck,
  ShieldCheck,
  BadgeCheck,
  FileCheck,
  Award,
  Target,
  GraduationCap,
  Users,
  HeartPulse,
  Scale,
  TrendingUp,
  Heart,
  Brain,
} from "lucide-react";

const NAV = [
  { label: "Inicio", href: "#inicio" },
  { label: "¿Qué es CENI?", href: "#que-es" },
  { label: "Contenido del curso", href: "#contenido" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Certificación", href: "#certificacion" },
  { label: "Preguntas frecuentes", href: "#faq" },
];

const CHIPS = [
  { icon: Heart, text: "Enfoque neurodivergente" },
  { icon: ShieldCheck, text: "Cumplimiento NOM-035-STPS-2018" },
  { icon: FileCheck, text: "Constancia DC-3 con valor curricular" },
  { icon: BadgeCheck, text: "Certificación CENI verificada" },
];

const STATS = [
  { icon: GraduationCap, title: "10 MÓDULOS", sub: "Contenido completo y práctico" },
  { icon: Clock, title: "+20 HORAS", sub: "De aprendizaje en línea" },
  { icon: Target, title: "100% PRÁCTICO", sub: "Actividades, casos y herramientas" },
  { icon: FileCheck, title: "CONSTANCIA DC-3", sub: "Con valor curricular ante la STPS" },
  { icon: Award, title: "CERTIFICACIÓN CENI", sub: "Bronce, Plata u Oro según tu evaluación" },
  { icon: ShieldCheck, title: "CUMPLIMIENTO NOM-035", sub: "Te preparamos para demostrar cumplimiento" },
];

const BENEFICIOS = [
  { icon: Users, text: "Atrae y retiene talento neurodivergente" },
  { icon: HeartPulse, text: "Mejora el clima laboral y bienestar" },
  { icon: Scale, text: "Cumple la ley y evita sanciones" },
  { icon: TrendingUp, text: "Fortalece tu reputación y cultura organizacional" },
  { icon: Heart, text: "Genera espacios dignos e inclusivos" },
];

const MODULOS = [
  "Neurodiversidad 101",
  "Comunicación Neuroafirmativa",
  "Manejo de Crisis Sensoriales",
  "Diseño Universal y Accesibilidad",
  "Ética, Derechos Humanos y NOM-035",
  "CENI Laboral",
  "CENI Espacios",
  "Gobernanza y Mejora Continua",
  "Implementación por Tipo de Actor",
  "Preparación para la Certificación",
];

const NIVELES = [
  { nombre: "Bronce", rango: "500–649 puntos", vig: "Vigencia 1 año", color: "#b45309", bg: "#fbf1e3" },
  { nombre: "Plata", rango: "650–799 puntos", vig: "Vigencia 2 años", color: "#6b7280", bg: "#f1f2f4" },
  { nombre: "Oro", rango: "800–1000 puntos", vig: "Vigencia 3 años", color: "#a16207", bg: "#fdf6dd" },
];

const FAQS = [
  {
    q: "¿El curso es en línea?",
    a: "Sí, es 100% en línea y asincrónico: avanzas a tu ritmo, desde cualquier dispositivo, sin horarios fijos.",
  },
  {
    q: "¿La constancia tiene valor oficial?",
    a: "Emitimos constancia con folio verificable. El programa está alineado a la constancia de competencias DC-3 y a las obligaciones de la NOM-035-STPS-2018.",
  },
  {
    q: "¿Tomar el curso hace que mi organización cumpla la NOM-035?",
    a: "El curso te prepara y te entrega las herramientas (política, cuestionarios oficiales, checklist). El cumplimiento lo logra el centro de trabajo al aplicarlas; aquí aprendes exactamente cómo hacerlo.",
  },
  {
    q: "¿Para quién es?",
    a: "Para propietarios, RRHH, directivos, docentes, prestadores de servicios y cualquier persona que quiera construir entornos neuroinclusivos.",
  },
];

export default function Landing() {
  const [open, setOpen] = useState(false);
  const abrir = () => setOpen(true);

  return (
    <div className="bg-white text-[#0e0a33]">
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-[#0b0a30] text-white">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 py-3">
          <a href="#inicio" className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#6d28d9]">
              <Brain className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="leading-none">
              <span className="block text-xl font-black tracking-tight">CENI</span>
              <span className="block text-[9px] font-semibold uppercase tracking-wide text-white/60">
                Alianza Índigo Neurodivergente A.C.
              </span>
            </span>
          </a>

          <nav className="ms-auto hidden items-center gap-1 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={abrir}
            className="ms-auto inline-flex min-h-11 items-center rounded-xl bg-[#6d28d9] px-5 text-sm font-black text-white transition-colors hover:bg-[#5b21b6] lg:ms-2"
          >
            Inscríbete ahora
          </button>
        </div>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="relative overflow-hidden bg-[radial-gradient(120%_120%_at_85%_0%,#ede8fb_0%,#f7f5fd_45%,#ffffff_100%)]"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 lg:grid-cols-2 lg:py-16">
          <div>
            <span className="inline-flex items-center rounded-full bg-[#efe7fb] px-4 py-1.5 text-xs font-black uppercase tracking-wide text-[#6d28d9]">
              Curso en línea · 100% asincrónico
            </span>
            <h1 className="mt-5 font-serif text-4xl font-black leading-[1.05] text-[#140a3f] sm:text-5xl">
              Certificación CENI: Neuroinclusión Laboral y{" "}
              <span className="text-[#6d28d9]">Cumplimiento NOM-035</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg text-[#4a4568]">
              La formación que tu organización necesita para construir entornos laborales
              neuroinclusivos y cumplir la NOM-035-STPS-2018.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
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

            <div className="mt-7 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={abrir}
                className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#6d28d9] px-6 py-3.5 text-sm font-black text-white transition-colors hover:bg-[#5b21b6]"
              >
                Quiero inscribirme <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="/landing/Temario_Curso_CENI.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-[#d9cef2] bg-white px-6 py-3.5 text-sm font-black text-[#6d28d9] transition-colors hover:bg-[#f5f1ff]"
              >
                Descargar temario <Download className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-[#4a4568]">
              <span className="inline-flex items-center gap-1.5">
                <Lock className="h-4 w-4 text-[#6d28d9]" /> Pago seguro
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-[#6d28d9]" /> Acceso inmediato
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarCheck className="h-4 w-4 text-[#6d28d9]" /> Aprende a tu ritmo
              </span>
            </div>
          </div>

          {/* Imagen del hero */}
          <div className="relative">
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-3xl shadow-xl shadow-[#6d28d9]/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/landing/equipo-ceni.jpg"
                alt="Equipo diverso de personas neurodivergentes sonriendo"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-5 left-5 hidden items-center gap-3 rounded-2xl border border-[#eee] bg-white/95 px-4 py-3 shadow-lg backdrop-blur sm:flex">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-[#6d28d9]/10 text-[#6d28d9]">
                <BadgeCheck className="h-6 w-6" />
              </span>
              <span className="leading-tight">
                <span className="block text-xs font-black uppercase tracking-wide text-[#6d28d9]">
                  Certificación
                </span>
                <span className="block text-sm font-black text-[#140a3f]">CENI · Alianza Índigo</span>
              </span>
            </div>

            <div className="mt-8 rounded-2xl bg-[#140a3f] p-5 text-white sm:absolute sm:-bottom-6 sm:right-4 sm:mt-0 sm:max-w-xs">
              <p className="font-serif text-lg font-black leading-snug">
                Transforma tu organización. Valida tu compromiso.
              </p>
              <p className="mt-2 text-sm text-white/75">
                CENI te da las herramientas para incluir, proteger la salud mental y cumplir la ley.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto -mt-2 max-w-7xl px-5 py-10 lg:pt-16">
        <div className="grid gap-x-6 gap-y-6 rounded-2xl border border-[#efeafb] bg-white p-6 shadow-sm sm:grid-cols-2 lg:grid-cols-6">
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

      {/* ¿QUÉ ES CENI? + BENEFICIOS */}
      <section className="mx-auto max-w-7xl px-5 py-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <div id="que-es" className="relative overflow-hidden rounded-2xl bg-[#140a3f] p-8 text-white">
            <Brain className="pointer-events-none absolute -right-6 -bottom-6 h-48 w-48 text-white/5" />
            <h2 className="font-serif text-2xl font-black">¿Qué es CENI?</h2>
            <p className="mt-4 max-w-md text-white/80">
              CENI es el programa de certificación de Alianza Índigo que reconoce a las organizaciones
              que implementan prácticas reales de neuroinclusión y cumplen con la NOM-035-STPS-2018.
            </p>
            <p className="mt-3 max-w-md text-white/80">
              Basado en los Derechos Índigo y en evidencia científica.
            </p>
            <button
              type="button"
              onClick={abrir}
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-xl bg-white/10 px-5 text-sm font-black text-white transition-colors hover:bg-white/20"
            >
              Conoce más sobre CENI <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div id="beneficios">
            <h2 className="font-serif text-2xl font-black text-[#140a3f]">
              Beneficios para tu organización
            </h2>
            <div className="mt-5 grid gap-3">
              {BENEFICIOS.map((b) => (
                <div
                  key={b.text}
                  className="flex items-center gap-3 rounded-xl border border-[#efeafb] bg-white px-4 py-3.5 shadow-sm"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#f3eefc] text-[#6d28d9]">
                    <b.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-semibold text-[#2c2550]">{b.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTENIDO DEL CURSO */}
      <section id="contenido" className="mx-auto max-w-7xl px-5 py-12">
        <h2 className="font-serif text-3xl font-black text-[#140a3f]">Contenido del curso</h2>
        <p className="mt-2 text-[#4a4568]">10 módulos que van de la sensibilización a la certificación.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {MODULOS.map((m, i) => (
            <div
              key={m}
              className="flex items-start gap-3 rounded-xl border border-[#efeafb] bg-white p-4 shadow-sm"
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#f3eefc] text-sm font-black text-[#6d28d9]">
                {i + 1}
              </span>
              <span className="pt-1 font-semibold text-[#2c2550]">{m}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICACIÓN */}
      <section id="certificacion" className="bg-[#f7f5fd]">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <h2 className="font-serif text-3xl font-black text-[#140a3f]">Niveles de certificación</h2>
          <p className="mt-2 text-[#4a4568]">
            La evaluación otorga uno de tres niveles, renovables y sujetos a auditoría.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {NIVELES.map((n) => (
              <div key={n.nombre} className="rounded-2xl border border-[#efeafb] bg-white p-6 shadow-sm">
                <span
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-black"
                  style={{ color: n.color, backgroundColor: n.bg }}
                >
                  <Award className="h-4 w-4" /> {n.nombre}
                </span>
                <p className="mt-4 text-2xl font-black text-[#140a3f]">{n.rango}</p>
                <p className="mt-1 text-sm text-[#6c6690]">{n.vig}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-5 py-14">
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
            Quiero acceder al curso <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* BANDA FINAL */}
      <section className="border-t border-[#efeafb] bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-4">
          <blockquote className="md:col-span-2">
            <p className="font-serif text-lg italic text-[#2c2550]">
              &quot;Gracias a CENI entendimos cómo incluir de verdad. Hoy somos una organización más
              humana, productiva y en cumplimiento.&quot;
            </p>
            <footer className="mt-2 text-sm font-bold text-[#6c6690]">
              — Empresa certificada CENI Oro
            </footer>
          </blockquote>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#6c6690]">Programa de</p>
            <p className="mt-1 flex items-center gap-2 font-black text-[#140a3f]">
              <Brain className="h-5 w-5 text-[#6d28d9]" /> Alianza Índigo Neurodivergente A.C.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#6c6690]">
              Fundamentado en los
            </p>
            <p className="mt-1 font-black text-[#140a3f]">Derechos Índigo</p>
            <p className="mt-1 text-sm text-[#6c6690]">
              Derechos humanos de cuarta generación para personas neurodivergentes.
            </p>
            <p className="mt-3 font-black text-[#6d28d9]">No necesitas PARECER para SER</p>
          </div>
        </div>
      </section>

      <LoginModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
