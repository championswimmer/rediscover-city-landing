import { Button } from "@/components/ui/button";
import { Smartphone, Mail, Shield, FileText } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl font-bold mb-4">Rediscover.city</h3>
            <p className="text-secondary-foreground/80 mb-6 max-w-md leading-relaxed">
              Transform every walk into a journey through time. Discover the hidden stories 
              of your city with AI-powered narration that brings history to life.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="sm" className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/20">
                <Smartphone className="w-4 h-4 mr-2" />
                App Store
              </Button>
              <Button variant="outline" size="sm" className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/20">
                <Smartphone className="w-4 h-4 mr-2" />
                Google Play
              </Button>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a 
                href="mailto:hello@rediscover.city" 
                className="flex items-center gap-2 text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                hello@rediscover.city
              </a>
            </div>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <div className="space-y-3">
              <a 
                href="/privacy" 
                className="flex items-center gap-2 text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
              >
                <Shield className="w-4 h-4" />
                Privacy Policy
              </a>
              <a 
                href="/terms" 
                className="flex items-center gap-2 text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
              >
                <FileText className="w-4 h-4" />
                Terms of Service
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/20 pt-8 text-center">
          <p className="text-secondary-foreground/60">
            © 2024 Rediscover.city. All rights reserved. Made with curiosity and AI.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;