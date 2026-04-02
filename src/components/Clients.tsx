"use client";

const clients = [
  "Studio Criativo",
  "Eventus Corp",
  "Casa & Design",
  "Marca Viva",
  "Pixel Art Co.",
  "Nobre Gifts",
  "Ateliê Digital",
  "Brasa Comunicação",
];

export function Clients() {
  const duplicated = [...clients, ...clients];

  return (
    <section className="bg-carvao py-10 border-y border-white/[0.04] overflow-hidden">
      <p className="text-center text-[10.5px] font-medium tracking-[0.18em] uppercase text-grafite2 mb-6">
        Empresas que confiam na Forma Prima
      </p>
      <div
        className="flex gap-10 md:gap-16 items-center will-change-transform"
        style={{ animation: "divider-scroll 25s linear infinite" }}
      >
        {duplicated.map((name, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex items-center gap-2 text-white/20 hover:text-white/40 transition-colors"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              className="opacity-50"
            >
              <rect x="2" y="2" width="16" height="16" rx="3" />
              <circle cx="10" cy="10" r="3" />
            </svg>
            <span className="text-sm font-medium tracking-[0.02em] whitespace-nowrap">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
