import React from 'react';
import { type Message } from './types';
import { Gift } from 'lucide-react';

interface ChatMessageListProps {
  messages: Message[];
}

export function ChatMessageList({ messages }: ChatMessageListProps) {
  return (
    <div className="space-y-6">
      {messages.map((message, index) => (
        <div
          key={message.id}
          className="animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {message.type === 'system' ? (
            <div className="flex gap-3 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Gift className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 bg-secondary/30 rounded-2xl rounded-tl-sm px-5 py-4 shadow-gold-sm">
                <p className="text-foreground leading-relaxed">{message.content}</p>
              </div>
            </div>
          ) : (
            <div className="flex gap-3 items-start justify-end">
              <div className="flex-1 bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-5 py-4 shadow-gold-md max-w-[80%] ml-auto">
                <p className="leading-relaxed">{message.content}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
