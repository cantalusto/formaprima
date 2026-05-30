"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedButton } from "@/components/AnimatedButton";

const cardVariants = {
  hidden: { y: 28, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
      delay: i * 0.06,
    },
  }),
};

interface CampanhaProduct {
  label: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const products: CampanhaProduct[] = [
  {
    label: "Santinhos",
    title: "Santinhos",
    description: "Divulgue sua imagem e suas propostas com qualidade.",
    image: "/campanha/santinho.png",
    imageAlt: "Santinhos de campanha impressos",
  },
  {
    label: "Bottons",
    title: "Bottons",
    description: "Pequeno no tamanho, gigante na divulgação!",
    image: "/campanha/bottons.png",
    imageAlt: "Bottons personalizados de campanha",
  },
  {
    label: "Bandeiras",
    title: "Bandeiras",
    description: "Mostre sua força por onde passar!",
    image: "/campanha/bandeira.png",
    imageAlt: "Bandeira de campanha personalizada",
  },
  {
    label: "Camisas",
    title: "Camisas",
    description: "Vista sua campanha e leve sua mensagem mais longe.",
    image: "/campanha/camisas.png",
    imageAlt: "Camisas de campanha personalizadas",
  },
  {
    label: "Mochila Pirulito",
    title: "Mochila Pirulito",
    description: "Divertida, prática e perfeita para as crianças!",
    image: "/campanha/pirulitodemochila.png",
    imageAlt: "Mochila pirulito de campanha",
  },
  {
    label: "Adesivo de Carros",
    title: "Adesivo perfurado",
    description: "Visibilidade do lado de fora sem atrapalhar a visão de dentro!",
    image: "/campanha/adesivocarro.png",
    imageAlt: "Adesivo de campanha aplicado em carro",
  },
  {
    label: "Praguinhas",
    title: "Praguinhas",
    description: "Leves, práticas e cheias de impacto!",
    image: "/campanha/praguinha.png",
    imageAlt: "Praguinhas de campanha",
  },
  {
    label: "Placas",
    title: "Placas",
    description: "Sua propaganda em destaque, onde todos podem ver!",
    image: "/campanha/placa.png",
    imageAlt: "Placa de campanha personalizada",
  },
];

function ProductCard({
  product,
  index,
}: {
  product: CampanhaProduct;
  index: number;
}) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={cardVariants}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-carvao2"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-white">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 z-10 rounded-full bg-terra px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-white">
          {product.label}
        </span>
      </div>

      <div className="p-5">
        <h3 className="text-[17px] font-semibold leading-tight text-branco">
          {product.title}
        </h3>
        <p className="mt-1.5 text-[13px] leading-relaxed text-grafite">
          {product.description}
        </p>
      </div>
    </motion.div>
  );
}

export function Campanha() {
  return (
    <section id="campanha" className="bg-carvao px-6 py-[72px] md:px-12">
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end"
      >
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-terra">
            Produtos de campanha
          </span>
          <h2 className="mt-3 text-[28px] font-semibold leading-[1.05] tracking-[-0.02em] text-branco md:text-[36px]">
            Sua campanha,
            <br />
            sua <span className="text-terra">força!</span>
          </h2>
        </div>
        <p className="max-w-[320px] text-sm leading-relaxed text-grafite">
          Produtos que divulgam ideias e conquistam votos. Atendemos pequenas e
          grandes quantidades, com qualidade, agilidade e compromisso.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard key={product.title} product={product} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ y: 24, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
        className="mt-10 flex flex-col items-start gap-5 rounded-[20px] bg-carvao2 p-7 md:flex-row md:items-center md:justify-between md:px-10"
      >
        <div>
          <h3 className="text-[20px] font-medium tracking-[-0.01em] text-branco">
            Vamos juntos impulsionar sua campanha?
          </h3>
          <p className="mt-1.5 text-[13px] font-light text-grafite">
            Sua mensagem, nossa missão. Orçamento sem compromisso.
          </p>
        </div>
        <Link href="/orcamento" className="flex-shrink-0 no-underline">
          <AnimatedButton className="h-auto whitespace-nowrap rounded-full bg-terra px-7 py-3.5 text-[12.5px] font-medium tracking-[0.05em] text-white hover:opacity-90">
            Faça seu orçamento
          </AnimatedButton>
        </Link>
      </motion.div>
    </section>
  );
}
