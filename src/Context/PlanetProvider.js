import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [data, setData] = useState({
    results: [],
  });

  const fetchAPI = useCallback(async () => {
    const result = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const response = await result.json();
    response.results.forEach((objeto) => delete objeto.residents);
    setData(response);
  }, []);

  return (
    <PlanetContext.Provider
      value={ {
        data,
        fetchAPI,
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
