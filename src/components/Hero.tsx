"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const ORANGE = "#E8602C";
const CREME = "#F5F1EC";

const EASE = [0.2, 0.75, 0.25, 1] as const;

const fadeUp = {
  hidden: { y: 24, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: EASE, delay: 0.06 + i * 0.12 },
  }),
};

const materials = [
  {
    num: "01",
    name: "Campanha Política",
    sub: "Material + tráfego pago",
    href: "/#campanha",
  },
  {
    num: "02",
    name: "MDF",
    sub: "Corte e gravação a laser",
    href: "/materiais",
  },
  {
    num: "03",
    name: "Acrílico",
    sub: "Transparente ou colorido",
    href: "/materiais",
  },
  {
    num: "04",
    name: "ACM & Lonas",
    sub: "Fachadas e placas",
    href: "/materiais",
  },
  {
    num: "05",
    name: "Sublimação",
    sub: "Canecas, azulejos e mais",
    href: "/materiais",
  },
];

const trust = [
  "Arte inclusa",
  "Entrega rápida",
  "Atendimento direto com o impressor",
];

export function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [active, setActive] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const show = () => setVideoLoaded(true);

    if (video.readyState >= 3) {
      show();
      return;
    }

    video.addEventListener("playing", show);
    video.play().catch(() => {});

    return () => video.removeEventListener("playing", show);
  }, []);

  return (
    <section
      className="relative flex flex-col overflow-hidden -mt-16"
      style={{ background: "#0B0A09", minHeight: "100vh" }}
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

      {/* Horizontal gradient — dark on the left for legibility, video breathes on the right */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(96deg, rgba(11,10,9,0.96) 0%, rgba(11,10,9,0.86) 26%, rgba(11,10,9,0.45) 58%, rgba(11,10,9,0.18) 100%)",
        }}
      />
      {/* Vertical gradient — anchors top nav and bottom strip */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(11,10,9,0.75) 0%, rgba(11,10,9,0.10) 16%, rgba(11,10,9,0) 42%, rgba(11,10,9,0.55) 82%, rgba(11,10,9,0.92) 100%)",
        }}
      />
      {/* CONTENT */}
      <div className="relative z-[5] flex-1 flex items-center px-6 md:px-12 lg:px-16 pt-16 pb-12">
        <div className="max-w-[680px]">
          {/* Eyebrow */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <Link
              href="/#campanha"
              className="group inline-flex items-center gap-3 no-underline"
              style={{
                padding: "9px 9px 9px 16px",
                border: "1px solid rgba(232,96,44,0.35)",
                background: "rgba(232,96,44,0.08)",
                borderRadius: "100px",
              }}
            >
              <span
                className="flex-shrink-0"
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: ORANGE,
                  animation: "pulse-dot 1.8s ease-in-out infinite",
                }}
              />
              <span
                className="text-[12.5px] md:text-[13.5px] font-semibold tracking-[0.02em] leading-[1.35]"
                style={{ color: "#F6C9B4" }}
              >
                Eleições 2026 · Material de campanha + tráfego pago
              </span>
              <span
                className="inline-flex items-center justify-center flex-shrink-0 transition-transform group-hover:translate-x-0.5"
                style={{
                  width: "26px",
                  height: "26px",
                  borderRadius: "50%",
                  background: "rgba(232,96,44,0.18)",
                  color: ORANGE,
                  fontSize: "14px",
                }}
              >
                →
              </span>
            </Link>
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 md:mt-7 text-[clamp(34px,8.6vw,48px)] md:text-[clamp(46px,6vw,84px)]"
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontWeight: 800,
              lineHeight: 0.99,
              letterSpacing: "-0.025em",
              color: CREME,
              textWrap: "balance",
            }}
          >
            Impressão que <span style={{ color: ORANGE }}>dá forma</span> à sua
            marca.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-5 md:mt-6 max-w-full md:max-w-[540px] text-[16px] md:text-[18px]"
            style={{
              lineHeight: 1.6,
              color: "rgba(245,241,236,0.74)",
              textWrap: "pretty",
            }}
          >
            Corte a laser, ACM, letreiros, sublimação e comunicação visual. Para
            campanhas: material completo + marketing digital e{" "}
            <span style={{ color: CREME, fontWeight: 600 }}>tráfego pago</span>{" "}
            para conquistar votos dentro e fora das ruas.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-col md:flex-row md:flex-wrap gap-3 md:gap-3.5 mt-7 md:mt-9"
          >
            <Link
              href="/orcamento"
              className="inline-flex items-center justify-center gap-2.5 no-underline transition-transform hover:-translate-y-0.5 w-full md:w-auto"
              style={{
                background: ORANGE,
                color: "#180C06",
                fontWeight: 700,
                fontSize: "16px",
                padding: "17px 28px",
                borderRadius: "14px",
                boxShadow: "0 14px 34px -10px rgba(232,96,44,0.7)",
              }}
            >
              Pedir orçamento <span style={{ fontSize: "17px" }}>→</span>
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2.5 no-underline transition-colors w-full md:w-auto"
              style={{
                color: CREME,
                fontWeight: 600,
                fontSize: "16px",
                padding: "17px 26px",
                borderRadius: "14px",
                border: "1px solid rgba(245,241,236,0.22)",
                background: "rgba(245,241,236,0.03)",
              }}
            >
              Ver portfólio <span style={{ fontSize: "17px" }}>→</span>
            </Link>
          </motion.div>

          {/* Value props */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-wrap items-center gap-x-5 gap-y-2.5 mt-7"
            style={{
              fontSize: "13.5px",
              fontWeight: 500,
              color: "rgba(245,241,236,0.5)",
            }}
          >
            {trust.map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <span
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    background: ORANGE,
                  }}
                />
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* MATERIALS STRIP */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.66 }}
        className="fp-strip relative z-[5] flex items-stretch overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none"
        style={{
          borderTop: "1px solid rgba(245,241,236,0.1)",
          background: "rgba(12,11,10,0.55)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        {materials.map((m, i) => {
          const isActive = i === active;
          return (
            <Link
              key={m.num}
              href={m.href}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className="grow-0 shrink-0 basis-auto min-w-[168px] snap-start md:grow md:shrink md:basis-0 md:min-w-0 md:snap-align-none flex gap-3.5 items-start no-underline"
              style={{
                padding: "22px clamp(16px,1.8vw,26px)",
                borderLeft:
                  i === 0 ? "none" : "1px solid rgba(245,241,236,0.08)",
                borderTop: isActive
                  ? `2px solid ${ORANGE}`
                  : "2px solid transparent",
                background: isActive
                  ? "linear-gradient(180deg, rgba(232,96,44,0.16), rgba(232,96,44,0))"
                  : "transparent",
                transition: "background .35s ease, border-color .35s ease",
              }}
            >
              <span
                className="flex-shrink-0"
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  marginTop: "3px",
                  color: isActive ? ORANGE : "rgba(232,96,44,0.5)",
                  transition: "color .35s ease",
                }}
              >
                {m.num}
              </span>
              <div className="flex flex-col gap-[3px] min-w-0">
                <div
                  style={{
                    fontFamily: "var(--font-display), sans-serif",
                    fontSize: "17px",
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                    color: isActive ? CREME : "rgba(245,241,236,0.82)",
                    transition: "color .35s ease",
                  }}
                >
                  {m.name}
                </div>
                <div
                  className="text-[12.5px] font-medium whitespace-nowrap overflow-hidden text-ellipsis"
                  style={{ color: "rgba(245,241,236,0.48)" }}
                >
                  {m.sub}
                </div>
              </div>
            </Link>
          );
        })}
      </motion.div>
    </section>
  );
}
