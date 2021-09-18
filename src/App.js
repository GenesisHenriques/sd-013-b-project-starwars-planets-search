import React from 'react';

// import Routes from './Routes';
import TableProvider from './context';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';

function App() {
  return (
    <TableProvider>
      {/* <Routes /> */}
      <Home />
    </TableProvider>
  );
}

export default App;
