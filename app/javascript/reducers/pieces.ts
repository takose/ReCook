import { SwitchPieceAction } from '../actions';
import { PiecesState } from '../types';

const initialState = {
  pieces: [
    {
      name: 'PUTA',
    },
    {
      name: 'FF',
    },
  ],
};

export const pieces =
  (state: PiecesState = initialState, action): PiecesState => {
    return state;
  };
