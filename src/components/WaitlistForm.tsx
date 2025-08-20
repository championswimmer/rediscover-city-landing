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
  const [alreadySubscribed, setAlreadySubscribed] = useState<boolean | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      toast({
        title: "Email required",
        description: "Please enter your email address to join the waitlist.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      type SuccessResponse = {
        message: string;
        email: string;
        alreadySubscribed: boolean;
      }

      type RateLimitResponse = {
        message: string;
        retryAfter?: number;
      }

      type ErrorResponse = {
        message: string;
      }

      const response = await fetch('https://api.rediscover.city/waitlist/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: trimmedEmail }),
      });

      if (response.ok) {
        const data: SuccessResponse = await response.json();
        setAlreadySubscribed(Boolean(data.alreadySubscribed));
        setIsSubmitted(true);
        toast({
          title: data.alreadySubscribed ? "You're already on the list" : "Welcome to the waitlist!",
          description: data.message || `You'll be the first to know when rediscover.city launches.`,
        });
        return;
      }

      if (response.status === 429) {
        let data: RateLimitResponse | null = null;
        try { data = await response.json(); } catch {}
        toast({
          title: "Too many attempts",
          description: data?.retryAfter
            ? `${data.message} Try again in ${Math.ceil(data.retryAfter)}s.`
            : (data?.message || "Rate limit exceeded. Please try again later."),
          variant: "destructive",
        });
        return;
      }

      let errData: ErrorResponse | null = null;
      try { errData = await response.json(); } catch {}
      toast({
        title: "Something went wrong",
        description: errData?.message || `Please try again later or contact us directly.`,
        variant: "destructive",
      });
      
    } catch {
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
          {alreadySubscribed ? "You're already on the list" : "You're on the list!"}
        </h3>
        <p className="text-muted-foreground">
          {alreadySubscribed
            ? "We'll keep you posted with updates."
            : `We'll notify you as soon as rediscover.city is available for ${tier} users.`}
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