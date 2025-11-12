import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Heart, Shield } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    age: 45,
    location: "Bangalore",
    role: "Software Developer at Infosys",
    avatar: "/images/rajesh-avatar.jpg",
    quote: "CardioShield caught my BP spikes during code deployments. Now I take breaks when the AI tells me to. This app saved my career and marriage!",
    rating: 5,
    outcome: "Avoided emergency hospital visit",
    image: "/images/rajesh-family.jpg"
  },
  {
    name: "Priya Sharma",
    age: 38,
    location: "Mumbai", 
    role: "Marketing Professional",
    avatar: "/images/priya-avatar.jpg",
    quote: "My father had bypass surgery at 50. CardioShield feels like having a doctor watching over me 24/7. I sleep better at night knowing the AI is monitoring my heart.",
    rating: 5,
    outcome: "Early detection of arrhythmia",
    image: "/images/priya-dad.jpg"
  },
  {
    name: "Amit Patel",
    age: 52,
    location: "Ahmedabad",
    role: "Business Owner",
    avatar: "/images/amit-avatar.jpg", 
    quote: "Thought smartwatches were for kids. My son gifted me one with CardioShield. Last month, it warned me about irregular heartbeats. Doctor confirmed and started medication early.",
    rating: 5,
    outcome: "Prevented potential heart attack",
    image: "/images/amit-business.jpg"
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Real Stories. Real Lives Saved.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Fathers, husbands, and sons who are here today because CardioShield was watching.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-border hover:shadow-elevated transition-all duration-300 animate-fade-in-up group overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Avatar */}
              <div className="relative h-32 bg-gradient-to-br from-primary/10 to-accent/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg"
                    onError={(e) => {
                      e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23e5e7eb'/%3E%3Ctext x='50' y='50' text-anchor='middle' dy='.3em' font-family='Arial' font-size='20' fill='%236b7280'%3E${testimonial.name.charAt(0)}%3C/text%3E%3C/svg%3E`;
                    }}
                  />
                  <Quote className="w-6 h-6 text-primary/40 absolute top-2 right-2" />
                </div>
                {/* Outcome Badge */}
                <div className="absolute top-4 right-4 bg-success/10 text-success px-3 py-1 rounded-full text-xs font-medium">
                  <Shield className="w-3 h-3 inline mr-1" />
                  {testimonial.outcome}
                </div>
              </div>

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

                {/* Author Info */}
                <div className="pt-4 border-t border-border">
                  <div className="font-semibold text-foreground">
                    {testimonial.name}, {testimonial.age}
                  </div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>

                {/* Family Photo */}
                <div className="mt-4 rounded-lg overflow-hidden bg-muted h-32">
                  <img 
                    src={testimonial.image}
                    alt={`${testimonial.name} with family`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full items-center justify-center text-muted-foreground hidden">
                    <div className="text-center">
                      <Heart className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-xs">Family photo protected</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12 animate-fade-in-up delay-500">
          <p className="text-muted-foreground mb-4">
            <span className="font-semibold text-foreground">10,000+ families</span> trust CardioShield for heart protection
          </p>
          <div className="flex justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-2">4.9/5 from 2,847 verified reviews</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
