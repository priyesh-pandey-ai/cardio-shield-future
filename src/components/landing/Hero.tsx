import { Button } from "@/components/ui/button";
import { Heart, Activity } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted/30">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse-glow delay-1000" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Heart className="w-4 h-4 text-primary animate-heartbeat" />
              <span className="text-sm font-medium text-primary">AI-Powered Prevention</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-foreground">
                Stop Heart Attacks Before They Happen
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl">
                AI that predicts, prevents, and protects your heart — weeks before symptoms appear.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-lg px-8 shadow-lg hover:shadow-xl transition-all">
                Get 3 Free Risk Reports
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                See How It Works
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-success" />
                <span>24/7 AI Monitoring</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-success" />
                <span>HIPAA Compliant</span>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative animate-fade-in delay-300">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={heroDashboard}
                alt="CardioShield AI Dashboard showing heart stability score and real-time monitoring"
                className="w-full h-auto"
              />
              {/* Overlay glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
            </div>
            
            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-elevated border border-border animate-scale-in delay-500">
              <div className="text-3xl font-bold text-primary">82</div>
              <div className="text-sm text-muted-foreground">Heart Stability Score</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
