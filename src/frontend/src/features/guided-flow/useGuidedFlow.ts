import { useState, useCallback } from 'react';
import { type FlowState, type StepId, type Answer, type Message, type Step } from './types';

const steps: Record<StepId, Step> = {
  welcome: {
    id: 'welcome',
    systemMessage: 'Welcome to Pegasus Gifting! 🎁 I\'m here to help you find the perfect corporate gifts.',
    quickReplies: [
      { id: 'start', label: 'Let\'s Begin', value: 'start' }
    ]
  },
  intent: {
    id: 'intent',
    systemMessage: 'What are you looking for today?',
    quickReplies: [
      { 
        id: 'bulk', 
        label: 'Bulk Corporate Gifting', 
        value: 'bulk',
        description: 'Large orders for teams, events, or client appreciation'
      },
      { 
        id: 'single', 
        label: 'Single / Few Gifts', 
        value: 'single',
        description: 'Executive gifts or small quantities'
      },
      { 
        id: 'unsure', 
        label: 'Not Sure / Exploring', 
        value: 'unsure',
        description: 'Learn more about our process'
      }
    ]
  },
  'bulk-quantity': {
    id: 'bulk-quantity',
    systemMessage: 'Great! How many units are you looking for?',
    quickReplies: [
      { id: 'q1', label: '10-50 units', value: '10-50' },
      { id: 'q2', label: '51-100 units', value: '51-100' },
      { id: 'q3', label: '101-500 units', value: '101-500' },
      { id: 'q4', label: '500+ units', value: '500+' }
    ]
  },
  'single-purpose': {
    id: 'single-purpose',
    systemMessage: 'Perfect! What\'s the occasion or purpose?',
    quickReplies: [
      { id: 'p1', label: 'Client Appreciation', value: 'client-appreciation' },
      { id: 'p2', label: 'Employee Recognition', value: 'employee-recognition' },
      { id: 'p3', label: 'Executive Gift', value: 'executive-gift' },
      { id: 'p4', label: 'Special Occasion', value: 'special-occasion' }
    ]
  },
  'unsure-education': {
    id: 'unsure-education',
    systemMessage: 'No problem! Here\'s how we work:\n\n1️⃣ Share your requirement\n2️⃣ We curate suitable options\n3️⃣ You approve branding & details\n4️⃣ We handle production & delivery\n\nWould you like to explore our catalogue or speak with our team?',
    showCatalogue: true
  },
  category: {
    id: 'category',
    systemMessage: 'Excellent! Which category interests you?',
    showCategories: true
  },
  contact: {
    id: 'contact',
    systemMessage: 'Perfect! I have all the details. Let\'s connect to discuss your requirements.',
    showCTAs: true
  },
  'catalogue-view': {
    id: 'catalogue-view',
    systemMessage: 'You can view our full catalogue below. When you\'re ready, our team is here to help!',
    showCTAs: true
  }
};

function createMessage(type: 'system' | 'user', content: string): Message {
  return {
    id: `${Date.now()}-${Math.random()}`,
    type,
    content,
    timestamp: Date.now()
  };
}

export function useGuidedFlow() {
  const [state, setState] = useState<FlowState>({
    currentStepId: 'welcome',
    answers: [],
    messages: [createMessage('system', steps.welcome.systemMessage)],
    isComplete: false
  });

  const getCurrentStep = useCallback((): Step => {
    return steps[state.currentStepId];
  }, [state.currentStepId]);

  const handleAnswer = useCallback((value: string, label: string) => {
    const currentStepId = state.currentStepId;
    const answer: Answer = {
      stepId: currentStepId,
      value,
      label
    };

    const userMessage = createMessage('user', label);
    let nextStepId: StepId | null = null;
    let newIntent = state.intent;

    // Determine next step based on current step and answer
    if (currentStepId === 'welcome') {
      nextStepId = 'intent';
    } else if (currentStepId === 'intent') {
      if (value === 'bulk') {
        nextStepId = 'bulk-quantity';
        newIntent = 'bulk';
      } else if (value === 'single') {
        nextStepId = 'single-purpose';
        newIntent = 'single';
      } else if (value === 'unsure') {
        nextStepId = 'unsure-education';
        newIntent = 'unsure';
      }
    } else if (currentStepId === 'bulk-quantity' || currentStepId === 'single-purpose') {
      nextStepId = 'category';
    } else if (currentStepId === 'category') {
      nextStepId = 'contact';
    } else if (currentStepId === 'unsure-education') {
      if (value === 'catalogue') {
        nextStepId = 'catalogue-view';
      } else if (value === 'contact') {
        nextStepId = 'contact';
      }
    }

    if (nextStepId) {
      const nextStep = steps[nextStepId];
      const systemMessage = createMessage('system', nextStep.systemMessage);

      setState(prev => ({
        ...prev,
        currentStepId: nextStepId!,
        answers: [...prev.answers, answer],
        messages: [...prev.messages, userMessage, systemMessage],
        isComplete: nextStepId === 'contact' || nextStepId === 'catalogue-view',
        intent: newIntent
      }));
    } else {
      setState(prev => ({
        ...prev,
        answers: [...prev.answers, answer],
        messages: [...prev.messages, userMessage],
        isComplete: true
      }));
    }
  }, [state.currentStepId, state.intent]);

  const restart = useCallback(() => {
    setState({
      currentStepId: 'welcome',
      answers: [],
      messages: [createMessage('system', steps.welcome.systemMessage)],
      isComplete: false
    });
  }, []);

  const getIntentLabel = useCallback((): string => {
    const intentAnswer = state.answers.find(a => a.stepId === 'intent');
    if (!intentAnswer) return '';
    
    if (intentAnswer.value === 'bulk') return 'bulk corporate gifting';
    if (intentAnswer.value === 'single') return 'single/few gifts';
    return 'exploring options';
  }, [state.answers]);

  const getSecondAnswer = useCallback((): string => {
    const secondAnswer = state.answers.find(
      a => a.stepId === 'bulk-quantity' || a.stepId === 'single-purpose'
    );
    return secondAnswer?.label || '';
  }, [state.answers]);

  const getCategoryLabel = useCallback((): string => {
    const categoryAnswer = state.answers.find(a => a.stepId === 'category');
    return categoryAnswer?.label || '';
  }, [state.answers]);

  return {
    state,
    currentStep: getCurrentStep(),
    handleAnswer,
    restart,
    getIntentLabel,
    getSecondAnswer,
    getCategoryLabel
  };
}
