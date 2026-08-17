import { describe, expect, it } from "vitest";
import { exigeLiberacao, pedidoPodeEntrarProducao } from "./pedidos";

describe("liberação para produção", () => {
  it("exige pagamento e arte aprovada", () => {
    expect(pedidoPodeEntrarProducao({ pagamento: "pendente", arte: "aprovada" })).toBe(false);
    expect(pedidoPodeEntrarProducao({ pagamento: "pago", arte: "recebida" })).toBe(false);
    expect(pedidoPodeEntrarProducao({ pagamento: "pago", arte: "aprovada" })).toBe(true);
  });

  it("permite organizar o pedido antes da fila", () => {
    expect(exigeLiberacao("pedido_aberto")).toBe(false);
    expect(exigeLiberacao("aguardando_liberacao")).toBe(false);
    expect(exigeLiberacao("na_fila")).toBe(true);
    expect(exigeLiberacao("em_producao")).toBe(true);
  });
});
