import React from 'react';
import './App.css';
import FilterPlanet from './components/InputFilter';
import NumberFilter from './components/NumberFilter';
import Table from './components/Table';
import PlanetProvider from './context/Provider';

function App() {
  return (
    <PlanetProvider>
      <FilterPlanet />
      <NumberFilter />
      <Table />
    </PlanetProvider>
  );
}

export default App;
