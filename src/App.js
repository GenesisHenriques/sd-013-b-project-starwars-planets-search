import React from 'react';

import Header from './components/Header';
import NameFilter from './components/NameFilter';
import Table from './components/Table';

import './App.css';
import NumberFilter from './components/NumberFilter';

function App() {
  return (
    <main>
      <Header />
      <NameFilter />
      <NumberFilter />
      <Table />
    </main>
  );
}

export default App;
