import { SwitchPieceAction } from '../actions';
import { PiecesState } from '../types';

const initialState = {
  pieces: [
    {
      name: 'puta',
    },
    {
      name: 'ff',
    },
  ],
};

export const pieces =
  (state: PiecesState = initialState, action): PiecesState => {
    return state;
  };
