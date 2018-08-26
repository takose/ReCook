import { CurrentState } from '../types';
import { SWITCH_PIECE } from '../constants';

const initialState = {
  pieceId: 1,
  recipeId: null,
};

export const current =
  (state: CurrentState = initialState, action): CurrentState => {
    switch (action.type) {
      case SWITCH_PIECE:
        return {
          ...state,
          pieceId: action.pieceId,
        };
    }
    return state;
  };
