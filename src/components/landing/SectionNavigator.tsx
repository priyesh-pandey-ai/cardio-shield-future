import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "how-it-works", label: "How It Works" },
  { id: "story", label: "Story" },
  { id: "ai-advantage", label: "AI Advantage" },
  { id: "testimonials", label: "Trust" },
  { id: "pricing", label: "Pricing" },
  { id: "lead-form", label: "Get Started" },
];

const SectionNavigator = () => {
  const [active, setActive] = useState<string>("hero");

  const observers = useMemo(() => new Map<Element, IntersectionObserver>(), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) {
              setActive(id);
            }
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) {
        observer.observe(el);
        observers.set(el, observer);
      }
    });

    return () => {
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          observer.unobserve(el);
          observers.delete(el);
        }
      });
      observer.disconnect();
    };
  }, [observers]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed bottom-6 inset-x-0 z-50 pointer-events-none">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex gap-2 overflow-x-auto rounded-full bg-white/90 shadow-[0_20px_60px_rgba(15,23,42,0.2)] border border-slate-200 p-2 pointer-events-auto backdrop-blur">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full transition whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
                active === section.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "text-slate-500 hover:text-slate-900"
              )}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionNavigator;
