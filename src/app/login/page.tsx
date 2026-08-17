import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { LoginForm } from "./LoginForm";
import { supabaseConfigurado } from "@/lib/supabase/config";

export const metadata: Metadata = { title: "Acesso da equipe", robots: { index: false, follow: false } };

export default function LoginPage() {
  const configurado = supabaseConfigurado();
  return (
    <main className="relative min-h-screen overflow-hidden bg-carvao">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(201,79,44,0.16),transparent_34%),radial-gradient(circle_at_88%_82%,rgba(232,201,154,0.07),transparent_28%)]" />
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="relative mx-auto grid min-h-screen w-full max-w-7xl lg:grid-cols-[1.05fr_0.95fr]">
        <section className="hidden flex-col justify-between border-r border-white/[0.07] p-12 lg:flex xl:p-16">
          <Brand />
          <div className="max-w-xl pb-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-terra/25 bg-terra/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-ambar">
              <span className="h-1.5 w-1.5 rounded-full bg-terra" /> Central operacional
            </span>
            <h1 className="mt-6 text-[52px] font-extrabold leading-[1.02] tracking-[-0.035em] text-branco xl:text-[62px]" style={{ fontFamily: "var(--font-display), sans-serif" }}>
              Da entrada do pedido à entrega.
              <span className="block text-terra">Tudo no mesmo fluxo.</span>
            </h1>
            <p className="mt-6 max-w-lg text-[15px] leading-7 text-grafite">
              Acesse pedidos, confira artes e acompanhe cada etapa da produção da Forma Prima.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Pedidos organizados", "Produção em tempo real", "Histórico de etapas", "Acesso protegido"].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-xs font-medium text-[#B8B0A4]">
                  <CheckCircle2 aria-hidden="true" className="size-4 text-terra" strokeWidth={1.8} /> {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-[11px] uppercase tracking-[0.12em] text-grafite2">Forma Prima · Recife, PE</p>
        </section>

        <section className="flex min-h-screen items-center justify-center px-5 py-10 sm:px-8 lg:px-12">
          <div className="w-full max-w-[460px]">
            <div className="mb-10 flex items-center justify-between lg:hidden">
              <Brand />
              <Link href="/" className="text-xs font-medium text-grafite no-underline transition-colors hover:text-branco">Voltar ao site</Link>
            </div>
            <div className="rounded-[24px] border border-white/[0.09] bg-carvao2/90 p-6 shadow-[0_28px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-9">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-terra/25 bg-terra/10 text-terra">
                <ShieldCheck aria-hidden="true" className="size-5" strokeWidth={1.7} />
              </div>
              <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-terra">Área restrita</p>
              <h2 className="mt-2 text-[30px] font-bold tracking-[-0.025em] text-branco">Bem-vindo de volta</h2>
              <p className="mt-2 text-sm leading-6 text-grafite">Use seu acesso da equipe para entrar na plataforma.</p>
              {!configurado && (
                <p className="mt-5 rounded-xl border border-ambar/20 bg-ambar/10 px-4 py-3 text-xs leading-relaxed text-ambar">
                  O acesso compartilhado está aguardando a configuração do ambiente.
                </p>
              )}
              <LoginForm />
            </div>
            <div className="mt-6 flex items-center justify-between gap-4 px-2 text-[11px] text-grafite2">
              <span>Problemas para entrar? Fale com o administrador.</span>
              <Link href="/" className="hidden flex-shrink-0 text-grafite no-underline transition-colors hover:text-branco sm:block">← Voltar ao site</Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function Brand() {
  return (
    <Link href="/" className="inline-flex items-center gap-3 no-underline">
      <Image src="/logo_icon_transparente.png" alt="" width={42} height={42} className="size-[42px] object-contain" priority />
      <div className="leading-[0.9]">
        <span className="block text-[14px] font-bold uppercase tracking-[0.18em] text-white">Forma</span>
        <span className="mt-1 block text-[14px] font-bold uppercase tracking-[0.18em] text-white">Prima</span>
      </div>
    </Link>
  );
}
