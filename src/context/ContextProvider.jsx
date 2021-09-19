import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import ContextCreat from './ContextCreat';

const PLANETS_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const optionNoFilter = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

export default function ContextProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filterName, setFilterByName] = useState([]);
  const [optionFilter, setOptionFilter] = useState(optionNoFilter);
  const [filterColumn, setFilterColumn] = useState('population');
  const [filterComparison, setFilterComparison] = useState('maior que');
  const [filterValue, setFilterValue] = useState('');

  const filters = {
    filterByName: {
      name: filterName,
    },
    optionValue: optionFilter,
    filterByNumericValues: [
      {
        column: filterColumn,
        comparison: filterComparison,
        value: filterValue,
      },
    ],
  };

  function removeOption() {
    const { filterByNumericValues: [{ column }], optionValue } = filters;
    const newOption = optionValue.filter((option) => option !== column);
    setOptionFilter(newOption);
  }

  function columnsFilter() {
    const { filterByNumericValues: [{ comparison, column, value }] } = filters;
    removeOption();
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

  useEffect(() => {
    async function fetchApi() {
      const { results } = await (await fetch(PLANETS_URL)).json();
      setPlanets(results);
    }
    fetchApi();
  }, []);

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
        columnsFilter,
      } }
    >
      { children }
    </ContextCreat.Provider>
  );
}
ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
