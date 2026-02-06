import { useActor } from './useActor';

// This file is ready for future backend integration
// Currently, the Pegasus Gifting site is a frontend-only marketing experience
// with no backend data requirements

export function useQueries() {
  const { actor, isFetching } = useActor();
  
  return {
    actor,
    isFetching
  };
}
