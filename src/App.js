import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './components/Table/Table';
import NameFilter from './components/NameFilter/NameFilter';

function App() {
  return (
    <Provider>
      <NameFilter />
      <Table />
    </Provider>
  );
}

export default App;
