import { describe, it, expect } from "vitest";
import { extraerBearer, compararEnTiempoConstante } from "@/lib/partner-auth-core";

describe("extraerBearer", () => {
  it("extrae el token de un header Bearer válido", () => {
    expect(extraerBearer("Bearer abc123")).toBe("abc123");
  });

  it("devuelve null si falta el header", () => {
    expect(extraerBearer(null)).toBeNull();
  });

  it("devuelve null con un esquema distinto de Bearer", () => {
    expect(extraerBearer("Basic abc123")).toBeNull();
  });

  it("devuelve null si no hay token tras el esquema", () => {
    expect(extraerBearer("Bearer")).toBeNull();
  });
});

describe("compararEnTiempoConstante", () => {
  it("acepta dos cadenas iguales", () => {
    expect(compararEnTiempoConstante("clave-secreta", "clave-secreta")).toBe(true);
  });

  it("rechaza cadenas distintas", () => {
    expect(compararEnTiempoConstante("clave-secreta", "otra-clave")).toBe(false);
  });

  it("rechaza cadenas de distinta longitud sin lanzar", () => {
    expect(compararEnTiempoConstante("corta", "una-clave-mucho-mas-larga")).toBe(false);
  });
});
