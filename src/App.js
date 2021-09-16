import React from 'react';
import './App.css';
import PlanetsProvider from './Context/provider';

import Table from './Components/table';

function App() {
  return (
    <PlanetsProvider>
      <Table />
    </PlanetsProvider>
  );
}

export default App;
