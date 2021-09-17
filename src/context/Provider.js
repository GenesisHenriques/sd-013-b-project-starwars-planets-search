import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

export default function Provider({ children }) {
  const [data, setData] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [actualFilter, setActualFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((response) => {
        setData(response.results);
        setPlanets(response.results);
      })
      .catch((error) => console.log(error));
  }, []);

  const contextValue = {
    data,
    planets,
    setPlanets,
    actualFilter,
    setActualFilter,
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
  children: PropTypes.node.isRequired,
};
