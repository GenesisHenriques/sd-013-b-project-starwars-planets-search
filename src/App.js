import React from 'react';
import Provider from './context/Provider';
import './App.css';
import Table from './components/Table';
import Inputs from './components/Inputs';

function App() {
  return (
    <Provider>
      <Inputs />
      <Table />
    </Provider>
  );
}

export default App;
