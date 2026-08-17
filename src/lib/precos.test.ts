import { describe, expect, it } from "vitest";
import { calcular } from "./precos";

describe("calcular", () => {
  it("aplica o mínimo de 1 m² por peça", () => {
    const resultado = calcular({
      categoria: "lona",
      gramatura: "380",
      acabamento: "sem",
      largura: 0.5,
      altura: 0.5,
      quantidade: 2,
    });

    expect(resultado.areaUnitaria).toBe(0.25);
    expect(resultado.areaCobrada).toBe(1);
    expect(resultado.minimoAplicado).toBe(true);
    expect(resultado.total).toBe(46);
  });

  it("calcula área, acabamento e quantidade", () => {
    const resultado = calcular({
      categoria: "lona",
      gramatura: "440",
      acabamento: "ilhos",
      largura: 2,
      altura: 1.5,
      quantidade: 3,
    });

    expect(resultado.precoM2).toBe(28);
    expect(resultado.areaCobrada).toBe(3);
    expect(resultado.valorUnitario).toBe(84);
    expect(resultado.total).toBe(252);
  });

  it("impede valores negativos de quebrarem o orçamento", () => {
    const resultado = calcular({
      categoria: "adesivo",
      tipoAdesivo: "leitoso",
      largura: -2,
      altura: 1,
      quantidade: -5,
    });

    expect(resultado.areaCobrada).toBe(0);
    expect(resultado.total).toBe(0);
  });
});
