import React from 'react';
import Header from './Components/Header';
import ContextProvider from './context/ContextProvider';
import Table from './Components/Table';

function App() {
  return (
    <ContextProvider>
      <Header />
      <Table />
    </ContextProvider>
  );
}

export default App;
