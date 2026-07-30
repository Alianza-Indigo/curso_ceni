import { GoogleGenAI } from "@google/genai";
import { auth } from "@/auth";
import { construirSystemInstruction } from "@/lib/asistente-contexto";
import { consumirMensajeAsistente } from "@/lib/asistente-limite";

const MODELO = "gemini-3.1-flash-lite";
const MAX_MENSAJES = 20;
const MAX_TEXTO_MENSAJE = 2000;

type MensajeEntrada = { role: "user" | "model"; texto: string };

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return new Response("No autenticado", { status: 401 });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return new Response("El asistente no está configurado (falta GEMINI_API_KEY).", {
      status: 503,
    });
  }

  const body = await request.json().catch(() => null);
  const mensajes: MensajeEntrada[] = Array.isArray(body?.mensajes) ? body.mensajes : [];
  const moduloId: string | undefined =
    typeof body?.moduloId === "string" ? body.moduloId : undefined;

  if (
    mensajes.length === 0 ||
    mensajes.length > MAX_MENSAJES ||
    mensajes.some(
      (m) =>
        (m.role !== "user" && m.role !== "model") ||
        typeof m.texto !== "string" ||
        m.texto.length === 0 ||
        m.texto.length > MAX_TEXTO_MENSAJE
    )
  ) {
    return new Response("Conversación inválida", { status: 400 });
  }

  const limite = await consumirMensajeAsistente(session.user.id);
  if (!limite.permitido) {
    return new Response(
      `Alcanzaste el límite de ${limite.limite} mensajes al asistente por hoy. Vuelve mañana o escribe directamente a Alianza Índigo.`,
      { status: 429 }
    );
  }

  const ai = new GoogleGenAI({ apiKey });
  const contents = mensajes.map((m) => ({ role: m.role, parts: [{ text: m.texto }] }));

  try {
    const streamResp = await ai.models.generateContentStream({
      model: MODELO,
      contents,
      config: {
        systemInstruction: construirSystemInstruction(moduloId),
        temperature: 0.4,
        maxOutputTokens: 700,
      },
    });

    const encoder = new TextEncoder();
    const stream = new ReadableStream<Uint8Array>({
      async start(controller) {
        try {
          for await (const chunk of streamResp) {
            const texto = chunk.text;
            if (texto) controller.enqueue(encoder.encode(texto));
          }
        } catch (err) {
          controller.error(err);
          return;
        }
        controller.close();
      },
    });

    return new Response(stream, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  } catch {
    return new Response("El asistente no pudo responder en este momento. Intenta de nuevo.", {
      status: 502,
    });
  }
}
