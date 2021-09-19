import React from 'react';
import './App.css';
import Table from './Components/Table';
import ApiProvider from './context/ApiProvider';

function App() {
  return (
    <div>
      <ApiProvider>
        <Table />

      </ApiProvider>
    </div>
  );
}

export default App;
