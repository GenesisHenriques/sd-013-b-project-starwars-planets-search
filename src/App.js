import React from 'react';

import { SWProvider } from './context';
import { FiltersForm, Table } from './components';

import './App.css';

function App() {
  return (
    <SWProvider>
      <FiltersForm />
      <Table />
    </SWProvider>
  );
}

export default App;
