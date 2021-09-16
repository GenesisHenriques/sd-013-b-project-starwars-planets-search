import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

const inicialState = {
  filterByName: {
    name: '',
  },
};

function PlanetProvider({ children }) {
  const [data, setData] = useState({
    results: [],
  });

  const [filters, setFilters] = useState(inicialState);

  const fetchAPI = useCallback(async () => {
    const result = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const response = await result.json();
    response.results.forEach((objeto) => delete objeto.residents);
    setData(response);
  }, []);

  function filterPlanetByName(filter) {
    setFilters({
      ...filters,
      filterByName: {
        name: filter,
      },
    });
  }

  return (
    <PlanetContext.Provider
      value={ {
        data,
        filters,
        fetchAPI,
        filterPlanetByName,
      } }
    >
      { children }
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any),
}.isRequired;

export default PlanetProvider;
