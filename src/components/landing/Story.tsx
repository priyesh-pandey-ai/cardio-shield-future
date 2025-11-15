import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import SectionShell from "./SectionShell";

const Story = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <SectionShell id="story" tint="rose">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-primary">Why we built this</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            The hospital playbook is broken - here is how we learned it the hard way
          </h2>
          <div className="space-y-5 text-lg text-muted-foreground">
            <p>
              Nikhil, 43, collapsed between Zoom calls. Six months earlier his cardiologist said, &quot;Numbers look fine, see you next year,&quot;
              while his BP, sleep debt, and late-night stress spikes crept up unseen across three disconnected apps.
            </p>
            <p>
              When his family reached the ER, the cardiologist asked for data that already existed in three apps and a
              PDF report. The hospital made money that night; Nikhil paid with his savings and six stents. That incentive
              misalignment is the broken experience we refuse to accept.
            </p>
            <p>
              CardioShield is our counter-story. We connect the dots daily, message families in plain language, and
              escalate to CardioShield command <span className="text-foreground font-semibold">before</span> the beeping machines
              enter the chat. It feels less like a medical gadget, more like a friend who will call you out when you are
              sleep-deprived and one samosa away from trouble.
            </p>
          </div>
          <div className="rounded-2xl border border-rose-100 bg-white/80 p-4 text-center text-base text-slate-700 shadow-sm">
            &ldquo;Hospitals profit the moment you are admitted. Nobody gets paid to keep you out.&rdquo;
          </div>
          <Button
            size="lg"
            className="text-base px-8"
            onClick={() => document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })}
          >
            I am ready for the honest version of heart care
          </Button>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
            Built by cardiologists, hospital ops leads, and AI engineers from India&#39;s top systems.
          </p>
        </div>
        <div className="space-y-6 rounded-3xl border border-rose-100 bg-white/80 p-8 shadow-[0_25px_60px_rgba(244,63,94,0.2)]">
          <div className="space-y-4">
            <p className="text-sm font-semibold tracking-[0.3em] text-rose-500 uppercase">Watch the prevention story</p>
            <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
              <DialogTrigger asChild>
                <button
                  type="button"
                  className="group relative block w-full aspect-video bg-muted rounded-2xl overflow-hidden border border-rose-100 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-200"
                >
                  <iframe
                    src="https://www.youtube.com/embed/6X2m8z5_-2Y?autoplay=1&mute=1&controls=0&loop=1&playlist=6X2m8z5_-2Y"
                    title="CardioShield prevention story inline preview"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full pointer-events-none"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow-lg transition group-hover:scale-105">
                      <div className="w-0 h-0 border-l-[14px] border-l-rose-600 border-y-[9px] border-y-transparent ml-1"></div>
                    </div>
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full border-none bg-transparent shadow-none p-0">
                <div className="aspect-video rounded-2xl overflow-hidden">
                  {videoOpen && (
                    <iframe
                      src="https://www.youtube.com/embed/6X2m8z5_-2Y?autoplay=1&rel=0"
                      title="CardioShield prevention story full player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  )}
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-5 space-y-3">
            <p className="text-sm font-semibold text-slate-600 uppercase tracking-[0.35em]">Invisible drift</p>
            <div className="space-y-2 text-slate-700 text-sm">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                <span>BP crept from 122 to 137 in eight weeks.</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>Sleep debt stacked to 9 hours.</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Stress spikes hit 11pm every sprint week.</span>
              </div>
            </div>
          </div>
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
              <li>- CardioShield intervenes within 6 minutes of an Amber alert.</li>
            </ul>
          </div>
        </div>
      </div>
    </SectionShell>
  );
};

export default Story;
