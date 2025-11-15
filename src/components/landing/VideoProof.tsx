import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Star, Quote, CheckCircle } from "lucide-react";
import VideoModal from "./VideoModal";

const videoProofs = [
  {
    title: "Real Doctor Reviews AI Prediction",
    thumbnail: "/doctor-review.jpg",
    duration: "2:45",
    description: "Cardiologist explains how CardioShield AI caught early warning signs"
  },
  {
    title: "Family's Story: Prevention at Work",
    thumbnail: "/family-story.jpg", 
    duration: "3:20",
    description: "How Rajesh avoided heart surgery thanks to early AI detection"
  },
  {
    title: "Behind the Tech: AI Explained",
    thumbnail: "/tech-behind.jpg",
    duration: "4:15", 
    description: "Our data scientists break down the 10M+ dataset training"
  }
];

const VideoProof = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            See the Proof. Hear the Stories.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real doctors. Real families. Real results. Don't just take our word for it.
          </p>
        </div>

        {/* Main Featured Video */}
        <div className="mb-16 animate-fade-in">
          <Card className="max-w-4xl mx-auto overflow-hidden shadow-elevated border-primary/20">
            <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-accent/10">
              {/* Video Thumbnail Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto animate-pulse-glow">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Dr. Mehta Reviews CardioShield AI
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      "This technology could prevent 50% of emergency cardiac admissions"
                    </p>
                    <p className="text-sm text-muted-foreground">Leading Cardiologist, Apollo Hospitals</p>
                  </div>
                </div>
              </div>
              <VideoModal>
                <Button className="absolute inset-0 w-full h-full bg-black/20 hover:bg-black/30 transition-colors">
                  <span className="sr-only">Play video</span>
                </Button>
              </VideoModal>
            </div>
          </Card>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {videoProofs.map((video, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-elevated transition-all duration-300 animate-fade-in-up border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-video bg-muted">
                {/* Thumbnail Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
                  <div className="text-center p-4">
                    <Play className="w-12 h-12 text-primary mx-auto mb-2" />
                    <p className="text-sm font-medium text-foreground">{video.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{video.duration}</p>
                  </div>
                </div>
                <VideoModal>
                  <Button className="absolute inset-0 w-full h-full bg-black/10 hover:bg-black/20 transition-colors">
                    <span className="sr-only">Play {video.title}</span>
                  </Button>
                </VideoModal>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">{video.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="bg-card rounded-3xl p-8 shadow-card max-w-4xl mx-auto animate-fade-in-up delay-300">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <div className="text-3xl font-bold text-primary mb-1">4.9/5</div>
              <p className="text-sm text-muted-foreground">User Rating</p>
            </div>
            <div>
              <CheckCircle className="w-8 h-8 text-success mx-auto mb-2" />
              <div className="text-3xl font-bold text-primary mb-1">512</div>
              <p className="text-sm text-muted-foreground">ER visits prevented (2024)</p>
            </div>
            <div>
              <Quote className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-primary mb-1">1000+</div>
              <p className="text-sm text-muted-foreground">Video Testimonials</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in-up delay-500">
          <p className="text-lg text-muted-foreground mb-4">
            Join the families who've chosen prevention over emergency
          </p>
          <Button size="lg" className="text-lg px-8">
            Start Your Protection Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoProof;
