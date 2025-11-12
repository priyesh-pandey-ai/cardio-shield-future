import { Button } from "@/components/ui/button";
import storyImage from "@/assets/story-image.jpg";

const Story = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={storyImage}
                alt="Man peacefully checking health vitals at home with CardioShield"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div className="space-y-6 animate-fade-in-up delay-200">
            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p className="text-2xl font-medium text-primary">
                When my father had a "sudden" heart attack, it wasn't sudden.
              </p>
              
              <p className="text-muted-foreground">
                The signs were there — blood pressure spikes, skipped meds, stress — but no one connected them.
              </p>
              
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Hospitals make money when you fall sick.</span>{" "}
                We built CardioShield to change that.
              </p>
              
              <p className="text-xl font-medium text-foreground">
                Your health shouldn't depend on luck. It should depend on data.
              </p>
            </div>

            <div className="pt-6">
              <Button size="lg" className="text-lg px-8">
                Protect Your Family — Join CardioShield Free
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">30%</div>
                <div className="text-sm text-muted-foreground">Fewer Emergencies</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">10M+</div>
                <div className="text-sm text-muted-foreground">Data Points</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">AI Protection</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
