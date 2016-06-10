import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { store } from './create-store';
import Root from './containers/Root';
import {} from './style.css';

ReactDOM.render(
  <Root store={store} history={browserHistory} />,
  document.getElementById('app')
);
