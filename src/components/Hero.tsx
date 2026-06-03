"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedButton } from "@/components/AnimatedButton";
import AnimatedTextCycle from "@/components/ui/animated-text-cycle";

interface MaterialCardProps {
  name: string;
  subtitle: string;
  icon: React.ReactNode;
  index: number;
  active: boolean;
  onActivate: () => void;
  href?: string;
}

function MaterialListItem({ name, subtitle, icon, index, active, onActivate, href = "/materiais" }: MaterialCardProps) {
  return (
    <motion.a
      href={href}
      aria-label={`Ver ${name} — ${subtitle}`}
      initial={{ x: 12, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.35, delay: 0.3 + index * 0.08 }}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      className="group relative flex items-center gap-4 no-underline cursor-pointer"
      style={{
        padding: "11px 20px",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        borderLeft: active ? "2px solid #C94F2C" : "2px solid rgba(255,255,255,0.08)",
        background: active ? "rgba(201,79,44,0.06)" : "transparent",
        transition: "border-color 250ms, background 250ms",
      }}
    >
      <div className="text-terra flex-shrink-0">{icon}</div>
      <div className="flex flex-col">
        <span className="text-white text-[15px] font-semibold tracking-[-0.01em] group-hover:text-white/95 transition-colors">
          {name}
        </span>
        <span className="text-[12.5px] mt-0.5" style={{ color: "#B8B0A4" }}>
          {subtitle}
        </span>
      </div>
      <svg
        aria-hidden="true"
        className="ml-auto opacity-0 group-hover:opacity-60 transition-opacity flex-shrink-0"
        width="14" height="14" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round"
      >
        <path d="M4.5 2.5L8.5 6L4.5 9.5" />
      </svg>
    </motion.a>
  );
}

const heroLeftVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
      delay: i * 0.1,
    },
  }),
};

const MdfIcon = () => (
  <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
    <rect x="4" y="20" width="28" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="4" y="13" width="28" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="4" y="6" width="28" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <line x1="10" y1="6" x2="7" y2="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="32" y1="6" x2="29" y2="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="32" y1="25" x2="29" y2="28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const AcrilicoIcon = () => (
  <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
    <rect x="5" y="4" width="26" height="28" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <line x1="5" y1="10" x2="31" y2="10" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <line x1="9" y1="4" x2="9" y2="32" stroke="currentColor" strokeWidth="1" opacity="0.2" />
  </svg>
);

const TecidoIcon = () => (
  <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
    <rect x="3" y="3" width="30" height="30" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <line x1="3" y1="11" x2="33" y2="11" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <line x1="3" y1="19" x2="33" y2="19" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <line x1="3" y1="27" x2="33" y2="27" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <line x1="11" y1="3" x2="11" y2="33" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <line x1="19" y1="3" x2="19" y2="33" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <line x1="27" y1="3" x2="27" y2="33" stroke="currentColor" strokeWidth="1" opacity="0.5" />
  </svg>
);

const UvIcon = () => (
  <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
    <rect x="6" y="4" width="24" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <line x1="18" y1="14" x2="18" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="11" y1="14" x2="9" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="25" y1="14" x2="27" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="14" y1="14" x2="13" y2="22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
    <line x1="22" y1="14" x2="23" y2="22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
  </svg>
);

