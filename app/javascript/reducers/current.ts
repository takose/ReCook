import { CurrentState } from '../types';
import {
  SWITCH_PIECE,
  SET_RECIPE,
  SET_PLAY_STEPS,
  SET_EDIT_STEPS,
  CREATE_STEP_SUCCEEDED,
  RESET_EDIT_RECIPE,
} from '../constants';

const initialState = {
  pieceId: 1,
  recipeId: null,
  playRecipe: { id: null, title: '', steps: [] },
  editRecipe: { id: null, title: '', steps: [] },
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
          playRecipe: {
            ...action,
          },
        };
      case SET_EDIT_STEPS:
        return {
          ...state,
          editRecipe: {
            ...action.recipe,
          },
        };
      case CREATE_STEP_SUCCEEDED:
        const newEditSteps = state.editRecipe.steps.concat({
          id: action.id,
          pieceId: action.piece_id,
          content: action.content,
        });
        return {
          ...state,
          editRecipe: {
            ...state.editRecipe,
            steps: newEditSteps,
          },
        };
      case RESET_EDIT_RECIPE:
        return {
          ...state,
          editRecipe: { id: null, title: '', steps: [] },
        };
    }
    return state;
  };
