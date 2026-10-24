import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { getCurso, getCursoDeModulo, getModuloGlobal, moduloDesbloqueadoCurso } from "@/lib/data/cursos";
import { construirExamenFinal } from "@/lib/data/examenFinal";
import { construirExamenFinalDiplomado } from "@/lib/data/diplomado/examenFinal";
import { armarIntento } from "@/lib/quiz-shuffle";
import { firmarIntento, publicarPreguntas } from "@/lib/evaluacion-intento";
import { accesoSinRestriccion } from "@/lib/curso-acceso";
import { obtenerProgreso } from "@/lib/progreso-server";

export async function GET(request: Request) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "No autenticado" }, { status: 401 });
  const url = new URL(request.url);
  const tipo = url.searchParams.get("tipo");
  const id = url.searchParams.get("id") ?? "";
  const libre = await accesoSinRestriccion(session.user.email);

  if (tipo === "modulo") {
    const modulo = getModuloGlobal(id);
    const curso = getCursoDeModulo(id);
    if (!modulo || !curso) return NextResponse.json({ error: "Módulo desconocido" }, { status: 404 });
    const progreso = await obtenerProgreso(session.user.id, curso.modulos, curso.id);
    if (!libre && !moduloDesbloqueadoCurso(curso, modulo, progreso.modulosCompletados)) {
      return NextResponse.json({ error: "Debes completar el módulo anterior" }, { status: 403 });
    }
    const preguntas = armarIntento(modulo.quiz, modulo.preguntasPorIntento);
    return NextResponse.json({
      preguntas: publicarPreguntas(preguntas),
      token: firmarIntento(session.user.id, `modulo:${modulo.id}`, preguntas),
    });
  }
  if (tipo === "examen") {
    const curso = getCurso(id);
    if (!curso || !curso.tieneExamenFinal) return NextResponse.json({ error: "Curso desconocido" }, { status: 404 });
    const progreso = await obtenerProgreso(session.user.id, curso.modulos, curso.id);
    if (!libre && progreso.modulosCompletados.length !== curso.modulos.length) {
      return NextResponse.json({ error: "Primero completa los módulos" }, { status: 403 });
    }
    const preguntas = id === "diplomado" ? construirExamenFinalDiplomado() : construirExamenFinal();
    return NextResponse.json({
      preguntas: publicarPreguntas(preguntas),
      token: firmarIntento(session.user.id, `examen:${curso.id}`, preguntas),
    });
  }
  return NextResponse.json({ error: "Tipo de evaluación inválido" }, { status: 400 });
}
