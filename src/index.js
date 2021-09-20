import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Provider from './Context/StarProvider';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root'),
);
