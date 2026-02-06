import { useState, useCallback } from 'react';
import { type FlowState, type StepId, type Answer, type Message, type Step } from './types';

const steps: Record<StepId, Step> = {
  welcome: {
    id: 'welcome',
    systemMessage: 'Welcome to Pegasus Gifting! 🎁 I\'m here to help you find the perfect corporate gifts. Let\'s get started!',
    quickReplies: [
      { id: 'start', label: 'Let\'s Begin', value: 'start' }
    ]
  },
  intent: {
    id: 'intent',
    systemMessage: 'Great! What brings you here today?',
    quickReplies: [
      { 
        id: 'bulk', 
        label: 'Bulk Order', 
        value: 'bulk',
        description: 'For corporate events, employee gifts, or client appreciation'
      },
      { 
        id: 'single', 
        label: 'Single/Small Order', 
        value: 'single',
        description: 'For individual gifts or small quantities'
      }
    ]
  },
  category: {
    id: 'category',
    systemMessage: 'Perfect! Which category interests you the most?',
    showCategories: true
  },
  quantity: {
    id: 'quantity',
    systemMessage: 'Excellent choice! How many units are you looking for?',
    quickReplies: [
      { id: 'q1', label: '1-10 units', value: '1-10' },
      { id: 'q2', label: '11-50 units', value: '11-50' },
      { id: 'q3', label: '51-100 units', value: '51-100' },
      { id: 'q4', label: '100+ units', value: '100+' }
    ]
  },
  contact: {
    id: 'contact',
    systemMessage: 'Wonderful! I have all the information I need. Let\'s connect to discuss your requirements in detail.',
    showCTAs: true
  }
};

const stepOrder: StepId[] = ['welcome', 'intent', 'category', 'quantity', 'contact'];

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
    const currentStep = steps[state.currentStepId];
    const answer: Answer = {
      stepId: state.currentStepId,
      value,
      label
    };

    const userMessage = createMessage('user', label);
    const currentIndex = stepOrder.indexOf(state.currentStepId);
    const nextStepId = stepOrder[currentIndex + 1];

    if (nextStepId) {
      const nextStep = steps[nextStepId];
      const systemMessage = createMessage('system', nextStep.systemMessage);

      setState(prev => ({
        ...prev,
        currentStepId: nextStepId,
        answers: [...prev.answers, answer],
        messages: [...prev.messages, userMessage, systemMessage],
        isComplete: nextStepId === 'contact'
      }));
    } else {
      setState(prev => ({
        ...prev,
        answers: [...prev.answers, answer],
        messages: [...prev.messages, userMessage],
        isComplete: true
      }));
    }
  }, [state.currentStepId]);

  const restart = useCallback(() => {
    setState({
      currentStepId: 'welcome',
      answers: [],
      messages: [createMessage('system', steps.welcome.systemMessage)],
      isComplete: false
    });
  }, []);

  const goToStep = useCallback((stepId: StepId) => {
    const stepIndex = stepOrder.indexOf(stepId);
    const currentIndex = stepOrder.indexOf(state.currentStepId);

    if (stepIndex < currentIndex) {
      // Going back - remove answers and messages after this step
      const newAnswers = state.answers.slice(0, stepIndex);
      const messagesToKeep = state.messages.slice(0, (stepIndex + 1) * 2);
      
      setState({
        currentStepId: stepId,
        answers: newAnswers,
        messages: messagesToKeep,
        isComplete: false
      });
    }
  }, [state]);

  return {
    state,
    currentStep: getCurrentStep(),
    handleAnswer,
    restart,
    goToStep
  };
}
