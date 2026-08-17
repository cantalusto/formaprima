import type { Metadata } from "next";
import { AcompanhamentoClient } from "./AcompanhamentoClient";

export const metadata: Metadata = {
  title: "Acompanhar pedido",
  robots: { index: false, follow: false },
};

export default async function Page({
  params,
}: {
  params: Promise<{ codigo: string }>;
}) {
  const { codigo } = await params;
  return <AcompanhamentoClient codigo={codigo} />;
}
