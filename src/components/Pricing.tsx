import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Crown } from "lucide-react";
import WaitlistForm from "@/components/WaitlistForm";

const plans = [
  {
    name: "Free Explorer",
    price: "$0",
    period: "forever",
    description: "Perfect for casual city wanderers",
    features: [
      "Location-aware facts and trivia",
      "Basic historical information",
      "Text-based stories",
      "3 cities included",
      "Community-generated content",
    ],
    cta: "Join Free Waitlist",
    variant: "outline" as const,
  },
  {
    name: "Premium Storyteller",
    price: "$9.99",
    period: "per month",
    description: "For the ultimate urban explorer",
    features: [
      "Everything in Free Explorer",
      "David Attenborough-style AI narration",
      "Detailed historical deep-dives", 
      "50+ cities and growing",
      "Offline story downloads",
      "Priority content updates",
      "Custom walking routes",
    ],
    cta: "Join Premium Waitlist",
    variant: "hero" as const,
    popular: true,
  },
];

const Pricing = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Choose Your Adventure
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start free and upgrade when you're ready for the full storytelling experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`p-8 relative ${plan.popular ? 'ring-2 ring-primary shadow-xl scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    <Crown className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <WaitlistForm tier={plan.name.toLowerCase().includes('premium') ? 'premium' : 'free'} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;