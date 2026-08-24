import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { obtenerProgreso, registrarResultadoExamen } from "@/lib/progreso-server";
import { getCurso } from "@/lib/data/cursos";

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "No autenticado" }, { status: 401 });
  }

  const body = await request.json();
  const { respuestas, aciertos, total } = body ?? {};
  const cursoId = typeof body?.cursoId === "string" ? body.cursoId : "ceni";

  const curso = getCurso(cursoId);
  if (!curso || !curso.tieneExamenFinal) {
    return NextResponse.json({ error: "Curso sin examen final" }, { status: 400 });
  }

  const progreso = await obtenerProgreso(session.user.id, curso.modulos, cursoId);
  if (progreso.modulosCompletados.length < curso.modulos.length) {
    return NextResponse.json(
      { error: `Debes aprobar los ${curso.modulos.length} módulos antes de presentar el examen final` },
      { status: 403 }
    );
  }

  if (
    typeof aciertos !== "number" ||
    typeof total !== "number" ||
    typeof respuestas !== "object" ||
    respuestas === null
  ) {
    return NextResponse.json({ error: "Cuerpo inválido" }, { status: 400 });
  }

  const resultado = await registrarResultadoExamen(session.user.id, respuestas, aciertos, total, cursoId);
  return NextResponse.json(resultado);
}
