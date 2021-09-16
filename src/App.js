import React from 'react';

import Provider from './context/Provider';

import Input from './components/Input';
import Table from './components/Table';

function App() {
  return (
    <Provider>
      <Input />
      <Table />
    </Provider>
  );
}

export default App;
