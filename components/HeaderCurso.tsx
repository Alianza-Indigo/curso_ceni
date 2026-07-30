"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Waves, GraduationCap } from "lucide-react";

export default function HeaderCurso() {
  const [calma, setCalma] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("ceni-calm") === "true";
    setCalma(saved);
    document.documentElement.setAttribute("data-calm", saved ? "true" : "false");
  }, []);

  function toggleCalma() {
    const next = !calma;
    setCalma(next);
    window.localStorage.setItem("ceni-calm", String(next));
    document.documentElement.setAttribute("data-calm", String(next));
  }

  return (
    <header className="sticky top-0 z-40 border-b border-[#eee9f7] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
        <Link href="/" className="flex items-center gap-2 min-h-11">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#4b18a8] text-white">
            <GraduationCap className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="leading-none">
            <span className="block font-serif text-2xl font-black text-[#070b2f]">
              Curso CENI
            </span>
            <span className="hidden text-[10px] font-black uppercase tracking-wide text-[#6c6690] sm:block">
              Certificación de Entornos Neuroinclusivos
            </span>
          </span>
        </Link>

        <nav aria-label="Navegación del curso" className="ms-auto hidden items-center gap-1 sm:flex">
          <Link
            href="/"
            className="rounded-lg px-3 py-2 text-xs font-black uppercase tracking-wide text-[#070b2f] hover:bg-[#f5f1ff]"
          >
            Mi progreso
          </Link>
          <Link
            href="/materiales"
            className="rounded-lg px-3 py-2 text-xs font-black uppercase tracking-wide text-[#070b2f] hover:bg-[#f5f1ff]"
          >
            Materiales
          </Link>
          <Link
            href="/examen-final"
            className="rounded-lg px-3 py-2 text-xs font-black uppercase tracking-wide text-[#070b2f] hover:bg-[#f5f1ff]"
          >
            Examen final
          </Link>
        </nav>

        <button
          type="button"
          onClick={toggleCalma}
          aria-pressed={calma}
          className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-[#e3dfef] bg-white px-3 py-2 text-xs font-bold text-[#4b18a8] hover:bg-[#f5f1ff]"
        >
          <Waves className="h-4 w-4" aria-hidden="true" />
          <span className="hidden sm:inline">{calma ? "Modo calma activo" : "Modo calma"}</span>
        </button>
      </div>
    </header>
  );
}
