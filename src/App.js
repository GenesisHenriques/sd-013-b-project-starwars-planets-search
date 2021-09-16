import React from 'react';
import './App.css';
import Table from './components/table';
import MainProvider from './context/MainProvider';

function App() {
  return (
    <MainProvider>
      <Table />
    </MainProvider>
  );
}

export default App;
