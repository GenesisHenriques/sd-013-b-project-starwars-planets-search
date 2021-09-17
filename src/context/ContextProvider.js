import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import PlanetsContext from './PlanetsContext';

function ContextProvider({ children }) {
  // Planets
  const [planets, setPlanets] = useState([]);
  const fetchPlanets = () => (
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((results) => setPlanets([...results.results]))
  );

  useEffect(() => {
    fetchPlanets();
  }, []);

  // Filters
  const defaultFilters = { filteredByName: '' };
  const [filters, setFilters] = useState(defaultFilters);

  const contextValue = {
    planets,
    filters,
    setFilters,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      { children }
    </PlanetsContext.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
