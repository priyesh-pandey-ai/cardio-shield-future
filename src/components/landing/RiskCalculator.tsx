import { useMemo, useState } from "react";
import SectionShell from "./SectionShell";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calculator, AlertTriangle } from "lucide-react";

const RiskCalculator = () => {
  const [age, setAge] = useState(42);
  const [bp, setBp] = useState(130);
  const [sleep, setSleep] = useState(6);
  const [exercise, setExercise] = useState(2);

  const score = useMemo(() => {
    const normalizedAge = (age - 25) * 0.3;
    const bpPenalty = (bp - 110) * 0.4;
    const sleepPenalty = (7 - sleep) * 4;
    const exerciseBenefit = exercise * -2.5;
    return Math.max(0, Math.min(100, Math.round(40 + normalizedAge + bpPenalty + sleepPenalty + exerciseBenefit)));
  }, [age, bp, sleep, exercise]);

  const riskLevel = useMemo(() => {
    if (score >= 75) return { label: "High risk", color: "text-red-600 bg-red-50 border-red-200" };
    if (score >= 55) return { label: "Amber watch", color: "text-amber-600 bg-amber-50 border-amber-200" };
    return { label: "Healthy trend", color: "text-emerald-600 bg-emerald-50 border-emerald-200" };
  }, [score]);

  return (
    <SectionShell
      id="risk-calculator"
      tint="slate"
      contentClassName="space-y-8 bg-gradient-to-b from-white via-white to-slate-50"
    >
      <div className="text-center space-y-4">
        <p className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">Interactive</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">Check your daily risk trend</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          This quick calculator mirrors how CardioShield blends vitals, sleep, and lifestyle data to predict
          your next 21 days. It is not a medical diagnosis, but a preview of our AI model.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="border border-slate-100 bg-white/95">
          <CardContent className="p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Calculator className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Input vitals</p>
                <p className="text-lg font-semibold text-slate-900">Adjust to match your day</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="age" className="text-sm text-slate-600">
                  Age
                </Label>
                <Input
                  id="age"
                  type="number"
                  min={18}
                  max={90}
                  value={age}
                  onChange={(e) => setAge(parseInt(e.target.value || "0", 10))}
                />
              </div>
              <div>
                <Label htmlFor="bp" className="text-sm text-slate-600">
                  Avg systolic BP today
                </Label>
                <Input
                  id="bp"
                  type="number"
                  min={90}
                  max={200}
                  value={bp}
                  onChange={(e) => setBp(parseInt(e.target.value || "0", 10))}
                />
              </div>
              <div>
                <Label htmlFor="sleep" className="text-sm text-slate-600">
                  Sleep last night (hours)
                </Label>
                <Input
                  id="sleep"
                  type="number"
                  min={0}
                  max={12}
                  step="0.5"
                  value={sleep}
                  onChange={(e) => setSleep(parseFloat(e.target.value || "0"))}
                />
              </div>
              <div>
                <Label htmlFor="exercise" className="text-sm text-slate-600">
                  Exercise days/week
                </Label>
                <Input
                  id="exercise"
                  type="number"
                  min={0}
                  max={7}
                  value={exercise}
                  onChange={(e) => setExercise(parseInt(e.target.value || "0", 10))}
                />
              </div>
            </div>
            <Button variant="outline" className="w-full" disabled>
              Sync with my wearable (coming soon)
            </Button>
          </CardContent>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/5 via-white to-emerald-50">
          <CardContent className="p-8 space-y-6">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.3em] text-primary">Predicted horizon</p>
              <h3 className="text-3xl font-bold text-slate-900">21-day outcome</h3>
            </div>
            <div className="rounded-3xl border bg-white/90 p-6 text-center">
              <p className="text-sm text-slate-500 mb-2">Risk score</p>
              <p className="text-6xl font-black text-slate-900">{score}</p>
              <div className={`mt-4 inline-flex px-4 py-2 rounded-full border text-sm font-semibold ${riskLevel.color}`}>
                {riskLevel.label}
              </div>
            </div>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Sleep adds resilience. Target 7.5h for a 12% risk drop.
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                Every exercise day lowers the score by ~2 points.
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                BP spikes over 140 push you closer to an Amber alert.
              </div>
            </div>
            <div className="rounded-2xl border border-red-100 bg-red-50/70 p-4 text-sm text-red-700 flex items-center gap-3">
              <AlertTriangle className="w-5 h-5" />
              CardioShield automatically notifies your care circle if this score crosses 75 for more than 2 hours.
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionShell>
  );
};

export default RiskCalculator;
