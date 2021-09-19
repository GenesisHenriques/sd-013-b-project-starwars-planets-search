import React from 'react';
import './App.css';
import Table from './components/Table';
import Filter from './components/Filter';
import SwProvider from './context/SwProvider';

function App() {
  return (
    <SwProvider>
      <Filter />
      <Table />
    </SwProvider>
  );
}

export default App;
