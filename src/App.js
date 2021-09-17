import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './components/Table/Table';
import NameFilter from './components/NameFilter/NameFilter';
import ValuesFilter from './components/ValuesFilter/ValuesFilter';

function App() {
  return (
    <Provider>
      <NameFilter />
      <ValuesFilter />
      <Table />
    </Provider>
  );
}

export default App;
