import { describe, it, expect } from "vitest";
import { modulosDiplomado } from "@/lib/data/diplomado/modulos";

function sumaPorcentajes(valores: string[]): number {
  return valores.reduce((acc, v) => acc + (parseInt(v.replace(/[^0-9]/g, ""), 10) || 0), 0);
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
    });
  }
});
