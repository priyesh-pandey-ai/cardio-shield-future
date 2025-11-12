import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "AI Watch",
    price: "₹199",
    period: "/month",
    features: [
      "Real-time AI monitoring",
      "Weekly risk reports",
      "Daily health nudges",
      "Wearable integration",
      "Mobile app access",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "AI + Labs",
    price: "₹599",
    period: "/month",
    features: [
      "Everything in AI Watch",
      "Quarterly diagnostic tests",
      "Doctor review & consultation",
      "Priority support",
      "Family health tracking",
    ],
    cta: "Get Started",
    popular: true,
  },
];

const Pricing = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Preventing is cheaper than repairing.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            For less than a coffee a day, your heart stays under 24/7 AI watch.
          </p>
        </div>

        {/* Cost comparison */}
        <div className="flex justify-center items-center gap-8 mb-16 p-8 bg-card rounded-3xl shadow-card max-w-3xl mx-auto animate-fade-in">
          <div className="text-center">
            <div className="text-3xl font-bold text-destructive mb-2">₹2,00,000+</div>
            <p className="text-muted-foreground">Average Surgery Cost</p>
          </div>
          <div className="text-4xl text-muted-foreground">vs</div>
          <div className="text-center">
            <div className="text-3xl font-bold text-success mb-2">₹199/month</div>
            <p className="text-muted-foreground">Prevention Plan</p>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${plan.popular ? 'border-primary shadow-elevated scale-105' : 'border-border'} animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}
              
              <CardHeader className="text-center space-y-2 p-8">
                <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="p-8 pt-0 space-y-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full text-lg py-6" 
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-12 animate-fade-in-up delay-300">
          Start with 3 free AI reports — no credit card required
        </p>
      </div>
    </section>
  );
};

export default Pricing;
