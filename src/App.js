import React, { useContext, useEffect } from 'react';
import './App.css';
import Table from './components/Table';
import MyContext from './context/MyContext';

function App() {
  const { fetchApiPlanets } = useContext(MyContext);

  useEffect(() => {
    fetchApiPlanets();
  }, [fetchApiPlanets]);

  return (
    <main>
      <header>
        <h2>StarWars Planets</h2>
      </header>
      <Table />
    </main>
  );
}

export default App;
