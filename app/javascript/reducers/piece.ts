import { SwitchPieceAction } from '../actions';
import { PieceState } from '../types/index';
import { SWITCH_PIECE } from '../constants/index';

const initialState = {
  name: 'puta',
};

export const piece = (state: PieceState = initialState, action: SwitchPieceAction): PieceState => {
  switch (action.type) {
    case SWITCH_PIECE:
      return { ...state, name: action.pieceId };
  }
  return state;
}
