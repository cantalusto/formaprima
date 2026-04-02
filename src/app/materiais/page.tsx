import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import Link from "next/link";

const materials = [
  {
    name: "MDF",
    tagline: "Corte e gravação a laser",
    description: "Ideal para placas decorativas, quadros personalizados, letreiros e presentes criativos. Disponível em diversas espessuras.",
    specs: ["Espessuras: 3mm, 6mm, 9mm", "Corte a laser de precisão", "Gravação vetorial e raster", "Acabamento natural ou pintado"],
    bgColor: "#E8C99A",
    textColor: "#6A4820",
  },
  {
    name: "Acrílico",
    tagline: "Transparente ou colorido",
    description: "Perfeito para displays corporativos, letreiros elegantes, troféus e peças de decoração com acabamento premium.",
    specs: ["Transparente, branco, preto, colorido", "Espessuras: 2mm a 10mm", "Corte e gravação a laser", "Polimento nas bordas"],
    bgColor: "#D8EEF7",
    textColor: "#2A6A88",
  },
  {
    name: "Tecido",
    tagline: "Sublimação têxtil",
    description: "Sublimação em alta qualidade para bandeiras, almofadas, ecobags, camisetas e tecidos decorativos sob medida.",
    specs: ["Sublimação full-color", "Poliéster e algodão", "Sem limite de cores", "Lavável e durável"],
    bgColor: "#F0E8E0",
    textColor: "#7A6050",
  },
  {
    name: "Impressão UV",
    tagline: "Alta definição em qualquer superfície",
    description: "Impressão direta em superfícies rígidas: madeira, metal, vidro, plástico. Cores vibrantes e alta durabilidade.",
    specs: ["Qualquer superfície rígida", "CMYK + branco", "Resistente a UV e água", "Resolução até 1440 dpi"],
    bgColor: "#1C1A17",
    textColor: "#C94F2C",
    dark: true,
  },
];

export default function MateriaisPage() {
  return (
    <>
      <Navbar />
      <main className="bg-creme min-h-screen">
        {/* Hero */}
        <section className="bg-carvao px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[10.5px] font-medium tracking-[0.18em] uppercase text-terra mb-4">
              Nossos materiais
            </p>
            <h1 className="text-[36px] md:text-[48px] font-bold tracking-[-0.02em] text-branco leading-tight">
              O material certo para
              <br />
              cada projeto
            </h1>
            <p className="text-sm text-grafite mt-4 max-w-lg mx-auto leading-relaxed">
              Trabalhamos com quatro tipos de materiais, cada um com características únicas para atender o seu projeto com perfeição.
            </p>
          </div>
        </section>

        {/* Materials grid */}
        <section className="px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-5xl mx-auto grid gap-6">
            {materials.map((mat, i) => (
              <div
                key={mat.name}
                className={`rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 ${
                  i % 2 === 1 ? "md:direction-rtl" : ""
                }`}
              >
                {/* Visual */}
                <div
                  className="flex items-center justify-center p-12 md:p-16"
                  style={{ background: mat.bgColor, minHeight: "280px" }}
                >
                  <div className="text-center">
                    <span
                      className="text-[11px] font-semibold tracking-[0.2em] uppercase"
                      style={{ color: mat.textColor }}
                    >
                      {mat.name}
                    </span>
                    <div
                      className="w-20 h-px mx-auto mt-3"
                      style={{ background: mat.textColor, opacity: 0.3 }}
                    />
                  </div>
                </div>
                {/* Info */}
                <div
                  className={`p-8 md:p-10 flex flex-col justify-center ${
                    mat.dark ? "bg-carvao2" : "bg-white"
                  }`}
                >
                  <h2
                    className={`text-[22px] font-semibold tracking-[-0.01em] ${
                      mat.dark ? "text-branco" : "text-carvao"
                    }`}
                  >
                    {mat.name}
                  </h2>
                  <p className="text-terra text-xs font-medium tracking-[0.04em] mt-1">
                    {mat.tagline}
                  </p>
                  <p
                    className={`text-sm leading-relaxed mt-4 ${
                      mat.dark ? "text-grafite" : "text-grafite"
                    }`}
                  >
                    {mat.description}
                  </p>
                  <ul className="mt-5 flex flex-col gap-2">
                    {mat.specs.map((spec) => (
                      <li
                        key={spec}
                        className={`text-xs flex items-center gap-2 ${
                          mat.dark ? "text-grafite" : "text-grafite2"
                        }`}
                      >
                        <span className="w-1 h-1 rounded-full bg-terra flex-shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="max-w-5xl mx-auto mt-12 text-center">
            <p className="text-sm text-grafite mb-4">
              Não sabe qual material escolher?
            </p>
            <Link
              href="/orcamento"
              className="inline-flex items-center rounded-full px-7 py-3.5 text-sm font-medium text-white no-underline"
              style={{ background: "#C94F2C" }}
            >
              Simular orçamento →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
