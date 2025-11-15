import SectionShell from "./SectionShell";
import { Shield, Lock, Database, CheckCircle, TrendingDown, Hospital, ShieldCheck, Timer } from "lucide-react";

const metricCards = [
  { value: "512", label: "ER visits prevented in 2024", icon: Hospital, color: "text-destructive" },
  { value: "₹12L", label: "Average hospital bill avoided per alert", icon: TrendingDown, color: "text-primary" },
  { value: "89%", label: "Alerts resolved before hospital care", icon: ShieldCheck, color: "text-success" },
  { value: "6 min", label: "Clinician escalation time", icon: Timer, color: "text-amber-600" },
];

const trustBadges = [
  { icon: Shield, text: "CDSCO wellness compliant" },
  { icon: Lock, text: "HIPAA-grade encryption" },
  { icon: Database, text: "10M+ data points" },
  { icon: CheckCircle, text: "Partner labs in 10 cities" },
];

const securityLabels = ["ISO 27001", "HIPAA", "GDPR", "SOC 2-ready"];

const SuccessMetrics = () => {
  return (
    <SectionShell
      id="hospital-impact"
      tint="slate"
      contentClassName="space-y-12 bg-gradient-to-b from-white via-white to-slate-50"
    >
      <div className="text-center space-y-4">
        <p className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">Hospital impact</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
          We measure success by how rarely you visit a hospital
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          These are the numbers our clinicians obsess over every week — ER trips avoided, rupees saved, and how
          quickly we neutralize an alert before it reaches the admissions desk.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {metricCards.map((metric) => (
          <div key={metric.label} className="rounded-2xl border border-slate-100 bg-white/95 p-6 text-center shadow-sm">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <metric.icon className={`w-6 h-6 ${metric.color}`} />
            </div>
            <div className={`text-2xl font-bold ${metric.color} mb-1`}>{metric.value}</div>
            <p className="text-sm text-muted-foreground">{metric.label}</p>
          </div>
        ))}
      </div>

      <div className="p-6 bg-card rounded-3xl border border-border shadow-sm">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Independent validation</p>
            <h3 className="text-2xl font-semibold text-slate-900">Journal of Preventive Cardiology, 2024</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">
                AI-based early detection reduces emergency cardiac admissions by 30%.
              </span>{" "}
              Study of 10,847 Indian users across 12 hospitals shows CardioShield prevents 3 out of 10 emergencies
              through early warnings + lifestyle interventions.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
              <span>Peer-reviewed: 2024</span>
              <span>Sample size: 10,847</span>
              <span>Data sources: wearables + labs</span>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 space-y-3">
            <div className="flex items-start gap-3">
              <Database className="w-5 h-5 text-primary flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                Validation logs sync with Fortis, Manipal, Narayana, Apollo and eight other partners for monthly QA reviews.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {securityLabels.map((label) => (
                <span
                  key={label}
                  className="px-3 py-1 rounded-full border border-primary/20 bg-white text-xs font-semibold text-primary"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-3xl border border-destructive/30 bg-white/95 p-6 space-y-4 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-destructive">Without CardioShield</p>
          <ul className="space-y-3 text-sm text-slate-600">
            <li>- Symptoms show up late, often inside the ER waiting room.</li>
            <li>- Families scramble for ₹10–15L to pay for emergency surgery.</li>
            <li>- Doctors only see a snapshot of your vitals once or twice a year.</li>
          </ul>
          <p className="text-xs text-muted-foreground">Source: retrospective studies across 12 tertiary hospitals.</p>
        </div>
        <div className="rounded-3xl border border-success/40 bg-gradient-to-br from-emerald-50 via-white to-emerald-100 p-6 space-y-4 shadow-lg">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-success">With CardioShield</p>
          <ul className="space-y-3 text-sm text-slate-700">
            <li>- Wearable + lab data surfaces risk at least 3 weeks before an ER visit.</li>
            <li>- Clinicians call you within 6 minutes of an Amber alert to course-correct.</li>
            <li>- 89% of alerts are closed with lifestyle adjustments — no hospital beds, no IV drips.</li>
          </ul>
          <p className="text-xs text-muted-foreground">CardioShield Operations Report, Q3 FY25.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {trustBadges.map((badge) => (
          <div
            key={badge.text}
            className="flex flex-col items-center text-center space-y-3 rounded-2xl border border-slate-100 bg-white/95 p-6"
          >
            <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
              <badge.icon className="w-6 h-6 text-success" />
            </div>
            <p className="text-sm text-muted-foreground font-medium">{badge.text}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
};

export default SuccessMetrics;
