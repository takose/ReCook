import * as React from 'react';
import * as ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga'; // tslint:disable-line:import-name
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { root as Root } from './styles/Root';
import { UserState } from '../types';
import reCookSaga from '../sagas'; // tslint:disable-line:import-name

import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
} from 'react-router-redux';
import { reCook } from '../reducers';

import SideBar from './sideBar/containers/SideBar';
import Editor from './editor/containers/Editor';
import Explore from './explore/containers/Explore';
import Player from './player/containers/Player';

const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    ...reCook,
    router: routerReducer,
  }),
  applyMiddleware(middleware, sagaMiddleware),
);

sagaMiddleware.run(reCookSaga);

const node = document.getElementById('main');
const user: UserState = JSON.parse(node.getAttribute('user'));
const connectedSideBar = connect(state => ({
  user,
}))(SideBar);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Root>
        <Route path="/recipes" component={connectedSideBar} />
        <Route path="/recipes/editor" component={Editor} />
        <Route path="/recipes/explore" component={Explore} />
        <Route path="/recipes/player" component={Player} />
      </Root>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('main'),
);
