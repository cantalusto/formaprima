import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = "https://formaprima.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Forma Prima — Gráfica · Impressão Customizada",
    template: "%s · Forma Prima",
  },
  description:
    "Impressão customizada em MDF, acrílico, tecido, UV e muito mais. Personalizamos para empresas, eventos e presentear quem você ama.",
  keywords: [
    "impressão personalizada",
    "gráfica Recife",
    "MDF personalizado",
    "corte a laser",
    "impressão UV",
    "sublimação",
    "acrílico personalizado",
    "brindes corporativos",
  ],
  authors: [{ name: "Forma Prima" }],
  creator: "Forma Prima",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Forma Prima",
    title: "Forma Prima — Gráfica · Impressão Customizada",
    description:
      "Impressão customizada em MDF, acrílico, tecido, UV e muito mais. Orçamento em até 2 horas.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Forma Prima — Gráfica · Impressão Customizada",
    description:
      "Impressão customizada em MDF, acrílico, tecido, UV e muito mais.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${dmSans.variable} ${dmMono.variable} antialiased`}
    >
      <body className="bg-carvao text-branco font-sans overflow-x-hidden">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
