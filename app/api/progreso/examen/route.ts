import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { registrarResultadoExamen } from "@/lib/progreso-server";

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "No autenticado" }, { status: 401 });
  }

  const body = await request.json();
  const { respuestas, aciertos, total } = body ?? {};

  if (
    typeof aciertos !== "number" ||
    typeof total !== "number" ||
    typeof respuestas !== "object" ||
    respuestas === null
  ) {
    return NextResponse.json({ error: "Cuerpo inválido" }, { status: 400 });
  }

  const resultado = await registrarResultadoExamen(session.user.id, respuestas, aciertos, total);
  return NextResponse.json(resultado);
}
