import React from 'react';
import Table from './Components/Table';
import PlanetProvider from './Context/PlanetProvider';
import Header from './Components/Header';

function App() {
  return (
    <PlanetProvider>
      <Header />
      <Table />
    </PlanetProvider>
  );
}

export default App;
