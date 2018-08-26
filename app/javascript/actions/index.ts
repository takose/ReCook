import * as constants from '../constants';
import { func } from '../../../node_modules/@types/prop-types';

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

export function powerOnChange(power: number, stepId: number) {
  return {
    power,
    stepId,
    type: constants.POWER_ON_CHANGE,
  };
}

export function createStepToFF() {
  return {
    type: constants.CREATE_FF_STEP,
  };
}

export function createStep(pieceId: number, stepId: number) {
  return {
    pieceId,
    stepId,
    type: constants.CREATE_STEP,
  };
}

export function createRecipe() {
  return {
    type: constants.CREATE_RECIPE,
  };
}
