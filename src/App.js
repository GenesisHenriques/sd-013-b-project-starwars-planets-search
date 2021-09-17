import React from 'react';
import './App.css';
import PlanetsTable from './PlanetsTable';
import StarWarsProvider from './context/StarwarsProvider';
import SearchBar from './SearchBar';

function App() {
  return (
    <StarWarsProvider>
      <h1>StarWars Planets Search</h1>
      <SearchBar />
      <PlanetsTable />
    </StarWarsProvider>
  );
}

export default App;
