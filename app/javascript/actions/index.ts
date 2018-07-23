import * as constants from '../constants';

export interface SwitchPiece {
  type: constants.SWITCH_PIECE;
  pieceId: string;
}

export type SwitchPieceAction = SwitchPiece;

export function switchPiece(pieceId: string): SwitchPiece {
  return {
    pieceId,
    type: constants.SWITCH_PIECE,
  };
}
