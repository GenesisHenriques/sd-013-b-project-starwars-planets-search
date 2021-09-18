import React from 'react';
import './App.css';
import Filters from './components/Filters';
import Table from './components/Table';
import SWProvider from './context/SWProvider';

function App() {
  return (
    <main>
      <SWProvider>
        <span>Hello, App!</span>
        <Filters />
        <Table />
      </SWProvider>
    </main>
  );
}

export default App;
