import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Shield, Heart, Star, Stethoscope, Smartphone, Bell, Users } from "lucide-react";
import SectionShell from "./SectionShell";

const rupee = "\u20B9";

const plans = [
  {
    name: "Free 3-Month Preview",
    price: "Free",
    period: "for your first 3 months",
    description: "Use the entire CardioShield stack before you ever pay us.",
    features: [
      { label: "Weekly AI prevention reports tuned to your biomarkers", icon: Stethoscope },
      { label: "We onboard every wearable + lab feed for you", icon: Smartphone },
      { label: "Rapid WhatsApp concierge and care circle alerts", icon: Bell },
    ],
    cta: "Claim Free Preview Access",
    note: "No card required. Cancel in a tap if it is not for you.",
  },
  {
    name: "Charter Plan",
    price: `${rupee}299`,
    period: "/month after preview",
    description: "Flat-fee membership that keeps you out of the cath lab.",
    features: [
      { label: "Full AI prevention stack + CardioShield review", icon: Stethoscope },
      { label: "Wearable + lab syncing included", icon: Smartphone },
      { label: "6-minute escalation to your care circle", icon: Bell },
      { label: "Family-ready playbooks and WhatsApp updates", icon: Users },
      { label: "30-day money-back guarantee", icon: Shield },
      { label: "Cancel anytime - zero hidden fees", icon: Heart },
    ],
    cta: "Reserve My Charter Seat",
    popular: true,
    note: `Prefer annual? ${rupee}3,301/year (save 8%) -- ask our team during onboarding.`,
  },
];

const Pricing = () => {
  return (
    <SectionShell id="pricing" tint="amber" contentClassName="space-y-8 bg-gradient-to-b from-white to-amber-50/40">
      <div className="flex justify-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white/80 px-4 py-2 text-sm font-semibold text-amber-700">
          <Shield className="w-4 h-4" />
          30-day money-back guarantee + cancel anytime
        </div>
      </div>
      <div className="text-center space-y-4 animate-fade-in-up">
        <p className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">Pricing</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">Our pricing proves whose side we're on</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Traditional cardiology makes its money in crisis. We built CardioShield to profit only when you stay healthy,
          on a predictable, transparent subscription that removes the conflict of interest.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto animate-fade-in-up">
        <div className="rounded-3xl border border-destructive/30 bg-gradient-to-b from-rose-50 to-white p-8 text-center shadow-lg">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-destructive/80 mb-3">The Old Way</p>
          <div className="text-4xl font-bold text-destructive mb-1">{rupee}2,00,000</div>
          <p className="text-base font-medium text-slate-700">One angioplasty. One catastrophic failure.</p>
          <div className="mt-6 space-y-3 text-sm text-muted-foreground">
            <p>They win only when you lose and land in a cath lab.</p>
            <p>Reactive care priced like a one-time bailout of your life savings.</p>
            <p>Incentives misaligned with your long-term heart health.</p>
          </div>
        </div>
        <div className="rounded-3xl border border-emerald-200 bg-gradient-to-b from-emerald-50 to-white p-8 text-center shadow-xl">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-success/80 mb-3">Our Way</p>
          <div className="text-4xl font-bold text-success mb-1">{rupee}0</div>
          <p className="text-base font-medium text-slate-700">
            Free preview for your first 3 months, then {rupee}299 per month for the Charter membership with all-inclusive AI prevention.
          </p>
          <div className="mt-6 space-y-3 text-sm text-muted-foreground">
            <p>We earn the same flat fee whether you need zero interventions or ten.</p>
            <p>Aligned incentives: we only succeed when you stay out of the hospital.</p>
            <p>Transparent, fixed pricing that keeps you proactive rather than panicked.</p>
          </div>
        </div>
      </div>

      <div className="p-8 bg-white border border-amber-200 rounded-3xl shadow-lg max-w-4xl mx-auto animate-fade-in-up delay-150">
        <h3 className="text-2xl font-bold text-center mb-6 text-slate-900">Your return on prevention</h3>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-destructive mb-2">INR 12,00,000</div>
            <p className="text-sm text-muted-foreground">Average emergency cost</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">INR 3,588</div>
            <p className="text-sm text-muted-foreground">CardioShield yearly cost ({rupee}299 x 12)</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-success mb-2">INR 11,96,412</div>
            <p className="text-sm text-muted-foreground">Potential savings year one</p>
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          <span className="font-semibold text-success">~33,000% ROI</span> if you prevent just one emergency.
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
                {plan.features.map(({ label, icon: Icon }) => (
                  <li key={label} className="flex items-start gap-3">
                    <Icon className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{label}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full text-lg py-6" variant={plan.popular ? "default" : "outline"}>
                {plan.cta}
              </Button>
              {plan.note && (
                <p className="text-xs text-center text-muted-foreground">{plan.note}</p>
              )}
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
          Start with <span className="font-semibold text-primary">a three-month free preview + AI reports</span> -- no card required.
        </p>
        <p className="text-base text-slate-600">
          This pricing isn't just a number - it's a moral argument: {" "}
          <span className="font-semibold text-slate-900">we profit only when you stay healthy; they profit only when you get sick.</span>
        </p>
      </div>
    </SectionShell>
  );
};

export default Pricing;
