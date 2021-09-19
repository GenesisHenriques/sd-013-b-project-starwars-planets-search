import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filterName, setFilterName] = useState({
    filterByName: {
      name: '',
    },
  });

  useEffect(() => {
    async function fetchAPI() {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const data = await response.json();
      data.results.map((result) => delete result.residents);
      setPlanets(data.results);
    }
    fetchAPI();
  }, []);

  const filterByName = (eventName) => {
    setFilterName({
      ...filterName,
      filterByName: {
        name: eventName,
      },
    });
  };

  return (
    <Context.Provider
      value={ {
        planets,
        setPlanets,
        filterName,
        setFilterName,
        filterByName } }
    >
      {children}
    </Context.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;
