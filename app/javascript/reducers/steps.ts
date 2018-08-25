import { StepState } from '../types';
import {
  CREATE_STEP,
} from '../constants';

export const steps =
  (state: StepState[] = [], action): StepState[] => {
    switch (action.type) {
      case CREATE_STEP:
        const newSteps = state.concat({
          stepId: action.stepId,
          pieceId: action.pieceId,
        });
        return newSteps;
    }
    return state;
  };
