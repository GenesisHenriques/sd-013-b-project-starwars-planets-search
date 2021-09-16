import React from 'react';
import './App.css';

import MyProvider from './context/MyProvider';

import Table from './components/Table';
import Filters from './components/Filters';

function App() {
  return (
    <MyProvider>
      <Filters />
      <Table />
    </MyProvider>
  );
}

export default App;
