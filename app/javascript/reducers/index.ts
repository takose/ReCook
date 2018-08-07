import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import { piece } from './piece';
import { user } from './user';

export const reCook = {
  piece,
  user,
};
