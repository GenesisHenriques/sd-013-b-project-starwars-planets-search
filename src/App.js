import React from 'react';
import PlanetProvider from './Context/PlanetProvider';
import Table from './Components/Table';
import './App.css';

function App() {
  return (
    <PlanetProvider>
      <div>
        <Table />
      </div>
    </PlanetProvider>
  );
}

export default App;
