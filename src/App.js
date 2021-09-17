import React from 'react';
import './App.css';
import Filter from './Components/Filter';
import FilterName from './Components/FilterName';
import Table from './Components/Table';
import MyProvider from './Context/MyProvider';

function App() {
  return (
    <MyProvider>
      <FilterName />
      <Filter />
      <Table />
    </MyProvider>
  );
}

export default App;
