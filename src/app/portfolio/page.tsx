import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import Link from "next/link";

const categories = ["Todos", "MDF", "Acrílico", "Tecido", "UV"];

const projects = [
  { title: "Placa decorativa personalizada", category: "MDF", color: "#3A3228", accent: "#E8C99A" },
  { title: "Display corporativo", category: "Acrílico", color: "#2A3038", accent: "#5A9AB8" },
  { title: "Bandeira sublimada", category: "Tecido", color: "#2E2A24", accent: "#A08070" },
  { title: "Brinde evento XPTO", category: "UV", color: "#34302C", accent: "#C94F2C" },
  { title: "Letreiro recepção", category: "Acrílico", color: "#283038", accent: "#7ABCD8" },
  { title: "Kit presente aniversário", category: "MDF", color: "#382E24", accent: "#D4B880" },
  { title: "Ecobag promocional", category: "Tecido", color: "#2C2824", accent: "#B89880" },
  { title: "Placa endereço residencial", category: "UV", color: "#302828", accent: "#E06042" },
  { title: "Troféu corporativo", category: "Acrílico", color: "#2A2E34", accent: "#90C8E0" },
  { title: "Quadro MDF gravado", category: "MDF", color: "#342E26", accent: "#C8A868" },
  { title: "Camiseta time empresa", category: "Tecido", color: "#2A2622", accent: "#C09070" },
  { title: "Impressão em madeira", category: "UV", color: "#2E2A26", accent: "#D06040" },
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
                style={{ background: project.color, minHeight: "240px" }}
              >
                {/* Placeholder visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-16 h-16 rounded-xl opacity-10 group-hover:opacity-20 transition-opacity"
                    style={{ background: project.accent }}
                  />
                </div>
                {/* Label */}
                <div className="absolute top-4 left-5">
                  <span className="text-[10px] font-medium tracking-[0.12em] uppercase text-white/40">
                    {project.category}
                  </span>
                </div>
                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                </div>
                {/* Arrow */}
                <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
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
