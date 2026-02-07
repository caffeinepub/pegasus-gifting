import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, FileText } from 'lucide-react';
import { SafeImage } from '@/components/marketing/SafeImage';
import { getWhatsAppLink, config, assets } from '@/config/pegasus';

export function HeroSection() {
  const handleViewCatalogue = () => {
    window.open(config.catalogue.url, '_blank', 'noopener,noreferrer');
  };

  const whatsappLink = getWhatsAppLink('Hello! I would like to explore corporate gifting solutions with Pegasus Gifting.');

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="absolute inset-0 opacity-5">
        <SafeImage 
          src={assets.heroBanner}
          alt="Hero Background"
          className="w-full h-full object-cover"
          fallbackClassName="w-full h-full"
        />
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
                Elevate Your Corporate Relationships
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Thoughtfully curated gifts that leave lasting impressions
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              From bulk corporate orders to executive gifts, we deliver premium gifting solutions tailored to your needs. No minimum order requirements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                size="lg"
                className="text-lg px-8 py-6 shadow-red-lg hover:shadow-red-xl transition-all"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Speak to Our Team
                </a>
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                onClick={handleViewCatalogue}
                className="text-lg px-8 py-6 border-2 hover:bg-secondary/50"
              >
                <FileText className="w-5 h-5 mr-2" />
                View Catalogue
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-red-lg">
              <SafeImage 
                src={assets.heroProduct}
                alt="Premium Corporate Gifts"
                className="w-full h-auto object-cover"
                fallbackClassName="w-full aspect-[14/9]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
