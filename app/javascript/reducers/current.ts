import { SwitchPieceAction } from '../actions';
import { CurrentState } from '../types';
import { SWITCH_PIECE } from '../constants';

const initialState = {
  piece: {
    name: 'puta',
  },
};

export const current =
  (state: CurrentState = initialState, action): CurrentState => {
    switch (action.type) {
      case SWITCH_PIECE:
        return {
          ...state,
          piece: {
            name: action.pieceId,
          },
        };
    }
    return state;
  };
