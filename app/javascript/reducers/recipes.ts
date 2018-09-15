import { RecipeState } from '../types';
import {
  SET_RECIPES,
  DELETE_RECIPE_SUCCEEDED,
} from '../constants';

export const recipes =
  (state: RecipeState[] = [], action): RecipeState[] => {
    switch (action.type) {
      case SET_RECIPES:
        return action.recipes;
      case DELETE_RECIPE_SUCCEEDED:
        const deletedState = state.filter(recipe => recipe.id !== action.id);
        return deletedState;
    }
    return state;
  };
