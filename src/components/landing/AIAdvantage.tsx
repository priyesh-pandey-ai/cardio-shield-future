import { FlowDiagram } from "../../../figma/components/FlowDiagram";
import {
  Check,
  X,
  Brain,
  Activity,
  Clock,
  DollarSign,
  Shield,
  AlertTriangle,
  MessageCircle,
  Phone,
  LineChart,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SectionShell from "./SectionShell";

const comparisons = [
  {
    traditional: "Visit doctor once a year",
    cardioshield: "AI monitors you 24/7, every day",
    icon: Clock,
  },
  {
    traditional: "Wait for symptoms to appear",
    cardioshield: "Get warnings 3 weeks before symptoms",
    icon: Activity,
  },
  {
    traditional: "Pay INR 12,00,000+ for surgery",
    cardioshield: "Pay INR 1,199/month for prevention",
    icon: DollarSign,
  },
  {
    traditional: "Doctor sees you for 10 minutes",
    cardioshield: "AI analyzes 10M+ data points continuously",
    icon: Brain,
  },
  {
    traditional: "Reactive treatment after damage",
    cardioshield: "Proactive prevention before damage",
    icon: Shield,
  },
];

const AIAdvantage = () => {
  return (
    <SectionShell
      id="ai-advantage"
      tint="teal"
      contentClassName="space-y-8 bg-gradient-to-b from-white/95 to-white"
    >
      <div className="text-center space-y-4 animate-fade-in-up">
        <p className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">
          Why prevention wins
        </p>
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
          Traditional healthcare vs AI protection
        </h2>
        <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
          One waits for disease to show up. The other detects it 21 days early. Decide whether your family gets a warning or a wake up call.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Card className="border-destructive/30 bg-white/90 shadow-lg animate-fade-in">
          <CardContent className="p-8 space-y-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                <X className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Traditional care</h3>
            </div>
            <ul className="space-y-4">
              {comparisons.map((item) => (
                <li key={item.traditional} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <item.icon className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span>{item.traditional}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4 border-t border-destructive/20 text-sm text-destructive font-medium">
              Pattern: reacts only when it is already too late.
            </div>
          </CardContent>
        </Card>

        <Card className="border-emerald-200 bg-white shadow-xl animate-fade-in delay-200">
          <CardContent className="p-8 space-y-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                <Check className="w-6 h-6 text-success" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">CardioShield AI</h3>
            </div>
            <ul className="space-y-4">
              {comparisons.map((item) => (
                <li key={item.cardioshield} className="flex items-start gap-3 text-sm text-slate-800">
                  <item.icon className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="font-medium">{item.cardioshield}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4 border-t border-success/30 text-sm text-success font-medium">
              Outcome: alerts arrive before ambulances ever do.
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="bg-rose-50 border border-rose-100 shadow-md">
          <CardContent className="p-6 space-y-3">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-destructive" />
              <p className="text-sm font-semibold text-destructive uppercase tracking-[0.3em]">Before</p>
            </div>
            <h3 className="text-xl font-bold text-rose-900">Ambulance, paperwork, ₹2L+ bill</h3>
            <ul className="text-sm text-rose-800 space-y-2">
              <li>- Symptoms appear in the waiting room.</li>
              <li>- Family crowdsources funds overnight.</li>
              <li>- Doctors get a single static ECG strip.</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-emerald-50 border border-emerald-100 shadow-md">
          <CardContent className="p-6 space-y-3">
            <div className="flex items-center gap-3">
              <MessageCircle className="w-6 h-6 text-success" />
              <p className="text-sm font-semibold text-success uppercase tracking-[0.3em]">After CardioShield</p>
            </div>
            <h3 className="text-xl font-bold text-emerald-900">Alert at home + WhatsApp playbook</h3>
            <ul className="text-sm text-emerald-800 space-y-2">
              <li>- AI pings 21 days before risk crosses Amber.</li>
              <li>- Family receives step-by-step plan instantly.</li>
              <li>- CardioShield calls within 6 minutes if trends worsen.</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="border border-slate-200 shadow-md">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <LineChart className="w-6 h-6 text-primary" />
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Risk trend</p>
            </div>
            <div className="h-32 w-full bg-slate-50 rounded-2xl border border-slate-100 relative overflow-hidden">
              <div className="absolute inset-x-4 inset-y-6">
                <div className="h-full flex items-end gap-2">
                  {[10, 25, 30, 45, 55, 70, 82, 64, 40].map((height, idx) => (
                    <div
                      key={idx}
                      className={`flex-1 rounded-t-md ${height >= 70 ? "bg-destructive/80" : height >= 50 ? "bg-amber-400" : "bg-emerald-400"}`}
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                <div className="absolute inset-0 border border-dashed border-slate-200 rounded-2xl pointer-events-none" />
                <div className="absolute top-4 right-4 px-2 py-1 text-xs font-semibold text-white bg-destructive rounded-full">
                  Amber threshold
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-600">
              98.5% prediction accuracy measured across a retrospective cohort of 10,847 Indian users (Journal of Preventive Cardiology, 2024).
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="space-y-6 rounded-[30px] border border-slate-100 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.15)] p-8">
        <div className="text-center space-y-2">
          <p className="text-sm font-semibold tracking-[0.3em] text-primary uppercase">21-day warning window</p>
          <h3 className="text-2xl font-bold text-slate-900">Before vs After CardioShield</h3>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <p className="text-sm font-semibold text-rose-500 uppercase tracking-[0.4em]">Before</p>
            <div className="rounded-2xl border border-rose-100 bg-rose-50/70 p-4">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Annual checkup</span>
                <span>ER visit</span>
              </div>
              <div className="mt-3 h-28 relative">
                <div className="absolute inset-x-0 top-1/2 h-px bg-slate-200" />
                <div className="absolute left-0 top-1/2 w-3/4 h-0.5 bg-slate-400" />
                <div className="absolute right-3 bottom-2 w-4 h-16 bg-gradient-to-t from-rose-500 to-rose-400 rounded-t-full" />
                <div className="absolute right-2 -bottom-1 text-xs font-semibold text-rose-600">Symptoms ➜ ER</div>
              </div>
              <p className="text-sm text-slate-600 mt-4">
                No signal until the emergency. Bills hit ₹2L+ in one night.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-sm font-semibold text-emerald-500 uppercase tracking-[0.4em]">After CardioShield</p>
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>24/7 data stream</span>
                <span>ER avoided</span>
              </div>
              <div className="mt-3 h-28 relative">
                <div className="absolute inset-x-0 top-1/2 h-px bg-slate-200" />
                <div className="absolute left-0 top-1/2 w-full h-0.5 bg-emerald-400" />
                <div className="absolute left-1/2 -translate-x-1/2 bottom-6">
                  <div className="flex flex-col items-center text-xs text-slate-600">
                    <div className="w-10 h-10 rounded-full bg-white shadow flex flex-col items-center justify-center border border-emerald-100">
                      <span className="text-[0.65rem] font-semibold text-primary">AI</span>
                      <span className="text-[0.6rem] text-slate-500">Alert</span>
                    </div>
                    <span className="mt-1 font-semibold text-emerald-600">Day -21</span>
                  </div>
                </div>
                <div className="absolute right-10 bottom-4 flex flex-col items-center text-xs text-slate-600">
                  <div className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center border border-emerald-100">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <span className="mt-1 font-semibold text-primary">CardioShield call</span>
                </div>
                <div className="absolute right-0 top-1/2 w-12 h-0.5 bg-emerald-400" />
              </div>
              <p className="text-sm text-slate-600 mt-4">
                AI flags a tiny drift 21 days early, WhatsApp playbooks engage the family, and the ER trip never happens.
              </p>
            </div>
          </div>
        </div>
        <p className="text-xs text-slate-500 text-center">
          Accuracy note: 98.5% prediction precision validated on 10,847 Indian users (Journal of Preventive Cardiology, 2024).
        </p>
      </div>

      <div className="bg-white rounded-[30px] border border-slate-100 shadow-[0_30px_80px_rgba(15,23,42,0.12)] overflow-hidden">
        <div className="text-center py-6 space-y-2">
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Operational blueprint</p>
          <h3 className="text-2xl font-bold text-slate-900">How CardioShield orchestrates prevention</h3>
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
            From wearable sync to CardioShield escalation, here is the exact flow your family goes through when the AI flags even a tiny drift.
          </p>
        </div>
        <FlowDiagram />
      </div>

      <div className="text-center space-y-3 animate-fade-in-up delay-600">
        <p className="text-lg text-muted-foreground">Do not wait for symptoms. Get AI protection today.</p>
        <div className="text-3xl font-bold text-primary">
          21 day warning window = dramatically better outcomes.
        </div>
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
          <Phone className="w-4 h-4 text-primary" />
          CardioShield intervenes by phone/WhatsApp within 6 minutes of an Amber alert.
        </p>
      </div>
    </SectionShell>
  );
};

export default AIAdvantage;
