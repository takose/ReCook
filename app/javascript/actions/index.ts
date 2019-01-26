import * as constants from '../constants';
import { RecipeState } from '../types';

export interface SwitchPiece {
  type: constants.SWITCH_PIECE;
  pieceId: number;
}

export type SwitchPieceAction = SwitchPiece;
export type SessionAction = Session;

export interface Session {
  type: constants.LOG_IN;
  nickname: string;
  imageUrl: string;
}

export function login(nickname: string, imageUrl: string): Session {
  return {
    nickname,
    imageUrl,
    type: constants.LOG_IN,
  };
}

// FOR EDITOR
export function switchPiece(pieceId: number): SwitchPiece {
  return {
    pieceId,
    type: constants.SWITCH_PIECE,
  };
}

export function createStep(
  stepId: number, content: any, option: { direction?: string, stepId?: number },
) {
  return {
    stepId,
    content,
    option,
    type: constants.CREATE_STEP,
  };
}

export function updateRecipe(recipeId: number, title: string, desc: string) {
  return {
    recipeId,
    title,
    desc,
    type: constants.UPDATE_RECIPE,
  };
}

export function deleteStep(stepId: number) {
  return {
    stepId,
    type: constants.DELETE_STEP,
  };
}

// FOR EDITOR & PLAYER
export function switchStep(id: number) {
  return {
    id,
    type: constants.SWITCH_STEP,
  };
}

export function resetRecipe() {
  return {
    type: constants.RESET_RECIPE,
  };
}

export function getRecipe(id: number) {
  return {
    id,
    type: constants.GET_RECIPE,
  };
}

export function setRecipe(recipe: RecipeState) {
  return {
    recipe,
    type: constants.SET_RECIPE,
  };
}

// FOR EXPLORE
export function setRecipes(recipes: RecipeState[]) {
  return {
    recipes,
    type: constants.SET_RECIPES,
  };
}

export function deleteRecipe(id: number) {
  return {
    id,
    type: constants.DELETE_RECIPE,
  };
}
