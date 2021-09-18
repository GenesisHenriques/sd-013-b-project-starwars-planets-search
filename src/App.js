import React from 'react';
import Provider from './context/Provider';
import Table from './components/Table';
// import Input from './components/Input';

function App() {
  return (
    <div>
      <Provider>
        <Table />
        {/* <Input /> */}
      </Provider>
    </div>
  );
}

export default App;
