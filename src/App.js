import React from 'react';
import './App.css';
import SearchForm from './components/SearcForm';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <SearchForm />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
