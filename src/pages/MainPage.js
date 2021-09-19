import React, { useContext, useEffect } from 'react';

import PlanetContext from '../context/PlanetContext';
import Table from '../component/Table';
import Filter from '../component/Filter';

function Main() {
  const { setData } = useContext(PlanetContext);

  useEffect(() => {
    async function getPlanets() {
      try {
        const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
        const { results } = await fetch(URL).then((response) => response.json());
        results.forEach((planet) => {
          delete planet.residents;
        });
        setData(results);
        console.log('Renderizou');
      } catch (error) {
        setData(error);
      }
    }
    getPlanets();
  }, [setData]);

  return (
    <>
      <Filter />
      <Table />
    </>
  );
}

export default Main;
