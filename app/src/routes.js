import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Home from './components/home';
import App from './components/app';
import PostsNew from './components/posts-new';
import About from './components/about';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="about/page" component={About} />
    <Route path="posts" component={PostsNew} />
  </Route>
);
