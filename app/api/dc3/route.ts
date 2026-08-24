import { NextResponse } from "next/server";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { auth } from "@/auth";
import { prisma } from "@/lib/db";
import { getCurso } from "@/lib/data/cursos";

// Constancia DC-3 (Constancia de Competencias o de Habilidades Laborales),
// formato de la STPS. La expide el agente capacitador (aquí, Alianza Índigo)
// a la persona que acredita el curso. Los datos del curso se pre-llenan; los
// datos del trabajador y de la empresa se dejan como campos para completar y
// firmar, porque varían por persona/empleador y no viven en la plataforma.
export async function GET(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "No autenticado" }, { status: 401 });
  }

  const cursoIdParam = new URL(request.url).searchParams.get("curso");
  const cursoId = cursoIdParam === "diplomado" ? "diplomado" : "ceni";
  const curso = getCurso(cursoId);
  const nombreCurso = curso?.titulo ?? "Curso CENI";
  const duracion = curso?.duracion ?? "17 horas";

  const examen = await prisma.resultadoExamen.findUnique({
    where: { userId_cursoId: { userId: session.user.id, cursoId } },
  });
  if (!examen?.aprobado) {
    return NextResponse.json(
      { error: "La constancia DC-3 se expide al acreditar la evaluación final del curso." },
      { status: 403 }
    );
  }

  // Datos del agente capacitador (configurables por variable de entorno).
  const agenteNombre = process.env.AGENTE_CAPACITADOR_NOMBRE ?? "Alianza Índigo Neurodivergente A.C.";
  const agenteRegistro = process.env.AGENTE_CAPACITADOR_REGISTRO ?? "";
  const areaTematica =
    process.env.DC3_AREA_TEMATICA ?? "5300 · Seguridad y salud en el trabajo";
  const nombreTrabajador = session.user.name ?? session.user.email ?? "";
  const fechaExp = examen.fechaCertificacion ?? examen.fecha;
  const fechaTexto = fechaExp.toLocaleDateString("es-MX", { year: "numeric", month: "long", day: "numeric" });

  const doc = await PDFDocument.create();
  const page = doc.addPage([612, 792]); // Carta (portrait)
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);
  const font = await doc.embedFont(StandardFonts.Helvetica);
  const navy = rgb(0x07 / 255, 0x0b / 255, 0x2f / 255);
  const gray = rgb(0.45, 0.45, 0.5);
  const line = rgb(0.6, 0.6, 0.65);

  const M = 40;
  const W = 612 - M * 2;
  let y = 792 - 44;

  const text = (t: string, x: number, yy: number, f = font, size = 9, color = navy) =>
    page.drawText(t, { x, y: yy, size, font: f, color });
  const center = (t: string, yy: number, f = bold, size = 12, color = navy) => {
    const w = f.widthOfTextAtSize(t, size);
    page.drawText(t, { x: (612 - w) / 2, y: yy, size, font: f, color });
  };
  // Etiqueta arriba + línea para rellenar; devuelve la altura consumida.
  const campo = (label: string, x: number, yy: number, ancho: number, valor = "") => {
    text(label, x, yy, font, 7, gray);
    if (valor) text(valor, x, yy - 13, bold, 9, navy);
    page.drawLine({ start: { x, y: yy - 16 }, end: { x: x + ancho, y: yy - 16 }, thickness: 0.7, color: line });
  };
  const seccion = (t: string, yy: number) => {
    page.drawRectangle({ x: M, y: yy - 4, width: W, height: 16, color: rgb(0.95, 0.94, 0.99) });
    text(t, M + 6, yy, bold, 9, navy);
  };

  center("CONSTANCIA DE COMPETENCIAS O DE HABILIDADES LABORALES", y, bold, 12);
  y -= 16;
  center("FORMATO DC-3", y, bold, 9, gray);
  y -= 14;
  center("(Artículos 153-A a 153-X de la Ley Federal del Trabajo)", y, font, 7, gray);
  y -= 26;

  seccion("I. DATOS DEL TRABAJADOR", y); y -= 30;
  campo("Nombre (apellido paterno, materno y nombre[s])", M, y, W, nombreTrabajador); y -= 34;
  campo("Clave Única de Registro de Población (CURP)", M, y, 300);
  campo("Puesto / ocupación específica", M + 320, y, W - 320); y -= 40;

  seccion("II. DATOS DE LA EMPRESA", y); y -= 30;
  campo("Nombre o razón social", M, y, 360);
  campo("Registro Federal de Contribuyentes (RFC)", M + 380, y, W - 380); y -= 40;

  seccion("III. DATOS DEL PROGRAMA / CURSO", y); y -= 30;
  campo("Nombre del curso", M, y, 380, nombreCurso);
  campo("Duración", M + 400, y, W - 400, duracion); y -= 36;
  campo("Periodo de ejecución (del · al)", M, y, 240, `al ${fechaTexto}`);
  campo("Área temática del curso", M + 260, y, W - 260, areaTematica); y -= 40;

  seccion("IV. AGENTE CAPACITADOR / INSTITUCIÓN", y); y -= 30;
  campo("Nombre del agente capacitador", M, y, 360, agenteNombre);
  campo("No. de registro ante la STPS", M + 380, y, W - 380, agenteRegistro); y -= 44;

  // Folio verificable del curso (control interno).
  text(`Folio de acreditación del curso: ${examen.folio ?? ""}`, M, y, font, 8, gray);
  text(`Calificación del examen integrador: ${examen.porcentaje}%`, M + 300, y, font, 8, gray);
  y -= 40;

  // Firmas
  const firmaW = (W - 30) / 3;
  const firmas = [
    "Nombre y firma del instructor",
    "Nombre y firma del patrón o representante legal",
    "Nombre y firma del representante de los trabajadores",
  ];
  firmas.forEach((f, i) => {
    const x = M + i * (firmaW + 15);
    page.drawLine({ start: { x, y: y }, end: { x: x + firmaW, y: y }, thickness: 0.7, color: line });
    const w = font.widthOfTextAtSize(f, 6.5);
    const words = f.split(" ");
    // etiqueta en una o dos líneas centrada
    if (w <= firmaW) {
      page.drawText(f, { x: x + (firmaW - w) / 2, y: y - 12, size: 6.5, font, color: gray });
    } else {
      const mid = Math.ceil(words.length / 2);
      const l1 = words.slice(0, mid).join(" ");
      const l2 = words.slice(mid).join(" ");
      const w1 = font.widthOfTextAtSize(l1, 6.5);
      const w2 = font.widthOfTextAtSize(l2, 6.5);
      page.drawText(l1, { x: x + (firmaW - w1) / 2, y: y - 11, size: 6.5, font, color: gray });
      page.drawText(l2, { x: x + (firmaW - w2) / 2, y: y - 20, size: 6.5, font, color: gray });
    }
  });
  y -= 44;

  center(`Expedida el ${fechaTexto}.`, y, font, 8, gray); y -= 12;
  center(
    "Documento con validez conforme a la LFT; requiere ser firmado por las partes para surtir efectos.",
    y,
    font,
    6.5,
    gray
  );

  const bytes = await doc.save();
  return new NextResponse(Buffer.from(bytes), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="DC-3-${cursoId}-${examen.folio ?? "curso"}.pdf"`,
    },
  });
}
