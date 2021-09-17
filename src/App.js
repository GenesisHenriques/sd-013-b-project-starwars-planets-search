import React from 'react';
import './App.css';
import Table from './components/Table';
import Header from './components/Header';
import Filters from './components/Filters';
import MyProvider from './context/MyProvider';

function App() {
  return (
    <MyProvider>
      <Header />
      <Filters />
      <Table />
    </MyProvider>
  );
}

export default App;
