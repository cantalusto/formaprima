"use client";

import React from "react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";
import { useScroll } from "@/components/ui/use-scroll";

const links = [
  { href: "#materiais", label: "Materiais" },
  { href: "#produtos", label: "Produtos" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#portfolio", label: "Portfólio" },
];

function Logo() {
  return (
    <Link href="#" className="flex items-center gap-3 no-underline">
      <svg
        className="w-[28px] h-[28px] flex-shrink-0"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Forma Prima símbolo"
      >
        <rect x="23" y="7" width="18" height="10" rx="2" fill="#E06042" />
        <rect x="20" y="9" width="3" height="6" rx="1" fill="#B83C1E" />
        <rect x="41" y="9" width="3" height="6" rx="1" fill="#B83C1E" />
        <polygon points="25,17 39,17 32,25" fill="#E06042" />
        <line x1="32" y1="25" x2="32" y2="46" stroke="#E06042" strokeWidth="0.8" strokeLinecap="round" />
        <circle cx="32" cy="46" r="1.5" fill="#E06042" />
        <line x1="32" y1="46" x2="27" y2="43" stroke="#E06042" strokeWidth="0.6" strokeLinecap="round" opacity="0.55" />
        <line x1="32" y1="46" x2="37" y2="43" stroke="#E06042" strokeWidth="0.6" strokeLinecap="round" opacity="0.55" />
        <rect x="18" y="49" width="28" height="7" rx="1.5" fill="#F0ECE6" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="text-white font-semibold uppercase text-[13px] tracking-[0.15em]">
          FÓRMULA
        </span>
        <span className="text-white font-semibold uppercase text-[13px] tracking-[0.15em]">
          PRIMA
        </span>
        <div
          className="mt-[3px]"
          style={{ width: "28px", height: "2px", background: "#C94F2C" }}
        />
      </div>
    </Link>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 mx-auto w-full max-w-6xl border-b border-transparent md:rounded-md md:border md:transition-all md:duration-300 md:ease-out",
        {
          "border-white/[0.06] backdrop-blur-lg md:top-4 md:max-w-5xl md:shadow-lg md:shadow-black/20":
            scrolled && !open,
          "bg-[#1C1A17]/90": open,
        }
      )}
      style={{
        background: scrolled && !open
          ? "rgba(28,26,23,0.85)"
          : open
            ? "rgba(28,26,23,0.95)"
            : "#1C1A17",
      }}
    >
      <nav
        className={cn(
          "flex h-16 w-full items-center justify-between px-6 md:px-8 md:transition-all md:duration-300 md:ease-out",
          { "md:h-14 md:px-4": scrolled }
        )}
      >
        <Logo />

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                buttonVariants({ variant: "ghost", size: "default" }),
                "text-[13px] font-normal text-[#8A8276] hover:text-white hover:bg-white/[0.06]"
              )}
            >
              {link.label}
            </a>
          ))}

          <div
            className={cn(
              "ml-2 transition-all duration-300 ease-out overflow-hidden",
              scrolled
                ? "max-w-[200px] opacity-100"
                : "max-w-0 opacity-0"
            )}
          >
            <Button
              className="h-auto whitespace-nowrap text-white text-[13px] font-medium rounded-full px-5 py-2 border-none"
              style={{ background: "#C94F2C" }}
            >
              Pedir orçamento
            </Button>
          </div>
        </div>

        <Button
          size="icon"
          variant="outline"
          onClick={() => setOpen(!open)}
          className="md:hidden border-white/15 bg-transparent text-white hover:bg-white/10 hover:text-white"
        >
          <MenuToggleIcon open={open} className="size-5" duration={300} />
        </Button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed top-16 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-t border-white/[0.06] md:hidden",
          open ? "block" : "hidden"
        )}
        style={{ background: "rgba(28,26,23,0.97)" }}
      >
        <div
          data-slot={open ? "open" : "closed"}
          className={cn(
            "data-[slot=open]:animate-in data-[slot=open]:zoom-in-95 data-[slot=closed]:animate-out data-[slot=closed]:zoom-out-95 ease-out",
            "flex h-full w-full flex-col justify-between gap-y-2 p-6"
          )}
        >
          <div className="grid gap-y-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "justify-start text-[15px] text-[#8A8276] hover:text-white hover:bg-white/[0.06]"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <Button
              variant="outline"
              className="w-full h-auto py-3 border-white/15 bg-transparent text-white hover:bg-white/[0.06] hover:text-white rounded-full"
            >
              Ver portfólio
            </Button>
            <Button
              className="w-full h-auto py-3 text-white rounded-full border-none"
              style={{ background: "#C94F2C" }}
            >
              Pedir orçamento
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
