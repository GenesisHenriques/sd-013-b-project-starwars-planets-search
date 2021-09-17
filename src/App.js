import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './components/Table/Table';
import NameFilter from './components/NameFilter/NameFilter';
import ValuesFilter from './components/ValuesFilter/ValuesFilter';
import Erasefilters from './components/EraseFilters/EraseFilters';

function App() {
  return (
    <Provider>
      <NameFilter />
      <Erasefilters />
      <ValuesFilter />
      <Table />
    </Provider>
  );
}

export default App;
