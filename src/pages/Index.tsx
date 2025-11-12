import Navigation from "@/components/landing/Navigation";
import Hero from "@/components/landing/Hero";
import Story from "@/components/landing/Story";
import AIAdvantage from "@/components/landing/AIAdvantage";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";
import LeadForm from "@/components/landing/LeadForm";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Story />
      <AIAdvantage />
      <Testimonials />
      <Pricing />
      <LeadForm />
    </main>
  );
};

export default Index;
