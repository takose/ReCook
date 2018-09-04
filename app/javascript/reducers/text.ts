import { TextState } from '../types';
import {
  CREATE_TEXT_STEP_SUCCEEDED,
} from '../constants';

export const text =
  (state: TextState[] = [], action): TextState[] => {
    switch (action.type) {
      case CREATE_TEXT_STEP_SUCCEEDED:
        const newSteps = state.concat({
          body: action.body,
          id: action.id,
        });
        return newSteps;
    }
    return state;
  };
