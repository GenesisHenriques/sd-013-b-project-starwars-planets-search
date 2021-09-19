import React from 'react';
import './App.css';
import PlanetsTable from './PlanetsTable';
import StarWarsProvider from './context/StarwarsProvider';
import SearchBar from './SearchBar';

function App() {
  return (
    <StarWarsProvider>
      <div className="header-name">
        <h1>StarWars Planets Search</h1>
      </div>
      <SearchBar />
      <PlanetsTable />
    </StarWarsProvider>
  );
}

export default App;
