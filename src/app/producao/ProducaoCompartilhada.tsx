"use client";

import Link from "next/link";
import { useState, useTransition } from "react";
import { LogOut, RefreshCw, ShieldCheck } from "lucide-react";
import { brl } from "@/lib/precos";
import { sair } from "@/app/login/actions";
import { atualizarStatusPedido } from "./actions";

type PedidoBanco = {
  id: string;
  codigo: string;
  origem: string;
  entrega: string;
  payment_status: string;
  art_status: string;
  production_status: string;
  total: number;
  created_at: string;
  updated_at: string;
  customers: { nome: string; whatsapp: string; empresa: string | null }[];
  order_items: { id: string; descricao: string; largura: number | null; altura: number | null; quantidade: number; total: number }[];
  order_status_history: { id: number; tipo: string; descricao: string; created_at: string }[];
};

const opcoesPagamento = [
  ["pendente", "Pendente"], ["parcial", "Parcial"], ["pago", "Pago"],
  ["cancelado", "Cancelado"], ["estornado", "Estornado"],
];
const opcoesArte = [
  ["nao_enviada", "Não enviada"], ["recebida", "Recebida"], ["em_analise", "Em análise"],
  ["correcao_solicitada", "Correção solicitada"], ["aprovada", "Aprovada"], ["nao_necessaria", "Não necessária"],
];
const opcoesProducao = [
  ["pedido_aberto", "Pedido aberto"], ["aguardando_liberacao", "Aguardando liberação"], ["na_fila", "Na fila"],
  ["em_producao", "Em produção"], ["acabamento", "Acabamento"], ["pronto", "Pronto"],
  ["despachado", "Despachado"], ["entregue", "Entregue"], ["cancelado", "Cancelado"],
];

export function ProducaoCompartilhada({ usuario, pedidos, erro }: { usuario: { nome: string; role: string }; pedidos: PedidoBanco[]; erro: string | null }) {
  return (
    <main className="min-h-screen bg-carvao px-5 py-8 md:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col justify-between gap-5 border-b border-white/[0.07] pb-7 sm:flex-row sm:items-end">
          <div>
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-terra"><ShieldCheck className="size-4" /> Operação compartilhada</span>
            <h1 className="mt-2 text-3xl font-bold text-branco">Fila de produção</h1>
            <p className="mt-2 text-sm text-grafite">{pedidos.length} pedido(s) · {usuario.nome} · {usuario.role}</p>
          </div>
          <div className="flex gap-2">
            <Link href="/revendedor#calculadora" className="rounded-full bg-terra px-5 py-3 text-center text-sm font-semibold text-white no-underline">+ Novo pedido</Link>
            <form action={sair}><button aria-label="Sair" title="Sair" className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-transparent text-grafite hover:text-branco"><LogOut className="size-4" /></button></form>
          </div>
        </header>

        {erro && <p className="mt-6 rounded-xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">{erro}</p>}
        {!erro && pedidos.length === 0 && (
          <div className="mt-10 rounded-2xl border border-dashed border-white/10 p-12 text-center">
            <RefreshCw className="mx-auto size-6 text-grafite2" />
            <p className="mt-4 text-branco">A base compartilhada está conectada.</p>
            <p className="mt-2 text-sm text-grafite">Ainda não há pedidos registrados no Supabase.</p>
          </div>
        )}
        <div className="mt-8 grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {pedidos.map((pedido) => <PedidoCard key={pedido.id} pedido={pedido} />)}
        </div>
      </div>
    </main>
  );
}

function PedidoCard({ pedido }: { pedido: PedidoBanco }) {
  const [mensagem, setMensagem] = useState("");
  const [pendente, iniciar] = useTransition();
  const alterar = (campo: "payment_status" | "art_status" | "production_status", valor: string) => {
    setMensagem("");
    iniciar(async () => {
      const resultado = await atualizarStatusPedido(pedido.id, campo, valor);
      if (!resultado.ok) setMensagem(resultado.erro);
    });
  };
  const item = pedido.order_items[0];
  return (
    <article className={`rounded-2xl border border-white/[0.08] bg-carvao2 p-5 ${pendente ? "opacity-65" : ""}`}>
      <div className="flex items-start justify-between gap-3">
        <div><p className="font-bold text-branco">{pedido.codigo}</p><p className="mt-1 text-xs text-grafite">{pedido.customers[0]?.nome ?? "Cliente"} · {pedido.origem}</p></div>
        <span className="rounded-full bg-terra/10 px-3 py-1 text-[10px] font-semibold uppercase text-ambar">{pedido.production_status.replaceAll("_", " ")}</span>
      </div>
      <div className="mt-5 border-y border-white/[0.07] py-4">
        <p className="text-sm font-medium text-branco">{item?.descricao ?? "Pedido sem item"}</p>
        <p className="mt-1 text-xs text-grafite">{item ? `${item.quantidade}x · ${brl(Number(pedido.total))}` : brl(Number(pedido.total))}</p>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <Seletor label="Pagamento" value={pedido.payment_status} options={opcoesPagamento} onChange={(v) => alterar("payment_status", v)} />
        <Seletor label="Arte" value={pedido.art_status} options={opcoesArte} onChange={(v) => alterar("art_status", v)} />
      </div>
      <div className="mt-3"><Seletor label="Produção" value={pedido.production_status} options={opcoesProducao} onChange={(v) => alterar("production_status", v)} /></div>
      {mensagem && <p className="mt-3 rounded-lg bg-ambar/10 px-3 py-2 text-[11px] text-ambar">{mensagem}</p>}
      {pedido.order_status_history.length > 0 && (
        <details className="mt-4 border-t border-white/[0.07] pt-4"><summary className="cursor-pointer text-xs font-semibold text-grafite">Histórico ({pedido.order_status_history.length})</summary><ol className="mt-3 space-y-2">{[...pedido.order_status_history].reverse().map((evento) => <li key={evento.id} className="text-[11px] text-grafite"><span className="text-branco">{evento.descricao}</span> · {new Date(evento.created_at).toLocaleString("pt-BR")}</li>)}</ol></details>
      )}
    </article>
  );
}

function Seletor({ label, value, options, onChange }: { label: string; value: string; options: string[][]; onChange: (value: string) => void }) {
  return <label className="block text-[10px] font-semibold uppercase tracking-[0.08em] text-grafite2">{label}<select value={value} onChange={(e) => onChange(e.target.value)} className="mt-1.5 w-full rounded-lg border border-white/[0.08] bg-carvao px-3 py-2.5 text-xs normal-case tracking-normal text-branco outline-none focus:border-terra/50">{options.map(([v, l]) => <option key={v} value={v}>{l}</option>)}</select></label>;
}
