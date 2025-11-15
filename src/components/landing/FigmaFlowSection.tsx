import { FlowDiagram } from "../../../figma/components/FlowDiagram";
import SectionShell from "./SectionShell";
import { Card, CardContent } from "@/components/ui/card";
import { Link2, Brain, Stethoscope, Activity, Smartphone, Zap } from "lucide-react";

const steps = [
  {
    title: "Connect devices & reports",
    description: "Apple Health, Google Health Connect, PDFs & partner labs plug in within 2 minutes.",
    icon: Link2,
    detail: "10+ wearable brands supported",
  },
  {
    title: "AI watches 32 signals",
    description: "ECG, HRV, sleep, stress, BP and medication patterns updated every five minutes.",
    icon: Brain,
    detail: "Trained on 10M+ Indian datapoints",
  },
  {
    title: "Clinicians intervene fast",
    description: "Escalations reach coaches + your cardiologist with context, so action happens before symptoms.",
    icon: Stethoscope,
    detail: "WhatsApp, SMS and phone escalation tree",
  },
];

const timeline = [
  "08:00 Wearable sync pushes HRV + BP deltas",
  "08:02 AI Core flags Amber risk in the neural dashboard",
  "08:05 Coach Riya reviews ECG snippet and adds note",
  "08:07 WhatsApp + phone alert to family care circle",
];

const FigmaFlowSection = () => {
  return (
    <SectionShell
      id="how-it-works"
      tint="teal"
      className="overflow-visible"
      contentClassName="space-y-10 bg-gradient-to-b from-white via-white to-emerald-50/40"
    >
      <div className="text-center space-y-4">
        <p className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">
          Operational blueprint
        </p>
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
          This is the actual CardioShield flow in production
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          The interactive mock below is pulled from our product Figma -- the same nodes engineering ships.
          Every box corresponds to a live experience your family goes through.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((step) => (
          <Card key={step.title} className="border border-emerald-100 bg-white/95 shadow-lg">
            <CardContent className="p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <step.icon className="w-6 h-6" />
                </div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Step</p>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
              <div className="inline-flex px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold">
                {step.detail}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-[3fr,2fr] gap-6">
        <div className="rounded-3xl border border-slate-100 bg-white/95 p-6 space-y-3">
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <Smartphone className="w-4 h-4 text-primary" />
            Real sync log (sample data)
          </div>
          <p className="text-2xl font-bold text-slate-900">From wrist to warning in <span className="text-primary">7 minutes</span></p>
          <div className="space-y-2 mt-4">
            {timeline.map((entry) => (
              <div
                key={entry}
                className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 px-4 py-3 text-sm text-slate-700"
              >
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                {entry}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-emerald-100 bg-emerald-50/70 p-6 space-y-3">
          <div className="flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-emerald-700">
            <Activity className="w-4 h-4" />
            Prediction cadence
          </div>
          <p className="text-lg text-slate-700">
            Our AI refreshes your risk score every five minutes, combining wearable vitals, lab uploads, mood
            logs, and medication adherence.
          </p>
          <div className="flex items-center gap-3 text-sm text-emerald-900 font-semibold bg-white/80 rounded-2xl px-4 py-3 border border-emerald-100">
            <Zap className="w-4 h-4" />
            32 biometrics + lifestyle microsignals feed each prediction cycle.
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[30px] border border-slate-100 shadow-[0_30px_80px_rgba(15,23,42,0.15)] overflow-hidden">
        <FlowDiagram />
      </div>
    </SectionShell>
  );
};

export default FigmaFlowSection;
