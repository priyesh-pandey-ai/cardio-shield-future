import { Check, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const comparisons = [
  { traditional: "Annual checkups", cardioshield: "Continuous 24/7 risk scanning" },
  { traditional: "Doctor after symptoms", cardioshield: "AI detects risk weeks before" },
  { traditional: "₹2L surgery", cardioshield: "₹199/month prevention" },
  { traditional: "Hospital profit", cardioshield: "You staying healthy" },
];

const AIAdvantage = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Why AI Beats Annual Checkups
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Traditional healthcare is reactive. CardioShield is proactive, intelligent, and always watching.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Traditional Care */}
          <Card className="border-destructive/20 bg-destructive/5 animate-fade-in">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                  <X className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Traditional Care</h3>
              </div>
              <ul className="space-y-4">
                {comparisons.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item.traditional}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* CardioShield */}
          <Card className="border-success/20 bg-success/5 shadow-elevated animate-fade-in delay-200">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                  <Check className="w-6 h-6 text-success" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">CardioShield</h3>
              </div>
              <ul className="space-y-4">
                {comparisons.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-foreground font-medium">{item.cardioshield}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Data visualization */}
        <div className="mt-16 p-8 bg-card rounded-3xl shadow-card max-w-4xl mx-auto animate-fade-in-up delay-300">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-5xl font-bold text-primary mb-2">21 days</div>
              <p className="text-lg text-muted-foreground">
                AI detects heart risk earlier than traditional screening
              </p>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">₹400 Cr+</div>
              <p className="text-lg text-muted-foreground">
                Saved per 100,000 users through prevention vs surgery
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAdvantage;
