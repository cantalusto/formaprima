"use client";

import { motion } from "framer-motion";
import { AnimatedButton } from "@/components/AnimatedButton";
import { SmokeBackground } from "@/components/ui/spooky-smoke-animation";
import AnimatedTextCycle from "@/components/ui/animated-text-cycle";

interface MaterialCardProps {
  name: string;
  subtitle: string;
  icon: React.ReactNode;
  index: number;
}

function MaterialCard({ name, subtitle, icon, index }: MaterialCardProps) {
  return (
    <motion.a
      href="/materiais"
      initial={{ scale: 0.96, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.3 + index * 0.07 }}
      whileHover={{ y: -4 }}
      className="group relative rounded-[16px] flex flex-col gap-3 cursor-pointer no-underline overflow-hidden"
      style={{
        background:
          "linear-gradient(155deg, rgba(46,40,36,0.95) 0%, rgba(30,26,22,0.95) 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
        padding: "26px 22px",
        transition: "border-color 200ms, box-shadow 200ms",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(201,79,44,0.5)";
        e.currentTarget.style.boxShadow =
          "0 8px 24px rgba(201,79,44,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,79,44,0.25), transparent 70%)",
        }}
      />
      <div className="text-terra scale-125 origin-left mb-1">{icon}</div>
      <div
        className="text-white"
        style={{ fontSize: "16px", fontWeight: 600, letterSpacing: "-0.01em" }}
      >
        {name}
      </div>
      <div style={{ color: "#B8B0A4", fontSize: "12.5px", fontWeight: 400 }}>
        {subtitle}
      </div>
      {/* Arrow indicator */}
      <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M2 10L10 2M10 2H4M10 2v6" />
        </svg>
      </div>
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
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="4" y="20" width="28" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="4" y="13" width="28" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="4" y="6" width="28" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <line x1="10" y1="6" x2="7" y2="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="32" y1="6" x2="29" y2="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="32" y1="25" x2="29" y2="28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const AcrilicoIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="5" y="4" width="26" height="28" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <line x1="5" y1="10" x2="31" y2="10" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <line x1="9" y1="4" x2="9" y2="32" stroke="currentColor" strokeWidth="1" opacity="0.2" />
  </svg>
);

const TecidoIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
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
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="6" y="4" width="24" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <line x1="18" y1="14" x2="18" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="11" y1="14" x2="9" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="25" y1="14" x2="27" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="14" y1="14" x2="13" y2="22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
    <line x1="22" y1="14" x2="23" y2="22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
  </svg>
);

export function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "#1C1A17",
        minHeight: "calc(100vh - 64px)",
      }}
    >
      <div className="absolute inset-0 opacity-30">
        <SmokeBackground smokeColor="#C94F2C" />
      </div>
      {/* Stronger base overlay for readability */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(18,16,14,0.82), rgba(18,16,14,0.55) 45%, rgba(18,16,14,0.88))",
        }}
      />
      {/* Left-side vignette to boost text contrast */}
      <div
        className="absolute inset-0 z-10 pointer-events-none hidden lg:block"
        style={{
          background:
            "linear-gradient(to right, rgba(18,16,14,0.7) 0%, rgba(18,16,14,0.25) 55%, transparent 80%)",
        }}
      />
      <div
        className="relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center px-6 py-16 md:px-12 lg:px-12"
        style={{ minHeight: "calc(100vh - 64px)" }}
      >
      {/* Left side */}
      <div className="flex flex-col">
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
          Corte a laser, letreiros, placas, caixas, sublimação e
          comunicação visual. Para sua loja, seu evento e quem você ama.
        </motion.p>

        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={heroLeftVariants}
          className="flex flex-row flex-wrap items-center"
          style={{ marginTop: "36px", gap: "24px" }}
        >
          <AnimatedButton
            className="h-auto text-white rounded-full px-8 py-4 text-[15px] font-semibold shadow-lg shadow-terra/30 hover:shadow-terra/50 transition-shadow"
            style={{ background: "#C94F2C" }}
          >
            Pedir orçamento →
          </AnimatedButton>
          <a
            href="/portfolio"
            className="text-[14px] font-medium text-white/80 hover:text-terra no-underline inline-flex items-center gap-1.5 group transition-colors"
          >
            Ver portfólio
            <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </motion.div>
      </div>

      {/* Right side - 2x2 Cards */}
      <div className="grid grid-cols-2" style={{ gap: "12px" }}>
        <MaterialCard
          name="MDF"
          subtitle="Corte e gravação"
          icon={<MdfIcon />}
          index={0}
        />
        <MaterialCard
          name="Acrílico"
          subtitle="Transparente ou colorido"
          icon={<AcrilicoIcon />}
          index={1}
        />
        <MaterialCard
          name="ACM & Lonas"
          subtitle="Fachadas e placas"
          icon={<TecidoIcon />}
          index={2}
        />
        <MaterialCard
          name="Sublimação"
          subtitle="Canecas, azulejos"
          icon={<UvIcon />}
          index={3}
        />
      </div>
      </div>
    </section>
  );
}
