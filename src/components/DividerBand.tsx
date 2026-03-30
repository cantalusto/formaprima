"use client";

const items = [
  "Corte a laser",
  "Impressão UV",
  "Sublimação",
  "MDF · Acrílico · Tecido",
  "Entrega nacional",
  "Personalizado",
  "Corte a laser",
  "Impressão UV",
];

function DividerItem({ text }: { text: string }) {
  return (
    <div className="text-[10.5px] font-medium tracking-[0.18em] uppercase text-grafite2 whitespace-nowrap flex items-center gap-3 before:content-[''] before:w-1 before:h-1 before:bg-terra before:rounded-full before:flex-shrink-0">
      {text}
    </div>
  );
}

export function DividerBand() {
  const duplicatedItems = [...items, ...items];

  return (
    <div className="bg-carvao py-5 border-y border-white/[0.04] overflow-hidden">
      <div
        className="flex gap-7 md:gap-12 will-change-transform"
        style={{
          animation: "divider-scroll 18s linear infinite",
        }}
      >
        {duplicatedItems.map((item, index) => (
          <DividerItem key={index} text={item} />
        ))}
      </div>
    </div>
  );
}
