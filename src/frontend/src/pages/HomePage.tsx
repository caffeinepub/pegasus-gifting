import React from 'react';
import { BrandHeader } from '@/components/BrandHeader';
import { HeroSection } from '@/components/home/HeroSection';
import { CuratedCategoriesSection } from '@/components/home/CuratedCategoriesSection';
import { HowItWorksSection } from '@/components/home/HowItWorksSection';
import { MasterCatalogueSection } from '@/components/home/MasterCatalogueSection';
import { WhatsAppCTASection } from '@/components/home/WhatsAppCTASection';
import { GuidedFlowPanel } from '@/components/home/GuidedFlowPanel';
import { Heart } from 'lucide-react';

export function HomePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <BrandHeader />
      
      <main className="flex-1">
        <HeroSection />
        <CuratedCategoriesSection />
        <HowItWorksSection />
        <MasterCatalogueSection />
        <WhatsAppCTASection />
      </main>

      <footer className="py-8 px-4 border-t border-border bg-secondary/20">
        <div className="container mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2026. Built with <Heart className="inline w-4 h-4 text-primary fill-primary" /> using{' '}
            <a 
              href="https://caffeine.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>

      <GuidedFlowPanel />
    </div>
  );
}
