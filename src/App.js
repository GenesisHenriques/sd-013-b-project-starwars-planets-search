import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './pages/Table';

function App() {
  return (
    <PlanetsProvider>
      <Table />
    </PlanetsProvider>
  );
}

export default App;
