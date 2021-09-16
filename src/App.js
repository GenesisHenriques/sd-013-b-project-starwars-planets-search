import React from 'react';
import './App.css';
import Table from './Components/Table';
import PlanetsProvider from './Context/PlanetProvider';

function App() {
  return (
    <PlanetsProvider>
      <Table />
    </PlanetsProvider>
  );
}

export default App;
