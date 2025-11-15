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
              But it was not sudden at all. Looking back, we saw the signs: his blood pressure creeping up, skipping his evening walks because of work stress, not sleeping well. His smartwatch had all this data. Nobody connected the dots. We only realised it while pacing the ICU hallway.
            </p>
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">Here is the uncomfortable truth:</span> hospitals make money when you are sick. Insurance pays for surgeries, not prevention. Nobody is rewarded for keeping you out of a hospital bed.
            </p>
            <p className="text-xl font-medium text-foreground">So we built CardioShield to end the "rush to ER" story arc.</p>
            <p className="text-muted-foreground">
              CardioShield watches every micro-shift doctors miss between visits and tells your care circle exactly what to do. Families get a heads-up and a care protocol long before the ECG machines and paperwork start.
            </p>
          </div>

          <div className="pt-2">
            <Button size="lg" className="text-lg px-8">
              Keep my family out of the hospital
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
            <div>
              <div className="text-3xl font-bold text-primary">512</div>
              <div className="text-sm text-muted-foreground">ER visits prevented in 2024</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">₹12L</div>
              <div className="text-sm text-muted-foreground">Average hospital bill saved per family</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">6 min</div>
              <div className="text-sm text-muted-foreground">Clinician escalation time</div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
};

export default Story;
