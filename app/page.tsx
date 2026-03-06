import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PricingSection from "@/components/sections/PricingSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import AreasSection from "@/components/sections/AreasSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";
import DesktopNav from "@/components/ui/DesktopNav";
import MobileBottomBar from "@/components/ui/MobileBottomBar";
import IntroWipe from "@/components/ui/IntroWipe";

export default function Home() {
  return (
    <>
      <DesktopNav />
      <main className="pb-[80px] md:pb-0">
        <div className="relative overflow-hidden md:bg-[var(--bg-mint)]">
          <IntroWipe className="hidden md:block" />
          <div className="relative z-10 md:mx-auto md:grid md:max-w-6xl md:grid-cols-[minmax(0,1fr)_minmax(360px,420px)] md:gap-10 md:px-6 lg:gap-16">
            <HeroSection splitLayout />
            <TestimonialsSection splitLayout />
          </div>
        </div>
        <ServicesSection />
        <PricingSection />
        <HowItWorksSection />
        <AreasSection />
        <ContactSection />
        <FooterSection />
      </main>
      <MobileBottomBar />
    </>
  );
}
