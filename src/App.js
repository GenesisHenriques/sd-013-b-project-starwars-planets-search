import React from 'react';
import './App.css';
import Table from './Components/Table';
import Filters from './Components/Filters';
import PlanetsProvider from './Context/PlanetProvider';
import OrderFilter from './Components/OrderFilter';

function App() {
  return (
    <PlanetsProvider>
      <OrderFilter />
      <Filters />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
