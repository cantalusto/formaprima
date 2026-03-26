"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const materials = [
  {
    name: "MDF",
    description: "Placas · Quadros · Décor",
    bgColor: "#E8C99A",
    icon: (
      <svg width="56" height="40" viewBox="0 0 56 40">
        <rect width="56" height="40" rx="4" fill="#D4B880" />
        <rect x="5" y="5" width="46" height="30" rx="3" fill="#E8C99A" />
        <text
          x="28"
          y="24"
          textAnchor="middle"
          fontFamily="DM Sans, sans-serif"
          fontSize="9"
          fontWeight="500"
          fill="#6A4820"
          letterSpacing="1"
        >
          MDF
        </text>
      </svg>
    ),
  },
  {
    name: "Acrílico",
    description: "Letreiros · Displays",
    bgColor: "#D8EEF7",
    icon: (
      <svg width="56" height="40" viewBox="0 0 56 40">
        <rect width="56" height="40" rx="4" fill="#C8E4F0" opacity=".6" />
        <rect
          x="7"
          y="7"
          width="42"
          height="26"
          rx="3"
          fill="none"
          stroke="#5A9AB8"
          strokeWidth="1.5"
        />
        <text
          x="28"
          y="24"
          textAnchor="middle"
          fontFamily="DM Sans, sans-serif"
          fontSize="7"
          fontWeight="500"
          fill="#2A6A88"
          letterSpacing="1"
        >
          ACRÍLICO
        </text>
      </svg>
    ),
  },
  {
    name: "Tecido",
    description: "Sublimação · Bandeiras",
    bgColor: "#F0E8E0",
    icon: (
      <svg width="56" height="40" viewBox="0 0 56 40">
        <rect width="56" height="40" rx="4" fill="#E8DCD4" />
        <path
          d="M8 12 Q12 8 16 12 Q20 16 24 12 Q28 8 32 12 Q36 16 40 12 Q44 8 48 12"
          fill="none"
          stroke="#A08070"
          strokeWidth="1.3"
        />
        <path
          d="M8 20 Q12 16 16 20 Q20 24 24 20 Q28 16 32 20 Q36 24 40 20 Q44 16 48 20"
          fill="none"
          stroke="#A08070"
          strokeWidth="1.3"
        />
        <path
          d="M8 28 Q12 24 16 28 Q20 32 24 28 Q28 24 32 28 Q36 32 40 28 Q44 24 48 28"
          fill="none"
          stroke="#A08070"
          strokeWidth="1.3"
        />
      </svg>
    ),
  },
  {
    name: "Impressão UV",
    description: "Alta def · Qualquer superfície",
    bgColor: "#1C1A17",
    dark: true,
    icon: (
      <svg width="56" height="40" viewBox="0 0 56 40">
        <rect width="56" height="40" rx="4" fill="#252220" />
        <rect x="10" y="10" width="36" height="20" rx="2" fill="#2E2B27" />
        <circle
          cx="28"
          cy="20"
          r="5"
          fill="none"
          stroke="#C94F2C"
          strokeWidth="1.2"
        />
        <circle cx="28" cy="20" r="2" fill="#C94F2C" />
        <text
          x="28"
          y="36"
          textAnchor="middle"
          fontFamily="DM Sans, sans-serif"
          fontSize="5.5"
          fill="#5A5750"
          letterSpacing="1"
        >
          IMPRESSÃO UV
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

export function Materiais() {
  return (
    <section id="materiais" className="bg-creme py-16 px-6 md:px-12">
      <div className="flex justify-between items-end mb-7">
        <h2 className="text-[26px] font-medium tracking-[-0.01em] text-carvao">
          Escolha o material
        </h2>
        <Link
          href="#"
          className="text-xs font-medium tracking-[0.06em] text-terra hover:opacity-75 transition-opacity no-underline"
        >
          Ver todos →
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
        {materials.map((material, index) => (
          <motion.div
            key={material.name}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={itemVariants}
            className="rounded-[14px] overflow-hidden border border-black/[0.08] bg-white cursor-pointer transition-all hover:border-terra hover:-translate-y-0.5"
          >
            <div
              className="h-[90px] flex items-center justify-center"
              style={{ background: material.bgColor }}
            >
              {material.icon}
            </div>
            <div
              className={`p-3 px-3.5 pb-3.5 ${
                material.dark ? "bg-carvao2" : ""
              }`}
            >
              <div
                className={`text-[13px] font-medium tracking-[0.02em] ${
                  material.dark ? "text-branco" : "text-carvao"
                }`}
              >
                {material.name}
              </div>
              <div className="text-[11px] text-grafite mt-[3px] tracking-[0.02em]">
                {material.description}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
