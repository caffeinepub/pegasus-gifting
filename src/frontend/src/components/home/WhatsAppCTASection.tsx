import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Phone } from 'lucide-react';
import { getWhatsAppLink } from '@/config/pegasus';

export function WhatsAppCTASection() {
  const whatsappLink = getWhatsAppLink('Hello! I would like to discuss corporate gifting requirements with your team.');

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with our team on WhatsApp for personalized assistance with your corporate gifting needs
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild
              size="lg"
              className="text-lg px-10 py-7 shadow-red-lg hover:shadow-red-xl transition-all"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6 mr-2" />
                Chat on WhatsApp
              </a>
            </Button>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span className="text-sm">Quick response guaranteed</span>
            </div>
          </div>

          <div className="pt-8 border-t border-border max-w-2xl mx-auto">
            <p className="text-sm text-muted-foreground">
              Whether you need bulk corporate gifts or a single executive present, our team is here to help you find the perfect solution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
