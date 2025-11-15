import { Button } from "@/components/ui/button";
import { Heart, Activity, Play, Shield, TrendingDown } from "lucide-react";
import VideoModal from "./VideoModal";
import { useState, useEffect } from "react";

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const rupee = "\u20B9";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted/30 pt-12"
    >
      {/* Clean Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse-glow delay-1000" />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-30">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <Heart className="w-4 h-4 text-primary animate-heartbeat" />
              <span className="text-sm font-medium text-primary">Avoid Emergency Rooms</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-foreground">
                Skip the hospital.
                <span className="block text-3xl lg:text-5xl text-primary mt-2">
                  CardioShield intercepts heart trouble before hospitals get involved.
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl">
                Every vital, lab report, and lifestyle signal is converted into a hospital-avoidance plan. Families
                receive actionable alerts weeks before they would otherwise be rushing for an admission.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-card rounded-2xl shadow-card">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  <AnimatedCounter end={512} />
                </div>
                <p className="text-xs text-muted-foreground">ER trips avoided in 2024</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-destructive">
                  {rupee}
                  <AnimatedCounter end={12} suffix="L" />
                </div>
                <p className="text-xs text-muted-foreground">Average hospital bill saved per alert</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">
                  <AnimatedCounter end={89} suffix="%" />
                </div>
                <p className="text-xs text-muted-foreground">Alerts resolved before hospital care</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-lg px-8 shadow-lg hover:shadow-xl transition-all bg-primary hover:bg-primary/90">
                <Shield className="w-5 h-5 mr-2" />
                Keep Us Out of Hospital
              </Button>
              <VideoModal>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Prevention Story
                </Button>
              </VideoModal>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <TrendingDown className="w-4 h-4 text-destructive" />
                <span>{rupee}12L average ER bill avoided per family</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-primary" />
                <span>Clinicians intervene before ambulances are needed</span>
              </div>
            </div>
          </div>

          {/* Right - App Video Preview */}
          <div className="relative animate-fade-in delay-300">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20">
              {/* App Video Demo */}
              <div className="aspect-[4/3] bg-muted relative">
                <video autoPlay muted loop playsInline className="w-full h-full object-cover rounded-3xl">
                  <source src="/videos/app-demo.mp4" type="video/mp4" />
                  {/* Fallback content */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Heart className="w-10 h-10 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">CardioShield App</h3>
                      <p className="text-muted-foreground mb-4">Real-time heart protection dashboard</p>
                      <div className="text-sm text-primary">Upload: public/videos/app-demo.mp4</div>
                    </div>
                  </div>
                </video>

                {/* Play button overlay for user control */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
