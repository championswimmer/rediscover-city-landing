import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    location: "San Francisco",
    text: "Walking through Chinatown will never be the same. I learned more about my own neighborhood in 30 minutes than I had in 5 years of living here.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    location: "Barcelona", 
    text: "The AI narrator made me feel like I was in a documentary. Every corner had a story, every building had a secret. Absolutely magical.",
    rating: 5,
  },
  {
    name: "Emma Thompson",
    location: "London",
    text: "As a history teacher, I'm blown away by the accuracy and depth. This is better than any walking tour I've ever taken.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-accent/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Stories from Fellow Explorers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of curious minds discovering their cities in entirely new ways.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 bg-card hover:shadow-lg transition-shadow duration-300">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <blockquote className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </blockquote>
              
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-muted-foreground text-sm">{testimonial.location}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;