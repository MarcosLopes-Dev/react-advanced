import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorBoundary from './error-boundary';

import reactDom from 'react-dom';

const main = (
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
)

reactDom.render(main, document.getElementById('root'));

