import React from 'react';
import './App.css';
import Table from './components/Table';
import MyProvider from './context/MyProvider';

function App() {
  return (
    <MyProvider value={ [] }>
      <div>
        <span>Hello, App!</span>
        <Table />
      </div>
    </MyProvider>
  );
}

export default App;
