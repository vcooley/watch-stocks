import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import RoomContainer from './containers/RoomContainer';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={RoomContainer}/>
  </Route>
);

module.exports = routes;