const CampanhaIcon = () => (
  <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
    <path d="M6 14l18-6v14L6 22v-8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M24 10l5-2v12l-5-2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <line x1="9" y1="22" x2="9" y2="29" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="13" y1="23" x2="13" y2="30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [activeMaterial, setActiveMaterial] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const show = () => setVideoLoaded(true);

    // If already ready (cached), show immediately
    if (video.readyState >= 3) {
      show();
      return;
    }

    video.addEventListener("playing", show);
    // Force play attempt
    video.play().catch(() => {});

    return () => video.removeEventListener("playing", show);
  }, []);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "#1C1A17",
        minHeight: "calc(100vh - 64px)",
      }}
    >
      {/* Fallback image — visible until video is ready */}
      <div
        className="absolute inset-0 z-0 transition-opacity duration-700"
        style={{
          opacity: videoLoaded ? 0 : 1,
          backgroundImage: "url(/background.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Video background */}
      <video
        ref={videoRef}
        src="/background.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/background.png"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-700"
        style={{ opacity: videoLoaded ? 1 : 0 }}
      />
      {/* Dark overlay for text readability — stronger on mobile */}
      <div
        className="absolute inset-0 z-10 pointer-events-none lg:hidden"
        style={{
          background:
            "linear-gradient(to bottom, rgba(18,16,14,0.88), rgba(18,16,14,0.65) 45%, rgba(18,16,14,0.92))",
        }}
      />
      <div
        className="absolute inset-0 z-10 pointer-events-none hidden lg:block"
        style={{
          background:
            "linear-gradient(to bottom, rgba(18,16,14,0.78), rgba(18,16,14,0.50) 45%, rgba(18,16,14,0.85))",
        }}
      />
      {/* Left-side vignette for desktop */}
      <div
        className="absolute inset-0 z-10 pointer-events-none hidden lg:block"
        style={{
          background:
            "linear-gradient(to right, rgba(18,16,14,0.7) 0%, rgba(18,16,14,0.25) 55%, transparent 80%)",
        }}
      />
      <div
        className="relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-end px-6 pb-16 pt-24 md:px-12 lg:px-12 lg:items-center"
        style={{ minHeight: "calc(100vh - 64px)" }}
      >
      {/* Left side */}
      <div className="flex flex-col">
        <motion.a
          href="/#campanha"
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="group inline-flex items-center gap-2 self-start rounded-full px-3.5 py-1.5 mb-5 no-underline"
          style={{
            background: "rgba(201,79,44,0.12)",
            border: "1px solid rgba(201,79,44,0.32)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-terra" />
          <span className="text-[12px] font-semibold tracking-[0.03em] text-terra">
            Eleições 2026 · Material de campanha + tráfego pago
          </span>
          <span className="text-terra/70 transition-transform group-hover:translate-x-0.5">→</span>
        </motion.a>
        <motion.h1
          custom={0}
          initial="hidden"
          animate="visible"
          variants={heroLeftVariants}
          className="relative"
          style={{
            fontSize: "clamp(38px, 4.5vw, 52px)",
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          <span style={{ color: "#F0ECE6" }}>
            Impressão personalizada
          </span>
          <br />
          <AnimatedTextCycle
            words={[
              "em MDF.",
              "em acrílico.",
              "em ACM.",
              "para sua loja.",
              "para presentear.",
              "sob medida.",
            ]}
            interval={3000}
            className="text-terra"
          />
        </motion.h1>

        <motion.p
          custom={1}
          initial="hidden"
          animate="visible"
          variants={heroLeftVariants}
          style={{
            color: "#D4CEC4",
            fontSize: "15px",
            fontWeight: 400,
            lineHeight: 1.7,
            marginTop: "20px",
            maxWidth: "420px",
          }}
        >
          Corte a laser, letreiros, placas, caixas, sublimação e comunicação
          visual. E para candidatos: material de campanha completo —
          santinhos, bandeiras, adesivos, camisas — junto com marketing
          digital e tráfego pago para conquistar votos dentro e fora das ruas.
        </motion.p>

        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={heroLeftVariants}
          className="flex flex-row flex-wrap items-center"
          style={{ marginTop: "36px", gap: "24px" }}
        >
          <Link href="/orcamento" className="no-underline">
            <AnimatedButton
              className="h-auto text-white rounded-full px-8 py-4 text-[15px] font-semibold shadow-lg shadow-terra/30 hover:shadow-terra/50 transition-shadow"
              style={{ background: "#C94F2C" }}
            >
              Pedir orçamento →
            </AnimatedButton>
          </Link>
          <a
            href="/portfolio"
            className="text-[14px] font-medium text-white/80 hover:text-terra no-underline inline-flex items-center gap-1.5 group transition-colors"
          >
            Ver portfólio
            <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </motion.div>
      </div>

      {/* Right side - Vertical list with left border accent */}
      <div
        className="flex flex-col rounded-2xl overflow-hidden [&>*:last-child]:border-b-0 lg:ml-auto lg:min-w-[300px]"
        style={{ background: "rgba(28,26,23,0.45)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.08)" }}
      >
        {[
          { name: "Campanha Política", subtitle: "Material + marketing digital", icon: <CampanhaIcon />, href: "/#campanha" },
          { name: "MDF", subtitle: "Corte e gravação a laser", icon: <MdfIcon /> },
          { name: "Acrílico", subtitle: "Transparente ou colorido", icon: <AcrilicoIcon /> },
          { name: "ACM & Lonas", subtitle: "Fachadas e placas", icon: <TecidoIcon /> },
          { name: "Sublimação", subtitle: "Canecas, azulejos e almofadas", icon: <UvIcon /> },
        ].map((item, i) => (
          <MaterialListItem
            key={item.name}
            name={item.name}
            subtitle={item.subtitle}
            icon={item.icon}
            index={i}
            active={activeMaterial === i}
            onActivate={() => setActiveMaterial(i)}
            href={item.href}
          />
        ))}
      </div>
      </div>
    </section>
  );
}
