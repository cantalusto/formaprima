"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedButton } from "@/components/AnimatedButton";

const cardVariants = {
  hidden: { y: 28, opacity: 0 },
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

const TrafegoIcon = () => (
  <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
    <path d="M3 18l6-7 5 4 8-10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 5h5v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 23h22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.4" />
  </svg>
);

const RedesIcon = () => (
  <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
    <circle cx="7" cy="9" r="3" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="21" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="20" cy="20" r="3" stroke="currentColor" strokeWidth="1.8" />
    <path d="M9.5 10.5l8 8M9.3 8l9-1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const CriativosIcon = () => (
  <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
    <path d="M14 3l2.6 6.4L23 12l-6.4 2.6L14 21l-2.6-6.4L5 12l6.4-2.6L14 3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M22 19l.9 2.1L25 22l-2.1.9L22 25l-.9-2.1L19 22l2.1-.9L22 19z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
  </svg>
);

const SiteIcon = () => (
  <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
    <rect x="4" y="5" width="20" height="15" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M4 9h20" stroke="currentColor" strokeWidth="1.8" />
    <path d="M10 23h8M14 20v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="6.8" cy="7" r="0.6" fill="currentColor" />
    <circle cx="9" cy="7" r="0.6" fill="currentColor" />
  </svg>
);

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: "Tráfego Pago",
    description:
      "Anúncios no Instagram, Facebook e Google para alcançar milhares de eleitores na sua cidade — com segmentação por bairro, idade e interesse.",
    icon: <TrafegoIcon />,
  },
  {
    title: "Gestão de Redes Sociais",
    description:
      "Postagens diárias, stories e relacionamento com o eleitor. Sua candidatura ativa e presente todos os dias até a eleição.",
    icon: <RedesIcon />,
  },
  {
    title: "Criativos & Design",
    description:
      "Artes, vídeos, cards e jingles profissionais que comunicam suas propostas com a sua identidade visual de campanha.",
    icon: <CriativosIcon />,
  },
  {
    title: "Landing Page & Site",
    description:
      "Página oficial do candidato para apresentar propostas, captar apoiadores, doações e contatos de quem quer ajudar.",
    icon: <SiteIcon />,
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={cardVariants}
      className="group relative flex flex-col rounded-2xl border border-white/[0.07] bg-carvao p-6 transition-colors hover:border-terra/40"
    >
      <div
        className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-terra"
        style={{ background: "rgba(201,79,44,0.12)" }}
      >
        {service.icon}
      </div>
      <h3 className="text-[17px] font-semibold leading-tight text-branco">
        {service.title}
      </h3>
      <p className="mt-2 text-[13px] leading-relaxed text-grafite">
        {service.description}
      </p>
    </motion.div>
  );
}

export function MarketingDigital() {
  return (
    <section id="marketing" className="bg-carvao2 px-6 py-[72px] md:px-12">
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end"
      >
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-terra">
            Marketing digital de campanha
          </span>
          <h2 className="mt-3 text-[28px] font-semibold leading-[1.05] tracking-[-0.02em] text-branco md:text-[36px]">
            Sua campanha também
            <br />
            vence na <span className="text-terra">internet.</span>
          </h2>
        </div>
        <p className="max-w-[340px] text-sm leading-relaxed text-grafite">
          Não basta estar nas ruas — é preciso estar na tela do eleitor. Unimos
          o material impresso ao digital para multiplicar o alcance da sua
          candidatura com estratégia e dados.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>

      {/* Stats / trust row */}
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
        className="mt-10 flex flex-col items-start gap-6 rounded-[20px] border border-white/[0.07] bg-carvao p-7 md:flex-row md:items-center md:justify-between md:px-10"
      >
        <div className="flex flex-wrap gap-8">
          {[
            { value: "+1M", label: "Pessoas alcançadas" },
            { value: "360°", label: "Impresso + digital" },
            { value: "24h", label: "Orçamento rápido" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-[26px] font-semibold leading-none text-terra">
                {stat.value}
              </p>
              <p className="mt-1.5 text-[12.5px] text-grafite">{stat.label}</p>
            </div>
          ))}
        </div>
        <Link href="/orcamento" className="flex-shrink-0 no-underline">
          <AnimatedButton className="h-auto whitespace-nowrap rounded-full bg-terra px-7 py-3.5 text-[12.5px] font-medium tracking-[0.05em] text-white hover:opacity-90">
            Quero impulsionar minha campanha
          </AnimatedButton>
        </Link>
      </motion.div>
    </section>
  );
}
