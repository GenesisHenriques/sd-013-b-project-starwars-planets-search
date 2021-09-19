import React from 'react';
import PlanetProvider from './context/Provider';
import './App.css';
import Table from './components/Table';
import Filters from './components/Filters';

function App() {
  return (
    <PlanetProvider>
      <Filters />
      <Table />
    </PlanetProvider>
  );
}

export default App;
