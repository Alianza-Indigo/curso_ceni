"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";

type Mensaje = { role: "user" | "model"; texto: string };

function moduloIdDesdeRuta(pathname: string): string | undefined {
  const match = pathname.match(/^\/curso\/([^/]+)/);
  return match?.[1];
}

export default function AsistenteChat() {
  const pathname = usePathname();
  const moduloId = moduloIdDesdeRuta(pathname);

  const [abierto, setAbierto] = useState(false);
  const [mensajes, setMensajes] = useState<Mensaje[]>([]);
  const [entrada, setEntrada] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const listaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listaRef.current?.scrollTo({ top: listaRef.current.scrollHeight });
  }, [mensajes, abierto]);

  async function enviar() {
    const texto = entrada.trim();
    if (!texto || enviando) return;

    const historial = [...mensajes, { role: "user" as const, texto }];
    setMensajes([...historial, { role: "model", texto: "" }]);
    setEntrada("");
    setEnviando(true);
    setError(null);

    try {
      const res = await fetch("/api/asistente", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ moduloId, mensajes: historial }),
      });

      if (!res.ok || !res.body) {
        const detalle = await res.text().catch(() => "");
        throw new Error(detalle || "No se pudo contactar al asistente.");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acumulado = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        acumulado += decoder.decode(value, { stream: true });
        setMensajes([...historial, { role: "model", texto: acumulado }]);
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "Ocurrió un error inesperado.");
      setMensajes(historial);
    } finally {
      setEnviando(false);
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {abierto && (
        <div className="mb-3 flex h-[28rem] w-[22rem] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-[#e5def4] bg-white shadow-xl">
          <div className="flex items-center justify-between border-b border-[#e5def4] bg-[#070b2f] px-4 py-3 text-white">
            <p className="text-sm font-black uppercase tracking-wide text-[#dda632]">
              Asistente del curso
            </p>
            <button
              type="button"
              onClick={() => setAbierto(false)}
              aria-label="Cerrar asistente"
              className="grid h-8 w-8 place-items-center rounded-lg hover:bg-white/10"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div ref={listaRef} className="flex-1 space-y-3 overflow-y-auto p-4">
            {mensajes.length === 0 && (
              <p className="text-sm text-[#6c6690]">
                Pregúntame lo que quieras sobre este módulo o sobre el curso CENI. Esta
                conversación no se guarda: se borra al recargar o salir de la página.
              </p>
            )}
            {mensajes.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-xl px-3 py-2 text-sm leading-relaxed ${
                  m.role === "user"
                    ? "ml-auto bg-[#4b18a8] text-white"
                    : "bg-[#f5f1ff] text-[#20234a]"
                }`}
              >
                {m.texto || (enviando && i === mensajes.length - 1 ? "…" : "")}
              </div>
            ))}
            {error && (
              <p className="rounded-xl bg-red-50 px-3 py-2 text-xs text-[#7a2b2b]">{error}</p>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              enviar();
            }}
            className="flex items-center gap-2 border-t border-[#e5def4] p-3"
          >
            <input
              type="text"
              value={entrada}
              onChange={(e) => setEntrada(e.target.value)}
              placeholder="Escribe tu pregunta…"
              disabled={enviando}
              className="min-h-11 flex-1 rounded-lg border border-[#e3dfef] px-3 text-sm outline-none focus-visible:border-[#4b18a8]"
            />
            <button
              type="submit"
              disabled={enviando || !entrada.trim()}
              aria-label="Enviar"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#4b18a8] text-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              {enviando ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setAbierto((v) => !v)}
        aria-label={abierto ? "Cerrar asistente" : "Abrir asistente del curso"}
        aria-expanded={abierto}
        className="grid h-14 w-14 place-items-center rounded-full bg-[#4b18a8] text-white shadow-lg hover:bg-[#351176]"
      >
        {abierto ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
}
