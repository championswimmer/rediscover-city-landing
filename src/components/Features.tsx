import { MapPin, Brain, Volume2, Building2 } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Location-Aware AI",
    description: "Our intelligent system knows exactly where you are and tailors stories to your precise location, from street corners to landmarks.",
  },
  {
    icon: Brain,
    title: "Curated Knowledge",
    description: "Access fascinating facts about history, culture, demographics, and economy - all researched and verified by our team of city experts.",
  },
  {
    icon: Volume2,
    title: "David Attenborough Voice",
    description: "Premium users enjoy rich, immersive storytelling read aloud in a captivating David Attenborough-style voice using advanced AI synthesis.",
  },
  {
    icon: Building2,
    title: "Multiple Cities",
    description: "Explore stories across dozens of major cities worldwide, with new locations and content added regularly.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Your Personal City Historian
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the hidden layers of your city with AI-powered storytelling that transforms 
            every walk into an adventure through time and culture.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;