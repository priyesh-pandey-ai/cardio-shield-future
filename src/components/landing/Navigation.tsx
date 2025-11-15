import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const sections = [
  { label: "Hero", id: "hero", showInNav: false },
  { label: "How It Works", id: "how-it-works", showInNav: true },
  { label: "Wearables", id: "wearables", showInNav: true },
  { label: "AI Insights", id: "ai-advantage", showInNav: true },
  { label: "Hospital Impact", id: "hospital-impact", showInNav: true },
  { label: "Pricing", id: "pricing", showInNav: true },
  { label: "Clinician Trust", id: "clinician-trust", showInNav: true },
  { label: "FAQ", id: "faq", showInNav: true },
  { label: "Contact", id: "lead-form", showInNav: true },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  const navItems = useMemo(() => sections.filter((section) => section.showInNav), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) {
              setActiveSection(id);
            }
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-red-500 animate-heartbeat" />
            <span className="text-xl font-bold text-foreground">CardioShield</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-5">
            <div className="flex items-center gap-1 rounded-full border border-white/40 bg-white/80 px-3 py-1 shadow-lg backdrop-blur">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-semibold rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
                    activeSection === item.id
                      ? "text-primary-foreground shadow-[0_8px_30px_rgba(16,185,129,0.35)]"
                      : "text-slate-500 hover:text-slate-900"
                  )}
                  aria-current={activeSection === item.id ? "page" : undefined}
                >
                  {activeSection === item.id && (
                    <span
                      className="absolute inset-0 rounded-full bg-primary/90 opacity-95 scale-105 transition"
                      aria-hidden
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              ))}
            </div>
            <Button size="sm">
              Schedule a Call
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border shadow-lg">
            <div className="flex flex-col py-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "text-left px-4 py-3 transition-colors text-sm font-medium",
                    activeSection === item.id
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 py-3">
                <Button size="sm" className="w-full">
                  Get Started Free
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
