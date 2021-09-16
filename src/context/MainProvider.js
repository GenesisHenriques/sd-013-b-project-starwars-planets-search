import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MainContext from './MainContext';

function MainProvider({ children }) {
  const [data, setData] = useState({
    results: [],
  });

  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: '',
      },
    ],
  });

  async function fetchPlanets() {
    const result = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const response = await result.json();
    response.results.forEach((obj) => delete obj.residents);
    setData(response);
  }

  function filterPlanetsByName(filter) {
    setFilters({
      filterByName: {
        name: filter,
      },
    });
  }

  function filterPlanetsByNumericValue(column, comparison, value) {
    setFilters({
      ...filters,
      filterByNumericValues: [
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
        fetchPlanets,
        data,
        filters,
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
