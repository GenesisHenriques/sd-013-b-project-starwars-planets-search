import React from 'react';

import Provider from './context/Provider';

import Input from './components/Input';
import Table from './components/Table';
import Select from './components/Select';

function App() {
  return (
    <Provider>
      <Input />
      <Select />
      <Table />
    </Provider>
  );
}

export default App;
