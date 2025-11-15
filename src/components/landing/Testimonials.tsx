import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Shield } from "lucide-react";
import SectionShell from "./SectionShell";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

const testimonials = [
  {
    name: "Rajesh Kumar",
    age: 45,
    location: "Bangalore",
    role: "Software Developer at Infosys",
    avatar: "/images/rajesh-avatar.jpg",
    quote:
      "CardioShield caught my BP spikes during code deployments. Now I take breaks when the AI tells me to. This app saved my career and marriage!",
    rating: 5,
    outcome: "Avoided emergency hospital visit",
    image: "/images/rajesh-family.jpg",
  },
  {
    name: "Priya Sharma",
    age: 38,
    location: "Mumbai",
    role: "Marketing Professional",
    avatar: "/images/priya-avatar.jpg",
    quote:
      "My father had bypass surgery at 50. CardioShield feels like having a doctor watching over me 24/7. I sleep better at night knowing the AI is monitoring my heart.",
    rating: 5,
    outcome: "Early detection of arrhythmia",
    image: "/images/priya-dad.jpg",
  },
  {
    name: "Amit Patel",
    age: 52,
    location: "Ahmedabad",
    role: "Business Owner",
    avatar: "/images/amit-avatar.jpg",
    quote:
      "Thought smartwatches were for kids. My son gifted me one with CardioShield. It warned me about irregular heartbeats. Doctor confirmed and started medication early.",
    rating: 5,
    outcome: "Prevented potential heart attack",
    image: "/images/amit-business.jpg",
  },
];

const Testimonials = () => {
  return (
    <SectionShell
      id="testimonials"
      tint="slate"
      contentClassName="bg-gradient-to-b from-white to-slate-50 space-y-8"
    >
      <div className="space-y-8">
        <div className="text-center space-y-4 animate-fade-in-up">
          <p className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">Social proof</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">Real families. Real outcomes.</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Fathers, partners, and founders who are still at the dinner table because CardioShield was watching.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card
            key={testimonial.name}
            className="border border-slate-100 bg-white/90 hover:shadow-2xl transition-all group"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="relative h-36 bg-gradient-to-br from-primary/10 to-emerald-200/5">
              <div className="absolute inset-0 flex items-center justify-center">
                <ImageWithFallback
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg ring-1 ring-slate-100"
                />
                <Quote className="w-6 h-6 text-primary/40 absolute top-4 right-4" />
              </div>
            </div>
            <div className="-mt-10 px-6">
              <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-4 shadow-xl border border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/10">
                  <Shield className="w-4 h-4 text-emerald-300" />
                </div>
                <p className="text-lg font-semibold text-white leading-snug">{testimonial.outcome}</p>
              </div>
            </div>
            <CardContent className="p-6 pt-4 space-y-5">
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-base text-slate-800 leading-relaxed">"{testimonial.quote}"</p>
              <div className="pt-4 border-t border-slate-100 text-sm">
                <div className="font-semibold text-slate-900">
                  {testimonial.name}, {testimonial.age}
                </div>
                <div className="text-muted-foreground">{testimonial.role}</div>
                <div className="text-muted-foreground">{testimonial.location}</div>
              </div>
              <div className="mt-2 rounded-2xl overflow-hidden bg-muted h-44 border border-slate-100 shadow-inner">
                <ImageWithFallback
                  src={testimonial.image}
                  alt={`${testimonial.name} with family`}
                  className="w-full h-full object-cover"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center space-y-3 animate-fade-in-up delay-500">
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-primary/30 bg-primary/5">
          <Star className="w-4 h-4 fill-primary text-primary" />
          <span className="font-semibold text-slate-800">4.9/5 from 2,847 verified reviews</span>
        </div>
        <p className="text-muted-foreground">
          <span className="font-semibold text-slate-900">10,000+ families</span> trust CardioShield to watch their vitals.
        </p>
        <div className="flex justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-primary text-primary" />
          ))}
        </div>
      </div>
    </SectionShell>
  );
};

export default Testimonials;
