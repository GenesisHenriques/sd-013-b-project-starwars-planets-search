import React from 'react';
import Table from './components/Table';
import TextInput from './components/TextInput';
import PlanetsProvider from './context/Provider';

function App() {
  return (
    <PlanetsProvider>
      <div>
        <TextInput />
        <Table />
      </div>
    </PlanetsProvider>
  );
}

export default App;
