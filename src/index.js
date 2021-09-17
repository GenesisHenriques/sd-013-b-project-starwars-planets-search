import React from 'react';
import ReactDOM from 'react-dom';
import PlanetsProvider from './contexts/PlanetsProvider';

import App from './App';

ReactDOM.render((
  <PlanetsProvider>
    <App />
  </PlanetsProvider>
), document.getElementById('root'));
