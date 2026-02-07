import React from 'react';
import { SafeImage } from '@/components/marketing/SafeImage';
import { assets } from '@/config/pegasus';

export function BrandHeader() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 relative">
              <SafeImage 
                src={assets.logo}
                alt="Pegasus Logo" 
                className="h-12 w-12 object-contain"
                fallbackClassName="h-12 w-12"
              />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground tracking-tight">
                PEGASUS GIFTING
              </h1>
              <p className="text-sm text-muted-foreground hidden sm:block">
                Premium Corporate Gifting Solutions
              </p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('categories')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Categories
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('catalogue')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Catalogue
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
