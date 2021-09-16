import React from 'react';
import './App.css';
import Filter from './components/Filter';
import Table from './components/table/Table';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <main>
        <Filter />
        <Table />
      </main>
    </Provider>
  );
}

export default App;
