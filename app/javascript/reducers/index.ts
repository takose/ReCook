import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import { piece } from './piece';

export const recipeBulder = combineReducers({
  piece,
})
