import { SwitchPieceAction } from '../actions';
import { PiecesState } from '../types';

const initialState = {
  pieces: [
    {
      id: 'puta',
      name: 'PUTA',
    },
    {
      id: 'ff',
      name: 'FF',
    },
    {
      id: 'text',
      name: 'TEXT',
    },
  ],
};

export const pieces =
  (state: PiecesState = initialState, action): PiecesState => {
    return state;
  };
