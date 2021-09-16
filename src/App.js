import React from 'react';

import './App.css';
import Provider from './utils/Provider';
import NameFilter from './components/NameFilter';
// import NumericFilter from './components/NumericFilter';
import TableContents from './components/TableContents';

function App() {
  return (
    <Provider>
      <section className="main-container">
        <h1>StarWars Planet Search App!</h1>
        <NameFilter />
        {/* <NumericFilter /> */}
        <TableContents />
      </section>
    </Provider>
  );
}

export default App;
