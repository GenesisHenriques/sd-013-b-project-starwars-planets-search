import React from 'react';
import './App.css';
import Table from './Components/Table';
import AppProvider from './Context/AppProvider';

function App() {
  return (
    <AppProvider>
      <Table />
    </AppProvider>
  );
}

export default App;
