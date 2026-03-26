"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface StatItemProps {
  value: string;
  numericValue: number;
  prefix?: string;
  suffix?: string;
  label: string;
  index: number;
  isLast: boolean;
}

function useCountUp(
  end: number,
  duration: number = 1.5,
  startCounting: boolean
) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

      // easeOut curve
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, startCounting]);

  return count;
}

function StatItem({
  numericValue,
  prefix = "",
  suffix = "",
  label,
  index,
  isLast,
}: StatItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const count = useCountUp(numericValue, 1.5, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 32, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
      className={`flex flex-col gap-1.5 px-0 md:px-8 ${
        index === 0 ? "md:pl-0" : ""
      } ${
        !isLast
          ? "border-b md:border-b-0 md:border-r border-white/20 pb-5 md:pb-0"
          : ""
      }`}
    >
      <div className="text-[42px] font-medium text-white tracking-[-0.02em] leading-none">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-xs font-light text-white/70 tracking-[0.04em] leading-relaxed whitespace-pre-line">
        {label}
      </div>
    </motion.div>
  );
}

const stats = [
  {
    value: "+500",
    numericValue: 500,
    prefix: "+",
    suffix: "",
    label: "Pedidos personalizados\nentregues todo mês",
  },
  {
    value: "4",
    numericValue: 4,
    prefix: "",
    suffix: "",
    label: "Tipos de material\ndisponíveis",
  },
  {
    value: "2h",
    numericValue: 2,
    prefix: "",
    suffix: "h",
    label: "Orçamento enviado\nsem compromisso",
  },
];

export function Stats() {
  return (
    <section className="bg-terra py-14 px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-0">
      {stats.map((stat, index) => (
        <StatItem
          key={stat.value}
          value={stat.value}
          numericValue={stat.numericValue}
          prefix={stat.prefix}
          suffix={stat.suffix}
          label={stat.label}
          index={index}
          isLast={index === stats.length - 1}
        />
      ))}
    </section>
  );
}
