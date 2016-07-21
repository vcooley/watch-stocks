import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { socketMiddleware } from './redux-socket-middleware';
import { rootReducer } from './reducers';
import Root from './containers/Root';
import {} from './style.css';


export const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, socketMiddleware)
);

ReactDOM.render(
  <Root store={store} history={browserHistory} />,
  document.getElementById('app')
);
