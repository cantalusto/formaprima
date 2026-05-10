import type { Metadata } from "next";
import ContatoClient from "./ContatoClient";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a Forma Prima. WhatsApp, e-mail e formulário de contato. Respondemos em até 2 horas.",
  alternates: { canonical: "/contato" },
  openGraph: {
    title: "Contato · Forma Prima",
    description:
      "Fale com a Forma Prima pelo WhatsApp, e-mail ou formulário. Recife, PE.",
    url: "/contato",
  },
};

export default function ContatoPage() {
  return <ContatoClient />;
}
