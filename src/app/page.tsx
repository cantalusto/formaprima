import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { DividerBand } from "@/components/DividerBand";

import { HowItWorks } from "@/components/HowItWorks";
import { Collections } from "@/components/Collections";
import { CTABand } from "@/components/CTABand";
import { FAQ } from "@/components/FAQ";
import { Clients } from "@/components/Clients";
import { Testimonials } from "@/components/Testimonials";
import { Portfolio } from "@/components/Portfolio";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <DividerBand />

      <HowItWorks />
      <Collections />
      <CTABand />
      <FAQ />
      <Clients />
      <Testimonials />
      <Portfolio />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
