import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import promise from 'redux-promise';

import reducers from './reducers';
import routes from './routes';

const createStoreMw = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreMw(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.getElementById('container'));
