import React, { useEffect, useRef } from 'react';
import { useGuidedFlow } from './useGuidedFlow';
import { ChatMessageList } from './ChatMessageList';
import { QuickReplies } from './QuickReplies';
import { CategoryCards } from './CategoryCards';
import { CTAButtons } from './CTAButtons';
import { RotateCcw } from 'lucide-react';

export function GuidedFlow() {
  const { 
    state, 
    currentStep, 
    handleAnswer, 
    restart,
    getIntentLabel,
    getSecondAnswer,
    getCategoryLabel
  } = useGuidedFlow();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [state.messages]);

  const handleCatalogueAction = (action: string) => {
    handleAnswer(action, action === 'catalogue' ? 'View Catalogue' : 'Speak to Team');
  };

  return (
    <div className="flex flex-col h-full">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
        <ChatMessageList messages={state.messages} />

        {/* Interactive Elements */}
        <div className="space-y-6 animate-fade-in">
          {currentStep.quickReplies && (
            <QuickReplies
              replies={currentStep.quickReplies}
              onSelect={handleAnswer}
            />
          )}

          {currentStep.showCategories && (
            <CategoryCards onSelect={handleAnswer} />
          )}

          {currentStep.showCatalogue && (
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => handleCatalogueAction('catalogue')}
                className="flex-1 px-6 py-3 bg-card border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary/5 transition-all duration-200 shadow-sm hover:shadow-red-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                View Catalogue
              </button>
              <button
                onClick={() => handleCatalogueAction('contact')}
                className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all duration-200 shadow-red-md hover:shadow-red-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Speak to Our Team
              </button>
            </div>
          )}

          {currentStep.showCTAs && (
            <div className="space-y-4">
              <CTAButtons 
                intent={getIntentLabel()}
                secondAnswer={getSecondAnswer()}
                category={getCategoryLabel()}
                showCatalogue={state.currentStepId === 'catalogue-view'}
              />
              <div className="text-center">
                <button
                  onClick={restart}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Start Over</span>
                </button>
              </div>
            </div>
          )}
        </div>

        <div ref={messagesEndRef} />
      </div>

      {/* Restart Button (always visible when not at start) */}
      {state.currentStepId !== 'welcome' && !state.isComplete && (
        <div className="px-4 py-3 border-t border-border">
          <button
            onClick={restart}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Start Over</span>
          </button>
        </div>
      )}
    </div>
  );
}
