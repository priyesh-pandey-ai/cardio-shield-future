import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Amit",
    age: 43,
    location: "Ahmedabad",
    quote: "CardioShield warned me before my BP went off the charts. It literally changed my life.",
    rating: 5,
  },
  {
    name: "Renu",
    age: 51,
    location: "Jaipur",
    quote: "Hospitals scared me. CardioShield motivates me. My stress levels dropped in a week.",
    rating: 5,
  },
  {
    name: "Suresh",
    age: 38,
    location: "Pune",
    quote: "My smartwatch finally does more than count steps. It protects my heart.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Real People, Real Prevention
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands who've taken control of their heart health with AI.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-border hover:shadow-elevated transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 space-y-4">
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground text-lg leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-border">
                  <div className="font-semibold text-foreground">
                    {testimonial.name}, {testimonial.age}
                  </div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust badge */}
        <div className="text-center mt-12 animate-fade-in-up delay-300">
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">2,000+ users</span> preventing heart disease with CardioShield
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
