import * as constants from '../constants';
import { RecipeState } from '../types';
import { isContext } from 'vm';

export interface SwitchPiece {
  type: constants.SWITCH_PIECE;
  pieceId: number;
}

export type SwitchPieceAction = SwitchPiece;
export type SessionAction = Session;

export function switchPiece(pieceId: number): SwitchPiece {
  return {
    pieceId,
    type: constants.SWITCH_PIECE,
  };
}

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

export function getPlayRecipe(id: number) {
  return {
    id,
    type: constants.GET_PLAY_RECIPE,
  };
}

export function getEditRecipe(id: number) {
  return {
    id,
    type: constants.GET_EDIT_RECIPE,
  };
}

export function setRecipe(recipeId: number) {
  return {
    recipeId,
    type: constants.SET_RECIPE,
  };
}

export function setRecipes(recipes: RecipeState[]) {
  return {
    recipes,
    type: constants.SET_RECIPES,
  };
}
