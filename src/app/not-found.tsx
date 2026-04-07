import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="bg-carvao min-h-screen flex items-center justify-center px-6 py-24">
        <div className="max-w-xl text-center">
          <p className="text-[10.5px] font-medium tracking-[0.18em] uppercase text-terra mb-4">
            Erro 404
          </p>
          <h1 className="text-[48px] md:text-[64px] font-bold tracking-[-0.02em] text-branco leading-none">
            Página não encontrada
          </h1>
          <p className="text-sm text-grafite mt-5 leading-relaxed max-w-md mx-auto">
            A página que você procura não existe ou foi movida. Que tal voltar ao início
            ou dar uma olhada no nosso portfólio?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <Link
              href="/"
              className="rounded-full px-7 py-3.5 text-sm font-medium text-white no-underline"
              style={{ background: "#C94F2C" }}
            >
              Voltar ao início
            </Link>
            <Link
              href="/portfolio"
              className="rounded-full px-7 py-3.5 text-sm font-normal border border-white/15 bg-transparent text-branco no-underline hover:border-white/30 transition-colors"
            >
              Ver portfólio
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
