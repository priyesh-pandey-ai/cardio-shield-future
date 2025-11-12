import { Shield, Lock, Database, CheckCircle } from "lucide-react";

const badges = [
  { icon: Shield, text: "CDSCO Wellness Compliant" },
  { icon: Lock, text: "HIPAA-grade encryption" },
  { icon: Database, text: "10M+ datapoints" },
  { icon: CheckCircle, text: "Partner labs in 10 cities" },
];

const partners = [
  "Thyrocare", "1mg", "Cure.fit", "Practo", "r/IndiaFitness"
];

const TrustBadges = () => {
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        {/* Trust badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {badges.map((badge, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center space-y-3 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                <badge.icon className="w-6 h-6 text-success" />
              </div>
              <p className="text-sm text-muted-foreground font-medium">{badge.text}</p>
            </div>
          ))}
        </div>

        {/* Partners */}
        <div className="text-center space-y-6">
          <p className="text-sm text-muted-foreground uppercase tracking-wider">Trusted Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="text-lg font-semibold text-foreground/70 hover:text-foreground transition-colors"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
