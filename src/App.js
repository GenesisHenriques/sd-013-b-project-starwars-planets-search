import './App.css';
import React from 'react';
import Provider from './contexts/Provider';
import HomePage from './pages/Home';

function App() {
  return (
    <Provider>
      <HomePage />
    </Provider>
  );
}

export default App;
