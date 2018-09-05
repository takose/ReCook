import { TasteState } from '../types';
import {
  CREATE_TASTE_STEP_SUCCEEDED,
} from '../constants';

export const taste =
  (state: TasteState[] = [], action): TasteState[] => {
    switch (action.type) {
      case CREATE_TASTE_STEP_SUCCEEDED:
        const newSteps = state.concat({
          soysauce: action.soysauce,
          sake: action.sake,
          mirin: action.mirin,
          vinegar: action.vinegar,
          id: action.id,
        });
        return newSteps;
    }
    return state;
  };
