import React, { useEffect, useRef } from 'react';
import { useGuidedFlow } from './useGuidedFlow';
import { ChatMessageList } from './ChatMessageList';
import { QuickReplies } from './QuickReplies';
import { CategoryCards } from './CategoryCards';
import { CTAButtons } from './CTAButtons';
import { RotateCcw } from 'lucide-react';

export function GuidedFlow() {
  const { state, currentStep, handleAnswer, restart } = useGuidedFlow();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [state.messages]);

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

          {currentStep.showCTAs && (
            <div className="space-y-4">
              <CTAButtons />
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

      {/* Restart Button (always visible) */}
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
