import { Brain, Shield, TrendingUp, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "AI Risk Prediction",
    description: "Detects early cardiac risk patterns from wearables & reports weeks before symptoms.",
    color: "text-chart-1",
  },
  {
    icon: Shield,
    title: "24/7 Monitoring",
    description: "Continuous tracking through smartwatch and phone sensors keeps your heart protected.",
    color: "text-chart-3",
  },
  {
    icon: TrendingUp,
    title: "Personalized Coaching",
    description: "Daily nudges and insights to improve lifestyle metrics and reduce heart risk.",
    color: "text-chart-4",
  },
  {
    icon: Calendar,
    title: "Lab Integration",
    description: "Seamless partner diagnostics for blood tests every quarter with instant dashboard updates.",
    color: "text-chart-5",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Your Heart, Under 24/7 AI Watch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            CardioShield combines cutting-edge AI with continuous monitoring to catch heart risks before they become emergencies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-border hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className={`w-14 h-14 rounded-2xl bg-muted flex items-center justify-center ${feature.color}`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
