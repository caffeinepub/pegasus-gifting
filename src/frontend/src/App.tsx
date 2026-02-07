import React, { useState } from 'react';
import { GuidedFlow } from './features/guided-flow/GuidedFlow';
import { config } from './config/pegasus';
import { SiX, SiFacebook, SiLinkedin, SiInstagram } from 'react-icons/si';
import { Heart, Home } from 'lucide-react';

function App() {
  const [flowKey, setFlowKey] = useState(0);

  const handleHomeClick = () => {
    // Reset the guided flow by changing the key (forces remount)
    setFlowKey(prev => prev + 1);
    
    // Scroll to the top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Hero Header */}
      <header className="relative border-b border-border bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="absolute inset-0 opacity-5">
          <img
            src="/assets/generated/pegasus-hero-bg.dim_1600x900.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 py-8 md:py-12">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex items-center justify-between w-full max-w-4xl">
              <div className="flex-1" />
              <img
                src="/assets/generated/pegasus-logo.dim_800x240.png"
                alt="Pegasus Gifting"
                className="h-16 md:h-20 w-auto"
              />
              <div className="flex-1 flex justify-end">
                <button
                  onClick={handleHomeClick}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50"
                  aria-label="Go to home and restart"
                >
                  <Home className="w-5 h-5" />
                  <span className="hidden sm:inline">Home</span>
                </button>
              </div>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                {config.company.tagline}
              </h1>
              <p className="text-muted-foreground mt-2 max-w-2xl">
                {config.company.description}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Chat Area */}
      <main className="flex-1 container mx-auto max-w-4xl flex flex-col">
        <div className="flex-1 bg-card/50 backdrop-blur-sm rounded-t-3xl md:rounded-3xl my-4 md:my-8 shadow-gold-lg border border-border overflow-hidden">
          <GuidedFlow key={flowKey} />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <SiFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <SiInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="X (Twitter)"
              >
                <SiX className="w-5 h-5" />
              </a>
            </div>
            <div className="text-sm text-muted-foreground text-center md:text-right">
              <p className="flex items-center gap-1.5 justify-center md:justify-end">
                © 2026. Built with{' '}
                <Heart className="w-4 h-4 text-primary fill-primary inline" />{' '}
                using{' '}
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
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
