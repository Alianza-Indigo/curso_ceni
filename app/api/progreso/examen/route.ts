import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { obtenerProgreso, registrarResultadoExamen } from "@/lib/progreso-server";
import { getCurso } from "@/lib/data/cursos";
import { accesoSinRestriccion } from "@/lib/curso-acceso";
import type { Respuestas } from "@/lib/quiz-scoring";

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
  const { respuestas } = body ?? {};
  const cursoId = typeof body?.cursoId === "string" ? body.cursoId : "ceni";

  const curso = getCurso(cursoId);
  if (!curso || !curso.tieneExamenFinal) {
    return NextResponse.json({ error: "Curso sin examen final" }, { status: 400 });
  }

  const libre = await accesoSinRestriccion(session.user.email);
  const progreso = await obtenerProgreso(session.user.id, curso.modulos, cursoId);
  if (!libre && progreso.modulosCompletados.length < curso.modulos.length) {
    return NextResponse.json(
      { error: `Debes aprobar los ${curso.modulos.length} módulos antes de presentar el examen final` },
      { status: 403 }
    );
  }

  // El puntaje se recalcula en el servidor: el cliente NO envía aciertos/total.
  if (!respuestasValidas(respuestas)) {
    return NextResponse.json({ error: "Cuerpo inválido" }, { status: 400 });
  }

  try {
    const resultado = await registrarResultadoExamen(session.user.id, respuestas, cursoId);
    return NextResponse.json(resultado);
  } catch {
    return NextResponse.json(
      { error: "No se recibieron respuestas válidas para el examen." },
      { status: 400 }
    );
  }
}
