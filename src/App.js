import React from 'react';

import { SWProvider } from './context';
import Table from './components/Table';

import './App.css';

function App() {
  return (
    <SWProvider>
      <Table />
    </SWProvider>
  );
}

export default App;
