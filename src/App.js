import React from 'react';
import './App.css';
import Table from './Components/Table';
import Filter from './Components/Filter';
import DataProvider from './context/DataProvider';

function App() {
  return (
    <DataProvider>
      <span>Find a Star Wars Planet!</span>
      <Filter />
      <Table />
    </DataProvider>
  );
}

export default App;
