import { Button } from "@/components/ui/button";
import { Smartphone, Mail, Shield, FileText, Apple } from "lucide-react";

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
              <div className="bg-secondary-foreground/10 border border-secondary-foreground/20 text-secondary-foreground px-4 py-2 rounded-md text-sm flex items-center">
                <Apple className="w-4 h-4 mr-2" />
                App Store - Coming Soon
              </div>
              <div className="bg-secondary-foreground/10 border border-secondary-foreground/20 text-secondary-foreground px-4 py-2 rounded-md text-sm flex items-center">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                Google Play - Coming Soon
              </div>
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