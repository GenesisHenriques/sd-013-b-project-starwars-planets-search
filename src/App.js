import React from 'react';
import Table from './components/Table';
import './App.css';
import TableProvider from './context/TableProvider';
import InputFilter from './components/InputFilter';

function App() {
  return (
    <TableProvider>
      <InputFilter />
      <Table />
    </TableProvider>
  );
}

export default App;
