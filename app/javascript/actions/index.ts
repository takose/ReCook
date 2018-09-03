import * as constants from '../constants';

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

// tslint:disable-next-line:max-line-length
export function createFFStepSucceeded(id: number, power: number, temperature: number, time: number, mode: number) {
  return {
    id,
    power,
    temperature,
    time,
    mode,
    type: constants.CREATE_FF_STEP_SUCCEEDED,
  };
}

export function createFFStep(power: number, temperature: number, time: number, mode: number) {
  return {
    power,
    temperature,
    time,
    mode,
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
