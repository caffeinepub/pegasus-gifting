import React from 'react';
import { MessageCircle, Palette, CheckCircle, Truck } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    title: 'Share Your Requirement',
    description: 'Tell us about your gifting needs, occasion, and preferences'
  },
  {
    icon: Palette,
    title: 'We Curate Options',
    description: 'Our team presents suitable gift selections tailored to your needs'
  },
  {
    icon: CheckCircle,
    title: 'Approve Details',
    description: 'Review and approve branding, customization, and final selections'
  },
  {
    icon: Truck,
    title: 'We Handle Everything',
    description: 'Sit back while we manage production and fulfillment'
  }
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A seamless gifting experience from start to finish
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="relative text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/20">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                
                <div className="absolute top-8 left-1/2 w-full h-0.5 bg-border hidden lg:block" 
                     style={{ 
                       display: index === steps.length - 1 ? 'none' : 'block',
                       transform: 'translateX(50%)',
                       width: 'calc(100% - 4rem)'
                     }} 
                />
                
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
