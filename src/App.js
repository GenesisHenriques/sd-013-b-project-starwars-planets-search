import React from 'react';
import './App.css';
import Table from './components/table/Table';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <main>
        <Table />
      </main>
    </Provider>
  );
}

export default App;
