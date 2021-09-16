import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

export default function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  async function getPlanets() {
    try {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint)
        .then((response) => response.json());
      setData(results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPlanets();
  }, []);

  const contextValue = {
    data,
    getPlanets,
    filters,
    setFilters,
  };

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;
