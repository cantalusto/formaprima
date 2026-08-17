"use client";

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { brl } from "@/lib/precos";
import {
  ROTULOS_PRODUCAO,
  STATUS_PRODUCAO,
  type StatusProducao,
} from "@/lib/pedidos";
import { usePedidos } from "@/lib/use-pedidos";

export function AcompanhamentoClient({ codigo }: { codigo: string }) {
  const pedido = usePedidos().find((item) => item.codigo === codigo);

  if (!pedido) {
    return (
      <>
        <Navbar />
        <main className="min-h-[70vh] bg-carvao px-6 py-24 text-center">
          <h1 className="text-3xl font-bold text-branco">Pedido não encontrado</h1>
          <p className="mx-auto mt-3 max-w-md text-sm text-grafite">
            Confira o código. Nesta primeira versão, o pedido fica salvo neste
            navegador.
          </p>
          <Link href="/revendedor" className="mt-7 inline-block text-terra">
            Voltar para a calculadora
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const indiceAtual = STATUS_PRODUCAO.indexOf(
    pedido.producao as StatusProducao
  );

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-carvao px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-3xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-terra">
            Acompanhamento
          </span>
          <h1 className="mt-3 text-3xl font-bold text-branco md:text-5xl">
            Pedido {pedido.codigo}
          </h1>
          <p className="mt-3 text-sm text-grafite">
            {pedido.cliente.nome} · {pedido.entrega}
          </p>

          <div className="mt-8 rounded-2xl border border-white/[0.08] bg-carvao2 p-6 md:p-8">
            <div className="flex flex-col justify-between gap-4 border-b border-white/[0.07] pb-6 sm:flex-row">
              <div>
                <p className="text-lg font-semibold text-branco">
                  {pedido.item.descricao}
                </p>
                <p className="mt-1 text-sm text-grafite">
                  {pedido.item.largura}m × {pedido.item.altura}m · {pedido.item.quantidade} unidade(s)
                </p>
              </div>
              <p className="text-2xl font-bold text-terra">{brl(pedido.item.total)}</p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Resumo label="Pagamento" valor={pedido.pagamento === "pago" ? "Pago" : "Pendente"} />
              <Resumo
                label="Arte"
                valor={{ nao_enviada: "Não enviada", recebida: "Recebida", aprovada: "Aprovada" }[pedido.arte]}
              />
            </div>

            <ol className="mt-8 space-y-1">
              {STATUS_PRODUCAO.map((status, indice) => {
                const concluido = indice < indiceAtual;
                const atual = indice === indiceAtual;
                return (
                  <li key={status} className="flex items-center gap-3 py-2 text-sm">
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full border text-xs ${
                        concluido || atual
                          ? "border-terra bg-terra text-white"
                          : "border-white/10 text-grafite2"
                      }`}
                    >
                      {concluido ? "✓" : atual ? "→" : "○"}
                    </span>
                    <span className={atual ? "font-semibold text-branco" : "text-grafite"}>
                      {ROTULOS_PRODUCAO[status]}
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Resumo({ label, valor }: { label: string; valor: string }) {
  return (
    <div className="rounded-xl bg-carvao px-4 py-3">
      <p className="text-[10px] uppercase tracking-[0.1em] text-grafite2">{label}</p>
      <p className="mt-1 text-sm font-semibold text-branco">{valor}</p>
    </div>
  );
}
