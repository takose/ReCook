import { FFState } from '../types';
import {
  POWER_ON_CHANGE, CREATE_FF_STEP,
} from '../constants';

export const ff =
  (state: FFState[] = [], action): FFState[] => {
    switch (action.type) {
      case CREATE_FF_STEP:
        const lastId = state[state.length - 1];
        let newSteps = state.concat({ id: lastId ? lastId.id + 1 : 1 }); // FIXME
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
