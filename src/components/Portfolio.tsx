"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const portfolioItems = [
  {
    type: "featured",
    bgColor: "#2A2620",
    content: (
      <div className="flex flex-col items-center justify-center gap-3 min-h-[260px]">
        <div className="w-[120px] h-[80px] bg-ambar rounded-md flex items-center justify-center">
          <span className="text-[9px] font-medium tracking-[2px] text-[#6A4820] uppercase text-center leading-[1.6]">
            FORMA
            <br />
            PRIMA
          </span>
        </div>
        <span className="text-[11px] text-grafite tracking-[0.06em]">
          Quadrinho Wi-Fi em MDF
        </span>
      </div>
    ),
  },
  {
    bgColor: "#1e2e38",
    content: (
      <svg width="80" height="60" viewBox="0 0 80 60">
        <rect width="80" height="60" rx="4" fill="rgba(58,142,178,.08)" />
        <rect
          x="10"
          y="10"
          width="60"
          height="40"
          rx="3"
          fill="none"
          stroke="#5A9AB8"
          strokeWidth="1.5"
        />
        <text
          x="40"
          y="34"
          textAnchor="middle"
          fontFamily="DM Sans, sans-serif"
          fontSize="8"
          fontWeight="500"
          fill="#90C8E0"
          letterSpacing="2"
        >
          LETREIRO
        </text>
      </svg>
    ),
  },
  {
    bgColor: "#2a2218",
    content: (
      <svg width="80" height="60" viewBox="0 0 80 60">
        <rect width="80" height="60" rx="4" fill="rgba(232,201,154,.08)" />
        <circle cx="40" cy="30" r="18" fill="none" stroke="#C94F2C" strokeWidth="1" />
        <circle cx="40" cy="30" r="4" fill="#C94F2C" />
        <line
          x1="40"
          y1="12"
          x2="40"
          y2="24"
          stroke="#C94F2C"
          strokeWidth=".8"
          opacity=".5"
        />
        <line
          x1="40"
          y1="36"
          x2="40"
          y2="48"
          stroke="#C94F2C"
          strokeWidth=".8"
          opacity=".5"
        />
      </svg>
    ),
  },
  {
    bgColor: "#221a1a",
    content: (
      <svg width="80" height="60" viewBox="0 0 80 60">
        <rect width="80" height="60" rx="4" fill="rgba(201,79,44,.06)" />
        <rect x="15" y="15" width="50" height="30" rx="3" fill="#C94F2C" opacity=".15" />
        <text
          x="40"
          y="34"
          textAnchor="middle"
          fontFamily="DM Sans, sans-serif"
          fontSize="8"
          fontWeight="500"
          fill="#E06042"
          letterSpacing="1.5"
        >
          CAIXA MDF
        </text>
      </svg>
    ),
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

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-carvao py-[72px] px-6 md:px-12">
      <div className="flex justify-between items-end mb-7">
        <h2 className="text-[26px] font-medium tracking-[-0.01em] text-branco">
          Portfólio
        </h2>
        <Link
          href="#"
          className="text-xs font-medium tracking-[0.06em] text-terra hover:opacity-75 transition-opacity no-underline"
        >
          Ver todos →
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3.5">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={itemVariants}
            className={`rounded-[14px] overflow-hidden cursor-pointer ${
              item.type === "featured"
                ? "row-span-1 lg:row-span-2"
                : "aspect-[4/3]"
            }`}
          >
            <div
              className={`w-full h-full flex items-center justify-center transition-opacity hover:opacity-90 ${
                item.type === "featured" ? "" : "p-4"
              }`}
              style={{ background: item.bgColor }}
            >
              {item.content}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
