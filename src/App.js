import React from 'react';
import './App.css';
import FiltersHeader from './components/FiltersHeader';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <div className="App">
        <FiltersHeader />
        <Table />
      </div>
    </PlanetsProvider>
  );
}

export default App;
