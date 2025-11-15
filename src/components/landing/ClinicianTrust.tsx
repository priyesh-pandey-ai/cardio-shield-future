import { Card, CardContent } from "@/components/ui/card";
import SectionShell from "./SectionShell";
import { Stethoscope, Quote, Shield } from "lucide-react";

const clinicians = [
  {
    name: "Dr. Neha Vora",
    title: "Senior Cardiologist, Fortis",
    quote:
      "CardioShield gives me context I never get in a 12 minute consult. The AI trendlines and adherence nudges mean I intervene sooner and avoid admissions.",
  },
  {
    name: "Dr. Sahil Menon",
    title: "Electrophysiologist, Manipal Hospitals",
    quote:
      "The arrhythmia models are tuned for Indian baselines. When the system says Amber, I treat it as a serious pre-warning.",
  },
  {
    name: "Dr. Radhika Iyer",
    title: "Chief Medical Officer, CardioShield",
    quote:
      "Every alert is co-signed by a clinician. Families see exactly who reviewed, which builds trust and compliance.",
  },
];

const hospitalLogos = ["Fortis", "Manipal", "Apollo", "Narayana"];

const ClinicianTrust = () => {
  return (
    <SectionShell
      id="clinician-trust"
      tint="rose"
      contentClassName="space-y-10 bg-gradient-to-b from-white via-white to-rose-50/50"
    >
      <div className="text-center space-y-4">
        <p className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">Clinician trust</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">Built with cardiologists, not just coders</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Doctors designed the escalation playbooks so alerts translate into action, not anxiety.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {clinicians.map((clinician, index) => (
          <Card
            key={clinician.name}
            className="border border-rose-100 bg-white/95 shadow-xl animate-fade-in-up"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <CardContent className="p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-900">{clinician.name}</p>
                  <p className="text-sm text-muted-foreground">{clinician.title}</p>
                </div>
              </div>
              <div className="text-sm text-slate-700 leading-relaxed relative pl-6">
                <Quote className="w-4 h-4 text-primary absolute left-0 top-1" />
                {clinician.quote}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="rounded-3xl border border-rose-100 bg-white/90 p-6 flex flex-col lg:flex-row items-center justify-between gap-4">
        <div className="flex-1 space-y-2 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2 text-sm font-semibold text-rose-600 uppercase tracking-[0.35em]">
            <Shield className="w-4 h-4" />
            Partner hospitals
          </div>
          <p className="text-muted-foreground">
            Hospital partners review anonymized logs monthly to ensure CardioShield stays clinically relevant.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 text-sm font-semibold text-slate-600">
          {hospitalLogos.map((logo) => (
            <span key={logo} className="px-4 py-2 rounded-full border border-slate-200 bg-rose-50/60 text-slate-900">
              {logo} Hospitals
            </span>
          ))}
        </div>
      </div>
    </SectionShell>
  );
};

export default ClinicianTrust;
