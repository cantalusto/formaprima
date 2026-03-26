"use client";

import { motion } from "framer-motion";
import { AnimatedButton } from "@/components/AnimatedButton";

export function CTABand() {
  return (
    <div className="bg-carvao2 px-6 md:px-12 pb-16">
      <motion.div
        initial={{ y: 32, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-terra rounded-[20px] p-7 md:p-9 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-5"
      >
        <div>
          <h3 className="text-[22px] font-medium text-white tracking-[-0.01em]">
            Pronto para personalizar?
          </h3>
          <p className="text-[13px] font-light text-white/70 mt-1.5">
            Orçamento em até 2 horas. Sem compromisso.
          </p>
        </div>
        <AnimatedButton className="bg-white hover:opacity-90 text-terra text-[12.5px] font-medium tracking-[0.05em] px-7 py-3.5 rounded-full h-auto whitespace-nowrap flex-shrink-0">
          Pedir orçamento grátis
        </AnimatedButton>
      </motion.div>
    </div>
  );
}
