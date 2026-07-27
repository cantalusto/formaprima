"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PRECO_MINIMO, brl } from "@/lib/precos";

const vantagens = [
  "Preço fechado de revendedor",
  "Produção rápida",
  "Entrega para todo o Nordeste",
];

export function BureauRevendedor() {
  return (
    <section
      id="revendedor"
      className="px-6 py-14 md:px-12 md:py-16"
      style={{
        background:
          "linear-gradient(135deg, #C94F2C 0%, #B4421F 55%, #8F3316 100%)",
      }}
    >
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto flex max-w-6xl flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between"
      >
        {/* Texto */}
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-black/20 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/90">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Para gráficas e revendedores
          </span>

          <h2
            className="mt-4 text-[30px] font-extrabold leading-[1.05] tracking-[-0.02em] text-white md:text-[42px]"
            style={{ fontFamily: "var(--font-display), sans-serif" }}
          >
            Bureau de impressão em
            <br className="hidden sm:block" /> lona e adesivo
          </h2>

          <p className="mt-3 max-w-md text-[14px] leading-relaxed text-white/80">
            Calcule o metro quadrado, mande a arte e feche o pedido na hora.
            Sem cotação, sem espera.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
            {vantagens.map((v) => (
              <span
                key={v}
                className="inline-flex items-center gap-2 text-[13px] font-medium text-white/85"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                {v}
              </span>
            ))}
          </div>
        </div>

        {/* Preço + CTA */}
        <div className="w-full flex-shrink-0 rounded-2xl bg-black/25 p-7 backdrop-blur-sm lg:w-auto lg:min-w-[300px]">
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70">
            A partir de
          </span>
          <p
            className="mt-1 text-[52px] font-extrabold leading-none text-white"
            style={{ fontFamily: "var(--font-display), sans-serif" }}
          >
            {brl(PRECO_MINIMO)}
            <span className="text-[20px] font-bold text-white/70">/m²</span>
          </p>

          <Link
            href="/revendedor"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-[14px] font-bold text-carvao no-underline transition-transform hover:-translate-y-0.5"
          >
            Ver tabela e calcular
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
