import { CurrentState } from '../types';
import {
  SWITCH_PIECE,
  SWITCH_STEP,
  RESET_EDIT_RECIPE,
  RESET_PLAY_RECIPE,
  SET_EDIT_RECIPE,
  SET_PLAY_RECIPE,
} from '../constants';

const initialState = {
  pieceId: 1,
  stepId: null,
  playRecipe: { id: null, title: '', steps: [] },
  editRecipe: { id: null, title: '', steps: [] },
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
      case SET_PLAY_RECIPE:
        return {
          ...state,
          playRecipe: {
            ...action.recipe,
          },
        };
      case SET_EDIT_RECIPE:
        return {
          ...state,
          editRecipe: {
            ...action.recipe,
          },
        };
      case RESET_EDIT_RECIPE:
        return {
          ...state,
          editRecipe: { id: null, title: '', steps: [] },
        };
      case RESET_PLAY_RECIPE:
        return {
          ...state,
          playRecipe: { id: null, title: '', steps: [] },
        };
    }
    return state;
  };
