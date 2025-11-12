import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useState } from "react";
import { toast } from "sonner";

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    toast.success("Welcome to CardioShield Beta! Check your email for next steps.", {
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

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto shadow-elevated border-primary/20 animate-fade-in-up">
          <CardHeader className="text-center space-y-4 p-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Join the Prevention Revolution
            </h2>
            <p className="text-lg text-muted-foreground">
              Get early access to CardioShield — your heart's AI ally
            </p>
          </CardHeader>

          <CardContent className="p-8 pt-0">
            <form onSubmit={handleSubmit} className="space-y-6">
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

              <Button type="submit" size="lg" className="w-full text-lg py-6">
                Get 3 Free Risk Reports
              </Button>

              <p className="text-sm text-center text-muted-foreground">
                By signing up, you agree to receive health insights and updates from CardioShield.
              </p>
            </form>
          </CardContent>
        </Card>

        {/* Newsletter signup */}
        <div className="text-center mt-12 space-y-4 animate-fade-in-up delay-200">
          <p className="text-muted-foreground">
            Want to stay updated? Subscribe to our newsletter
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="h-12"
            />
            <Button variant="outline" className="px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
