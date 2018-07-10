import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import { piece } from './piece';

const recipeBulder = combineReducers({
  piece,
})
