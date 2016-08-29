import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Home from './components/home';
import App from './components/app';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
  </Route>
);
