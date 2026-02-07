import React from 'react';
import { BrandHeader } from '@/components/BrandHeader';
import { GuidedFlow } from '@/features/guided-flow/GuidedFlow';
import { Card } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export function HomePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <BrandHeader />
      
      <main className="flex-1 flex items-center justify-center py-8 px-4">
        <div className="w-full max-w-4xl">
          <Card className="border-2 border-border shadow-red-lg overflow-hidden">
            <div className="h-[600px] md:h-[700px]">
              <GuidedFlow />
            </div>
          </Card>
        </div>
      </main>

      <footer className="py-6 px-4 border-t border-border bg-secondary/20">
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
    </div>
  );
}
