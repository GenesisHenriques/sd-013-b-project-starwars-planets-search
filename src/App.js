import React from 'react';
import './App.css';
import FiltersSection from './components/FiltersSection';
import SearchBar from './components/SearchBar';
import Table from './components/Table';
import Provider from './context/AppProvider';

function App() {
  return (
    <Provider>
      <SearchBar />
      <FiltersSection />
      <Table />
    </Provider>
  );
}

export default App;
