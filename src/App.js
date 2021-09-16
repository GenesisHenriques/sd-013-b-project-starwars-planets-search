import React from 'react';
import './App.css';
import PlanetsTable from './PlanetsTable';
import StarWarsProvider from './context/StarwarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <h1>Star Wars Planets</h1>
      <PlanetsTable />
    </StarWarsProvider>
  );
}

export default App;
