import React from 'react';
import MyProvider from './context/MyProvider';
import Table from './components/componentsTable/Table';
import Header from './components/componentsHeader/Header';

function App() {
  return (
    <MyProvider>
      <Header />
      <br />
      <br />
      <Table />
    </MyProvider>
  );
}

export default App;
