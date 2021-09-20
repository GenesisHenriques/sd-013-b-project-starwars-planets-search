import React from 'react';

import TableProvider from './context/TableProvider';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';

function App() {
  return (
    <TableProvider>
      <Home />
    </TableProvider>
  );
}

export default App;
