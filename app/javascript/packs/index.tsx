import * as React from 'react';
import * as ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga'; // tslint:disable-line:import-name
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
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

const windowIfDefined = typeof window === 'undefined' ? null : window as any;
const composeEnhancers = windowIfDefined.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    ...reCook,
    router: routerReducer,
  }),
  composeEnhancers(
    applyMiddleware(middleware, sagaMiddleware),
  ),
);

sagaMiddleware.run(reCookSaga);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Root>
        <Route path="/recipes" component={SideBar} />
        <Route path="/recipes/editor" component={Editor} />
        <Route path="/recipes/explore" component={Explore} />
        <Route exact path="/recipes/player" component={RealtimePlayer} />
        <Route path="/recipes/player/:id" component={Player} />
      </Root>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('main'),
);
