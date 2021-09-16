import React from 'react';
import './App.css';
import Table from './Components/Table';
import Filters from './Components/Filters';
import PlanetsProvider from './Context/PlanetProvider';

function App() {
  return (
    <PlanetsProvider>
      <Filters />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
