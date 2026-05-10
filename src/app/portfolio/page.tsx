import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfólio",
  description:
    "Veja projetos que já entregamos: placas, displays, brindes corporativos, letreiros, ecobags e muito mais.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfólio · Forma Prima",
    description:
      "Projetos personalizados em MDF, acrílico, tecido e UV realizados para nossos clientes.",
    url: "/portfolio",
  },
};

const categories = [
  "Todos",
  "MDF",
  "Acrílico",
  "Letreiros",
  "Placas",
  "Adesivos",
  "Sublimação",
];

const projects = [
  // MDF / corte a laser
  { title: "Quadrinho com Wi-Fi, Instagram e Pix", category: "MDF", image: "/portfolio/wifimdf.jpg" },
  { title: "Nome em MDF com relevo iluminado", category: "MDF", image: "/portfolio/Nome em MDF com relevo iluminado.jpg" },
  { title: "Caixa personalizada em MDF", category: "MDF", image: "/portfolio/Caixa personalizada MDF.jpg" },
  { title: "Tábua personalizada para presente", category: "MDF", image: "/portfolio/Tábua personalizada para presente MDF.jpg" },
  { title: "Porta copos gravados a laser", category: "MDF", image: "/portfolio/Porta copos gravados a laser.jpg" },
  { title: "Chaveiros personalizados em MDF", category: "MDF", image: "/portfolio/chaveiromdf.jpg" },
  { title: "Suporte para celular", category: "MDF", image: "/portfolio/Suporte para Celular MDF.jpg" },
  { title: "Suporte para notebook", category: "MDF", image: "/portfolio/Suporte para notebook MDF.jpg" },
  { title: "Mandala decorativa vazada", category: "MDF", image: "/portfolio/Mandala decorativa vazada em MDF.jpg" },
  { title: "Letras grandes decorativas", category: "MDF", image: "/portfolio/Letras grandes decorativas.jpeg" },
  { title: "Plaquinha com nome do pet", category: "MDF", image: "/portfolio/placapetmdf.jpg" },

  // Acrílico
  { title: "Chaveiros em acrílico", category: "Acrílico", image: "/portfolio/chaveiroacrilico.jpg" },
  { title: "Expositor de óculos para ótica", category: "Acrílico", color: "#2A3038", accent: "#7ABCD8" },
  { title: "Troféu corporativo em acrílico", category: "Acrílico", color: "#2A2E34", accent: "#90C8E0" },
  { title: "Letras em acrílico para loja", category: "Acrílico", color: "#263038", accent: "#88C0D8" },

  // Letreiros
  { title: "Letreiro para salão de beleza", category: "Letreiros", color: "#2C2822", accent: "#E06042" },
  { title: "Letreiro iluminado para consultório", category: "Letreiros", color: "#302822", accent: "#D85030" },
  { title: "Painel ripado para recepção", category: "Letreiros", color: "#342C22", accent: "#B88040" },
  { title: "Nome de família em MDF", category: "Letreiros", color: "#322A22", accent: "#C8A060" },

  // Placas
  { title: "Placa em ACM para fachada externa", category: "Placas", color: "#2A2E34", accent: "#90A8B8" },
  { title: "Placa ABC para formatura", category: "Placas", color: "#2C2A26", accent: "#D4B080" },
  { title: "Placas de promoção para loja", category: "Placas", color: "#302822", accent: "#E06042" },
  { title: "Mini placas com QR code", category: "Placas", color: "#2E2822", accent: "#C88050" },

  // Adesivos & Lonas
  { title: "Papel de parede personalizado", category: "Adesivos", color: "#2C2824", accent: "#B89878" },
  { title: "Adesivo perfurado para vitrine", category: "Adesivos", color: "#2A2622", accent: "#A88868" },
  { title: "Lona personalizada com ilhós", category: "Adesivos", color: "#302824", accent: "#C89070" },
  { title: "Luminária personalizada", category: "Adesivos", color: "#34281E", accent: "#F0A848" },

  // Sublimação
  { title: "Azulejo personalizado com foto", category: "Sublimação", color: "#2E2A24", accent: "#A08070" },
  { title: "Caneca personalizada", category: "Sublimação", color: "#2C2822", accent: "#B89080" },
  { title: "Almofada sublimada", category: "Sublimação", color: "#322A24", accent: "#C89880" },
];

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="bg-carvao min-h-screen">
        {/* Hero */}
        <section className="px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-5xl mx-auto">
            <p className="text-[10.5px] font-medium tracking-[0.18em] uppercase text-terra mb-4">
              Portfólio
            </p>
            <h1 className="text-[36px] md:text-[48px] font-bold tracking-[-0.02em] text-branco leading-tight">
              Nossos trabalhos
            </h1>
            <p className="text-sm text-grafite mt-4 max-w-lg leading-relaxed">
              Cada projeto é único. Veja alguns dos trabalhos que fizemos para nossos clientes.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="px-6 md:px-12 pb-4">
          <div className="max-w-5xl mx-auto flex gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-xs font-medium border cursor-pointer whitespace-nowrap transition-colors ${
                  cat === "Todos"
                    ? "bg-terra text-white border-terra"
                    : "bg-transparent text-grafite border-white/10 hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Grid */}
        <section className="px-6 md:px-12 py-8 pb-20">
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden cursor-pointer group relative"
                style={{ background: project.image ? "#1E1A16" : project.color, minHeight: "280px" }}
              >
                {/* Image or placeholder */}
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-16 h-16 rounded-xl opacity-10 group-hover:opacity-20 transition-opacity"
                      style={{ background: project.accent }}
                    />
                  </div>
                )}
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                {/* Label */}
                <div className="absolute top-4 left-5 z-10">
                  <span className="text-[10px] font-medium tracking-[0.12em] uppercase text-white/60">
                    {project.category}
                  </span>
                </div>
                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <h3 className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                </div>
                {/* Arrow */}
                <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M2 10L10 2M10 2H4M10 2v6" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Load more */}
          <div className="max-w-5xl mx-auto mt-10 text-center">
            <button className="rounded-full px-7 py-3 text-sm font-normal border border-white/15 bg-transparent text-grafite cursor-pointer hover:text-branco hover:border-white/30 transition-colors">
              Carregar mais projetos
            </button>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 md:px-12 pb-20">
          <div className="max-w-5xl mx-auto bg-terra rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div>
              <h2 className="text-[22px] font-semibold text-white tracking-[-0.01em]">
                Quer algo parecido?
              </h2>
              <p className="text-[13px] text-white/70 mt-1">
                Envie sua ideia e receba um orçamento em até 2 horas.
              </p>
            </div>
            <Link
              href="/orcamento"
              className="rounded-full px-7 py-3.5 text-sm font-medium bg-white text-terra no-underline whitespace-nowrap flex-shrink-0"
            >
              Simular orçamento
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
