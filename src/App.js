import React from 'react';
import './App.css';
import PlanetProvider from './Context/PlanetProvider';
import PlanetAPI from './services/planetsAPI';
import Table from './Components/Table';

function App() {
  return (
    <PlanetProvider>
      <div>
        <span>Olá, App!</span>
        <button type="button" onClick={ PlanetAPI }>Aperte aqui</button>
      </div>
      <Table />
    </PlanetProvider>
  );
}

export default App;
