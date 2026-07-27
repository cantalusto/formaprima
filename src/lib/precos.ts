/**
 * Tabela de preços do bureau de impressão (área de revendedores).
 *
 * FONTE: tabela enviada pelo Sérgio em 25/07/2026 (mensagem escrita, com gramaturas).
 *
 * ⚠️ ATENÇÃO — PENDENTE DE CONFIRMAÇÃO
 * O áudio da mesma conversa trazia valores conflitantes: lona 22, lona com
 * ilhós 24 e banner 25 (nessa versão o banner sai mais caro que o ilhós, o
 * inverso da tabela escrita). Assim que o Sérgio confirmar a versão
 * definitiva, basta alterar os números deste arquivo — nada mais no site
 * precisa mudar.
 */

/** Cobrança mínima por peça, em m². Padrão de mercado para não dar prejuízo
 *  em peças pequenas (ex.: 0,80 × 1,00 = 0,8m² é cobrado como 1m²).
 *  ⚠️ Confirmar com o Sérgio se ele cobra fração ou mínimo de 1m². */
export const MINIMO_M2 = 1;

export type CategoriaId = "lona" | "adesivo";

export interface Escolha {
  id: string;
  nome: string;
  detalhe?: string;
}

export const GRAMATURAS: Escolha[] = [
  { id: "380", nome: "380g", detalhe: "Uso geral, mais econômica" },
  { id: "440", nome: "440g", detalhe: "Mais encorpada e durável" },
];

export const ACABAMENTOS: Escolha[] = [
  { id: "sem", nome: "Só lona", detalhe: "Impressão e corte" },
  { id: "banner", nome: "Banner", detalhe: "Com bastão e corda" },
  { id: "ilhos", nome: "Com ilhós", detalhe: "Pronta para instalar" },
];

/** Preço por m² da lona: [gramatura][acabamento] */
export const PRECOS_LONA: Record<string, Record<string, number>> = {
  "380": { sem: 23, banner: 24, ilhos: 25 },
  "440": { sem: 26, banner: 27, ilhos: 28 },
};

export interface Adesivo extends Escolha {
  preco: number;
}

export const ADESIVOS: Adesivo[] = [
  { id: "leitoso", nome: "Leitoso", detalhe: "Vitrines e paredes", preco: 20 },
  {
    id: "transparente",
    nome: "Transparente",
    detalhe: "Vidros e superfícies claras",
    preco: 25,
  },
  {
    id: "perfurado",
    nome: "Perfurado",
    detalhe: "Vidros de carro, visão de dentro",
    preco: 35,
  },
];

/** Menor preço por m² da tabela — usado no "a partir de" da página. */
export const PRECO_MINIMO = Math.min(
  ...ADESIVOS.map((a) => a.preco),
  ...Object.values(PRECOS_LONA).flatMap((linha) => Object.values(linha))
);

export interface EntradaCalculo {
  categoria: CategoriaId;
  /** lona */
  gramatura?: string;
  acabamento?: string;
  /** adesivo */
  tipoAdesivo?: string;
  /** metros */
  largura: number;
  altura: number;
  quantidade: number;
}

export interface ResultadoCalculo {
  /** Preço por m² aplicado */
  precoM2: number;
  /** Área real de uma peça (largura × altura) */
  areaUnitaria: number;
  /** Área cobrada por peça, já respeitando o mínimo */
  areaCobrada: number;
  /** true quando a peça é menor que o mínimo e foi arredondada */
  minimoAplicado: boolean;
  /** Valor de uma peça */
  valorUnitario: number;
  /** Valor total do pedido */
  total: number;
  /** Nome legível do que foi escolhido, ex.: "Lona 440g · Com ilhós" */
  descricao: string;
}

export function precoPorM2(entrada: EntradaCalculo): number {
  if (entrada.categoria === "lona") {
    const linha = PRECOS_LONA[entrada.gramatura ?? ""];
    return linha?.[entrada.acabamento ?? ""] ?? 0;
  }
  return ADESIVOS.find((a) => a.id === entrada.tipoAdesivo)?.preco ?? 0;
}

export function descricaoEscolha(entrada: EntradaCalculo): string {
  if (entrada.categoria === "lona") {
    const gramatura = GRAMATURAS.find((g) => g.id === entrada.gramatura);
    const acabamento = ACABAMENTOS.find((a) => a.id === entrada.acabamento);
    return `Lona ${gramatura?.nome ?? ""} · ${acabamento?.nome ?? ""}`.trim();
  }
  const adesivo = ADESIVOS.find((a) => a.id === entrada.tipoAdesivo);
  return `Adesivo ${adesivo?.nome ?? ""}`.trim();
}

/**
 * Calcula o valor do pedido. Valores inválidos (NaN, negativos) são tratados
 * como zero para a conta nunca quebrar na tela.
 */
export function calcular(entrada: EntradaCalculo): ResultadoCalculo {
  const sanitizar = (n: number) => (Number.isFinite(n) && n > 0 ? n : 0);

  const largura = sanitizar(entrada.largura);
  const altura = sanitizar(entrada.altura);
  const quantidade = Math.max(1, Math.floor(sanitizar(entrada.quantidade)) || 1);

  const precoM2 = precoPorM2(entrada);
  const areaUnitaria = largura * altura;
  const temMedida = areaUnitaria > 0;

  const areaCobrada = temMedida ? Math.max(areaUnitaria, MINIMO_M2) : 0;
  const minimoAplicado = temMedida && areaUnitaria < MINIMO_M2;

  const valorUnitario = areaCobrada * precoM2;
  const total = valorUnitario * quantidade;

  return {
    precoM2,
    areaUnitaria,
    areaCobrada,
    minimoAplicado,
    valorUnitario,
    total,
    descricao: descricaoEscolha(entrada),
  };
}

export const brl = (valor: number) =>
  valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export const m2 = (valor: number) =>
  `${valor.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} m²`;
