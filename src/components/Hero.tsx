import { Button } from "@/components/ui/button";
import { Download, Play } from "lucide-react";
import heroImage from "@/assets/hero-walking.jpg";
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
            Rediscover.city
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
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
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