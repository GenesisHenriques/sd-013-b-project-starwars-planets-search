import React from 'react';
import './App.css';
import Tabela from './component/Tabela';
import NamePlanet from './component/NamePlanet';
import DataProvider from './context/DataProvider';

function App() {
  return (
    <DataProvider>
      <h1>Hello, Star Wars!</h1>
      <Tabela />
      <NamePlanet />
    </DataProvider>
  );
}

export default App;
