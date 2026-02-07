import React from 'react';

export function BrandHeader() {
  return (
    <header className="w-full bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-4">
          <img 
            src="/assets/generated/pegasus-logo-red.dim_512x512.png" 
            alt="Pegasus Logo" 
            className="h-12 w-12 object-contain"
          />
          <div>
            <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground tracking-tight">
              PEGASUS GIFTING
            </h1>
            <p className="text-sm text-muted-foreground hidden sm:block">
              Premium Corporate Gifting Solutions
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
