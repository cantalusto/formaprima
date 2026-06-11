"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: 1,
    title: "Escolha o material",
    description:
      "MDF, acrílico, tecido, UV — selecione o que combina com o seu projeto.",
  },
  {
    number: 2,
    title: "Envie sua arte",
    description:
      "Suba o arquivo ou conte sua ideia — nossa equipe prepara o arquivo pra você.",
  },
  {
    number: 3,
    title: "Aprovação e produção",
    description:
      "Você aprova a prova digital antes de ir pra produção. Zero surpresas.",
  },
  {
    number: 4,
    title: "Receba em casa",
    description:
      "Enviamos para todo o Brasil. Retirada em Recife disponível.",
  },
];

const itemVariants = {
  hidden: { y: 32, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
      delay: i * 0.08,
    },
  }),
};

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-carvao2 py-[72px] px-6 md:px-12">
      <div className="mb-10">
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-terra">
          Processo simples
        </span>
        <h2 className="mt-3 text-[28px] md:text-[32px] font-semibold tracking-[-0.02em] text-branco leading-tight">
          Como funciona
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={itemVariants}
            className="relative flex flex-col gap-3.5"
          >
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-full bg-terra text-white text-sm font-medium flex items-center justify-center flex-shrink-0">
                {step.number}
              </div>
              {index < steps.length - 1 && (
                <div
                  className="hidden lg:block flex-1 h-px"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(201,79,44,0.45), rgba(255,255,255,0.06))",
                  }}
                />
              )}
            </div>
            <div className="text-sm font-medium text-branco">{step.title}</div>
            <div className="text-[12.5px] font-light text-grafite leading-[1.7]">
              {step.description}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
