import { RecipeState } from '../types';
import { UPDATE_TITLE_SUCCEEDED, ADD_RECIPE, SET_RECIPES } from '../constants';

export const recipes =
  (state: RecipeState[] = [], action): RecipeState[] => {
    switch (action.type) {
      case ADD_RECIPE:
        const addedState = state.concat({
          id: action.id,
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
        return state.concat(action.recipes);
    }
    return state;
  };
