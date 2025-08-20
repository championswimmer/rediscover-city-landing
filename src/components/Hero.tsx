import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import heroImage from "@/assets/hero-explorer.jpg";
import WaitlistForm from "@/components/WaitlistForm";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
            rediscover.city
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 font-light opacity-90">
            Walk the streets. Hear their stories.
          </p>
          
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-80 leading-relaxed">
            Turn every walk into a journey through time. Our AI narrator reveals the hidden history, 
            culture, and secrets of your city as you explore.
          </p>
          
          <div className="flex flex-col gap-6 items-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <WatchDemoDialogButton />
            </div>
            
            <div className="max-w-md w-full">
              <WaitlistForm className="bg-white/95 backdrop-blur-sm" />
            </div>
          </div>
          
          <p className="text-sm opacity-70 mt-8">
            Coming soon to iOS and Android
          </p>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

const WatchDemoDialogButton = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open && typeof window !== "undefined" && (window as any).twttr?.widgets?.load) {
      (window as any).twttr.widgets.load();
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
          <Play className="w-5 h-5" />
          Watch Demo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px]">
        <div className="max-h-[75vh] overflow-auto">
          <blockquote className="twitter-tweet" data-media-max-width="560">
            <p lang="en" dir="ltr">
              This tweet from <a href="https://twitter.com/pitdesi?ref_src=twsrc%5Etfw">@pitdesi</a> was the trigger to start building rediscover-city
              <br />
              <br />
              Here&apos;s the progress so far - dogfooding this near the Meta london office
              <br />
              <br />
              - need some David Atenborough style voice, not the vanilla TTS ones
              <br />- need to make it always-on &amp; adapts as you walk around <a href="https://t.co/Cb0RuuM4rX">https://t.co/Cb0RuuM4rX</a> <a href="https://t.co/K5eaLuyzft">pic.twitter.com/K5eaLuyzft</a>
            </p>
            &mdash; Arnav Gupta (@championswimmer) <a href="https://twitter.com/championswimmer/status/1957511890655146402?ref_src=twsrc%5Etfw">August 18, 2025</a>
          </blockquote>
        </div>
      </DialogContent>
    </Dialog>
  );
};