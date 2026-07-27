/**
 * "Cadastro" leve do revendedor — Fase 1.
 *
 * Os dados ficam só no navegador do cliente (localStorage), sem banco e sem
 * login: serve para não digitar tudo de novo a cada pedido e para o pedido
 * chegar identificado no WhatsApp da gráfica.
 *
 * Na Fase 2 isso vira conta de verdade (Supabase Auth + Postgres) e estes
 * mesmos campos viram o cadastro do revendedor.
 */

const CHAVE = "formaprima:revendedor";

export interface DadosRevendedor {
  nome: string;
  empresa: string;
  whatsapp: string;
  cidade: string;
  cnpj: string;
}

export const DADOS_VAZIOS: DadosRevendedor = {
  nome: "",
  empresa: "",
  whatsapp: "",
  cidade: "",
  cnpj: "",
};

/** Campos sem os quais o pedido não é enviado. */
export function dadosValidos(d: DadosRevendedor) {
  return d.nome.trim().length > 1 && d.whatsapp.replace(/\D/g, "").length >= 10;
}

export function carregarDados(): DadosRevendedor | null {
  if (typeof window === "undefined") return null;
  try {
    const bruto = window.localStorage.getItem(CHAVE);
    if (!bruto) return null;
    const salvo = JSON.parse(bruto) as Partial<DadosRevendedor>;
    return { ...DADOS_VAZIOS, ...salvo };
  } catch {
    // localStorage bloqueado (aba anônima, permissões) ou JSON corrompido:
    // seguimos sem cadastro salvo em vez de quebrar a página.
    return null;
  }
}

export function salvarDados(dados: DadosRevendedor) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(CHAVE, JSON.stringify(dados));
  } catch {
    // Sem localStorage o pedido ainda é enviado, só não fica memorizado.
  }
}

export function limparDados() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(CHAVE);
  } catch {
    /* ignorado */
  }
}

/** Máscara de telefone brasileiro: (81) 9268-7656 / (81) 99268-7656 */
export function formatarTelefone(valor: string) {
  const d = valor.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

/** Bloco de identificação usado na mensagem do WhatsApp. */
export function blocoDados(d: DadosRevendedor, entrega: string) {
  return [
    "*DADOS DO CLIENTE*",
    `*Nome:* ${d.nome.trim()}`,
    d.empresa.trim() ? `*Empresa:* ${d.empresa.trim()}` : null,
    `*WhatsApp:* ${d.whatsapp.trim()}`,
    d.cidade.trim() ? `*Cidade:* ${d.cidade.trim()}` : null,
    d.cnpj.trim() ? `*CNPJ:* ${d.cnpj.trim()}` : null,
    `*Entrega:* ${entrega}`,
  ]
    .filter(Boolean)
    .join("\n");
}
