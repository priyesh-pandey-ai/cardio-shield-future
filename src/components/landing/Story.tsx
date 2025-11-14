import { Button } from "@/components/ui/button";
import storyImage from "@/assets/story-image.jpg";
import SectionShell from "./SectionShell";

const Story = () => {
  return (
    <SectionShell id="story" tint="rose">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative animate-fade-in">
          <div className="rounded-3xl overflow-hidden shadow-elevated">
            <img
              src={storyImage}
              alt="Man peacefully checking health vitals at home with CardioShield"
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
        </div>

        <div className="space-y-6 animate-fade-in-up delay-200">
          <div className="space-y-6 text-base lg:text-lg leading-relaxed text-foreground">
            <p className="text-2xl font-medium text-primary">
              You know how they say heart attacks happen "suddenly"?
            </p>
            <p className="text-muted-foreground">
              That is what they told my family when my dad collapsed at his desk. 52 years old, "perfectly healthy," according to his last checkup 6 months ago.
            </p>
            <p className="text-muted-foreground">
              But it was not sudden at all. Looking back, we saw the signs: his blood pressure creeping up, skipping his evening walks because of work stress, not sleeping well. His smartwatch had all this data. Nobody connected the dots.
            </p>
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">Here is the uncomfortable truth:</span> hospitals make money when you are sick. Insurance pays for surgeries, not prevention. The system is broken.
            </p>
            <p className="text-xl font-medium text-foreground">So we built the thing that could have saved my dad.</p>
            <p className="text-muted-foreground">
              CardioShield watches all those little signs -- the ones doctors miss between visits. It connects the dots that no human has time to connect. It gives you the warnings my dad never got.
            </p>
          </div>

          <div className="pt-2">
            <Button size="lg" className="text-lg px-8">
              Do not wait for warning signs -- get AI protection
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
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
    </SectionShell>
  );
};

export default Story;
