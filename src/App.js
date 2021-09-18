import React from 'react';
import './App.css';
import Tabela from './component/Tabela';
import Test from './component/Test';
import DataProvider from './context/DataProvider';

function App() {
  return (
    <DataProvider>
      <h1>Hello, Star Wars!</h1>
      <Tabela />
      <Test />
    </DataProvider>
  );
}

export default App;
