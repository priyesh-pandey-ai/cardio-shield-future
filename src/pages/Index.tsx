import Navigation from "@/components/landing/Navigation";
import Hero from "@/components/landing/Hero";
import Story from "@/components/landing/Story";
import AIAdvantage from "@/components/landing/AIAdvantage";
import FigmaFlowSection from "@/components/landing/FigmaFlowSection";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";
import LeadForm from "@/components/landing/LeadForm";
import SectionNavigator from "@/components/landing/SectionNavigator";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-slate-50 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(13,148,136,0.18),_transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.9)_0%,rgba(226,232,240,0.6)_60%,rgba(15,23,42,0.08)_100%)] pointer-events-none" />
      <div className="absolute inset-x-0 top-64 mx-auto h-px w-4/5 bg-gradient-to-r from-transparent via-emerald-200/60 to-transparent" />
      <div className="relative z-10 space-y-0">
        <Navigation />
        <Hero />
        <FigmaFlowSection />
        <Story />
        <AIAdvantage />
        <Testimonials />
        <Pricing />
        <LeadForm />
        <SectionNavigator />
      </div>
    </main>
  );
};

export default Index;
