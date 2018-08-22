import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { root as Root } from './styles/Root';
import { UserState } from '../types';

import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
} from 'react-router-redux';
import { reCook } from '../reducers';

import SideBar from './sideBar/containers/SideBar';
import Editor from './editor/containers/Editor';
import Explore from './explore/containers/Explore';

const history = createBrowserHistory();

const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    ...reCook,
    router: routerReducer,
  }),
  applyMiddleware(middleware),
);

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
      </Root>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('main'),
);
