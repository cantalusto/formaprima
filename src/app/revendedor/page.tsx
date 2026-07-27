import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Calculadora } from "./Calculadora";
import {
  ACABAMENTOS,
  ADESIVOS,
  GRAMATURAS,
  PRECOS_LONA,
  PRECO_MINIMO,
  brl,
} from "@/lib/precos";

export const metadata: Metadata = {
  title: "Bureau para Revendedores",
  description:
    "Bureau de impressão em lona e adesivo para revendedores em Pernambuco. A partir de R$ 20,00/m². Produção rápida, qualidade profissional e entrega para todo o Nordeste.",
  alternates: { canonical: "/revendedor" },
  openGraph: {
    title: "Bureau de impressão para revendedores · Forma Prima",
    description:
      "Lona e adesivo a partir de R$ 20,00/m². Preços exclusivos para revendedores, produção rápida e entrega para todo o Nordeste.",
    url: "/revendedor",
  },
};

const diferenciais = [
  {
    titulo: "Preços exclusivos",
    texto: "Tabela fechada para revendedor, sem precisar pedir cotação.",
  },
  {
    titulo: "Produção em alta resolução",
    texto: "Impressão profissional, com conferência de arquivo antes de rodar.",
  },
  {
    titulo: "Produção rápida",
    texto: "Pedidos aprovados até 14h entram na produção no mesmo dia.",
  },
  {
    titulo: "Atendimento especializado",
    texto: "Você fala direto com quem imprime, sem intermediário.",
  },
  {
    titulo: "Retirada ou entrega",
    texto: "Retire em Recife ou receba em todo o Nordeste.",
  },
  {
    titulo: "Pedido pelo WhatsApp",
    texto: "Calcula aqui, manda a arte e fecha na hora. Sem burocracia.",
  },
];

const passos = [
  {
    num: "01",
    titulo: "Calcule o valor",
    texto: "Escolha o material, informe a medida e veja o preço na hora.",
  },
  {
    num: "02",
    titulo: "Envie a arte",
    texto: "Manda o arquivo pelo WhatsApp — PDF, CDR, AI, PSD, JPG ou TIFF.",
  },
  {
    num: "03",
    titulo: "Pague no PIX",
    texto: "Confirmou o pagamento, o pedido entra direto na produção.",
  },
  {
    num: "04",
    titulo: "Retire ou receba",
    texto: "Avisamos quando estiver pronto para retirada ou envio.",
  },
];

