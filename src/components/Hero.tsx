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
    <motion.div
      initial={{ scale: 0.96, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.3 + index * 0.07 }}
      className="rounded-[14px] flex flex-col gap-3 transition-colors duration-200 cursor-pointer"
      style={{
        background: "#252220",
        border: "1px solid rgba(255,255,255,0.07)",
        padding: "24px 20px",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(201,79,44,0.35)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
      }}
    >
      {icon}
      <div className="text-white" style={{ fontSize: "15px", fontWeight: 500 }}>
        {name}
      </div>
      <div style={{ color: "#8A8276", fontSize: "12px", fontWeight: 300 }}>
        {subtitle}
      </div>
    </motion.div>
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
    <rect x="4" y="20" width="28" height="5" rx="1" stroke="white" strokeWidth="1.5" />
    <rect x="4" y="13" width="28" height="5" rx="1" stroke="white" strokeWidth="1.5" />
    <rect x="4" y="6" width="28" height="5" rx="1" stroke="white" strokeWidth="1.5" />
    <line x1="10" y1="6" x2="7" y2="3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="32" y1="6" x2="29" y2="3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="32" y1="25" x2="29" y2="28" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const AcrilicoIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="5" y="4" width="26" height="28" rx="2" stroke="white" strokeWidth="1.5" />
    <line x1="5" y1="10" x2="31" y2="10" stroke="white" strokeWidth="1" opacity="0.3" />
    <line x1="9" y1="4" x2="9" y2="32" stroke="white" strokeWidth="1" opacity="0.2" />
  </svg>
);

const TecidoIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="3" y="3" width="30" height="30" rx="2" stroke="white" strokeWidth="1.5" />
    <line x1="3" y1="11" x2="33" y2="11" stroke="white" strokeWidth="1" opacity="0.5" />
    <line x1="3" y1="19" x2="33" y2="19" stroke="white" strokeWidth="1" opacity="0.5" />
    <line x1="3" y1="27" x2="33" y2="27" stroke="white" strokeWidth="1" opacity="0.5" />
    <line x1="11" y1="3" x2="11" y2="33" stroke="white" strokeWidth="1" opacity="0.5" />
    <line x1="19" y1="3" x2="19" y2="33" stroke="white" strokeWidth="1" opacity="0.5" />
    <line x1="27" y1="3" x2="27" y2="33" stroke="white" strokeWidth="1" opacity="0.5" />
  </svg>
);

const UvIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="6" y="4" width="24" height="10" rx="2" stroke="white" strokeWidth="1.5" />
    <line x1="18" y1="14" x2="18" y2="22" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="11" y1="14" x2="9" y2="22" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="25" y1="14" x2="27" y2="22" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="14" y1="14" x2="13" y2="22" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
    <line x1="22" y1="14" x2="23" y2="22" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
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
      <div className="absolute inset-0 opacity-40">
        <SmokeBackground smokeColor="#C94F2C" />
      </div>
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(28,26,23,0.6), rgba(28,26,23,0.3) 40%, rgba(28,26,23,0.7))",
        }}
      />
      <div
        className="relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        style={{ padding: "80px 48px", minHeight: "calc(100vh - 64px)" }}
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
              "em tecido.",
              "em UV.",
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
            color: "#8A8276",
            fontSize: "15px",
            fontWeight: 300,
            lineHeight: 1.7,
            marginTop: "20px",
            maxWidth: "420px",
          }}
        >
          Impressão personalizada para empresas, eventos e
          presentear. MDF, acrílico, tecido, UV e muito mais.
        </motion.p>

        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={heroLeftVariants}
          className="flex flex-row flex-wrap"
          style={{ marginTop: "32px", gap: "12px" }}
        >
          <AnimatedButton
            className="h-auto text-white rounded-full px-7 py-3.5 text-sm font-medium"
            style={{ background: "#C94F2C" }}
          >
            Pedir orçamento
          </AnimatedButton>
          <AnimatedButton
            variant="outline"
            className="h-auto rounded-full px-7 py-3.5 text-sm font-normal"
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#F0ECE6",
            }}
          >
            Ver portfólio &nbsp;→
          </AnimatedButton>
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
          name="Tecido"
          subtitle="Sublimação"
          icon={<TecidoIcon />}
          index={2}
        />
        <MaterialCard
          name="UV"
          subtitle="Alta definição"
          icon={<UvIcon />}
          index={3}
        />
      </div>
      </div>
    </section>
  );
}
