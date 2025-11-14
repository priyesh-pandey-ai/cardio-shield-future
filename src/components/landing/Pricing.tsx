import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Shield, Heart, Star } from "lucide-react";
import SectionShell from "./SectionShell";

const plans = [
  {
    name: "Individual Protection",
    price: "INR 1,199",
    period: "/month",
    description: "Essential AI monitoring for you",
    features: [
      "Real-time AI heart monitoring",
      "Weekly risk reports and insights",
      "Smartwatch and fitness tracker sync",
      "Mobile app with alerts",
      "Email support",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Family Protection",
    price: "INR 1,599",
    period: "/month",
    description: "Complete protection for your entire family",
    features: [
      "Everything in Individual, plus:",
      "Up to 5 family members",
      "Quarterly diagnostic tests",
      "Doctor consultation and review",
      "Priority phone support",
      "Family health dashboard",
    ],
    cta: "Protect My Family",
    popular: true,
  },
];

const Pricing = () => {
  return (
    <SectionShell id="pricing" tint="amber" contentClassName="space-y-10 bg-gradient-to-b from-white to-amber-50/40">
      <div className="text-center space-y-4 animate-fade-in-up">
        <p className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">Pricing</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">Prevention costs less than regret</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          For less than your daily coffee, get 24/7 AI protection that could save your life and your savings.
        </p>
      </div>

      <div className="p-8 bg-white border border-amber-200 rounded-3xl shadow-lg max-w-4xl mx-auto animate-fade-in-up delay-150">
        <h3 className="text-2xl font-bold text-center mb-6 text-slate-900">Your return on prevention</h3>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-destructive mb-2">INR 12,00,000</div>
            <p className="text-sm text-muted-foreground">Average emergency cost</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">INR 12,388</div>
            <p className="text-sm text-muted-foreground">CardioShield yearly cost</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-success mb-2">INR 11,87,612</div>
            <p className="text-sm text-muted-foreground">Potential savings year one</p>
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          <span className="font-semibold text-success">Over 8,000% ROI</span> if you prevent just one emergency.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <Card
            key={plan.name}
            className={`relative overflow-hidden border ${plan.popular ? "border-primary shadow-2xl scale-[1.02]" : "border-slate-100"} animate-fade-in-up`}
            style={{ animationDelay: `${index * 120}ms` }}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-sm font-semibold rounded-full flex items-center gap-1">
                <Star className="w-3 h-3" />
                Most Popular
              </div>
            )}
            <CardHeader className="text-center space-y-3 p-8">
              <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
              <p className="text-sm text-muted-foreground">{plan.description}</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-bold text-primary">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
            </CardHeader>
            <CardContent className="p-8 pt-0 space-y-6">
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full text-lg py-6" variant={plan.popular ? "default" : "outline"}>
                {plan.cta}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center space-y-3 animate-fade-in-up delay-400">
        <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-success" />
            <span>30 day money back guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-primary" />
            <span>Cancel anytime</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-destructive" />
            <span>No hidden fees</span>
          </div>
        </div>
        <p className="text-lg text-muted-foreground">
          Start with <span className="font-semibold text-primary">three free AI reports</span> -- no card required.
        </p>
      </div>
    </SectionShell>
  );
};

export default Pricing;
