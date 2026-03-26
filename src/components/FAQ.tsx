"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Prazo de produção",
    answer:
      "A produção padrão leva de 3 a 5 dias úteis, dependendo da complexidade do projeto e do material. Trabalhamos para garantir que cada peça passe por nossa rigorosa verificação de qualidade antes da conclusão.",
  },
  {
    question: "Requisitos de arquivo",
    answer:
      "Aceitamos arquivos em PDF, AI, CDR, PNG e JPG com resolução mínima de 300dpi. Para corte a laser, envie o arquivo vetorizado. Se não tiver o arquivo pronto, nossa equipe pode preparar a arte para você.",
  },
  {
    question: "Escolha de material",
    answer:
      "Oferecemos MDF, acrílico (transparente, colorido, espelhado), tecido para sublimação, e impressão UV em qualquer superfície rígida. Cada material é ideal para diferentes aplicações — entre em contato para orientação personalizada.",
  },
  {
    question: "Entrega e frete",
    answer:
      "Enviamos para todo o Brasil via transportadora ou Correios. Retirada em Recife disponível sem custo. O valor do frete é calculado no orçamento conforme CEP e peso da encomenda.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.06 }}
      className="border-b border-black/[0.08]"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer bg-transparent border-none"
      >
        <span className="text-[15px] font-medium text-carvao">{question}</span>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-colors"
          style={{
            background: isOpen ? "#C94F2C" : "transparent",
            border: isOpen ? "none" : "1px solid rgba(0,0,0,0.12)",
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke={isOpen ? "white" : "#8A8276"}
            strokeWidth="1.5"
            strokeLinecap="round"
            className="transition-transform"
            style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
          >
            <line x1="7" y1="2" x2="7" y2="12" />
            <line x1="2" y1="7" x2="12" y2="7" />
          </svg>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="text-sm text-grafite leading-relaxed pb-5 pr-12 max-w-[560px]">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-creme py-[72px] px-6 md:px-12">
      <div className="max-w-[640px] mx-auto">
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <h2 className="text-[28px] md:text-[32px] font-semibold tracking-[-0.02em] text-carvao">
            Perguntas frequentes
          </h2>
          <p className="text-sm text-grafite mt-2 leading-relaxed">
            Informações detalhadas sobre produção, pedidos e entrega.
          </p>
        </motion.div>

        <div>
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? -1 : index)
              }
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
