"use client";

import { motion } from "framer-motion";

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

interface CollectionCardProps {
  label: string;
  title: string;
  subtitle: string;
  bgColor: string;
  icon: React.ReactNode;
  index: number;
  span?: string;
}

function CollectionCard({
  label,
  title,
  subtitle,
  bgColor,
  icon,
  index,
  span,
}: CollectionCardProps) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={itemVariants}
      className={`rounded-2xl overflow-hidden cursor-pointer group relative ${span || ""}`}
      style={{ background: bgColor, minHeight: "260px" }}
    >
      <div className="absolute top-4 left-5">
        <span className="text-[10px] font-medium tracking-[0.12em] uppercase text-white/50">
          {label}
        </span>
      </div>
      <div className="flex flex-col justify-end h-full p-5 pt-12">
        <div className="mb-4 opacity-60 group-hover:opacity-80 transition-opacity">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white leading-tight">
          {title}
        </h3>
        <p className="text-xs text-white/50 mt-1.5">{subtitle}</p>
      </div>
      <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path d="M2 10L10 2M10 2H4M10 2v6" />
        </svg>
      </div>
    </motion.div>
  );
}

export function Collections() {
  return (
    <section id="portfolio" className="bg-creme py-[72px] px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <h2 className="text-[28px] md:text-[32px] font-semibold tracking-[-0.02em] text-carvao leading-tight">
          Coleções mais
          <br />
          pedidas
        </h2>
        <p className="text-sm text-grafite max-w-[280px] leading-relaxed">
          Descubra as soluções mais solicitadas, com qualidade profissional em
          cada detalhe.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {/* Card 1 - Placas personalizadas (large) */}
        <CollectionCard
          label="Presentes"
          title="Placas personalizadas"
          subtitle="MDF · Corte e gravação laser"
          bgColor="#3A3228"
          span="md:row-span-2"
          index={0}
          icon={
            <svg width="64" height="48" viewBox="0 0 64 48" fill="none">
              <rect
                x="4"
                y="4"
                width="56"
                height="40"
                rx="4"
                stroke="white"
                strokeWidth="1.2"
                opacity="0.6"
              />
              <rect
                x="12"
                y="12"
                width="40"
                height="24"
                rx="2"
                fill="white"
                opacity="0.08"
              />
              <text
                x="32"
                y="28"
                textAnchor="middle"
                fontFamily="inherit"
                fontSize="7"
                fontWeight="500"
                fill="white"
                opacity="0.5"
                letterSpacing="2"
              >
                FÓRMULA PRIMA
              </text>
            </svg>
          }
        />

        {/* Card 2 - Acrílico corporativo */}
        <CollectionCard
          label="Corporativo"
          title="Acrílico corporativo"
          subtitle="Transparente ou colorido"
          bgColor="#2A3038"
          index={1}
          icon={
            <svg width="48" height="36" viewBox="0 0 48 36" fill="none">
              <rect
                x="3"
                y="3"
                width="42"
                height="30"
                rx="3"
                stroke="white"
                strokeWidth="1.2"
                opacity="0.5"
              />
              <line
                x1="3"
                y1="12"
                x2="45"
                y2="12"
                stroke="white"
                strokeWidth="0.8"
                opacity="0.2"
              />
              <line
                x1="15"
                y1="3"
                x2="15"
                y2="33"
                stroke="white"
                strokeWidth="0.8"
                opacity="0.15"
              />
            </svg>
          }
        />

        {/* Card 3 - Brindes promocionais */}
        <CollectionCard
          label="Eventos"
          title="Brindes promocionais"
          subtitle="Impressão UV · Alta definição"
          bgColor="#38302A"
          index={2}
          icon={
            <svg width="48" height="36" viewBox="0 0 48 36" fill="none">
              <rect
                x="8"
                y="2"
                width="32"
                height="12"
                rx="2"
                stroke="white"
                strokeWidth="1.2"
                opacity="0.5"
              />
              <line
                x1="24"
                y1="14"
                x2="24"
                y2="24"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                opacity="0.5"
              />
              <line
                x1="16"
                y1="14"
                x2="13"
                y2="24"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                opacity="0.5"
              />
              <line
                x1="32"
                y1="14"
                x2="35"
                y2="24"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
          }
        />

        {/* Card 4 - Sublimação em tecido */}
        <CollectionCard
          label="Decoração"
          title="Sublimação em tecido"
          subtitle="Bandeiras · Almofadas · Ecobags"
          bgColor="#2E2A24"
          index={3}
          icon={
            <svg width="48" height="36" viewBox="0 0 48 36" fill="none">
              <rect
                x="3"
                y="3"
                width="42"
                height="30"
                rx="2"
                stroke="white"
                strokeWidth="1.2"
                opacity="0.5"
              />
              <line x1="3" y1="12" x2="45" y2="12" stroke="white" strokeWidth="0.8" opacity="0.3" />
              <line x1="3" y1="21" x2="45" y2="21" stroke="white" strokeWidth="0.8" opacity="0.3" />
              <line x1="17" y1="3" x2="17" y2="33" stroke="white" strokeWidth="0.8" opacity="0.3" />
              <line x1="31" y1="3" x2="31" y2="33" stroke="white" strokeWidth="0.8" opacity="0.3" />
            </svg>
          }
        />

        {/* Card 5 - Tumblers */}
        <CollectionCard
          label="Produtos"
          title="Tumblers"
          subtitle="Aço inox · Parede dupla"
          bgColor="#34302C"
          index={4}
          icon={
            <svg width="32" height="48" viewBox="0 0 32 48" fill="none">
              <rect
                x="4"
                y="4"
                width="24"
                height="40"
                rx="4"
                stroke="white"
                strokeWidth="1.2"
                opacity="0.5"
              />
              <line x1="4" y1="12" x2="28" y2="12" stroke="white" strokeWidth="0.8" opacity="0.3" />
              <rect
                x="8"
                y="16"
                width="16"
                height="8"
                rx="1"
                fill="white"
                opacity="0.06"
              />
            </svg>
          }
        />
      </div>

      {/* Units produced bar */}
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        className="mt-6 flex items-center gap-4"
      >
        <span className="text-xs text-grafite font-medium tracking-wide">
          Unidades produzidas
        </span>
        <div className="flex -space-x-1.5">
          {["#C94F2C", "#E8C99A", "#5A9AB8"].map((color) => (
            <div
              key={color}
              className="w-6 h-6 rounded-full border-2 border-creme"
              style={{ background: color }}
            />
          ))}
        </div>
        <span className="text-xs font-semibold text-carvao">600+</span>
      </motion.div>
    </section>
  );
}
