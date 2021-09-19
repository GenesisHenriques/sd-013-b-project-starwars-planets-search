import React, { useContext, useEffect } from 'react';
import MyContext from '../context/MyContext';

function App() {
  const { fetchApiPlanets } = useContext(MyContext);

  useEffect(() => {
    fetchApiPlanets();
  }, [fetchApiPlanets]);

  return (
    <header>
      <h2>StarWars Planets</h2>
    </header>
  );
}

export default App;
