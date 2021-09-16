import React from 'react';
import Provider from './Contexts/Provider';
import Table from './Components/Table';
// import './App.css';

function App() {
  return (
    <Provider>
      <Table />
    </Provider>
  );
}

export default App;
