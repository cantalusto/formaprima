"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import Link from "next/link";

const contactMethods = [
  {
    label: "WhatsApp",
    value: "(81) 99999-9999",
    description: "Resposta em até 2 horas",
    href: "https://wa.me/5581999999999",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#25D366">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "E-mail",
    value: "contato@formaprima.com.br",
    description: "Para orçamentos e parcerias",
    href: "mailto:contato@formaprima.com.br",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C94F2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="3" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    value: "@formaprima",
    description: "Novidades e bastidores",
    href: "#",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C94F2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="#C94F2C" stroke="none" />
      </svg>
    ),
  },
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContatoClient() {
  const [status, setStatus] = React.useState<Status>("idle");
  const [form, setForm] = React.useState({
    nome: "",
    email: "",
    assunto: "Orçamento",
    mensagem: "",
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm({ nome: "", email: "", assunto: "Orçamento", mensagem: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <Navbar />
      <main className="bg-carvao min-h-screen">
        {/* Hero */}
        <section className="px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[10.5px] font-medium tracking-[0.18em] uppercase text-terra mb-4">
              Contato
            </p>
            <h1 className="text-[36px] md:text-[48px] font-bold tracking-[-0.02em] text-branco leading-tight">
              Vamos conversar sobre
              <br />
              o seu projeto
            </h1>
            <p className="text-sm text-grafite mt-4 max-w-lg mx-auto leading-relaxed">
              Estamos prontos para transformar sua ideia em realidade. Escolha o canal que preferir.
            </p>
          </div>
        </section>

        {/* Contact methods */}
        <section className="px-6 md:px-12 pb-16">
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/[0.07] bg-carvao2 p-6 text-center no-underline hover:border-terra/30 transition-colors group"
              >
                <div className="flex justify-center mb-4">{method.icon}</div>
                <div className="text-xs font-medium text-grafite tracking-[0.06em] uppercase mb-2">
                  {method.label}
                </div>
                <div className="text-sm font-medium text-branco group-hover:text-terra transition-colors">
                  {method.value}
                </div>
                <div className="text-[11px] text-grafite2 mt-1">{method.description}</div>
              </a>
            ))}
          </div>
        </section>

        {/* Contact form */}
        <section className="px-6 md:px-12 pb-20">
          <div className="max-w-2xl mx-auto">
            <div className="rounded-2xl border border-white/[0.07] bg-carvao2 p-8 md:p-10">
              <h2 className="text-[22px] font-semibold text-branco tracking-[-0.01em] mb-1">
                Envie uma mensagem
              </h2>
              <p className="text-xs text-grafite mb-8">
                Preencha o formulário e respondemos em até 24 horas.
              </p>

              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-medium text-grafite tracking-[0.04em] uppercase mb-1.5 block">
                      Nome
                    </label>
                    <input
                      type="text"
                      required
                      value={form.nome}
                      onChange={(e) => setForm({ ...form, nome: e.target.value })}
                      placeholder="Seu nome"
                      className="w-full rounded-xl border border-white/[0.07] bg-carvao px-4 py-3 text-sm text-branco placeholder:text-grafite2 outline-none focus:border-terra/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-medium text-grafite tracking-[0.04em] uppercase mb-1.5 block">
                      E-mail
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="seu@email.com"
                      className="w-full rounded-xl border border-white/[0.07] bg-carvao px-4 py-3 text-sm text-branco placeholder:text-grafite2 outline-none focus:border-terra/40 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-medium text-grafite tracking-[0.04em] uppercase mb-1.5 block">
                    Assunto
                  </label>
                  <select
                    value={form.assunto}
                    onChange={(e) => setForm({ ...form, assunto: e.target.value })}
                    className="w-full rounded-xl border border-white/[0.07] bg-carvao px-4 py-3 text-sm text-grafite outline-none focus:border-terra/40 transition-colors cursor-pointer"
                  >
                    <option>Orçamento</option>
                    <option>Parceria</option>
                    <option>Suporte</option>
                    <option>Outro</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-medium text-grafite tracking-[0.04em] uppercase mb-1.5 block">
                    Mensagem
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={form.mensagem}
                    onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                    placeholder="Descreva seu projeto ou dúvida..."
                    className="w-full rounded-xl border border-white/[0.07] bg-carvao px-4 py-3 text-sm text-branco placeholder:text-grafite2 outline-none focus:border-terra/40 transition-colors resize-none"
                  />
                </div>

                <div className="flex items-center gap-4 mt-2">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="self-start rounded-full px-7 py-3.5 text-sm font-medium text-white border-none cursor-pointer disabled:opacity-60"
                    style={{ background: "#C94F2C" }}
                  >
                    {status === "loading" ? "Enviando..." : "Enviar mensagem"}
                  </button>
                  {status === "success" && (
                    <span className="text-xs text-green-400">Mensagem enviada! Responderemos em breve.</span>
                  )}
                  {status === "error" && (
                    <span className="text-xs text-red-400">Erro ao enviar. Tente novamente.</span>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="px-6 md:px-12 pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="rounded-2xl border border-white/[0.07] bg-carvao2 p-8 md:p-10">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C94F2C" strokeWidth="1.5" className="mx-auto mb-4">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              <h3 className="text-lg font-semibold text-branco mb-1">Recife, PE</h3>
              <p className="text-sm text-grafite leading-relaxed">
                Retirada disponível no nosso estúdio.
                <br />
                Enviamos para todo o Brasil.
              </p>
              <Link
                href="/orcamento"
                className="inline-block mt-6 text-xs font-medium text-terra tracking-[0.04em] no-underline hover:opacity-75 transition-opacity"
              >
                Simular orçamento →
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
