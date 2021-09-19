import React, { useState, useEffect } from 'react';
import SwContext from './SwContext';

function SwProvider({ children }) {
  // useState retorna um array [item1=state, item2=função setState]
  // na desistruturação do array, você pode alterar o nome, caso deseje
  const [planets, setPlanets] = useState([]);
  useEffect(() => {
    async function getPlanetsStarWars() {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const json = await response.json();
      const data = await json.results;
      setPlanets(data);
      return data;
    }
    getPlanetsStarWars();
  }, []);

  const [filters, setFiltersByName] = useState([{
    filterByName: {
      name: '',
    },
  }]);

  return (
    <SwContext.Provider value={ { planets, filters, setFiltersByName } }>
      { children }
    </SwContext.Provider>
  );
}

export default SwProvider;
