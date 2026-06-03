import type { Metadata, Viewport } from "next";
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
    default:
      "Forma Prima — Campanha Política, Marketing Digital & Comunicação Visual",
    template: "%s · Forma Prima",
  },
  description:
    "Material de campanha política e marketing digital em Recife: santinhos, bandeiras, adesivos, camisas, praguinhas e tráfego pago. Também MDF, acrílico, ACM, sublimação e comunicação visual.",
  keywords: [
    "material de campanha política",
    "santinhos personalizados",
    "bandeiras de campanha",
    "adesivos de campanha",
    "camisas de campanha",
    "praguinhas",
    "marketing político",
    "tráfego pago para campanha",
    "gestão de redes sociais",
    "marketing digital eleitoral",
    "impressão personalizada",
    "gráfica Recife",
    "MDF personalizado",
    "corte a laser",
    "comunicação visual",
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
    title:
      "Forma Prima — Campanha Política, Marketing Digital & Comunicação Visual",
    description:
      "Material de campanha política e marketing digital: santinhos, bandeiras, adesivos, camisas e tráfego pago. Sua campanha nas ruas e na internet. Orçamento em até 2 horas.",
    images: [
      {
        url: "/background.png",
        width: 1200,
        height: 630,
        alt: "Forma Prima — Campanha política e comunicação visual",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Forma Prima — Campanha Política, Marketing Digital & Comunicação Visual",
    description:
      "Material de campanha política e marketing digital: santinhos, bandeiras, adesivos, camisas e tráfego pago. Sua campanha nas ruas e na internet.",
    images: ["/background.png"],
  },
  alternates: {
    canonical: "/",
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F1EA" },
    { media: "(prefers-color-scheme: dark)", color: "#1C1A17" },
  ],
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${siteUrl}/#organization`,
  name: "Forma Prima",
  url: siteUrl,
  logo: `${siteUrl}/logo_icon_transparente.png`,
  image: `${siteUrl}/background.png`,
  description:
    "Material de campanha política e marketing digital: santinhos, bandeiras, adesivos, camisas, praguinhas, tráfego pago e gestão de redes sociais. Também impressão customizada em MDF, acrílico, ACM, sublimação e comunicação visual.",
  telephone: "+55-81-98734-2853",
  email: "contatoformaprima@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Recife",
    addressRegion: "PE",
    addressCountry: "BR",
  },
  areaServed: { "@type": "Country", name: "Brasil" },
  priceRange: "$$",
  sameAs: ["https://www.instagram.com/formaprimaa"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços Forma Prima",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Material de Campanha Política",
        itemListElement: [
          "Santinhos",
          "Bottons",
          "Bandeiras",
          "Camisas",
          "Mochila Pirulito",
          "Adesivo de carro perfurado",
          "Praguinhas",
          "Placas",
        ].map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s },
        })),
      },
      {
        "@type": "OfferCatalog",
        name: "Marketing Digital de Campanha",
        itemListElement: [
          "Tráfego pago (Meta e Google Ads)",
          "Gestão de redes sociais",
          "Criativos e design",
          "Landing page e site do candidato",
        ].map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s },
        })),
      },
      {
        "@type": "OfferCatalog",
        name: "Comunicação Visual & Impressão",
        itemListElement: [
          "Corte a laser em MDF",
          "Acrílico personalizado",
          "Letreiros e fachadas em ACM",
          "Sublimação (canecas, azulejos e almofadas)",
          "Adesivos e lonas",
        ].map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s },
        })),
      },
    ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
