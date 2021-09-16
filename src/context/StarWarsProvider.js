import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchPlanets from '../services/RequestPlanets';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  useEffect(() => {
    async function getPlanet() {
      const planets = await fetchPlanets();
      setData(planets);
    }
    getPlanet();
  }, []);

  function handleChange({ target }) {
    const { value } = target;
    setFilters({ filterByName: { name: value } });
  }

  const contextValue = {
    data,
    filters,
    handleChange,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default StarWarsProvider;
