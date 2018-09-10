import { CurrentState } from '../types';
import {
  SWITCH_PIECE,
  SET_RECIPE,
  SET_PLAY_STEPS,
  SET_EDIT_STEPS,
  CREATE_STEP_SUCCEEDED,
} from '../constants';

const initialState = {
  pieceId: 1,
  recipeId: null,
  editSteps: [],
  playSteps: [],
};

export const current =
  (state: CurrentState = initialState, action): CurrentState => {
    switch (action.type) {
      case SWITCH_PIECE:
        return {
          ...state,
          pieceId: action.pieceId,
        };
      case SET_RECIPE:
        return {
          ...state,
          recipeId: action.recipeId,
        };
      case SET_PLAY_STEPS:
        return {
          ...state,
          playSteps: action.steps,
        };
      case SET_EDIT_STEPS:
        return {
          ...state,
          editSteps: action.steps,
        };
      case CREATE_STEP_SUCCEEDED:
        const newEditSteps = state.editSteps.concat({
          id: action.id,
          pieceId: action.piece_id,
          content: action.content,
        });
        return {
          ...state,
          editSteps: newEditSteps,
        };
    }
    return state;
  };
