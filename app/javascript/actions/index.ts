import * as constants from '../constants';

export interface SwitchPiece {
  type: constants.SWITCH_PIECE;
  pieceId: string;
}

export type SwitchPieceAction = SwitchPiece;
export type SessionAction = Session;

export function switchPiece(pieceId: string): SwitchPiece {
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
