import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Zap, Shield, Heart, Star } from "lucide-react";

const plans = [
  {
    name: "Individual Protection",
    price: "₹199",
    period: "/month",
    description: "Essential AI monitoring for you",
    features: [
      "Real-time AI heart monitoring",
      "Weekly risk reports & insights", 
      "Smartwatch & fitness tracker sync",
      "Mobile app with alerts",
      "Email support",
    ],
    cta: "Start Free Trial",
    popular: false,
    icon: Heart,
  },
  {
    name: "Family Protection",
    price: "₹599", 
    period: "/month",
    description: "Complete protection for your entire family",
    features: [
      "Everything in Individual, plus:",
      "Up to 5 family members",
      "Quarterly diagnostic tests",
      "Doctor consultation & review",
      "Priority phone support",
      "Family health dashboard",
    ],
    cta: "Protect My Family",
    popular: true,
    icon: Shield,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Prevention is 1000x cheaper than treatment
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            For less than your daily coffee, get 24/7 AI protection that could save your life and savings.
          </p>
        </div>

        {/* ROI Calculator */}
        <div className="mb-16 p-8 bg-gradient-to-r from-success/5 to-primary/5 rounded-3xl border border-success/20 max-w-4xl mx-auto animate-fade-in-up delay-200">
          <h3 className="text-2xl font-bold text-center mb-6 text-foreground">
            Your Return on Investment
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-destructive mb-2">₹2,00,000</div>
              <p className="text-sm text-muted-foreground">Average emergency cost</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">₹2,388</div>
              <p className="text-sm text-muted-foreground">CardioShield yearly cost</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-success mb-2">₹1,97,612</div>
              <p className="text-sm text-muted-foreground">Your first year savings</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-success">8,280% ROI</span> if you prevent just one emergency
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${plan.popular ? 'border-primary shadow-elevated scale-105 bg-gradient-to-br from-primary/5 to-white' : 'border-border'} animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  Most Popular
                </div>
              )}
              
              <CardHeader className="text-center space-y-3 p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <plan.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
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
                      <span className="text-muted-foreground text-sm">{feature}</span>
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

        {/* Trust Badges */}
        <div className="text-center space-y-6 animate-fade-in-up delay-300">
          <div className="flex justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-success" />
              <span>30-day money-back guarantee</span>
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
            Start with <span className="font-semibold text-primary">3 free AI reports</span> — no credit card required
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
