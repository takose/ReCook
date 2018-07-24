import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { root as Root } from './styles/Root';

import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push,
} from 'react-router-redux';
import * as reducers from '../reducers/index';
import { StoreState } from '../types/index';

import SideBar from './sideBar/containers/SideBar';
import Editor from './editor/containers/Editor';
import Explore from './explore/containers/Explore';

const history = createBrowserHistory();

const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
  }),
  applyMiddleware(middleware),
);

const node = document.getElementById('main');
const user = JSON.parse(node.getAttribute('user'));
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Root>
        <Route path="/recipes/*" render={() => <SideBar {...user} />} />
        <Route path="/recipes/editor" component={Editor} />
        <Route path="/recipes/explore" component={Explore} />
      </Root>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('main'),
);
