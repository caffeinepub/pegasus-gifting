import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GuidedFlow } from '@/features/guided-flow/GuidedFlow';
import { MessageCircle, X, Minimize2, Maximize2 } from 'lucide-react';

export function GuidedFlowPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-6 py-4 bg-primary text-primary-foreground rounded-full shadow-red-lg hover:shadow-red-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 animate-fade-in"
        aria-label="Open guided assistance"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="font-semibold hidden sm:inline">Need Help?</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <Card className="w-[90vw] sm:w-[450px] border-2 border-primary shadow-red-xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-primary text-primary-foreground border-b border-primary/20">
          <div className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />
            <h3 className="font-display font-semibold">Gifting Assistant</h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-1.5 hover:bg-primary-foreground/10 rounded transition-colors"
              aria-label={isMinimized ? 'Maximize' : 'Minimize'}
            >
              {isMinimized ? (
                <Maximize2 className="w-4 h-4" />
              ) : (
                <Minimize2 className="w-4 h-4" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 hover:bg-primary-foreground/10 rounded transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        {!isMinimized && (
          <div className="h-[500px] sm:h-[600px]">
            <GuidedFlow />
          </div>
        )}
      </Card>
    </div>
  );
}
