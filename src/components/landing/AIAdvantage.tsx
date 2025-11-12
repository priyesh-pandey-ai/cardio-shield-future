import { Check, X, Brain, Activity, Clock, DollarSign, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const comparisons = [
  { 
    traditional: "Visit doctor once a year", 
    cardioshield: "AI monitors you 24/7, every day",
    icon: Clock
  },
  { 
    traditional: "Wait for symptoms to appear", 
    cardioshield: "Get warnings 3 weeks before symptoms",
    icon: Activity
  },
  { 
    traditional: "Pay ₹2,00,000+ for surgery", 
    cardioshield: "Pay ₹199/month for prevention",
    icon: DollarSign
  },
  { 
    traditional: "Doctor sees you for 10 minutes", 
    cardioshield: "AI analyzes 10M+ data points continuously",
    icon: Brain
  },
  { 
    traditional: "Reactive treatment after damage", 
    cardioshield: "Proactive prevention before damage",
    icon: Shield
  },
];

const AIAdvantage = () => {
  return (
    <section id="ai-advantage" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Traditional Healthcare vs AI Prevention
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            One waits for disease to happen. The other stops it before it starts. The choice is clear.
          </p>
        </div>

        {/* Visual Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Traditional Care */}
          <Card className="border-destructive/20 bg-destructive/5 animate-fade-in relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-destructive/10 rounded-full -mr-16 -mt-16 blur-2xl" />
            <CardContent className="p-8 space-y-6 relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                  <X className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Traditional Healthcare</h3>
              </div>
              <ul className="space-y-4">
                {comparisons.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item.traditional}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-destructive/20">
                <p className="text-sm text-destructive font-medium">
                  ⚠️ Breaks down when you need it most
                </p>
              </div>
            </CardContent>
          </Card>

          {/* CardioShield AI */}
          <Card className="border-success/20 bg-success/5 shadow-elevated animate-fade-in delay-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-success/10 rounded-full -mr-16 -mt-16 blur-2xl" />
            <CardContent className="p-8 space-y-6 relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                  <Check className="w-6 h-6 text-success" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">CardioShield AI</h3>
              </div>
              <ul className="space-y-4">
                {comparisons.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-foreground font-medium">{item.cardioshield}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-success/20">
                <p className="text-sm text-success font-medium">
                  ✨ Works when life gets busy
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Technology Visualization */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          <Card className="text-center p-6 border-border animate-fade-in-up delay-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Deep Learning AI</h4>
            <p className="text-sm text-muted-foreground">
              Trained on 10M+ Indian health data points to recognize patterns humans miss
            </p>
          </Card>

          <Card className="text-center p-6 border-border animate-fade-in-up delay-400">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Activity className="w-8 h-8 text-success" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Real-time Analysis</h4>
            <p className="text-sm text-muted-foreground">
              Continuous monitoring of heart rate, sleep, stress, and activity patterns
            </p>
          </Card>

          <Card className="text-center p-6 border-border animate-fade-in-up delay-500">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-accent" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Predictive Alerts</h4>
            <p className="text-sm text-muted-foreground">
              Early warnings up to 21 days before potential cardiac events
            </p>
          </Card>
        </div>

        {/* Live Demo Section */}
        <div className="bg-card rounded-3xl p-8 shadow-card max-w-4xl mx-auto animate-fade-in-up delay-600">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              See AI in Action - Live Demo
            </h3>
            <p className="text-muted-foreground">
              Watch how our AI analyzes real health data and predicts risks
            </p>
          </div>
          
          <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center group cursor-pointer hover:from-primary/20 hover:to-accent/20 transition-all">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-white text-2xl font-bold">▶</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">
                3-Min AI Demo
              </h4>
              <p className="text-muted-foreground">
                From raw data to life-saving prediction
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 animate-fade-in-up delay-700">
          <p className="text-lg text-muted-foreground mb-4">
            Don't wait for symptoms. Get AI protection today.
          </p>
          <div className="text-3xl font-bold text-primary mb-2">
            21 days early warning = 100% better outcome
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAdvantage;
