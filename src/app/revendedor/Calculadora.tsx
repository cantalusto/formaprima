"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ACABAMENTOS,
  ADESIVOS,
  GRAMATURAS,
  MINIMO_M2,
  brl,
  calcular,
  m2,
  type CategoriaId,
} from "@/lib/precos";
import { PIX_CHAVE, linkWhatsApp } from "@/lib/contato";
import { blocoDados, type DadosRevendedor } from "@/lib/revendedor";
import { criarPedido } from "@/lib/pedidos";
import { ModalDados } from "./ModalDados";

const CATEGORIAS: { id: CategoriaId; nome: string; detalhe: string }[] = [
  { id: "lona", nome: "Lona", detalhe: "380g e 440g" },
  { id: "adesivo", nome: "Adesivo", detalhe: "Leitoso, transparente, perfurado" },
];

function Campo({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block text-[11px] font-medium uppercase tracking-[0.04em] text-grafite">
        {label}
      </label>
      {children}
    </div>
  );
}

function Opcoes({
  opcoes,
  valor,
  onChange,
}: {
  opcoes: { id: string; nome: string; detalhe?: string }[];
  valor: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
      {opcoes.map((opcao) => {
        const ativo = opcao.id === valor;
        return (
          <button
            key={opcao.id}
            type="button"
            onClick={() => onChange(opcao.id)}
            aria-pressed={ativo}
            className={`cursor-pointer rounded-xl border px-4 py-3 text-left transition-colors ${
              ativo
                ? "border-terra bg-terra/10"
                : "border-white/[0.08] bg-carvao hover:border-white/20"
            }`}
          >
            <span
              className={`block text-sm font-medium ${
                ativo ? "text-branco" : "text-grafite"
              }`}
            >
              {opcao.nome}
            </span>
            {opcao.detalhe && (
              <span className="mt-0.5 block text-[11px] leading-snug text-grafite2">
                {opcao.detalhe}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

const inputClasse =
  "w-full rounded-xl border border-white/[0.08] bg-carvao px-4 py-3 text-sm text-branco outline-none transition-colors placeholder:text-grafite2 focus:border-terra/50";

export function Calculadora() {
  const [categoria, setCategoria] = useState<CategoriaId>("lona");
  const [gramatura, setGramatura] = useState("440");
  const [acabamento, setAcabamento] = useState("sem");
  const [tipoAdesivo, setTipoAdesivo] = useState("leitoso");
  const [largura, setLargura] = useState("1");
  const [altura, setAltura] = useState("1");
  const [quantidade, setQuantidade] = useState("1");
  const [modalAberto, setModalAberto] = useState(false);

  const entrada = {
    categoria,
    gramatura,
    acabamento,
    tipoAdesivo,
    largura: parseFloat(largura.replace(",", ".")),
    altura: parseFloat(altura.replace(",", ".")),
    quantidade: parseInt(quantidade, 10),
  };

  const r = calcular(entrada);
  const temMedida = r.areaCobrada > 0;
  /** Sem medida válida não deixamos disparar o pedido — evita chegar
   *  orçamento zerado no WhatsApp da gráfica. */
  const pedidoValido = temMedida && r.total > 0;

  const medidaTexto = `${largura.replace(".", ",")}m × ${altura.replace(
    ".",
    ","
  )}m · ${Math.max(1, entrada.quantidade || 1)}x`;

  const blocoPedido = [
    "*PEDIDO*",
    `*Produto:* ${r.descricao}`,
    `*Medida:* ${largura.replace(".", ",")}m × ${altura.replace(".", ",")}m`,
    `*Quantidade:* ${Math.max(1, entrada.quantidade || 1)}`,
    `*Área cobrada:* ${m2(r.areaCobrada)} por peça`,
    `*Valor por m²:* ${brl(r.precoM2)}`,
    `*Total estimado:* ${brl(r.total)}`,
  ].join("\n");

  /** Mensagem final já identificada com os dados do revendedor. */
  const montarLink = (dados: DadosRevendedor, entrega: string) =>
    linkWhatsApp(
      [
        "Olá, Forma Prima! Quero fechar um pedido pela área de revendedor 👇",
        "",
        blocoDados(dados, entrega),
        "",
        blocoPedido,
        "",
        "Vou enviar a arte por aqui. Pode confirmar o prazo e o pagamento?",
      ].join("\n")
    );

  return (
    <div
      id="calculadora"
      className="rounded-2xl border border-white/[0.08] bg-carvao2 p-6 md:p-8"
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
        {/* Formulário */}
        <div className="flex flex-col gap-6">
          <Campo label="Material">
            <div className="grid grid-cols-2 gap-2">
              {CATEGORIAS.map((c) => {
                const ativo = c.id === categoria;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setCategoria(c.id)}
                    aria-pressed={ativo}
                    className={`cursor-pointer rounded-xl border px-4 py-3.5 text-left transition-colors ${
                      ativo
                        ? "border-terra bg-terra/10"
                        : "border-white/[0.08] bg-carvao hover:border-white/20"
                    }`}
                  >
                    <span
                      className={`block text-[15px] font-semibold ${
                        ativo ? "text-branco" : "text-grafite"
                      }`}
                    >
                      {c.nome}
                    </span>
                    <span className="mt-0.5 block text-[11px] text-grafite2">
                      {c.detalhe}
                    </span>
                  </button>
                );
              })}
            </div>
          </Campo>

          {categoria === "lona" ? (
            <>
              <Campo label="Gramatura">
                <Opcoes
                  opcoes={GRAMATURAS}
                  valor={gramatura}
                  onChange={setGramatura}
                />
              </Campo>
              <Campo label="Acabamento">
                <Opcoes
                  opcoes={ACABAMENTOS}
                  valor={acabamento}
                  onChange={setAcabamento}
                />
              </Campo>
            </>
          ) : (
            <Campo label="Tipo de adesivo">
              <Opcoes
                opcoes={ADESIVOS}
                valor={tipoAdesivo}
                onChange={setTipoAdesivo}
              />
            </Campo>
          )}

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <Campo label="Largura (m)">
              <input
                type="number"
                inputMode="decimal"
                min="0"
                step="0.01"
                value={largura}
                onChange={(e) => setLargura(e.target.value)}
                className={inputClasse}
              />
            </Campo>
            <Campo label="Altura (m)">
              <input
                type="number"
                inputMode="decimal"
                min="0"
                step="0.01"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
                className={inputClasse}
              />
            </Campo>
            <Campo label="Quantidade">
              <input
                type="number"
                inputMode="numeric"
                min="1"
                step="1"
                value={quantidade}
                onChange={(e) => setQuantidade(e.target.value)}
                className={inputClasse}
              />
            </Campo>
          </div>
        </div>

        {/* Resultado */}
        <motion.div
          layout
          className="flex flex-col rounded-2xl border border-white/[0.08] bg-carvao p-6"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-terra">
            Seu orçamento
          </span>

          <p className="mt-4 text-[13px] font-medium text-branco">
            {r.descricao}
          </p>

          <dl className="mt-4 flex flex-col gap-2 border-t border-white/[0.07] pt-4 text-[13px]">
            <div className="flex justify-between gap-3">
              <dt className="text-grafite">Área por peça</dt>
              <dd className="text-branco">
                {temMedida ? m2(r.areaCobrada) : "—"}
              </dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="text-grafite">Valor por m²</dt>
              <dd className="text-branco">{brl(r.precoM2)}</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="text-grafite">Valor por peça</dt>
              <dd className="text-branco">{brl(r.valorUnitario)}</dd>
            </div>
          </dl>

          <div className="mt-4 border-t border-white/[0.07] pt-4">
            <span className="text-[11px] uppercase tracking-[0.04em] text-grafite">
              Total
            </span>
            <p
              className="mt-1 text-[32px] font-bold leading-none text-branco"
              style={{ fontFamily: "var(--font-display), sans-serif" }}
            >
              {brl(r.total)}
            </p>
          </div>

          {r.minimoAplicado && (
            <p className="mt-3 rounded-lg bg-terra/10 px-3 py-2 text-[11px] leading-snug text-ambar">
              Peças abaixo de {MINIMO_M2}m² são cobradas como {MINIMO_M2}m²
              (mínimo de produção).
            </p>
          )}

          <button
            type="button"
            disabled={!pedidoValido}
            onClick={() => setModalAberto(true)}
            className={`mt-5 inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border-none px-6 py-3.5 text-sm font-semibold text-white transition-opacity ${
              pedidoValido ? "hover:opacity-90" : "cursor-not-allowed opacity-40"
            }`}
            style={{ background: "#25D366" }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            </svg>
            Fechar pedido no WhatsApp
          </button>

          <p className="mt-3 text-center text-[11px] leading-snug text-grafite2">
            {pedidoValido
              ? `Pagamento via PIX (${PIX_CHAVE}) ou cartão. Envie a arte pelo WhatsApp e confirmamos o prazo.`
              : "Informe a largura e a altura para calcular o pedido."}
          </p>
        </motion.div>
      </div>

      <ModalDados
        aberto={modalAberto}
        onFechar={() => setModalAberto(false)}
        resumo={{
          descricao: r.descricao,
          medida: medidaTexto,
          total: brl(r.total),
        }}
        montarLink={montarLink}
        onCriarPedido={(dados, entrega) =>
          criarPedido({
            origem: "online",
            cliente: dados,
            entrega,
            item: {
              descricao: r.descricao,
              largura: entrada.largura,
              altura: entrada.altura,
              quantidade: Math.max(1, entrada.quantidade || 1),
              areaCobrada: r.areaCobrada,
              precoM2: r.precoM2,
              total: r.total,
            },
          }).codigo
        }
      />
    </div>
  );
}
