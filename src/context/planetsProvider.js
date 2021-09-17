import React, { useState, useEffect } from 'react';
import planetsContext from './planetsContext';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState();

  useEffect(() => {
    async function getData() {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const data = await response.json();
      setPlanets(data.results);
    }
    getData();
  }, []);

  const contexto = {
    data: planets,
  };

  return (
    <planetsContext.Provider value={ contexto }>
      {children}
    </planetsContext.Provider>
  );
}

export default PlanetsProvider;
