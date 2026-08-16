"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useSyncExternalStore } from "react";
import { Waves, GraduationCap, LogOut } from "lucide-react";
import { signOutAction } from "@/app/actions/auth";

type Usuario = { name?: string | null; email?: string | null; image?: string | null } | null;

const CALM_KEY = "ceni-calm";
const CALM_EVENT = "ceni-calm-changed";

function subscribeCalma(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(CALM_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CALM_EVENT, callback);
  };
}

function leerCalma() {
  return window.localStorage.getItem(CALM_KEY) === "true";
}

function leerCalmaServidor() {
  return false;
}

export default function HeaderCurso({ usuario }: { usuario: Usuario }) {
  const pathname = usePathname();
  const calma = useSyncExternalStore(subscribeCalma, leerCalma, leerCalmaServidor);

  useEffect(() => {
    document.documentElement.setAttribute("data-calm", calma ? "true" : "false");
  }, [calma]);

  function toggleCalma() {
    window.localStorage.setItem(CALM_KEY, String(!calma));
    window.dispatchEvent(new Event(CALM_EVENT));
  }

  // La landing pública (usuario no autenticado en "/") trae su propio encabezado.
  if (!usuario && pathname === "/") return null;

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

        {usuario && (
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
        )}

        <button
          type="button"
          onClick={toggleCalma}
          aria-pressed={calma}
          className={`inline-flex min-h-10 items-center gap-2 rounded-lg border border-[#e3dfef] bg-white px-3 py-2 text-xs font-bold text-[#4b18a8] hover:bg-[#f5f1ff] ${usuario ? "" : "ms-auto"}`}
        >
          <Waves className="h-4 w-4" aria-hidden="true" />
          <span className="hidden sm:inline">{calma ? "Modo calma activo" : "Modo calma"}</span>
        </button>

        {usuario && (
          <div className="flex items-center gap-2">
            {usuario.image ? (
              <Image
                src={usuario.image}
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 rounded-full"
                referrerPolicy="no-referrer"
              />
            ) : null}
            <span className="hidden text-xs font-bold text-[#070b2f] md:inline">
              {usuario.name ?? usuario.email}
            </span>
            <form action={signOutAction}>
              <button
                type="submit"
                title="Cerrar sesión"
                className="inline-flex min-h-10 items-center gap-1.5 rounded-lg border border-[#e3dfef] bg-white px-3 py-2 text-xs font-bold text-[#6c6690] hover:bg-[#f5f1ff]"
              >
                <LogOut className="h-4 w-4" aria-hidden="true" />
                <span className="hidden sm:inline">Salir</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </header>
  );
}
