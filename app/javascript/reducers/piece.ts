import { SwitchPiece } from '../actions';
import { StoreState } from '../types/index';
import { SWITCH_PIECE } from '../constants/index';

export function piece(state: StoreState, action: SwitchPiece): StoreState {
  switch (action.type) {
    case SWITCH_PIECE:
      return { ...state, piece: { ...state.piece, name: action.pieceId } };
  }
  return state;
}
