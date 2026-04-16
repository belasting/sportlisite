import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import SwipeDemo from "@/components/SwipeDemo";
import SportliPlus from "@/components/SportliPlus";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <SwipeDemo />
      <SportliPlus />
      <Testimonials />
      <CTASection />
      <FAQ />
      <Footer />
    </main>
  );
}
