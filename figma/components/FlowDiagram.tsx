import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { FlowStep } from "./FlowStep";
import {
  Smartphone,
  User,
  ClipboardList,
  FileText,
  Upload,
  Brain,
  Heart,
  Activity,
  Utensils,
  Pill,
  Building2,
  CreditCard,
  Shield,
  TrendingUp,
  Bell,
  CheckCircle2,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { PhoneMockup } from "./PhoneMockup";
import { NeuralNetwork } from "./NeuralNetwork";
import { WearableSync } from "./WearableSync";
import { HeartOutcome } from "./HeartOutcome";

type Slide = {
  id: string;
  label: string;
  summary: string;
  node: React.ReactNode;
};

export function FlowDiagram() {
  const slides = useMemo<Slide[]>(
    () => [
      {
        id: "01",
        label: "Signup",
        summary: "Mobile-first onboarding",
        node: (
          <FlowStep
            number="01"
            title="User Signup"
            description="Seamless onboarding with mobile-first experience"
            color="teal"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-teal-100 border border-teal-200 flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-teal-600" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="text-slate-900 leading-tight">Mobile Login</h4>
                    <p className="text-slate-600 text-xs">Quick sign-up via email or social auth</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 border border-emerald-200 flex items-center justify-center">
                    <User className="w-6 h-6 text-emerald-600" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="text-slate-900 leading-tight">Profile Creation</h4>
                    <p className="text-slate-600 text-xs">Basic demographics and health goals</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-3 border border-teal-200/50">
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-teal-600" strokeWidth={2} />
                    <span>Account created in under 60 seconds</span>
                  </div>
                </div>
              </div>
              <div className="scale-95 origin-top">
                <PhoneMockup screen="login" />
              </div>
            </div>
          </FlowStep>
        ),
      },
      {
        id: "02",
        label: "Intake",
        summary: "Intelligent questionnaire",
        node: (
          <FlowStep
            number="02"
            title="Onboarding Questionnaire"
            description="Comprehensive lifestyle and symptoms assessment"
            color="emerald"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-100 to-emerald-100 border border-teal-200 flex items-center justify-center mx-auto mb-3">
                  <ClipboardList className="w-8 h-8 text-teal-600" strokeWidth={2} />
                </div>
                <h4 className="text-slate-900 mb-2">Health History</h4>
                <p className="text-slate-600 text-xs">Medical conditions, medications, family history</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 border border-emerald-200 flex items-center justify-center mx-auto mb-3">
                  <Activity className="w-8 h-8 text-emerald-600" strokeWidth={2} />
                </div>
                <h4 className="text-slate-900 mb-2">Lifestyle Habits</h4>
                <p className="text-slate-600 text-xs">Diet, exercise, sleep, stress levels</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-100 to-emerald-100 border border-teal-200 flex items-center justify-center mx-auto mb-3">
                  <FileText className="w-8 h-8 text-teal-600" strokeWidth={2} />
                </div>
                <h4 className="text-slate-900 mb-2">Symptoms Check</h4>
                <p className="text-slate-600 text-xs">Current symptoms and risk indicators</p>
              </div>
            </div>
            <div className="mt-6 bg-slate-50 rounded-2xl p-5 border border-slate-200">
              <div className="grid grid-cols-5 gap-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className={`h-2 rounded-full ${i <= 3 ? "bg-teal-400" : "bg-slate-300"}`}></div>
                ))}
              </div>
              <p className="text-slate-600 text-xs mt-2 text-center">Interactive questionnaire - 5 minutes</p>
            </div>
          </FlowStep>
        ),
      },
      {
        id: "03",
        label: "Data",
        summary: "Reports & wearables",
        node: (
          <FlowStep
            number="03"
            title="Data Intake Layer"
            description="Multi-source health data integration"
            color="teal"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="bg-gradient-to-br from-slate-50 to-teal-50/30 rounded-2xl p-6 border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-teal-200 flex items-center justify-center shadow">
                    <Upload className="w-7 h-7 text-teal-600" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="text-slate-900 mb-1">Medical Reports</h4>
                    <p className="text-slate-600 text-xs">Upload lab results & prescriptions</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {["Blood Test Report", "ECG Results", "Lipid Profile"].map((report, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 bg-white rounded-xl p-2 border border-slate-200 shadow-sm"
                    >
                      <FileText className="w-4 h-4 text-teal-600" strokeWidth={2} />
                      <span className="text-slate-700 text-xs flex-1">{report}</span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" strokeWidth={2} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="scale-95 origin-top">
                <WearableSync />
              </div>
            </div>
          </FlowStep>
        ),
      },
      {
        id: "04",
        label: "AI Core",
        summary: "Risk analytics",
        node: (
          <FlowStep
            number="04"
            title="AI Core Layer"
            description="Advanced risk prediction and pattern detection"
            color="gradient"
            highlight
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-center">
              <div className="lg:col-span-2 space-y-3">
                <div className="bg-white rounded-2xl p-4 border-2 border-teal-200 shadow-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-amber-500" strokeWidth={2} />
                    <h4 className="text-slate-900">AI Analysis</h4>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5"></div>
                      <span>Deep learning risk models</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5"></div>
                      <span>Pattern recognition algorithms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5"></div>
                      <span>Predictive health scoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5"></div>
                      <span>Continuous learning system</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-3 border border-amber-200">
                  <div className="flex items-center gap-2 text-xs text-amber-900">
                    <TrendingUp className="w-4 h-4" strokeWidth={2} />
                    <span>98.5% prediction accuracy</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 scale-95 origin-top">
                <NeuralNetwork />
              </div>
            </div>

            <div className="mt-6 bg-white rounded-2xl border-2 border-teal-200 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                <div className="p-5 bg-slate-50">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-300 flex items-center justify-center">
                      <FileText className="w-4 h-4 text-slate-600" strokeWidth={2} />
                    </div>
                    <h4 className="text-slate-700">Traditional Approach</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {["Annual checkups only", "Reactive treatment", "Limited data visibility", "Generic recommendations"].map(
                      (item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="text-slate-400">-</span>
                          <span>{item}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
                <div className="p-5 bg-gradient-to-br from-teal-50 to-emerald-50">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center shadow-lg">
                      <Brain className="w-4 h-4 text-white" strokeWidth={2} />
                    </div>
                    <h4 className="text-slate-900">CardioShield AI</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {[
                      "Continuous monitoring 24/7",
                      "Proactive risk prediction",
                      "Multi-source data integration",
                      "Personalized AI-driven plans",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5" strokeWidth={2} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FlowStep>
        ),
      },
      {
        id: "05",
        label: "Engage",
        summary: "Daily nudges",
        node: (
          <FlowStep
            number="05"
            title="Personalized Engagement"
            description="Daily nudges and actionable health recommendations"
            color="emerald"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
              <div className="scale-95 origin-top">
                <PhoneMockup screen="dashboard" />
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-4 border-2 border-teal-200 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center">
                      <Utensils className="w-5 h-5 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-slate-900">Nutrition Plan</h4>
                      <p className="text-slate-600 text-xs">Heart-healthy meal suggestions</p>
                    </div>
                  </div>
                  <div className="bg-emerald-50 rounded-xl p-2.5 text-sm text-slate-700">
                    Reduce sodium intake by 500mg/day
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-4 border-2 border-emerald-200 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                      <Activity className="w-5 h-5 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-slate-900">Exercise Goals</h4>
                      <p className="text-slate-600 text-xs">Personalized activity targets</p>
                    </div>
                  </div>
                  <div className="bg-teal-50 rounded-xl p-2.5 text-sm text-slate-700">
                    30 min moderate cardio, 5x/week
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-4 border-2 border-teal-200 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center">
                      <Pill className="w-5 h-5 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-slate-900">Medication Reminders</h4>
                      <p className="text-slate-600 text-xs">Never miss a dose</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-blue-50 rounded-xl p-2.5 text-sm text-slate-700">
                    <Bell className="w-4 h-4 text-blue-600" strokeWidth={2} />
                    <span>Daily reminders at 8 AM & 8 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </FlowStep>
        ),
      },
      {
        id: "06",
        label: "Outcome",
        summary: "Track progress",
        node: (
          <FlowStep
            number="06"
            title="Outcome Layer"
            description="Measurable preventive health outcomes"
            color="gradient"
            highlight
          >
            <div className="flex items-center justify-center scale-95 origin-top">
              <HeartOutcome />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
              {[
                { value: "-35%", label: "Risk Reduction" },
                { value: "89%", label: "User Adherence" },
                { value: "24/7", label: "Monitoring" },
                { value: "98%", label: "Satisfaction" },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-2xl p-4 border border-slate-200 text-center shadow-lg">
                  <div className="text-2xl text-teal-600 mb-1">{item.value}</div>
                  <p className="text-slate-700 text-xs">{item.label}</p>
                </div>
              ))}
            </div>
          </FlowStep>
        ),
      },
      {
        id: "07",
        label: "Backbone",
        summary: "Partners & GTM",
        node: (
          <FlowStep
            number="07"
            title="Business Backbone"
            description="Sustainable revenue model with clinical partnerships"
            color="slate"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-5 border-2 border-slate-300 text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <Building2 className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <h4 className="text-slate-900 mb-2">Lab Partnerships</h4>
                <p className="text-slate-600 text-xs mb-3">Network of 500+ diagnostic centers</p>
                <div className="bg-white rounded-xl p-2.5 text-xs text-slate-700">Seamless test booking & result integration</div>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-5 border-2 border-teal-300 text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-600 to-emerald-600 flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <CreditCard className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <h4 className="text-slate-900 mb-2">Subscription Tiers</h4>
                <p className="text-slate-600 text-xs mb-3">Basic, Premium, Enterprise plans</p>
                <div className="space-y-1.5">
                  <div className="bg-white rounded-lg p-2 text-xs text-slate-700 border border-teal-200">INR 1,499/mo - Basic</div>
                  <div className="bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg p-2 text-xs text-white shadow-lg">INR 1,999/mo - Premium</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5 border-2 border-amber-300 text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <Shield className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <h4 className="text-slate-900 mb-2">Data Security</h4>
                <p className="text-slate-600 text-xs mb-3">HIPAA & GDPR compliant</p>
                <div className="bg-white rounded-xl p-2.5 text-xs text-slate-700">End-to-end encryption - Secure cloud storage</div>
              </div>
            </div>
          </FlowStep>
        ),
      },
    ],
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselHeight, setCarouselHeight] = useState<number | undefined>(undefined);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const totalSlides = slides.length;
  const goTo = (index: number) => {
    setCurrentIndex((index + totalSlides) % totalSlides);
  };

  const next = () => goTo(currentIndex + 1);
  const prev = () => goTo(currentIndex - 1);

  const measureHeight = () => {
    const currentSlide = slideRefs.current[currentIndex];
    if (currentSlide) {
      setCarouselHeight(currentSlide.offsetHeight);
    }
  };

  useLayoutEffect(() => {
    measureHeight();
  }, [currentIndex]);

  useLayoutEffect(() => {
    window.addEventListener("resize", measureHeight);
    return () => window.removeEventListener("resize", measureHeight);
  });

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(id);
  }, [totalSlides]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-20">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-4 mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-3xl blur-xl opacity-30" />
            <div className="relative w-16 h-16 rounded-3xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center shadow-xl">
              <Heart className="w-9 h-9 text-white" fill="white" strokeWidth={2} />
            </div>
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-slate-900">CardioShield</h1>
            <p className="text-teal-600 mt-1 text-lg">AI-Powered Preventive Cardiology</p>
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl text-slate-900 mb-3">How CardioShield Works</h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
          Explore every layer of the experience without scrolling endlessly—flip through the journey at your own pace.
        </p>
      </div>

      <div className="bg-white/80 border border-slate-200 rounded-3xl p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
        <div className="grid gap-4 md:grid-cols-3 text-left text-slate-600 text-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-teal-100 border border-teal-200 flex items-center justify-center text-teal-700 font-semibold">
              24/7
            </div>
            <div>
              <p className="text-slate-900 font-semibold">Continuous AI monitoring</p>
              <p>Risk alerts before symptoms strike</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 font-semibold">
              7
            </div>
            <div>
              <p className="text-slate-900 font-semibold">Standardized stages</p>
              <p>From acquisition to revenue</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 font-semibold">
              360°
            </div>
            <div>
              <p className="text-slate-900 font-semibold">Clinical visibility</p>
              <p>Data, AI, engagement, outcomes</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-12">
        <div
          className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white/80 shadow-[0_20px_60px_rgba(15,23,42,0.12)] transition-[height] duration-500 ease-in-out"
          style={{ height: carouselHeight }}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, idx) => (
              <div
                key={slide.id}
                className="w-full flex-shrink-0 px-2 sm:px-8 py-4"
                ref={(el) => {
                  slideRefs.current[idx] = el;
                }}
              >
                {slide.node}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {slides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => goTo(idx)}
                  className={`flex items-center gap-2 rounded-2xl border px-3 py-2 text-left transition ${
                    idx === currentIndex
                      ? "border-teal-500 bg-gradient-to-r from-teal-50 to-emerald-50 text-slate-900 shadow-sm"
                      : "border-transparent bg-white/40 text-slate-500 hover:border-slate-200"
                  }`}
                >
                  <span className="text-xs font-semibold text-slate-500">{slide.id}</span>
                  <div>
                    <p className="text-sm font-semibold">{slide.label}</p>
                    <p className="text-xs text-slate-500">{slide.summary}</p>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="h-12 w-12 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 transition"
                aria-label="Previous flow slide"
              >
                <ChevronLeft className="w-5 h-5 mx-auto" />
              </button>
              <div className="text-sm font-semibold text-slate-600">
                {String(currentIndex + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
              </div>
              <button
                onClick={next}
                className="h-12 w-12 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 transition"
                aria-label="Next flow slide"
              >
                <ChevronRight className="w-5 h-5 mx-auto" />
              </button>
            </div>
          </div>

          <div className="flex justify-center gap-2">
            {slides.map((slide, idx) => (
              <button
                key={`${slide.id}-dot`}
                onClick={() => goTo(idx)}
                className={`h-2.5 rounded-full transition-all ${
                  idx === currentIndex ? "w-10 bg-teal-500" : "w-4 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${slide.id}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-20 pt-10 border-t border-slate-200">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center">
            <Heart className="w-6 h-6 text-white" fill="white" strokeWidth={2} />
          </div>
          <p className="text-slate-900 text-lg font-semibold">CardioShield</p>
        </div>
        <p className="text-slate-600">Premium AI-Powered Preventive Cardiology Platform</p>
        <p className="text-slate-500 text-sm mt-2">Clinically validated - Data-driven - Personalized care</p>
      </div>
    </div>
  );
}

