"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedButton } from "@/components/AnimatedButton";

const socialLinks = [
  {
    href: "#",
    label: "Instagram",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "X",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "TikTok",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52V6.8a4.84 4.84 0 01-1-.11z" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "LinkedIn",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const navLinks = [
  { href: "#materiais", label: "Nosso Estúdio" },
  { href: "#produtos", label: "Serviços" },
  { href: "#como-funciona", label: "Suporte" },
  { href: "#", label: "Contato" },
];

export function Footer() {
  return (
    <footer className="bg-creme">
      {/* CTA Section */}
      <div className="px-6 md:px-12 pt-16 pb-12">
        <motion.div
          initial={{ y: 32, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          <div>
            <h2 className="text-[28px] md:text-[36px] font-semibold tracking-[-0.02em] text-carvao leading-tight">
              Pronto para transformar
              <br />
              ideias em realidade
            </h2>
            <div className="flex flex-row flex-wrap gap-3 mt-6">
              <AnimatedButton
                className="h-auto text-white rounded-full px-6 py-3 text-sm font-medium"
                style={{ background: "#C94F2C" }}
              >
                Iniciar projeto
              </AnimatedButton>
              <AnimatedButton
                variant="outline"
                className="h-auto rounded-full px-6 py-3 text-sm font-normal"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(0,0,0,0.15)",
                  color: "#1C1A17",
                }}
              >
                Ver catálogo
              </AnimatedButton>
            </div>
          </div>

          {/* Decorative card */}
          <div
            className="w-[180px] h-[160px] rounded-2xl flex-shrink-0 hidden md:flex items-center justify-center"
            style={{ background: "#F0ECE6" }}
          >
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <rect x="10" y="10" width="60" height="60" rx="8" stroke="#C94F2C" strokeWidth="1.5" opacity="0.3" />
              <rect x="20" y="20" width="40" height="40" rx="4" stroke="#C94F2C" strokeWidth="1" opacity="0.2" />
              <circle cx="40" cy="40" r="10" stroke="#C94F2C" strokeWidth="1.5" opacity="0.5" />
              <line x1="30" y1="30" x2="50" y2="50" stroke="#C94F2C" strokeWidth="1" opacity="0.3" />
              <line x1="50" y1="30" x2="30" y2="50" stroke="#C94F2C" strokeWidth="1" opacity="0.3" />
              <rect x="5" y="5" width="24" height="16" rx="3" fill="#E8C99A" opacity="0.6" />
              <rect x="52" y="58" width="20" height="14" rx="3" fill="#5A9AB8" opacity="0.4" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Links row */}
      <div className="px-6 md:px-12 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-black/[0.06]">
        <div>
          <p className="text-xs font-semibold text-carvao mb-3">
            Conecte-se conosco
          </p>
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-carvao/60 hover:text-carvao transition-colors no-underline"
                aria-label={link.label}
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>

        <nav className="flex flex-wrap gap-6 md:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-carvao/70 hover:text-carvao transition-colors no-underline font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Copyright bar */}
      <div className="px-6 md:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-3 border-t border-black/[0.06]">
        <p className="text-xs text-carvao/40">
          © 2025 Copyright Todos os direitos reservados
        </p>
        <Link
          href="#"
          className="text-xs text-carvao/40 hover:text-carvao/60 transition-colors no-underline"
        >
          Termos e Condições
        </Link>
      </div>
    </footer>
  );
}
