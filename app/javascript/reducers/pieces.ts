import { SwitchPieceAction } from '../actions';

const node = document.getElementById('main');
const initialState = JSON.parse(node.getAttribute('pieces'));

export const pieces =
  (state = initialState, action) => {
    return state;
  };
