"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const materials = [
  {
    id: "mdf",
    name: "MDF",
    description: "Corte e gravação a laser",
    basePrice: 25,
    icon: (
      <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
        <rect x="4" y="20" width="28" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="4" y="13" width="28" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="4" y="6" width="28" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: "acrilico",
    name: "Acrílico",
    description: "Transparente ou colorido",
    basePrice: 45,
    icon: (
      <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
        <rect x="5" y="4" width="26" height="28" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <line x1="5" y1="10" x2="31" y2="10" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      </svg>
    ),
  },
  {
    id: "tecido",
    name: "Tecido",
    description: "Sublimação têxtil",
    basePrice: 18,
    icon: (
      <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
        <rect x="3" y="3" width="30" height="30" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <line x1="3" y1="13" x2="33" y2="13" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <line x1="3" y1="23" x2="33" y2="23" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <line x1="13" y1="3" x2="13" y2="33" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <line x1="23" y1="3" x2="23" y2="33" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: "uv",
    name: "Impressão UV",
    description: "Alta definição, qualquer superfície",
    basePrice: 35,
    icon: (
      <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
        <rect x="6" y="4" width="24" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <line x1="18" y1="14" x2="18" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="11" y1="14" x2="9" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="25" y1="14" x2="27" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const sizes = [
  { id: "p", label: "Pequeno", detail: "Até 15×15 cm", multiplier: 1 },
  { id: "m", label: "Médio", detail: "Até 30×30 cm", multiplier: 2.2 },
  { id: "g", label: "Grande", detail: "Até 60×40 cm", multiplier: 4 },
  { id: "custom", label: "Personalizado", detail: "Sob medida", multiplier: 5.5 },
];

const quantities = [
  { id: "1", label: "1 un.", value: 1, discount: 1 },
  { id: "10", label: "10 un.", value: 10, discount: 0.9 },
  { id: "50", label: "50 un.", value: 50, discount: 0.8 },
  { id: "100", label: "100+", value: 100, discount: 0.7 },
];

const steps = ["Material", "Tamanho", "Quantidade", "Resultado"];

export default function OrcamentoClient() {
  const [step, setStep] = useState(0);
  const [material, setMaterial] = useState<string | null>(null);
  const [size, setSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<string | null>(null);

  const selectedMaterial = materials.find((m) => m.id === material);
  const selectedSize = sizes.find((s) => s.id === size);
  const selectedQty = quantities.find((q) => q.id === quantity);

  const unitPrice = selectedMaterial && selectedSize && selectedQty
    ? Math.round(selectedMaterial.basePrice * selectedSize.multiplier * selectedQty.discount)
    : 0;
  const totalPrice = unitPrice * (selectedQty?.value || 1);

  function back() {
    if (step > 0) setStep(step - 1);
  }

  const whatsappMsg = selectedMaterial && selectedSize && selectedQty
    ? `Olá! Gostaria de um orçamento:\n- Material: ${selectedMaterial.name}\n- Tamanho: ${selectedSize.label} (${selectedSize.detail})\n- Quantidade: ${selectedQty.label}\n- Estimativa: R$ ${totalPrice}`
    : "Olá! Gostaria de fazer um orçamento.";

  return (
    <>
      <Navbar />
      <main className="bg-carvao min-h-screen">
        <div className="max-w-2xl mx-auto px-6 py-20">
          {/* Header */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" as const }}
            className="text-center mb-12"
          >
            <h1 className="text-[32px] md:text-[40px] font-bold tracking-[-0.02em] text-branco">
              Simule seu orçamento
            </h1>
            <p className="text-sm text-grafite mt-3 leading-relaxed max-w-md mx-auto">
              Escolha o material, tamanho e quantidade para ter uma estimativa instantânea. Sem compromisso.
            </p>
          </motion.div>

          {/* Step indicator */}
          <div className="flex items-center justify-center gap-2 mb-10">
            {steps.map((label, i) => (
              <div key={label} className="flex items-center gap-2">
                <button
                  onClick={() => {
                    if (i < step) setStep(i);
                  }}
                  className={`w-8 h-8 rounded-full text-xs font-medium flex items-center justify-center border-none cursor-pointer transition-colors ${
                    i === step
                      ? "bg-terra text-white"
                      : i < step
                        ? "bg-terra/20 text-terra"
                        : "bg-white/5 text-grafite"
                  }`}
                >
                  {i < step ? "✓" : i + 1}
                </button>
                {i < steps.length - 1 && (
                  <div className={`w-6 md:w-10 h-px ${i < step ? "bg-terra/40" : "bg-white/10"}`} />
                )}
              </div>
            ))}
          </div>

          {/* Step content */}
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="step-0"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {materials.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => { setMaterial(m.id); setStep(1); }}
                    className={`flex items-center gap-4 rounded-2xl p-5 text-left border cursor-pointer transition-all ${
                      material === m.id
                        ? "border-terra bg-terra/10 text-white"
                        : "border-white/[0.07] bg-carvao2 text-branco hover:border-white/15"
                    }`}
                  >
                    <div className={material === m.id ? "text-terra" : "text-grafite"}>
                      {m.icon}
                    </div>
                    <div>
                      <div className="text-[15px] font-medium">{m.name}</div>
                      <div className="text-[12px] text-grafite mt-0.5">{m.description}</div>
                    </div>
                  </button>
                ))}
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-2 gap-3"
              >
                {sizes.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => { setSize(s.id); setStep(2); }}
                    className={`rounded-2xl p-5 text-left border cursor-pointer transition-all ${
                      size === s.id
                        ? "border-terra bg-terra/10 text-white"
                        : "border-white/[0.07] bg-carvao2 text-branco hover:border-white/15"
                    }`}
                  >
                    <div className="text-[15px] font-medium">{s.label}</div>
                    <div className="text-[12px] text-grafite mt-1">{s.detail}</div>
                  </button>
                ))}
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3"
              >
                {quantities.map((q) => (
                  <button
                    key={q.id}
                    onClick={() => { setQuantity(q.id); setStep(3); }}
                    className={`rounded-2xl p-5 text-center border cursor-pointer transition-all ${
                      quantity === q.id
                        ? "border-terra bg-terra/10 text-white"
                        : "border-white/[0.07] bg-carvao2 text-branco hover:border-white/15"
                    }`}
                  >
                    <div className="text-[18px] font-semibold">{q.label}</div>
                    {q.discount < 1 && (
                      <div className="text-[11px] text-terra mt-1 font-medium">
                        -{Math.round((1 - q.discount) * 100)}% desc.
                      </div>
                    )}
                  </button>
                ))}
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-white/[0.07] bg-carvao2 p-8"
              >
                <div className="text-center">
                  <p className="text-xs text-grafite font-medium tracking-[0.1em] uppercase mb-4">
                    Estimativa de preço
                  </p>

                  {/* Summary */}
                  <div className="flex justify-center gap-6 mb-6 text-sm text-grafite">
                    <span>{selectedMaterial?.name}</span>
                    <span className="text-white/10">|</span>
                    <span>{selectedSize?.label}</span>
                    <span className="text-white/10">|</span>
                    <span>{selectedQty?.label}</span>
                  </div>

                  {/* Price */}
                  <div className="mb-2">
                    <span className="text-[48px] md:text-[56px] font-bold text-branco tracking-tight">
                      R$ {totalPrice}
                    </span>
                  </div>
                  <p className="text-xs text-grafite mb-8">
                    R$ {unitPrice} por unidade
                    {selectedQty && selectedQty.discount < 1 && (
                      <span className="text-terra ml-2">
                        ({Math.round((1 - selectedQty.discount) * 100)}% de desconto aplicado)
                      </span>
                    )}
                  </p>

                  <p className="text-[11px] text-grafite2 mb-6 leading-relaxed max-w-sm mx-auto">
                    * Valor estimado. O preço final depende da complexidade da arte e acabamento. Solicite um orçamento exato pelo WhatsApp.
                  </p>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={`https://wa.me/558192687656?text=${encodeURIComponent(whatsappMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-white no-underline"
                      style={{ background: "#25D366" }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Pedir orçamento exato
                    </a>
                    <button
                      onClick={() => { setStep(0); setMaterial(null); setSize(null); setQuantity(null); }}
                      className="rounded-full px-7 py-3.5 text-sm font-normal border border-white/15 bg-transparent text-branco cursor-pointer hover:border-white/30 transition-colors"
                    >
                      Simular novamente
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          {step > 0 && step < 3 && (
            <div className="flex justify-between mt-6">
              <button
                onClick={back}
                className="text-sm text-grafite hover:text-branco transition-colors bg-transparent border-none cursor-pointer"
              >
                ← Voltar
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
