import React from 'react';
import Provider from './context/Provider';
import Table from './components/Table';

function App() {
  return (
    <div>
      <Provider>
        <Table />
      </Provider>
    </div>
  );
}

export default App;
