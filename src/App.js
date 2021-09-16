import React from 'react';
import './App.css';
import Table from './Components/Table';
import MyProvider from './Context/MyProvider';

function App() {
  return (
    <MyProvider>
      <Table />
    </MyProvider>
  );
}

export default App;
