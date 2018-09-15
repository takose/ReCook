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

export function createStep(content: any) {
  return {
    content,
    type: constants.CREATE_STEP,
  };
}

export function updateTitle(recipeId: number, title: string) {
  return {
    recipeId,
    title,
    type: constants.UPDATE_TITLE,
  };
}

// FOR EDITOR & PLAYER
export function switchStep(id: number) {
  return {
    id,
    type: constants.SWITCH_STEP,
  };
}

export function resetPlayRecipe() {
  return {
    type: constants.RESET_PLAY_RECIPE,
  };
}

export function resetEditRecipe() {
  return {
    type: constants.RESET_EDIT_RECIPE,
  };
}

export function getEditRecipe(id: number) {
  return {
    id,
    type: constants.GET_EDIT_RECIPE,
  };
}

export function getPlayRecipe(id: number) {
  return {
    id,
    type: constants.GET_PLAY_RECIPE,
  };
}

export function setPlayRecipe(recipe: RecipeState) {
  return {
    recipe,
    type: constants.SET_EDIT_RECIPE,
  };
}

export function setEditRecipe(recipe: RecipeState) {
  return {
    recipe,
    type: constants.SET_PLAY_RECIPE,
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
