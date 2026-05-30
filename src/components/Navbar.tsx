"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";
import { useScroll } from "@/components/ui/use-scroll";

const links = [
  { href: "/materiais", label: "Materiais" },
  { href: "/#campanha", label: "Campanha" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/orcamento", label: "Orçamento" },
  { href: "/contato", label: "Contato" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 no-underline">
      <Image
        src="/logo_icon_transparente.png"
        alt="Forma Prima"
        width={32}
        height={32}
        className="w-[32px] h-[32px] flex-shrink-0 object-contain"
        priority
      />
      <div className="flex flex-col leading-none">
        <span className="text-white font-semibold uppercase text-[13px] tracking-[0.15em]">
          FORMA
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
        "sticky top-0 z-50 mx-auto w-full max-w-6xl border-b border-transparent md:rounded-md md:border md:duration-300 md:ease-out md:transition-[max-width,top,box-shadow,border-color]",
        {
          "border-white/[0.06] md:top-4 md:max-w-5xl md:shadow-lg md:shadow-black/20":
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
          "flex h-16 w-full items-center justify-between px-6 md:px-8 md:duration-300 md:ease-out md:transition-[height,padding]",
          { "md:h-14 md:px-4": scrolled }
        )}
      >
        <Logo />

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                buttonVariants({ variant: "ghost", size: "default" }),
                "group relative text-[13px] font-medium text-[#C8C2B6] hover:text-[#E8C99A] hover:bg-transparent no-underline transition-colors"
              )}
            >
              <span className="relative">
                {link.label}
                <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-[#E8C99A] transition-all duration-300 group-hover:w-full" />
              </span>
            </Link>
          ))}

          <div
            className={cn(
              "ml-2 transition-all duration-300 ease-out overflow-hidden",
              scrolled
                ? "max-w-[200px] opacity-100"
                : "max-w-0 opacity-0"
            )}
          >
            <Link
              href="/orcamento"
              className="h-auto whitespace-nowrap text-white text-[13px] font-medium rounded-full px-5 py-2 no-underline inline-flex items-center"
              style={{ background: "#C94F2C" }}
            >
              Pedir orçamento
            </Link>
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
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "justify-start text-[15px] font-medium text-[#D4CEC4] hover:text-[#E8C99A] hover:bg-white/[0.06] no-underline"
                )}
              >
                {link.label}
              </Link>
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
