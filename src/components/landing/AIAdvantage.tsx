import {
  Check,
  X,
  Brain,
  Activity,
  Clock,
  DollarSign,
  Shield,
  Play,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SectionShell from "./SectionShell";

const comparisons = [
  {
    traditional: "Visit doctor once a year",
    cardioshield: "AI monitors you 24/7, every day",
    icon: Clock,
  },
  {
    traditional: "Wait for symptoms to appear",
    cardioshield: "Get warnings 3 weeks before symptoms",
    icon: Activity,
  },
  {
    traditional: "Pay INR 12,00,000+ for surgery",
    cardioshield: "Pay INR 1,199/month for prevention",
    icon: DollarSign,
  },
  {
    traditional: "Doctor sees you for 10 minutes",
    cardioshield: "AI analyzes 10M+ data points continuously",
    icon: Brain,
  },
  {
    traditional: "Reactive treatment after damage",
    cardioshield: "Proactive prevention before damage",
    icon: Shield,
  },
];

const AIAdvantage = () => {
  return (
    <SectionShell
      id="ai-advantage"
      tint="teal"
      contentClassName="space-y-12 bg-gradient-to-b from-white/95 to-white"
    >
      <div className="text-center space-y-4 animate-fade-in-up">
        <p className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">
          Why prevention wins
        </p>
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
          Traditional healthcare vs AI protection
        </h2>
        <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
          One waits for disease to show up. The other detects it 21 days early. Decide whether your family gets a warning or a wake up call.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Card className="border-destructive/30 bg-white/90 shadow-lg animate-fade-in">
          <CardContent className="p-8 space-y-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                <X className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Traditional care</h3>
            </div>
            <ul className="space-y-4">
              {comparisons.map((item) => (
                <li key={item.traditional} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <item.icon className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span>{item.traditional}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4 border-t border-destructive/20 text-sm text-destructive font-medium">
              Pattern: reacts only when it is already too late.
            </div>
          </CardContent>
        </Card>

        <Card className="border-emerald-200 bg-white shadow-xl animate-fade-in delay-200">
          <CardContent className="p-8 space-y-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                <Check className="w-6 h-6 text-success" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">CardioShield AI</h3>
            </div>
            <ul className="space-y-4">
              {comparisons.map((item) => (
                <li key={item.cardioshield} className="flex items-start gap-3 text-sm text-slate-800">
                  <item.icon className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="font-medium">{item.cardioshield}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4 border-t border-success/30 text-sm text-success font-medium">
              Outcome: alerts arrive before ambulances ever do.
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <Card className="text-center p-6 border-border animate-fade-in-up delay-200">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Brain className="w-8 h-8 text-primary" />
          </div>
          <h4 className="text-lg font-semibold text-foreground mb-2">Deep learning AI</h4>
          <p className="text-sm text-muted-foreground">
            Trained on 10M+ clinical data points for Indian families.
          </p>
        </Card>

        <Card className="text-center p-6 border-border animate-fade-in-up delay-300">
          <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Activity className="w-8 h-8 text-success" />
          </div>
          <h4 className="text-lg font-semibold text-foreground mb-2">Real-time analysis</h4>
          <p className="text-sm text-muted-foreground">
            Watches heart rate, sleep, stress and lifestyle signals in one place.
          </p>
        </Card>

        <Card className="text-center p-6 border-border animate-fade-in-up delay-400">
          <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-accent" />
          </div>
          <h4 className="text-lg font-semibold text-foreground mb-2">Predictive alerts</h4>
          <p className="text-sm text-muted-foreground">
            Sends escalations up to 21 days before a likely cardiac event.
          </p>
        </Card>
      </div>

      <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-10 max-w-4xl mx-auto animate-fade-in-up delay-500">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">See AI in action</h3>
          <p className="text-muted-foreground">
            Watch how CardioShield analyzes raw wearable, lab, and lifestyle data.
          </p>
        </div>
        <div className="aspect-video rounded-2xl border border-slate-100 bg-gradient-to-br from-primary/5 to-emerald-50 flex items-center justify-center group cursor-pointer">
          <div className="text-center space-y-3">
            <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center mx-auto group-hover:scale-110 transition">
              <Play className="w-9 h-9" />
            </div>
            <h4 className="text-xl font-semibold text-slate-900">3 minute AI demo</h4>
            <p className="text-muted-foreground text-sm">From raw signals to risk prediction</p>
          </div>
        </div>
      </div>

      <div className="text-center space-y-3 animate-fade-in-up delay-600">
        <p className="text-lg text-muted-foreground">Do not wait for symptoms. Get AI protection today.</p>
        <div className="text-3xl font-bold text-primary">
          21 day warning window = dramatically better outcomes.
        </div>
      </div>
    </SectionShell>
  );
};

export default AIAdvantage;
