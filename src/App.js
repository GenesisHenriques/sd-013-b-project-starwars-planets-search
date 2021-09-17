import React from 'react';
import Provider from './context/Provider';
import Table from './components/Table';
import Filter from './components/Filter';

function App() {
  return (
    <div>
      <Provider>
        <Filter />
        <Table />
      </Provider>
    </div>
  );
}

export default App;
