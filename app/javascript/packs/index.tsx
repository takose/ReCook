import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import createHistory from "history/createBrowserHistory";
import { Router, Route } from "react-router";

import * as reducers from '../reducers/index';
import { StoreState } from '../types/index';

import SideBar from './sideBar/containers/SideBar';
import Editor from './editor/containers/Editor';
import Explore from './explore/containers/Explore';


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
    <Router history={history}>
      <Route path="/" component={Editor} />
    </Router>
  </Provider>,
  document.getElementById('main')
);
