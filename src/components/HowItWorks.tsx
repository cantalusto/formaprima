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
      <h2 className="text-[26px] font-medium tracking-[-0.01em] text-branco mb-10">
        Como funciona
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={itemVariants}
            className="flex flex-col gap-3.5"
          >
            <div className="w-9 h-9 rounded-full bg-terra text-white text-sm font-medium flex items-center justify-center flex-shrink-0">
              {step.number}
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
