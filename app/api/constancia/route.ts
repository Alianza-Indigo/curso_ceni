import { NextResponse } from "next/server";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { auth } from "@/auth";
import { prisma } from "@/lib/db";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "No autenticado" }, { status: 401 });
  }

  const examen = await prisma.resultadoExamen.findUnique({
    where: { userId: session.user.id },
  });

  if (!examen?.aprobado) {
    return NextResponse.json(
      { error: "Aún no apruebas el examen integrador" },
      { status: 403 }
    );
  }

  const nombre = session.user.name ?? session.user.email ?? "Participante";
  const fecha = examen.fecha.toLocaleDateString("es-MX", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const doc = await PDFDocument.create();
  const page = doc.addPage([842, 595]); // A4 landscape
  const helveticaBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const helvetica = await doc.embedFont(StandardFonts.Helvetica);

  const navy = rgb(0x07 / 255, 0x0b / 255, 0x2f / 255);
  const gold = rgb(0xdd / 255, 0xa6 / 255, 0x32 / 255);

  page.drawRectangle({ x: 0, y: 0, width: 842, height: 595, color: navy });
  page.drawRectangle({ x: 24, y: 24, width: 842 - 48, height: 595 - 48, borderColor: gold, borderWidth: 2 });

  const centerText = (text: string, y: number, font = helvetica, size = 14, color = rgb(1, 1, 1)) => {
    const width = font.widthOfTextAtSize(text, size);
    page.drawText(text, { x: (842 - width) / 2, y, size, font, color });
  };

  centerText("PROGRAMA CENI · ALIANZA ÍNDIGO NEURODIVERGENTE A.C.", 470, helveticaBold, 12, gold);
  centerText("Constancia de Capacitación", 420, helveticaBold, 30, rgb(1, 1, 1));
  centerText("Certificación de Entornos Neuroinclusivos", 390, helvetica, 14, rgb(0.85, 0.85, 0.95));

  centerText("Se otorga la presente constancia a:", 320, helvetica, 13);
  centerText(nombre, 280, helveticaBold, 26, gold);

  centerText(
    "por haber completado y aprobado el Curso Integral de Capacitación CENI",
    230,
    helvetica,
    13
  );
  centerText(
    `Examen integrador: ${examen.porcentaje}% (${examen.aciertos}/${examen.total} reactivos)`,
    205,
    helvetica,
    12
  );

  centerText(`Folio verificable: ${examen.folio}`, 150, helveticaBold, 13, gold);
  centerText(`Emitida el ${fecha}`, 128, helvetica, 11);
  centerText('"No necesitas PARECER para SER."', 80, helvetica, 11, rgb(0.85, 0.85, 0.95));

  const bytes = await doc.save();

  return new NextResponse(Buffer.from(bytes), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="constancia-ceni-${examen.folio}.pdf"`,
    },
  });
}
