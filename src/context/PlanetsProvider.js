import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    fetch('https://swapi.dev/api/planets')
      .then((response) => response.json())
      .then((response) => {
        setData(response.results);
      });
  }, []);

  const [filters, setFilters] = useState({
    filterByName: { name: '' },
  });

  const contextValue = {
    data,
    filters,
    setFilters,
  };

  return (
    <PlanetsContext.Provider
      value={ { contextValue } }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PlanetsProvider;
