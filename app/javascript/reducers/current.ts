import { CurrentState } from '../types';
import {
  SWITCH_PIECE,
  SWITCH_STEP,
  RESET_RECIPE,
  SET_RECIPE,
  DELETE_STEP_SUCCEEDED,
} from '../constants';

const initialState = {
  pieceId: 1,
  stepId: null,
  recipe: { id: null, title: '', steps: [], desc: '' },
};

export const current =
  (state: CurrentState = initialState, action): CurrentState => {
    switch (action.type) {
      case SWITCH_STEP:
        return {
          ...state,
          stepId: action.id,
        };
      case SWITCH_PIECE:
        return {
          ...state,
          pieceId: action.pieceId,
        };
      case SET_RECIPE:
        return {
          ...state,
          recipe: {
            ...action.recipe,
          },
        };
      case RESET_RECIPE:
        return {
          ...state,
          recipe: initialState.recipe,
        };
      case DELETE_STEP_SUCCEEDED:
        const newSteps = state.recipe.steps.filter(step => step.id !== action.id);
        return {
          ...state,
          recipe: {
            ...state.recipe,
            steps: newSteps,
          },
        };
    }
    return state;
  };
