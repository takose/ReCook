import { FFState } from '../types';
import {
  CREATE_FF_STEP,
} from '../constants';

export const ff =
  (state: FFState[] = [], action): FFState[] => {
    switch (action.type) {
      case CREATE_FF_STEP:
        const lastId = state[state.length - 1];
        const newSteps = state.concat({
          power: action.power,
          time: action.time,
          temperature: action.temperature,
          id: lastId ? lastId.id + 1 : 1,
        }); // FIXME
        return newSteps;
    }
    return state;
  };
