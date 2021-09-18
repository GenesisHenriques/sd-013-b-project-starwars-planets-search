import React from 'react';
import PlanetProvider from './context/Provider';
import './App.css';
import Table from './components/Table';

function App() {
  return (
    <PlanetProvider>
      <Table />
    </PlanetProvider>
  );
}

export default App;
