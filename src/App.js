import React from 'react';
import './App.css';
import PlanetsProvider from './Context/PlanetsProvider';
import PlanetsTable from './Pages/PlanetsTable';
import PlanetsFilter from './Pages/PlanetsFilter';

function App() {
  return (
    <PlanetsProvider>
      <PlanetsFilter />
      <PlanetsTable />
    </PlanetsProvider>
  );
}

export default App;
