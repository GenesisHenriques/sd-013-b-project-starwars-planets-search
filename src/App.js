import React from 'react';
import Table from './components/Table';
import PlanetsProvider from './context/Provider';

function App() {
  return (
    <PlanetsProvider>
      <div>
        <Table />
      </div>
    </PlanetsProvider>
  );
}

export default App;
