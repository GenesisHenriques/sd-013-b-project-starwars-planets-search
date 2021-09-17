import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [compareFilter, setCompareFilter] = useState([]);

  const contextValues = {
    data,
    filters: {
      filterByName: {
        name: filterName,
      },
      filterByNumericValues: compareFilter,
    },
    setFilterName,
    setCompareFilter,
  };

  const getPlanets = async () => {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const result = await response.json();
    const planets = result.results;
    planets.map((planet) => delete planet.residents);
    setData(planets);
  };

  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <Context.Provider value={ contextValues }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
