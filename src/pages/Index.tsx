import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Story from "@/components/landing/Story";
import AIAdvantage from "@/components/landing/AIAdvantage";
import Testimonials from "@/components/landing/Testimonials";
import TrustBadges from "@/components/landing/TrustBadges";
import Pricing from "@/components/landing/Pricing";
import LeadForm from "@/components/landing/LeadForm";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Story />
      <AIAdvantage />
      <Testimonials />
      <TrustBadges />
      <Pricing />
      <LeadForm />
      <FAQ />
      <FinalCTA />
    </main>
  );
};

export default Index;
