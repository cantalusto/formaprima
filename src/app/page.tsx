import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { DividerBand } from "@/components/DividerBand";
import { Materiais } from "@/components/Materiais";

import { HowItWorks } from "@/components/HowItWorks";
import { Collections } from "@/components/Collections";
import { FAQ } from "@/components/FAQ";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <DividerBand />
      <Materiais />
      <HowItWorks />
      <Collections />
      <FAQ />
      <Testimonials />
      <Footer />
    </>
  );
}
