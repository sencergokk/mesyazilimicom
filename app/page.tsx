import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import BenefitsSection from "@/components/BenefitsSection";
import ModulesSection from "@/components/ModulesSection";
import IndustriesSection from "@/components/IndustriesSection";
import BlogPreview from "@/components/BlogPreview";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <BenefitsSection />
        <ModulesSection />
        <IndustriesSection />
        <BlogPreview />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
