import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';

function renderApp() {
  // const App = require('./containers/App').default
  render(<App />, root);
}

renderApp();

module.hot.accept(renderApp);
