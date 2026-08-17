import type { DadosRevendedor } from "@/lib/revendedor";

export const STATUS_PRODUCAO = [
  "pedido_aberto",
  "aguardando_liberacao",
  "na_fila",
  "em_producao",
  "acabamento",
  "pronto",
  "entregue",
] as const;

export type StatusProducao = (typeof STATUS_PRODUCAO)[number];
export type StatusPagamento = "pendente" | "pago";
export type StatusArte = "nao_enviada" | "recebida" | "aprovada";

export const ROTULOS_PRODUCAO: Record<StatusProducao, string> = {
  pedido_aberto: "Pedido aberto",
  aguardando_liberacao: "Aguardando liberação",
  na_fila: "Na fila",
  em_producao: "Em produção",
  acabamento: "Acabamento",
  pronto: "Pronto",
  entregue: "Entregue",
};

export interface Pedido {
  id: string;
  codigo: string;
  criadoEm: string;
  atualizadoEm: string;
  origem: "online" | "balcao";
  cliente: DadosRevendedor;
  entrega: string;
  item: {
    descricao: string;
    largura: number;
    altura: number;
    quantidade: number;
    areaCobrada: number;
    precoM2: number;
    total: number;
  };
  pagamento: StatusPagamento;
  arte: StatusArte;
  producao: StatusProducao;
  historico: EventoPedido[];
}

export interface EventoPedido {
  em: string;
  tipo: "criacao" | "pagamento" | "arte" | "producao";
  descricao: string;
}

export type NovoPedido = Omit<
  Pedido,
  | "id"
  | "codigo"
  | "criadoEm"
  | "atualizadoEm"
  | "pagamento"
  | "arte"
  | "producao"
  | "historico"
>;

const CHAVE = "formaprima:pedidos:mvp";

function navegadorDisponivel() {
  return typeof window !== "undefined";
}

export function listarPedidos(): Pedido[] {
  if (!navegadorDisponivel()) return [];
  try {
    const valor = window.localStorage.getItem(CHAVE);
    const pedidos = valor ? (JSON.parse(valor) as Pedido[]) : [];
    return pedidos.map((pedido) => ({ ...pedido, historico: pedido.historico ?? [] }));
  } catch {
    return [];
  }
}

function persistir(pedidos: Pedido[]) {
  if (!navegadorDisponivel()) return;
  window.localStorage.setItem(CHAVE, JSON.stringify(pedidos));
  window.dispatchEvent(new Event("formaprima:pedidos-atualizados"));
}

function gerarCodigo() {
  const data = new Date();
  const trechoData = `${String(data.getFullYear()).slice(-2)}${String(
    data.getMonth() + 1
  ).padStart(2, "0")}${String(data.getDate()).padStart(2, "0")}`;
  const trechoUnico = String(Date.now()).slice(-5);
  return `FP${trechoData}${trechoUnico}`;
}

export function criarPedido(novo: NovoPedido): Pedido {
  const agora = new Date().toISOString();
  const pedido: Pedido = {
    ...novo,
    id: crypto.randomUUID(),
    codigo: gerarCodigo(),
    criadoEm: agora,
    atualizadoEm: agora,
    pagamento: "pendente",
    arte: "nao_enviada",
    producao: "pedido_aberto",
    historico: [{ em: agora, tipo: "criacao", descricao: "Pedido criado" }],
  };
  persistir([pedido, ...listarPedidos()]);
  return pedido;
}

export function buscarPedido(codigo: string) {
  return listarPedidos().find((pedido) => pedido.codigo === codigo) ?? null;
}

export function atualizarPedido(
  id: string,
  alteracoes: Partial<Pick<Pedido, "pagamento" | "arte" | "producao">>
) {
  const atual = listarPedidos().find((pedido) => pedido.id === id);
  if (!atual) return false;

  const futuro = { ...atual, ...alteracoes };
  if (
    alteracoes.producao &&
    exigeLiberacao(alteracoes.producao) &&
    !pedidoPodeEntrarProducao(futuro)
  ) {
    return false;
  }

  const agora = new Date().toISOString();
  const eventos: EventoPedido[] = [];
  if (alteracoes.pagamento && alteracoes.pagamento !== atual.pagamento) {
    eventos.push({
      em: agora,
      tipo: "pagamento",
      descricao: alteracoes.pagamento === "pago" ? "Pagamento confirmado" : "Pagamento marcado como pendente",
    });
  }
  if (alteracoes.arte && alteracoes.arte !== atual.arte) {
    const rotulos: Record<StatusArte, string> = {
      nao_enviada: "Arte marcada como não enviada",
      recebida: "Arte recebida",
      aprovada: "Arte aprovada",
    };
    eventos.push({ em: agora, tipo: "arte", descricao: rotulos[alteracoes.arte] });
  }
  if (alteracoes.producao && alteracoes.producao !== atual.producao) {
    eventos.push({
      em: agora,
      tipo: "producao",
      descricao: `Produção: ${ROTULOS_PRODUCAO[alteracoes.producao]}`,
    });
  }

  const pedidos = listarPedidos().map((pedido) =>
    pedido.id === id
      ? {
          ...pedido,
          ...alteracoes,
          atualizadoEm: agora,
          historico: [...pedido.historico, ...eventos],
        }
      : pedido
  );
  persistir(pedidos);
  return true;
}

export function pedidoPodeEntrarProducao(
  pedido: Pick<Pedido, "pagamento" | "arte">
) {
  return pedido.pagamento === "pago" && pedido.arte === "aprovada";
}

export function exigeLiberacao(status: StatusProducao) {
  return STATUS_PRODUCAO.indexOf(status) >= STATUS_PRODUCAO.indexOf("na_fila");
}
