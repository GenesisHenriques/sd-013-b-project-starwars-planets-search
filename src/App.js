import React from 'react';

import MainProvider from './context/MainProvider';

import Header from './components/Header';
import NameFilter from './components/NameFilter';
import NumberFilter from './components/NumberFilter';
import SortFilter from './components/SortFilter';
import FilterList from './components/FilterList';
import Table from './components/Table';

import './App.css';

function App() {
  return (
    <MainProvider>
      <Header />
      <NameFilter />
      <NumberFilter />
      <SortFilter />
      <FilterList />
      <Table />
    </MainProvider>
  );
}

export default App;
