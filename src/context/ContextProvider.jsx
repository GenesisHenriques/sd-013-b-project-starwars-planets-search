import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import ContextCreat from './ContextCreat';

const PLANETS_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default function ContextProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filterName, setFilterByName] = useState([]);
  const [filterColumn, setFilterColumn] = useState('population');
  const [filterComparison, setFilterComparison] = useState('maior');
  const [filterValue, setFilterValue] = useState('');

  const filters = {
    filterByName: {
      name: filterName,
    },
    filterByNumericValues: [
      {
        column: filterColumn,
        comparison: filterComparison,
        value: filterValue,
      },
    ],
  };

  function columnsFilter() {
    const { filterByNumericValues: [{ comparison, column, value }] } = filters;
    console.log(comparison);
    switch (comparison) {
    case 'maior que':
      return setFilterByName(planets
        .filter((planet) => Number(planet[column]) > Number(value)));
    case 'menor que':
      return setFilterByName(planets
        .filter((planet) => Number(planet[column]) < Number(value)));
    case 'igual a':
      return setFilterByName(planets
        .filter((planet) => Number(planet[column]) === Number(value)));
    default: setFilterByName(planets);
    }
  }

  function handleFilterClick() {
    columnsFilter();
  }

  useEffect(() => {
    async function fetchApi() {
      const { results } = await (await fetch(PLANETS_URL)).json();
      setPlanets(results);
    }
    fetchApi();
  }, handleFilterClick);

  function handleName(value) {
    if (value === '') {
      return setFilterByName(planets);
    }
    const filterValueName = planets
      .filter(({ name }) => name.toLowerCase().includes(value.toLowerCase()));
    setFilterByName(filterValueName);
  }

  function handleValueFilter(value, type) {
    if (type === 'columFilter') {
      return setFilterColumn(value);
    } if (type === 'comparisonFilter') {
      return setFilterComparison(value);
    } return setFilterValue(value);
  }

  return (
    <ContextCreat.Provider
      value={ { filters,
        planets,
        handleName,
        handleValueFilter,
        handleFilterClick } }
    >
      { children }
    </ContextCreat.Provider>
  );
}
ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
