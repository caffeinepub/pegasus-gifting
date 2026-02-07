import React from 'react';
import { type QuickReply } from './types';

interface QuickRepliesProps {
  replies: QuickReply[];
  onSelect: (value: string, label: string) => void;
}

export function QuickReplies({ replies, onSelect }: QuickRepliesProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {replies.map((reply) => (
        <button
          key={reply.id}
          onClick={() => onSelect(reply.value, reply.label)}
          className="group relative px-6 py-3 bg-card border-2 border-border rounded-xl hover:border-primary hover:bg-primary/5 transition-all duration-200 shadow-sm hover:shadow-red-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          <div className="text-left">
            <div className="font-medium text-foreground group-hover:text-primary transition-colors">
              {reply.label}
            </div>
            {reply.description && (
              <div className="text-sm text-muted-foreground mt-1">
                {reply.description}
              </div>
            )}
          </div>
        </button>
      ))}
    </div>
  );
}
