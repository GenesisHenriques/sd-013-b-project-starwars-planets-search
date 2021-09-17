import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './components/Table/Index';
import SearchBar from './components/searchBar.js';

function App() {
  return (
    <Provider>
      <SearchBar />
      <Table />
    </Provider>
  );
}

export default App;
