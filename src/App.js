import React from 'react';
import Provider from './Contexts/Provider';
import Table from './Components/Table';
import FilterName from './Components/FilterName';
import FilterNumbers from './Components/FilterNumbers';
// import './App.css';

function App() {
  return (
    <Provider>
      <FilterName />
      <FilterNumbers />
      <Table />
    </Provider>
  );
}

export default App;
