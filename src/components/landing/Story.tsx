import { Button } from "@/components/ui/button";
import SectionShell from "./SectionShell";

const Story = () => {
  return (
    <SectionShell id="story" tint="rose">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-primary">Why we built this</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            The hospital playbook is broken - here is how we learned it the hard way
          </h2>
          <div className="space-y-5 text-lg text-muted-foreground">
            <p>
              Imagine we are catching up over chai. I would not start with CAC or TAM slides. I would tell you about
              my friend Nikhil, 43, who collapsed between Zoom calls. Six months earlier his cardiologist said,
              "Numbers look fine, see you next year." Nobody was watching the tiny drift in his BP, sleep debt, or
              the way his Apple Watch kept flagging stress spikes at 11pm.
            </p>
            <p>
              When his family reached the ER, the cardiologist asked for data that already existed in three apps and a
              PDF report. The hospital made money that night; Nikhil paid with his savings and six stents. That incentive
              misalignment is the broken experience we refuse to accept.
            </p>
            <p>
              CardioShield is our counter-story. We connect the dots daily, message families in plain language, and
              escalate to clinicians <span className="text-foreground font-semibold">before</span> the beeping machines
              enter the chat. It feels less like a medical gadget, more like a friend who will call you out when you are
              sleep-deprived and one samosa away from trouble.
            </p>
          </div>
          <Button size="lg" className="text-base px-8">
            I am ready for the honest version of heart care
          </Button>
        </div>
        <div className="space-y-6 rounded-3xl border border-rose-100 bg-white/80 p-8 shadow-[0_25px_60px_rgba(244,63,94,0.2)]">
          <div className="rounded-2xl border border-rose-200 bg-rose-50/70 p-6 space-y-3">
            <p className="text-sm font-semibold text-rose-600 uppercase tracking-[0.35em]">Broken loop</p>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li>- Visits every 6-12 months leave 300+ days unmonitored.</li>
              <li>- Families discover risk in the ambulance, not on their couch.</li>
              <li>- Hospitals profit the moment you are admitted.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-emerald-100 p-6 space-y-3">
            <p className="text-sm font-semibold text-emerald-700 uppercase tracking-[0.35em]">Friend-first loop</p>
            <ul className="space-y-2 text-slate-800 text-sm">
              <li>- Wearables + labs checked daily for micro shifts.</li>
              <li>- Playbooks sent on WhatsApp before anxiety spirals.</li>
              <li>- Clinicians intervene within 6 minutes of an Amber alert.</li>
            </ul>
          </div>
        </div>
      </div>
    </SectionShell>
  );
};

export default Story;



