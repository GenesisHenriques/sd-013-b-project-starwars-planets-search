import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './starWarsContext';
import fetchPlanets from '../services/planets';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterName: {
      name: '',
    },
  });

  useEffect(() => {
    async function getplanets() {
      const planets = await fetchPlanets();
      setData(planets);
    }
    getplanets();
  }, []);

  function handleChange({ target }) {
    const { value } = target;
    setFilters({ filterName: { name: value } });
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
