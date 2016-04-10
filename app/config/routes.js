var React          = require('react');
var ReactRouter    = require('react-router');
var Router         = ReactRouter.Router;
var Route          = ReactRouter.Route;
var hashHistory    = ReactRouter.hashHistory;
var MainContainer  = require('../containers/MainContainer');
var RoomContainer  = require('../containers/RoomContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={MainContainer}>
      <Route path="/room" component={RoomContainer}/>
    </Route>
  </Router>
);

module.exports = routes;

