"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "A precisão da impressão e o acabamento fosco se alinham perfeitamente com os requisitos estéticos da nossa marca.",
    name: "Adriana Carvalho",
    detail: "Encomendou 50 unidades",
    product: "Quadrinhos Wi-Fi",
    series: "MDF · Corte a laser",
    image: "/portfolio/wifimdf.jpg",
  },
  {
    quote:
      "As placas em MDF ficaram perfeitas para o nosso evento. O corte a laser tem um nível de detalhe impressionante.",
    name: "Rafael Mendes",
    detail: "Encomendou 120 unidades",
    product: "Letreiro em MDF",
    series: "Relevo iluminado",
    image: "/portfolio/Nome em MDF com relevo iluminado.jpg",
  },
  {
    quote:
      "O acrílico com impressão UV ficou elegante e profissional. Superou nossas expectativas para os displays da loja.",
    name: "Camila Torres",
    detail: "Encomendou 30 unidades",
    product: "Letras decorativas",
    series: "Acrílico · Corporativo",
    image: "/portfolio/Letras grandes decorativas.jpeg",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  return (
    <section className="bg-carvao py-[72px] px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-terra">
            Depoimentos
          </span>
          <h2 className="mt-3 text-[28px] md:text-[32px] font-semibold tracking-[-0.02em] text-branco leading-tight">
            O que nossos clientes
            <br />
            dizem da qualidade
          </h2>
        </div>
        <Link
          href="/portfolio"
          className="text-xs font-medium tracking-[0.06em] px-4 py-2 rounded-full no-underline hover:opacity-90 transition-opacity"
          style={{ background: "#C94F2C", color: "white" }}
        >
          Ver portfólio
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* Left: visual placeholder */}
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-2xl overflow-hidden relative"
          style={{ background: "#252220", minHeight: "320px" }}
        >
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0"
          >
            <Image
              src={t.image}
              alt={t.product}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(28,26,23,0.88) 0%, rgba(28,26,23,0.25) 45%, rgba(28,26,23,0.15) 100%)",
              }}
            />
          </motion.div>
          <div className="absolute top-4 left-5 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1.5 z-10">
            <span className="text-[10px] font-medium tracking-[0.1em] uppercase text-white/80">
              Destaque do projeto
            </span>
          </div>
          <div className="relative z-10 flex items-end justify-between min-h-[320px] p-5 pt-20">
            <div>
              <p className="text-white text-sm font-medium drop-shadow">
                {t.product}
              </p>
              <p className="text-white/60 text-[11px] mt-0.5 drop-shadow">
                {t.series}
              </p>
            </div>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Ver depoimento ${i + 1}`}
                  className="w-2 h-2 rounded-full border-none cursor-pointer transition-colors"
                  style={{
                    background:
                      i === current ? "#C94F2C" : "rgba(255,255,255,0.35)",
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: testimonial card */}
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="rounded-2xl p-6 md:p-8 flex flex-col justify-between"
          style={{
            background: "#252220",
            border: "1px solid rgba(255,255,255,0.07)",
            minHeight: "320px",
          }}
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs text-white/40 font-medium tracking-wide">
                {current + 1}/{testimonials.length} Depoimentos
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() =>
                    setCurrent(
                      (current - 1 + testimonials.length) %
                        testimonials.length
                    )
                  }
                  className="w-7 h-7 rounded-full border border-white/15 bg-transparent flex items-center justify-center cursor-pointer hover:border-white/30 transition-colors"
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 2L3 5L6 8" />
                  </svg>
                </button>
                <button
                  onClick={() =>
                    setCurrent((current + 1) % testimonials.length)
                  }
                  className="w-7 h-7 rounded-full bg-transparent flex items-center justify-center cursor-pointer transition-colors"
                  style={{ background: "#C94F2C" }}
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 2L7 5L4 8" />
                  </svg>
                </button>
              </div>
            </div>

            <motion.blockquote
              key={current}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="text-lg md:text-xl font-normal text-white/90 leading-relaxed"
            >
              &ldquo;{t.quote}&rdquo;
            </motion.blockquote>
          </div>

          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-3 mt-8"
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-semibold"
              style={{ background: "#C94F2C" }}
            >
              {t.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <p className="text-sm font-medium text-white">{t.name}</p>
              <p className="text-[11px] text-white/40 mt-0.5">{t.detail}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
