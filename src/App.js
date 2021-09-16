import React from 'react';
import './App.css';
import Table from './components/table';
import MainProvider from './context/MainProvider';
import SearchBar from './components/searchBar';

function App() {
  return (
    <MainProvider>
      <SearchBar />
      <Table />
    </MainProvider>
  );
}

export default App;
