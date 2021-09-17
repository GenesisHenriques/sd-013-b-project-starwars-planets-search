import React from 'react';
import './App.css';
import Table from './components/Table';
import SwProvider from './context/SwProvider';

function App() {
  return (
    <SwProvider>
      <Table />
    </SwProvider>
  );
}

export default App;
