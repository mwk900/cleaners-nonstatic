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

export default function Home() {
  return (
    <>
      <DesktopNav />
      <main className="pb-[80px] md:pb-0">
        <HeroSection />
        <TestimonialsSection />
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
