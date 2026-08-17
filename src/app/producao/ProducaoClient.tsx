"use client";

import Link from "next/link";
import { brl } from "@/lib/precos";
import {
  ROTULOS_PRODUCAO,
  STATUS_PRODUCAO,
  atualizarPedido,
  exigeLiberacao,
  pedidoPodeEntrarProducao,
  type Pedido,
  type StatusArte,
  type StatusPagamento,
  type StatusProducao,
} from "@/lib/pedidos";
import { usePedidos } from "@/lib/use-pedidos";

export function ProducaoClient() {
  const pedidos = usePedidos();

  return (
    <main className="min-h-screen bg-carvao px-5 py-8 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-terra">
              Operação Forma Prima · MVP
            </span>
            <h1 className="mt-2 text-3xl font-bold text-branco">Fila de produção</h1>
            <p className="mt-2 text-sm text-grafite">
              {pedidos.length} pedido(s) registrado(s) neste navegador
            </p>
          </div>
          <Link href="/revendedor#calculadora" className="rounded-full bg-terra px-5 py-3 text-center text-sm font-semibold text-white no-underline">
            + Novo pedido
          </Link>
        </div>

        {pedidos.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-white/10 p-12 text-center">
            <p className="text-branco">A fila ainda está vazia.</p>
            <p className="mt-2 text-sm text-grafite">Crie um pedido pela calculadora para testar o fluxo completo.</p>
          </div>
        ) : (
          <div className="mt-8 grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
            {pedidos.map((pedido) => <CartaoPedido key={pedido.id} pedido={pedido} />)}
          </div>
        )}
      </div>
    </main>
  );
}

function CartaoPedido({ pedido }: { pedido: Pedido }) {
  const liberado = pedidoPodeEntrarProducao(pedido);
  return (
    <article className="rounded-2xl border border-white/[0.08] bg-carvao2 p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <Link href={`/acompanhar/${pedido.codigo}`} className="font-bold text-branco no-underline hover:text-terra">
            {pedido.codigo}
          </Link>
          <p className="mt-1 text-xs text-grafite">{pedido.cliente.nome} · {pedido.origem === "online" ? "Online" : "Balcão"}</p>
        </div>
        <span className="rounded-full bg-terra/10 px-3 py-1 text-[10px] font-semibold uppercase text-ambar">
          {ROTULOS_PRODUCAO[pedido.producao]}
        </span>
      </div>
      <div className="mt-5 border-y border-white/[0.07] py-4">
        <p className="text-sm font-medium text-branco">{pedido.item.descricao}</p>
        <p className="mt-1 text-xs text-grafite">{pedido.item.largura}m × {pedido.item.altura}m · {pedido.item.quantidade}x · {brl(pedido.item.total)}</p>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <Seletor
          label="Pagamento"
          value={pedido.pagamento}
          onChange={(valor) => atualizarPedido(pedido.id, { pagamento: valor as StatusPagamento })}
          options={[{ value: "pendente", label: "Pendente" }, { value: "pago", label: "Pago" }]}
        />
        <Seletor
          label="Arte"
          value={pedido.arte}
          onChange={(valor) => atualizarPedido(pedido.id, { arte: valor as StatusArte })}
          options={[{ value: "nao_enviada", label: "Não enviada" }, { value: "recebida", label: "Recebida" }, { value: "aprovada", label: "Aprovada" }]}
        />
      </div>
      <div className="mt-3">
        <Seletor
          label="Produção"
          value={pedido.producao}
          onChange={(valor) => atualizarPedido(pedido.id, { producao: valor as StatusProducao })}
          options={STATUS_PRODUCAO.map((status) => ({
            value: status,
            label: ROTULOS_PRODUCAO[status],
            disabled: exigeLiberacao(status) && !liberado,
          }))}
        />
      </div>
      {!liberado && (
        <p className="mt-3 rounded-lg bg-ambar/10 px-3 py-2 text-[11px] leading-snug text-ambar">
          Confirme o pagamento e aprove a arte para liberar a produção.
        </p>
      )}
      {pedido.historico.length > 0 && (
        <details className="mt-4 border-t border-white/[0.07] pt-4">
          <summary className="cursor-pointer text-xs font-semibold text-grafite">
            Histórico ({pedido.historico.length})
          </summary>
          <ol className="mt-3 space-y-2">
            {[...pedido.historico].reverse().map((evento, indice) => (
              <li key={`${evento.em}-${indice}`} className="text-[11px] text-grafite">
                <span className="text-branco">{evento.descricao}</span>{" "}
                · {new Date(evento.em).toLocaleString("pt-BR")}
              </li>
            ))}
          </ol>
        </details>
      )}
    </article>
  );
}

function Seletor({ label, value, onChange, options }: { label: string; value: string; onChange: (value: string) => void; options: { value: string; label: string; disabled?: boolean }[] }) {
  return (
    <label className="block text-[10px] font-semibold uppercase tracking-[0.08em] text-grafite2">
      {label}
      <select value={value} onChange={(evento) => onChange(evento.target.value)} className="mt-1.5 w-full rounded-lg border border-white/[0.08] bg-carvao px-3 py-2.5 text-xs normal-case tracking-normal text-branco outline-none focus:border-terra/50">
        {options.map((option) => <option key={option.value} value={option.value} disabled={option.disabled}>{option.label}</option>)}
      </select>
    </label>
  );
}
