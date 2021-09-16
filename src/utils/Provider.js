import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Context from './Context';

export default function Provider({ children }) {
  const [planetsList, updatePlanetsList] = useState([]);
  const [name, setName] = useState('');
  const [filters, setFilters] = useState({
    filterByName: { name },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: '100000',
      },
    ],
  });
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const contextValue = {
    planetsList,
    updatePlanetsList,
    name,
    setName,
    filters,
    setFilters,
    filteredPlanets,
    setFilteredPlanets,
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
