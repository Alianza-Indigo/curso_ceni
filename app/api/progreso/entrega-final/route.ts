import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { guardarEntregaFinal } from "@/lib/progreso-server";
import { MIN_PALABRAS_CASO_PRACTICO, MIN_CARACTERES_RETROALIMENTACION } from "@/lib/constantes";

const CONTENIDO_MAX = 20000;

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "No autenticado" }, { status: 401 });
  }

  const body = await request.json();
  const { campo, contenido } = body ?? {};

  if ((campo !== "casoPractico" && campo !== "retroalimentacion") || typeof contenido !== "string") {
    return NextResponse.json({ error: "Cuerpo inválido" }, { status: 400 });
  }

  const limpio = contenido.trim();
  if (limpio.length > CONTENIDO_MAX) {
    return NextResponse.json({ error: `El texto no puede superar ${CONTENIDO_MAX} caracteres.` }, { status: 400 });
  }

  if (campo === "casoPractico") {
    const palabras = limpio.length === 0 ? 0 : limpio.split(/\s+/).length;
    if (palabras < MIN_PALABRAS_CASO_PRACTICO) {
      return NextResponse.json(
        { error: `El caso práctico requiere al menos ${MIN_PALABRAS_CASO_PRACTICO} palabras (llevas ${palabras}).` },
        { status: 400 }
      );
    }
  } else if (limpio.length < MIN_CARACTERES_RETROALIMENTACION) {
    return NextResponse.json(
      { error: `Escribe al menos ${MIN_CARACTERES_RETROALIMENTACION} caracteres de retroalimentación.` },
      { status: 400 }
    );
  }

  await guardarEntregaFinal(session.user.id, campo, limpio);
  return NextResponse.json({ ok: true });
}
