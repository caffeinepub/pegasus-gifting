export type StepId = 
  | 'welcome'
  | 'intent'
  | 'bulk-quantity'
  | 'single-purpose'
  | 'unsure-education'
  | 'category'
  | 'contact'
  | 'catalogue-view';

export interface Message {
  id: string;
  type: 'system' | 'user';
  content: string;
  timestamp: number;
}

export interface Answer {
  stepId: StepId;
  value: string;
  label: string;
}

export interface QuickReply {
  id: string;
  label: string;
  value: string;
  description?: string;
}

export interface Step {
  id: StepId;
  systemMessage: string;
  quickReplies?: QuickReply[];
  showCategories?: boolean;
  showCTAs?: boolean;
  showCatalogue?: boolean;
}

export interface FlowState {
  currentStepId: StepId;
  answers: Answer[];
  messages: Message[];
  isComplete: boolean;
  intent?: 'bulk' | 'single' | 'unsure';
}
