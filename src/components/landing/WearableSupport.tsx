import { Watch, Sparkles, Zap } from "lucide-react";
import SectionShell from "./SectionShell";

const wearablePlatforms = [
  {
    name: "Apple Watch",
    subtitle: "Series 6 and above",
    description:
      "Streams ECG, heart rate, HRV and sleep depth so the AI can calculate instant stability scores.",
    highlights: ["Native fall + arrhythmia alerts", "Taptic nudges when stress spikes"],
  },
  {
    name: "Wear OS",
    subtitle: "Samsung, Pixel, Fossil and more",
    description:
      "Collects continuous vitals, activity and recovery trends into a single stream we can act on quickly.",
    highlights: ["Auto-syncs steps, SPO2, sleep", "30 second recovery predictions"],
  },
];

const signalMetrics = [
  { label: "Signals monitored", value: "32" },
  { label: "Prediction updates", value: "Every 5 min" },
  { label: "Alert latency", value: "< 10 sec" },
];

const WearableSupport = () => {
  return (
    <SectionShell
      id="wearables"
      tint="amber"
      contentClassName="space-y-12 bg-gradient-to-b from-white via-white to-amber-50/20"
    >
      <div className="text-center space-y-4">
        <p className="text-sm font-semibold tracking-[0.25em] text-amber-600 uppercase">
          Wearable ready
        </p>
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
          Apple Watch & Wear OS plug straight into CardioShield
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          No hardware guessing. We already sit on top of Apple Health and Google Health Connect, so your
          watch becomes an instant cardiac early-warning system.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {signalMetrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-2xl border border-amber-100/60 bg-white/90 p-6 text-center shadow-sm"
          >
            <div className="text-3xl font-bold text-amber-600">{metric.value}</div>
            <div className="text-sm text-muted-foreground mt-1">{metric.label}</div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {wearablePlatforms.map((platform) => (
          <div
            key={platform.name}
            className="rounded-3xl border border-slate-100 bg-white/95 p-8 shadow-[0_20px_50px_rgba(15,23,42,0.08)] space-y-5"
          >
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
                <Watch className="w-7 h-7" />
              </div>
              <div>
                <div className="text-2xl font-semibold text-slate-900">{platform.name}</div>
                <div className="text-sm text-muted-foreground">{platform.subtitle}</div>
              </div>
            </div>
            <p className="text-base text-muted-foreground">{platform.description}</p>
            <ul className="space-y-3">
              {platform.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3 text-sm text-slate-800">
                  <Sparkles className="w-4 h-4 text-amber-500 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3 text-sm font-medium text-emerald-600">
              <Zap className="w-4 h-4" />
              Instant predictions flow into the AI dashboard—no CSV uploads, no manual syncing.
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-amber-50 p-8 flex flex-col lg:flex-row items-center gap-6">
        <div className="flex-1 space-y-3 text-center lg:text-left">
          <h3 className="text-2xl font-bold text-slate-900">From wrist to warning in one tap</h3>
          <p className="text-muted-foreground">
            When your wearables detect micro-shifts in vitals, CardioShield translates them into risk predictions
            and notifies your care circle immediately.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-center">
            <div className="text-xs font-semibold text-slate-500 uppercase">Supported</div>
            <div className="text-lg font-bold text-slate-900">Apple Watch</div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-center">
            <div className="text-xs font-semibold text-slate-500 uppercase">Supported</div>
            <div className="text-lg font-bold text-slate-900">Wear OS</div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
};

export default WearableSupport;
