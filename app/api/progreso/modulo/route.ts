import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { registrarResultadoModulo, obtenerProgreso } from "@/lib/progreso-server";
import { getModuloGlobal, getCursoDeModulo, moduloDesbloqueadoCurso } from "@/lib/data/cursos";
import { accesoSinRestriccion } from "@/lib/curso-acceso";
import { verificarIntento } from "@/lib/evaluacion-intento";
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
  const { moduloId, respuestas, token } = body ?? {};

  // El puntaje se recalcula en el servidor: el cliente NO envía aciertos/total.
  if (typeof moduloId !== "string" || !respuestasValidas(respuestas)) {
    return NextResponse.json({ error: "Cuerpo inválido" }, { status: 400 });
  }

  const modulo = getModuloGlobal(moduloId);
  const curso = getCursoDeModulo(moduloId);
  if (!modulo || !curso) return NextResponse.json({ error: "Módulo desconocido" }, { status: 404 });
  const libre = await accesoSinRestriccion(session.user.email);
  const progreso = await obtenerProgreso(session.user.id, curso.modulos, curso.id);
  if (!libre && !moduloDesbloqueadoCurso(curso, modulo, progreso.modulosCompletados)) {
    return NextResponse.json({ error: "Completa primero el módulo anterior" }, { status: 403 });
  }
  try {
    verificarIntento(token, session.user.id, `modulo:${moduloId}`, respuestas, modulo.preguntasPorIntento);
    const resultado = await registrarResultadoModulo(session.user.id, moduloId, respuestas);
    return NextResponse.json(resultado);
  } catch {
    return NextResponse.json(
      { error: "No se pudo registrar el resultado (módulo o respuestas inválidos)." },
      { status: 400 }
    );
  }
}
