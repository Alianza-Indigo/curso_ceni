import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { registrarResultadoModulo } from "@/lib/progreso-server";
import type { Respuestas } from "@/lib/quiz-scoring";

// Valida que `respuestas` sea un objeto { idPregunta: textoOpción }.
function respuestasValidas(v: unknown): v is Respuestas {
  if (typeof v !== "object" || v === null || Array.isArray(v)) return false;
  return Object.values(v as Record<string, unknown>).every((x) => typeof x === "string");
}

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "No autenticado" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const { moduloId, respuestas } = body ?? {};

  // El puntaje se recalcula en el servidor: el cliente NO envía aciertos/total.
  if (typeof moduloId !== "string" || !respuestasValidas(respuestas)) {
    return NextResponse.json({ error: "Cuerpo inválido" }, { status: 400 });
  }

  try {
    const resultado = await registrarResultadoModulo(session.user.id, moduloId, respuestas);
    return NextResponse.json(resultado);
  } catch {
    return NextResponse.json(
      { error: "No se pudo registrar el resultado (módulo o respuestas inválidos)." },
      { status: 400 }
    );
  }
}
