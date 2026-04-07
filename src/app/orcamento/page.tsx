import type { Metadata } from "next";
import OrcamentoClient from "./OrcamentoClient";

export const metadata: Metadata = {
  title: "Orçamento",
  description:
    "Simule seu orçamento em segundos. Escolha material, tamanho e quantidade e receba uma estimativa instantânea.",
  openGraph: {
    title: "Simule seu orçamento · Forma Prima",
    description:
      "Simulador de preço para MDF, acrílico, tecido e UV. Estimativa instantânea, sem compromisso.",
  },
};

export default function OrcamentoPage() {
  return <OrcamentoClient />;
}
