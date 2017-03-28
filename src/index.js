import React from 'react';
import ReactDOM from 'react-dom';
import './styles/normalize.scss';
import './styles/main.scss';

import App from './components/App';

import './detectTouch';

ReactDOM.render(
  <App />, document.getElementById('app')
);