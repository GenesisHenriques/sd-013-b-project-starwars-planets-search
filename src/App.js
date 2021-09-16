import React from 'react';
import './App.css';
import StarWarsProvider from './context/starWarsProvider';
import Table from './components/table';
import Filter from './components/Filter';
// iniciando projeto vqv
function App() {
  return (
    <StarWarsProvider>
      <Filter />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
