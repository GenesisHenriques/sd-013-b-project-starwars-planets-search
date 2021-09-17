import React from 'react';
import Provider from './Contexts/Provider';
import Table from './Components/Table';
import FilterName from './Components/FilterName';
// import './App.css';

function App() {
  return (
    <Provider>
      <FilterName />
      <Table />
    </Provider>
  );
}

export default App;
