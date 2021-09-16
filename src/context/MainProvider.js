import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import MainContext from './MainContext';

const filtersInitialState = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};

function MainProvider({ children }) {
  const [data, setData] = useState({
    results: [],
  });

  const [filters, setFilters] = useState(filtersInitialState);

  const fetchPlanets = useCallback(async () => {
    const result = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const response = await result.json();
    response.results.forEach((obj) => delete obj.residents);
    setData(response);
  }, []);

  function filterPlanetsByName(filter) {
    setFilters({
      ...filters,
      filterByName: {
        name: filter,
      },
    });
  }

  function filterPlanetsByNumericValue(column, comparison, value) {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        {
          column,
          comparison,
          value,
        },
      ],
    });
  }

  return (
    <MainContext.Provider
      value={ {
        data,
        filters,
        fetchPlanets,
        filterPlanetsByName,
        filterPlanetsByNumericValue } }
    >
      {children}
    </MainContext.Provider>
  );
}

MainProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MainProvider;
