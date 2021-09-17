import React, { useContext, useEffect } from 'react';

import PlanetContext from '../context/PlanetContext';
import Table from '../component/Table';

function Main() {
  const { setPlanets } = useContext(PlanetContext);

  useEffect(() => {
    async function getPlanets() {
      try {
        const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
        const { results } = await fetch(URL).then((response) => response.json());
        results.forEach((planet) => {
          delete planet.residents;
        });
        setPlanets(results);
        console.log('test');
      } catch (error) {
        setPlanets(error);
      }
    }
    getPlanets();
  }, [setPlanets]);

  return (
    <Table />
  );
}

export default Main;
