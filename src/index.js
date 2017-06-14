import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './styles/normalize.scss';
import './styles/main.scss';

import App from './components/App';

// detects touch event and adds class to html element to fix hover issues
import './detectTouch';

ReactDOM.render(
  <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/portfolio' : null}>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);
