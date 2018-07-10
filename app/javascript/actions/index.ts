import * as constants from '../constants'

export interface SwitchPiece {
    type: constants.SWITCH_PIECE;
    pieceId: string
}

export type ModeAction = SwitchPiece;

export function switchPiece(pieceId: string): SwitchPiece {
    return {
        type: constants.SWITCH_PIECE,
        pieceId,
    }
}
