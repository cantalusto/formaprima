"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import {
  DADOS_VAZIOS,
  carregarDados,
  dadosValidos,
  formatarTelefone,
  salvarDados,
  type DadosRevendedor,
} from "@/lib/revendedor";

export const ENTREGAS = [
  { id: "retirada", nome: "Retirar em Recife" },
  { id: "entrega", nome: "Receber por entrega" },
];

interface Props {
  aberto: boolean;
  onFechar: () => void;
  /** Resumo do pedido, só para conferência na tela */
  resumo: { descricao: string; medida: string; total: string };
  /** Monta o link do WhatsApp já com os dados preenchidos */
  montarLink: (dados: DadosRevendedor, entrega: string) => string;
}

const inputClasse =
  "w-full rounded-xl border border-white/[0.08] bg-carvao px-4 py-3 text-sm text-branco outline-none transition-colors placeholder:text-grafite2 focus:border-terra/50";

const labelClasse =
  "mb-1.5 block text-[11px] font-medium uppercase tracking-[0.04em] text-grafite";

export function ModalDados({ aberto, onFechar, resumo, montarLink }: Props) {
  const [montado, setMontado] = useState(false);
  const [dados, setDados] = useState<DadosRevendedor>(DADOS_VAZIOS);
  const [entrega, setEntrega] = useState(ENTREGAS[0].nome);
  const [jaCadastrado, setJaCadastrado] = useState(false);

  useEffect(() => setMontado(true), []);

  // Recupera o cadastro salvo sempre que o modal abre
  useEffect(() => {
    if (!aberto) return;
    const salvo = carregarDados();
    if (salvo) {
      setDados(salvo);
      setJaCadastrado(true);
    }
  }, [aberto]);

  // Fecha no ESC e trava o scroll do fundo enquanto está aberto
  useEffect(() => {
    if (!aberto) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onFechar();
    };
    document.addEventListener("keydown", onKey);
    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflowAnterior;
    };
  }, [aberto, onFechar]);

  if (!montado || !aberto) return null;

  const valido = dadosValidos(dados);
  const campo = (chave: keyof DadosRevendedor) => (valor: string) =>
    setDados((d) => ({ ...d, [chave]: valor }));

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center overflow-y-auto bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onFechar}
      role="dialog"
      aria-modal="true"
      aria-label="Dados para o pedido"
    >
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg rounded-t-2xl border border-white/[0.08] bg-carvao2 p-6 sm:rounded-2xl md:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-[20px] font-semibold tracking-[-0.01em] text-branco">
              Seus dados
            </h2>
            <p className="mt-1 text-xs text-grafite">
              {jaCadastrado
                ? "Confira os dados salvos e envie o pedido."
                : "Preenchemos uma vez só — nas próximas já vai automático."}
            </p>
          </div>
          <button
            type="button"
            onClick={onFechar}
            aria-label="Fechar"
            className="flex h-8 w-8 flex-shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-transparent text-grafite transition-colors hover:text-branco"
          >
            ✕
          </button>
        </div>

        {/* Resumo do pedido */}
        <div className="mt-5 rounded-xl border border-white/[0.07] bg-carvao px-4 py-3">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="truncate text-[13px] font-medium text-branco">
                {resumo.descricao}
              </p>
              <p className="mt-0.5 text-[11px] text-grafite">{resumo.medida}</p>
            </div>
            <span className="flex-shrink-0 text-[17px] font-bold text-terra">
              {resumo.total}
            </span>
          </div>
        </div>

        {/* Campos */}
        <div className="mt-5 flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="rev-nome" className={labelClasse}>
                Nome *
              </label>
              <input
                id="rev-nome"
                value={dados.nome}
                onChange={(e) => campo("nome")(e.target.value)}
                placeholder="Seu nome"
                className={inputClasse}
              />
            </div>
            <div>
              <label htmlFor="rev-whats" className={labelClasse}>
                WhatsApp *
              </label>
              <input
                id="rev-whats"
                inputMode="tel"
                value={dados.whatsapp}
                onChange={(e) =>
                  campo("whatsapp")(formatarTelefone(e.target.value))
                }
                placeholder="(81) 90000-0000"
                className={inputClasse}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="rev-empresa" className={labelClasse}>
                Gráfica / Empresa
              </label>
              <input
                id="rev-empresa"
                value={dados.empresa}
                onChange={(e) => campo("empresa")(e.target.value)}
                placeholder="Opcional"
                className={inputClasse}
              />
            </div>
            <div>
              <label htmlFor="rev-cidade" className={labelClasse}>
                Cidade / UF
              </label>
              <input
                id="rev-cidade"
                value={dados.cidade}
                onChange={(e) => campo("cidade")(e.target.value)}
                placeholder="Recife - PE"
                className={inputClasse}
              />
            </div>
          </div>

          <div>
            <label htmlFor="rev-cnpj" className={labelClasse}>
              CNPJ
            </label>
            <input
              id="rev-cnpj"
              value={dados.cnpj}
              onChange={(e) => campo("cnpj")(e.target.value)}
              placeholder="Opcional — para nota fiscal"
              className={inputClasse}
            />
          </div>

          <div>
            <span className={labelClasse}>Como quer receber?</span>
            <div className="grid grid-cols-2 gap-2">
              {ENTREGAS.map((op) => {
                const ativo = op.nome === entrega;
                return (
                  <button
                    key={op.id}
                    type="button"
                    onClick={() => setEntrega(op.nome)}
                    aria-pressed={ativo}
                    className={`cursor-pointer rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${
                      ativo
                        ? "border-terra bg-terra/10 text-branco"
                        : "border-white/[0.08] bg-carvao text-grafite hover:border-white/20"
                    }`}
                  >
                    {op.nome}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Envio */}
        <a
          href={valido ? montarLink(dados, entrega) : undefined}
          target="_blank"
          rel="noopener noreferrer"
          aria-disabled={!valido}
          onClick={(e) => {
            if (!valido) {
              e.preventDefault();
              return;
            }
            salvarDados(dados);
            onFechar();
          }}
          className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-semibold text-white no-underline transition-opacity ${
            valido ? "hover:opacity-90" : "pointer-events-none opacity-40"
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
          Enviar pedido no WhatsApp
        </a>

        <p className="mt-3 text-center text-[11px] leading-snug text-grafite2">
          {valido
            ? "Seus dados ficam salvos neste navegador para os próximos pedidos."
            : "Preencha nome e WhatsApp para enviar."}
        </p>
      </motion.div>
    </div>,
    document.body
  );
}
