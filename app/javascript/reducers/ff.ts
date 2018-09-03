import { FFState } from '../types';
import {
  CREATE_FF_STEP_SUCCEEDED,
} from '../constants';

export const ff =
  (state: FFState[] = [], action): FFState[] => {
    switch (action.type) {
      case CREATE_FF_STEP_SUCCEEDED:
        const newSteps = state.concat({
          power: action.power,
          time: action.time,
          temperature: action.temperature,
          mode: action.mode,
          id: action.id,
        });
        return newSteps;
    }
    return state;
  };
