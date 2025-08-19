import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Mail, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface WaitlistFormProps {
  tier?: 'free' | 'premium';
  className?: string;
}

const WaitlistForm = ({ tier = 'free', className = '' }: WaitlistFormProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address to join the waitlist.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Replace with actual API endpoint
      // const response = await fetch('/api/waitlist', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ email, tier }),
      // });

      // Simulate API call for now
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      toast({
        title: "Welcome to the waitlist!",
        description: `You'll be the first to know when rediscover.city launches.`,
      });
      
      // TODO: Handle API response
      // if (!response.ok) throw new Error('Failed to join waitlist');
      
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className={`p-6 text-center ${className}`}>
        <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-foreground mb-2">
          You're on the list!
        </h3>
        <p className="text-muted-foreground">
          We'll notify you as soon as rediscover.city is available for {tier} users.
        </p>
      </Card>
    );
  }

  return (
    <Card className={`p-6 ${className}`}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="text-center mb-4">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Join the {tier === 'premium' ? 'Premium' : 'Free'} Waitlist
          </h3>
          <p className="text-muted-foreground text-sm">
            Be the first to experience AI-powered city storytelling
          </p>
        </div>
        
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10"
              disabled={isSubmitting}
            />
          </div>
          <Button 
            type="submit" 
            variant={tier === 'premium' ? 'hero' : 'default'}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Joining...' : 'Join'}
          </Button>
        </div>
        
        <p className="text-xs text-muted-foreground text-center">
          We'll only use your email to notify you about the launch. No spam, ever.
        </p>
      </form>
    </Card>
  );
};

export default WaitlistForm;