import React from 'react';
import Table from './components/Table';
import './App.css';
import TableProvider from './context/TableProvider';

function App() {
  return (
    <TableProvider>
      <span>Hello, App!</span>
      <Table />
    </TableProvider>
  );
}

export default App;
