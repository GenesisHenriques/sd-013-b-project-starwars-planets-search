import React from 'react';
import ContextProvider from './context/ContextProvider';
import Table from './components/Table';
import Filter from './components/Filter';
import './App.css';

function App() {
  return (
    <ContextProvider>
      <Filter />
      <Table />
    </ContextProvider>
  );
}

export default App;
