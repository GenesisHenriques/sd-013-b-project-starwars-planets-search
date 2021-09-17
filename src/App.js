import React from 'react';
import './App.css';
import FilterTable from './components/FilterTable';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <h1> Star Wars Planets Database</h1>
      <FilterTable />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
