import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <Heart className="w-5 h-5 text-primary animate-heartbeat" />
            <span className="text-sm font-medium text-primary">Prevention Over Surgery</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
            Built to make hospitals less busy.
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every 100,000 users we protect prevents 2,000+ surgeries — saving lives and ₹400 crore in healthcare costs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="text-lg px-10 py-6 shadow-lg hover:shadow-xl">
              Join Free — Keep Your Heart Out of Hospitals
            </Button>
          </div>

          {/* Trust stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-primary">2,000+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">30%</div>
              <div className="text-sm text-muted-foreground">Fewer Emergencies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Partner Cities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
