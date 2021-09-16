import React from 'react';
import Table from './Components/Table';
import PlanetProvider from './Context/PlanetProvider';
import Header from './Components/Header';
import FilterName from './Components/FilterName';

function App() {
  return (
    <PlanetProvider>
      <Header />
      <FilterName />
      <Table />
    </PlanetProvider>
  );
}

export default App;
