import React from 'react';
import './App.css';
import PlanetsProvider from './context/planetsProvider';
import Filters from './components/Filters';
import Table from './components/Table';

function App() {
  return (
    <PlanetsProvider>
      <Filters />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
