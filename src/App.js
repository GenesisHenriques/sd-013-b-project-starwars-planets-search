import React from 'react';
import './App.css';

import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';
import FilterMenu from './components/FilterMenu';

function App() {
  return (
    <PlanetsProvider>
      <FilterMenu />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
