import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { createStore } from 'redux';
import stockApp from './reducers';
import Root from './containers/Root';
import {} from './style.css';

const store = createStore(stockApp);

ReactDOM.render(
  <Root store={store} history={browserHistory} />,
  document.getElementById('app')
);
