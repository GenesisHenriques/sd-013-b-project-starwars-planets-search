import React from 'react';
import './App.css';
import PlanetsTable from './PlanetsTable';
import StarWarsProvider from './context/StarwarsProvider';
import SearchBar from './SearchBar';

function App() {
  return (
    <StarWarsProvider>
      <h1>Star Wars Planets</h1>
      <SearchBar />
      <PlanetsTable />
    </StarWarsProvider>
  );
}

export default App;
