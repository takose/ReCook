import { CurrentState } from '../types';
import {
  SWITCH_PIECE,
  SWITCH_STEP,
  RESET_EDIT_RECIPE,
  RESET_PLAY_RECIPE,
  SET_EDIT_RECIPE,
  SET_PLAY_RECIPE,
  DELETE_STEP_SUCCEEDED,
  UPDATE_EDIT_OPTION,
} from '../constants';

const initialState = {
  pieceId: 1,
  stepId: null,
  playRecipe: { id: null, title: '', steps: [], desc: '' },
  editRecipe: {
    id: null, title: '', steps: [], desc: '', option: { direction: null, stepId: null },
  },
};

export const current =
  (state: CurrentState = initialState, action): CurrentState => {
    switch (action.type) {
      case SWITCH_STEP:
        return {
          ...state,
          stepId: action.id,
          editRecipe: {
            ...state.editRecipe,
            option: {
              ...state.editRecipe.option,
              stepId: null,
              direction: null,
            },
          },
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
            ...state.editRecipe,
            ...action.recipe,
          },
        };
      case UPDATE_EDIT_OPTION:
        return {
          ...state,
          stepId: null,
          editRecipe: {
            ...state.editRecipe,
            option: {
              ...state.editRecipe.option,
              direction: action.direction,
              stepId: state.stepId,
            },
          },
        };
      case RESET_EDIT_RECIPE:
        return {
          ...state,
          editRecipe: initialState.editRecipe,
        };
      case RESET_PLAY_RECIPE:
        return {
          ...state,
          playRecipe: initialState.playRecipe,
        };
      case DELETE_STEP_SUCCEEDED:
        const newSteps = state.editRecipe.steps.filter(step => step.id !== action.id);
        return {
          ...state,
          editRecipe: {
            ...state.editRecipe,
            steps: newSteps,
          },
        };
    }
    return state;
  };
