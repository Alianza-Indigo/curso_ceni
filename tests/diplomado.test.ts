import { describe, it, expect } from "vitest";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { modulosDiplomado } from "@/lib/data/diplomado/modulos";
import { formatosDiplomado, glosarioDiplomado } from "@/lib/data/diplomado/materiales";
import { construirExamenFinalDiplomado } from "@/lib/data/diplomado/examenFinal";

function sumaPorcentajes(valores: string[]): number {
  return valores.reduce((acc, v) => acc + (parseInt(v.replace(/[^0-9]/g, ""), 10) || 0), 0);
}

function archivoExiste(archivo: string): boolean {
  return existsSync(join(process.cwd(), "public", archivo));
}

describe("Diplomado NOM-035 ND — integridad de los 23 módulos", () => {
  it("hay exactamente 23 módulos con numeración e ids únicos y correlativos", () => {
    expect(modulosDiplomado).toHaveLength(23);
    const ids = modulosDiplomado.map((m) => m.id);
    expect(new Set(ids).size).toBe(23);
    modulosDiplomado.forEach((m, i) => {
      expect(m.numero).toBe(i + 1);
      expect(m.id).toBe("d" + String(i + 1).padStart(2, "0"));
    });
  });

  for (const m of modulosDiplomado) {
    describe(`Módulo ${m.numero} (${m.id})`, () => {
      it("tiene contenido íntegro no vacío", () => {
        expect((m.contenidoMarkdown ?? "").length).toBeGreaterThan(500);
      });

      it("preguntasPorIntento es válido y no excede el banco", () => {
        expect(m.preguntasPorIntento).toBeGreaterThanOrEqual(1);
        expect(m.preguntasPorIntento).toBeLessThanOrEqual(m.quiz.length);
      });

      it("los ids de quiz son únicos y cada pregunta es válida", () => {
        const ids = m.quiz.map((q) => q.id);
        expect(new Set(ids).size).toBe(ids.length);
        for (const q of m.quiz) {
          expect(q.opciones.length).toBeGreaterThanOrEqual(2);
          expect(q.correcta).toBeGreaterThanOrEqual(0);
          expect(q.correcta).toBeLessThan(q.opciones.length);
        }
      });

      it("los códigos de actividad son únicos", () => {
        const cods = m.actividades.map((a) => a.codigo);
        expect(new Set(cods).size).toBe(cods.length);
        expect(cods.length).toBeGreaterThan(0);
      });

      it("la evaluación suma 100%", () => {
        expect(sumaPorcentajes(m.evaluacion.map((e) => e.valor))).toBe(100);
      });

      it("cada recurso descargable existe en public/ y tiene formato", () => {
        for (const r of m.recursos ?? []) {
          expect(r.formato, `${r.codigo} sin formato`).toBeTruthy();
          expect(archivoExiste(r.archivo), `no existe ${r.archivo}`).toBe(true);
        }
      });
    });
  }
});

describe("Diplomado — materiales y examen final", () => {
  it("cada plantilla descargable existe en public/", () => {
    for (const f of formatosDiplomado) {
      expect(archivoExiste(f.archivo), `no existe ${f.archivo}`).toBe(true);
    }
  });

  it("los términos del glosario son únicos", () => {
    const terms = glosarioDiplomado.map((g) => g.termino.toLowerCase());
    expect(new Set(terms).size).toBe(terms.length);
  });

  it("el examen integrador toma 2 reactivos por módulo sin ids duplicados", () => {
    const examen = construirExamenFinalDiplomado();
    expect(examen).toHaveLength(modulosDiplomado.length * 2);
    const ids = examen.map((q) => q.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
