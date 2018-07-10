import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import createHistory from "history/createBrowserHistory";
import { Route } from "react-router";

import * as reducers from '../reducers/index';
import { StoreState } from '../types/index';

import SideBar from './sideBar/containers/SideBar';


import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push
} from "react-router-redux";

const history = createHistory();

const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
);

ReactDOM.render(
  <Provider store={store}>
    <SideBar />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
