"use client";

import Image from "next/image";
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
  image?: string;
  imageAlt?: string;
  index: number;
  span?: string;
}

function CollectionCard({
  label,
  title,
  subtitle,
  bgColor,
  image,
  imageAlt,
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
      {image && (
        <>
          <Image
            src={image}
            alt={imageAlt ?? title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(15,13,10,0.85) 0%, rgba(15,13,10,0.55) 45%, rgba(15,13,10,0.35) 100%)",
            }}
          />
        </>
      )}
      <div className="absolute top-4 left-5 z-10">
        <span className="text-[10px] font-medium tracking-[0.12em] uppercase text-white/80">
          {label}
        </span>
      </div>
      <div className="relative z-10 flex flex-col justify-end h-full p-5 pt-12">
        <h3 className="text-xl font-semibold text-white leading-tight drop-shadow">
          {title}
        </h3>
        <p className="text-xs text-white/80 mt-1.5 drop-shadow">{subtitle}</p>
      </div>
      <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <svg
          aria-hidden="true"
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
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-terra">
            Impressão & corte a laser
          </span>
          <h2 className="mt-3 text-[28px] md:text-[32px] font-semibold tracking-[-0.02em] text-carvao leading-tight">
            Coleções mais
            <br />
            pedidas
          </h2>
        </div>
        <p className="text-sm text-grafite max-w-[280px] leading-relaxed">
          Descubra as soluções mais solicitadas, com qualidade profissional em
          cada detalhe.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
        <CollectionCard
          label="Mais pedido"
          title="Quadrinhos Wi-Fi, Insta & Pix"
          subtitle="MDF · Corte e gravação a laser"
          bgColor="#3A3228"
          image="/portfolio/wifimdf.jpg"
          imageAlt="Quadrinho de MDF com QR Code de Wi-Fi"
          span="md:row-span-2"
          index={0}
        />

        <CollectionCard
          label="Empresas"
          title="Letreiros & fachadas"
          subtitle="Salão, loja, consultório · MDF e ACM"
          bgColor="#2A3038"
          image="/portfolio/Nome em MDF com relevo iluminado.jpg"
          imageAlt="Letreiro de MDF com relevo iluminado"
          index={1}
        />

        <CollectionCard
          label="Presentes"
          title="Caixas & tábuas"
          subtitle="MDF gravado · Lembranças e presentes"
          bgColor="#38302A"
          image="/portfolio/Caixa personalizada MDF.jpg"
          imageAlt="Caixa personalizada gravada em MDF"
          index={2}
        />

        <CollectionCard
          label="Acrílico"
          title="Expositores & troféus"
          subtitle="Óticas, lojas e homenagens"
          bgColor="#2E2A24"
          image="/portfolio/Letras grandes decorativas.jpeg"
          imageAlt="Letras decorativas em acrílico"
          index={3}
        />

        <CollectionCard
          label="Sublimação"
          title="Canecas, azulejos & almofadas"
          subtitle="Foto personalizada em alta definição"
          bgColor="#34302C"
          image="/portfolio/Porta copos gravados a laser.jpg"
          imageAlt="Porta-copos gravados a laser"
          index={4}
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
