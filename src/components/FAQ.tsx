"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Quais produtos vocês fazem?",
    answer:
      "Trabalhamos com corte a laser em MDF (quadrinhos Wi-Fi, caixas, tábuas, chaveiros, nomes, suportes, mandalas, linha pet), acrílico (expositores para óticas, troféus, letras, painel ripado), letreiros para empresas (salão, loja, consultório), placas em ACM interno e externo, placas ABC de formatura, lonas com ou sem ilhós, adesivos (papel de parede, leitoso, transparente, perfurado), luminárias e sublimação (azulejos, canecas e almofadas).",
  },
  {
    question: "Prazo de produção e entrega",
    answer:
      "A produção padrão leva de 3 a 5 dias úteis, dependendo da complexidade e do material. Peças mais elaboradas (letreiros iluminados, painéis, fachadas em ACM) podem levar um pouco mais. Fale com a gente e passamos o prazo exato do seu projeto.",
  },
  {
    question: "Como envio o arquivo?",
    answer:
      "Aceitamos PDF, AI, CDR, PNG e JPG em 300dpi. Para corte a laser, o ideal é um vetor (AI ou CDR). Se você não tem a arte pronta, nossa equipe prepara pra você — é só nos enviar a ideia, o nome ou a foto.",
  },
  {
    question: "Vocês atendem fora de Recife?",
    answer:
      "Sim! Retirada grátis no nosso estúdio em Recife e envio para todo o Brasil via transportadora ou Correios. O frete é calculado no orçamento de acordo com o CEP e o peso.",
  },
  {
    question: "Fazem quantidade pequena ou só atacado?",
    answer:
      "Fazemos tanto unidades avulsas (um presente, um nome de bebê, uma placa) quanto lotes grandes para empresas, eventos e lembrancinhas. Há desconto progressivo por volume.",
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
