import { StepState } from '../types';
import {
  CREATE_STEP_SUCCEEDED,
} from '../constants';

export const steps =
  (state: StepState[] = [], action): StepState[] => {
    switch (action.type) {
      case CREATE_STEP_SUCCEEDED:
        const newSteps = state.concat({
          id: action.id,
          pieceId: action.piece_id,
          content: action.content,
        });
        return newSteps;
    }
    return state;
  };
