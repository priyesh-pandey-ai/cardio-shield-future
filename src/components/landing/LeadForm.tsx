import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight, CheckCircle, Smartphone, Mail, Shield, Heart, Users, Clock, Zap } from "lucide-react";
import SectionShell from "./SectionShell";

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Welcome to CardioShield! Check your email for instant access.", {
      duration: 5000,
    });
    setFormData({ name: "", email: "", phone: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const flowSteps = [
    {
      icon: Mail,
      title: "Instant Welcome Email",
      description: "Get your account details and download links for iOS/Android apps",
      time: "Arrives in 30 seconds",
      color: "primary"
    },
    {
      icon: Smartphone,
      title: "Download & Connect",
      description: "Link your smartwatch or upload recent health reports in 2 minutes",
      time: "Takes 2 minutes",
      color: "success"
    },
    {
      icon: Heart,
      title: "First AI Analysis",
      description: "Receive your personalized heart risk score and health insights",
      time: "Ready in 5 minutes",
      color: "destructive"
    },
    {
      icon: Shield,
      title: "24/7 Protection Active",
      description: "AI starts monitoring your heart health and sends real-time alerts",
      time: "Immediate",
      color: "accent"
    }
  ];

  return (
    <SectionShell id="lead-form" tint="slate" contentClassName="space-y-12 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Your Heart Protection Journey Starts Here
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sign up takes 30 seconds. Within 5 minutes, you'll get your first AI risk report. No credit card required.
          </p>
        </div>

        {/* Welcome Flow Wireframe */}
        <div className="mb-16 p-8 bg-card rounded-3xl shadow-card max-w-5xl mx-auto animate-fade-in">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Your Welcome Journey - 5 Minutes to Protection
          </h3>
          
          {/* Flow Visualization */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {flowSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-gradient-to-br from-white to-muted/50 rounded-2xl p-6 border border-border hover:shadow-md transition-all">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-xs font-medium text-muted-foreground mb-2">
                      Step {index + 1}
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                    <div className="flex items-center justify-center gap-1 text-xs text-primary">
                      <Clock className="w-3 h-3" />
                      <span>{step.time}</span>
                    </div>
                  </div>
                </div>
                
                {/* Arrow Connector */}
                {index < flowSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 text-primary">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="bg-muted rounded-full h-2 mb-4">
            <div className="bg-gradient-to-r from-primary to-success h-2 rounded-full w-full"></div>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            <Zap className="w-4 h-4 inline mr-1 text-primary" />
            Complete journey in under 5 minutes
          </p>
        </div>

        {/* What You Get Immediately */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto animate-fade-in-up delay-200">
          <Card className="text-center p-6 border-primary/20 bg-primary/5">
            <CheckCircle className="w-8 h-8 text-primary mx-auto mb-3" />
            <h4 className="font-semibold text-foreground mb-2">3 Free AI Reports</h4>
            <p className="text-sm text-muted-foreground">
              No credit card required. See your risk scores immediately.
            </p>
          </Card>
          
          <Card className="text-center p-6 border-success/20 bg-success/5">
            <Users className="w-8 h-8 text-success mx-auto mb-3" />
            <h4 className="font-semibold text-foreground mb-2">Family Access</h4>
            <p className="text-sm text-muted-foreground">
              Add up to 5 family members. Protect everyone you love.
            </p>
          </Card>
          
          <Card className="text-center p-6 border-accent/20 bg-accent/5">
            <Shield className="w-8 h-8 text-accent mx-auto mb-3" />
            <h4 className="font-semibold text-foreground mb-2">Doctor Consultation</h4>
            <p className="text-sm text-muted-foreground">
              Free doctor review of your first AI risk report.
            </p>
          </Card>
        </div>

        {/* Sign Up Form */}
        <Card className="max-w-2xl mx-auto shadow-elevated border-primary/20 animate-fade-in-up delay-300">
          <CardHeader className="text-center space-y-4 p-8">
            <h2 className="text-2xl font-bold text-foreground">
              Start Your Free Protection Now
            </h2>
            <p className="text-muted-foreground">
              Join 10,000+ families who chose prevention over emergency
            </p>
          </CardHeader>

          <CardContent className="p-8 pt-0">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-12"
                />
              </div>

              <Button type="submit" size="lg" className="w-full text-lg py-6">
                <Shield className="w-5 h-5 mr-2" />
                Get My 3 Free AI Reports
              </Button>

              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>No credit card</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>Cancel anytime</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>30-day guarantee</span>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Emergency Prevention Stats */}
        <div className="text-center mt-12 space-y-4 animate-fade-in-up delay-500">
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">Every 60 seconds</span>, someone in India has a heart attack.
          </p>
          <p className="text-lg text-primary font-semibold">
            Don't wait. Protect your family today.
          </p>
        </div>
      </div>
    </SectionShell>
  );
};

export default LeadForm;
