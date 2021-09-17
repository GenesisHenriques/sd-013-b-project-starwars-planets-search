import React from 'react';
import Table from './components/Table';
import Provider from './context/Provider';
import Input from './components/Input';
import SelectFilter from './components/SelectFilter';
import './App.css';

function App() {
  return (
    <Provider>
      <Input />
      <SelectFilter />
      <Table />
    </Provider>
  );
}

export default App;
