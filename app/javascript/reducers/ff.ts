import { FFState } from '../types';
import {
  POWER_ON_CHANGE, CREATE_STEP_TO_FF,
} from '../constants';

export const ff =
  (state: FFState[] = [], action): FFState[] => {
    switch (action.type) {
      case CREATE_STEP_TO_FF:
        let newSteps = state.concat({ id: state[state.length - 1].id + 1 }); // FIXME
        return newSteps;
      case POWER_ON_CHANGE:
        newSteps = state.map((s) => {
          if (s.id === action.id) {
            s.power = action.power;
          }
          return s;
        });
        return newSteps;
    }
    return state;
  };
