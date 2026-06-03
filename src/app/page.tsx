import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { DividerBand } from "@/components/DividerBand";

import { HowItWorks } from "@/components/HowItWorks";
import { Collections } from "@/components/Collections";
import { Campanha } from "@/components/Campanha";
import { MarketingDigital } from "@/components/MarketingDigital";
import { CTABand } from "@/components/CTABand";
import { FAQ } from "@/components/FAQ";
import { Clients } from "@/components/Clients";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <DividerBand />

      <HowItWorks />
      <Campanha />
      <MarketingDigital />
      <Collections />
      <CTABand />
      <FAQ />
      <Clients />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
