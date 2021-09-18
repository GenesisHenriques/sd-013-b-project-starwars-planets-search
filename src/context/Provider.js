import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  const contextValue = {
    planets,
    setPlanets,
  };

  useEffect(() => {
    async function fetchAPI() {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const data = await response.json();
      data.results.map((result) => delete result.residents);
      setPlanets(data.results);
    }
    fetchAPI();
  }, []);

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;