export default function RevendedorPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-carvao">
        {/* Hero */}
        <section className="px-6 pb-14 pt-24 md:px-12 md:pb-20 md:pt-28">
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-terra">
              Área do revendedor
            </span>
            <h1
              className="mt-4 text-[34px] font-extrabold leading-[1.05] tracking-[-0.025em] text-branco md:text-[52px]"
              style={{ fontFamily: "var(--font-display), sans-serif" }}
            >
              O maior bureau de impressão em
              <br className="hidden md:block" /> lona e adesivos de{" "}
              <span className="text-terra">Pernambuco</span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-grafite">
              Preço fechado para gráficas e revendedores. Você calcula, manda a
              arte e recebe pronto — sem cotação e sem espera.
            </p>

            <div className="mt-7 inline-flex flex-col items-center rounded-2xl border border-terra/30 bg-terra/[0.08] px-7 py-4">
              <span className="text-[11px] uppercase tracking-[0.1em] text-ambar">
                A partir de
              </span>
              <span
                className="text-[34px] font-extrabold leading-none text-branco"
                style={{ fontFamily: "var(--font-display), sans-serif" }}
              >
                {brl(PRECO_MINIMO)}
                <span className="text-[16px] font-semibold text-grafite">
                  /m²
                </span>
              </span>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] text-grafite">
              {["Produção rápida", "Qualidade profissional", "Entrega para todo o Nordeste"].map(
                (item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-terra" />
                    {item}
                  </span>
                )
              )}
            </div>

            <div className="mt-8">
              <a
                href="#calculadora"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-[15px] font-semibold text-white no-underline transition-opacity hover:opacity-90"
                style={{ background: "#C94F2C" }}
              >
                Calcular meu pedido →
              </a>
            </div>
          </div>
        </section>

        {/* Calculadora */}
        <section className="px-6 pb-16 md:px-12">
          <div className="mx-auto max-w-5xl">
            <Calculadora />
          </div>
        </section>

        {/* Tabela de preços */}
        <section className="bg-carvao2 px-6 py-16 md:px-12 md:py-20">
          <div className="mx-auto max-w-5xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-terra">
              Tabela de preços
            </span>
            <h2
              className="mt-3 text-[26px] font-semibold tracking-[-0.02em] text-branco md:text-[32px]"
              style={{ fontFamily: "var(--font-display), sans-serif" }}
            >
              Valores por metro quadrado
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
              {/* Lona */}
              <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-carvao">
                <div className="border-b border-white/[0.08] px-6 py-4">
                  <h3 className="text-[17px] font-semibold text-branco">Lona</h3>
                  <p className="mt-0.5 text-xs text-grafite">
                    Impressão em alta resolução
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-white/[0.06]">
                        <th className="px-6 py-3 text-[11px] font-medium uppercase tracking-[0.06em] text-grafite2">
                          Gramatura
                        </th>
                        {ACABAMENTOS.map((a) => (
                          <th
                            key={a.id}
                            className="px-4 py-3 text-[11px] font-medium uppercase tracking-[0.06em] text-grafite2 whitespace-nowrap"
                          >
                            {a.nome}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {GRAMATURAS.map((g) => (
                        <tr
                          key={g.id}
                          className="border-b border-white/[0.04] last:border-0"
                        >
                          <td className="px-6 py-4">
                            <span className="font-medium text-branco">
                              {g.nome}
                            </span>
                            <span className="mt-0.5 block text-[11px] text-grafite2">
                              {g.detalhe}
                            </span>
                          </td>
                          {ACABAMENTOS.map((a) => (
                            <td
                              key={a.id}
                              className="whitespace-nowrap px-4 py-4 font-medium text-branco"
                            >
                              {brl(PRECOS_LONA[g.id][a.id])}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Adesivo */}
              <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-carvao">
                <div className="border-b border-white/[0.08] px-6 py-4">
                  <h3 className="text-[17px] font-semibold text-branco">
                    Adesivo
                  </h3>
                  <p className="mt-0.5 text-xs text-grafite">
                    Vinil de recorte e impressão
                  </p>
                </div>
                <ul>
                  {ADESIVOS.map((a) => (
                    <li
                      key={a.id}
                      className="flex items-center justify-between gap-4 border-b border-white/[0.04] px-6 py-4 last:border-0"
                    >
                      <div>
                        <span className="text-sm font-medium text-branco">
                          {a.nome}
                        </span>
                        <span className="mt-0.5 block text-[11px] text-grafite2">
                          {a.detalhe}
                        </span>
                      </div>
                      <span className="whitespace-nowrap text-sm font-medium text-branco">
                        {brl(a.preco)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mt-4 text-[12px] leading-relaxed text-grafite2">
              Valores por m² para revendedores cadastrados. Peças abaixo de 1m²
              são cobradas como 1m² (mínimo de produção). Acabamentos especiais e
              grandes volumes: fale com a gente.
            </p>
          </div>
        </section>

        {/* Como funciona */}
        <section className="px-6 py-16 md:px-12 md:py-20">
          <div className="mx-auto max-w-5xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-terra">
              Simples assim
            </span>
            <h2
              className="mt-3 text-[26px] font-semibold tracking-[-0.02em] text-branco md:text-[32px]"
              style={{ fontFamily: "var(--font-display), sans-serif" }}
            >
              Como funciona
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {passos.map((p) => (
                <div key={p.num} className="flex flex-col gap-2.5">
                  <span className="text-[13px] font-bold tracking-[0.05em] text-terra">
                    {p.num}
                  </span>
                  <h3 className="text-[15px] font-semibold text-branco">
                    {p.titulo}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-grafite">
                    {p.texto}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="bg-carvao2 px-6 py-16 md:px-12 md:py-20">
          <div className="mx-auto max-w-5xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-terra">
              Por que revender com a gente
            </span>
            <h2
              className="mt-3 text-[26px] font-semibold tracking-[-0.02em] text-branco md:text-[32px]"
              style={{ fontFamily: "var(--font-display), sans-serif" }}
            >
              Diferenciais
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {diferenciais.map((d) => (
                <div
                  key={d.titulo}
                  className="rounded-2xl border border-white/[0.07] bg-carvao p-6"
                >
                  <h3 className="text-[15px] font-semibold text-branco">
                    {d.titulo}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-grafite">
                    {d.texto}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-start gap-5 rounded-[20px] bg-carvao p-7 md:flex-row md:items-center md:justify-between md:px-10">
              <div>
                <h3 className="text-[20px] font-medium tracking-[-0.01em] text-branco">
                  Quer fechar um volume maior?
                </h3>
                <p className="mt-1.5 text-[13px] font-light text-grafite">
                  Fale com a gente para condições especiais de revenda.
                </p>
              </div>
              <Link
                href="/contato"
                className="inline-flex flex-shrink-0 items-center rounded-full px-7 py-3.5 text-[13px] font-medium text-white no-underline transition-opacity hover:opacity-90"
                style={{ background: "#C94F2C" }}
              >
                Falar com um consultor
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
