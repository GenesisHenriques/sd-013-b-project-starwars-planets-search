import React from 'react';
import './App.css';
import StarWarsProvider from './context/starWarsProvider';
import Table from './components/table';

function App() {
  return (
    <StarWarsProvider>
      <Table />
    </StarWarsProvider>
  );
}

export default App;
