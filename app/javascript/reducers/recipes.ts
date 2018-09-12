import { RecipeState } from '../types';
import {
  UPDATE_TITLE_SUCCEEDED,
  CREATE_RECIPE,
  SET_RECIPES,
  DELETE_RECIPE_SUCCEEDED,
} from '../constants';

export const recipes =
  (state: RecipeState[] = [], action): RecipeState[] => {
    switch (action.type) {
      case CREATE_RECIPE:
        const addedState = state.concat({
          id: action.id,
          originId: null,
          user: action.user,
        });
        return addedState;
      case UPDATE_TITLE_SUCCEEDED:
        const newState = state.map((recipe) => {
          if (action.recipeId === recipe.id) {
            return {
              ...recipe,
              title: action.title,
            };
          }
          return recipe;
        });
        return newState;
      case SET_RECIPES:
        return action.recipes;
      case DELETE_RECIPE_SUCCEEDED:
        const deletedState = state.filter(recipe => recipe.id !== action.id);
        return deletedState;
    }
    return state;
  };
