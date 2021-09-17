import React from 'react';
import './App.css';

import ContextProvider from './context/ContextProvider';
import Table from './components/Table';
import Filters from './components/Filters';

function App() {
  return (
    <ContextProvider>
      <h1>Star Wars Planets</h1>
      <Filters />
      <Table />
    </ContextProvider>
  );
}

export default App;
