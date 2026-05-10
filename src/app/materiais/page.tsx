import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Materiais",
  description:
    "Conheça nossos materiais: MDF, acrílico, tecido e impressão UV. Corte a laser, sublimação e gravação de alta precisão.",
  alternates: { canonical: "/materiais" },
  openGraph: {
    title: "Materiais · Forma Prima",
    description:
      "MDF, acrílico, tecido e impressão UV. O material certo para cada projeto.",
    url: "/materiais",
  },
};

const materials = [
  {
    name: "MDF",
    tagline: "Corte e gravação a laser",
    description:
      "Nosso carro-chefe. Do quadrinho de Wi-Fi ao letreiro iluminado, trabalhamos MDF com corte e gravação de precisão para decoração, presentes e identidade visual.",
    specs: [
      "Quadrinhos (Wi-Fi, Instagram, Pix) e placas com QR code",
      "Nomes em MDF com relevo ou fundo iluminado",
      "Caixas personalizadas, tábuas, porta copos e chaveiros",
      "Suportes (celular, notebook, controle remoto)",
      "Mandalas, peças religiosas, paisagens e letras grandes",
      "Linha pet: plaquinha com nome, porta coleira e comedouro",
    ],
    bgColor: "#E8C99A",
    textColor: "#6A4820",
  },
  {
    name: "Acrílico",
    tagline: "Transparente, colorido ou espelhado",
    description:
      "Acabamento premium para ambientes comerciais. Ideal para óticas, lojas, consultórios e troféus corporativos.",
    specs: [
      "Expositor de óculos de mesa e painéis para óticas",
      "Letras e letreiros para fachadas e recepções",
      "Troféus e placas de homenagem",
      "Painel ripado para ambientes comerciais",
      "Espessuras de 2mm a 10mm, corte e gravação a laser",
    ],
    bgColor: "#D8EEF7",
    textColor: "#2A6A88",
  },
  {
    name: "ACM, Lonas & Adesivos",
    tagline: "Comunicação visual externa e interna",
    description:
      "Soluções completas de comunicação visual para fachadas, vitrines, eventos e decoração de ambientes.",
    specs: [
      "Placas em ACM (interno e externo) e placas ABC de formatura",
      "Placas de promoção, mini placas e placas para porta",
      "Lonas personalizadas com ou sem ilhós",
      "Adesivos: papel de parede, leitoso, transparente e perfurado",
      "Luminárias personalizadas",
    ],
    bgColor: "#F0E8E0",
    textColor: "#7A6050",
  },
  {
    name: "Sublimação",
    tagline: "Foto e cor em alta definição",
    description:
      "Transferimos suas fotos, artes e logos com cores vivas e durabilidade para presentes únicos e brindes corporativos.",
    specs: [
      "Azulejos personalizados com fotos",
      "Canecas personalizadas",
      "Almofadas sublimadas",
      "Sem limite de cores, acabamento profissional",
    ],
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
