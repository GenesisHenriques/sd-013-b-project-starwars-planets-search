import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

import MyContext from './MyContext';
import fetchPlanets from '../services';

const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
const INITIAL_FILTER_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};

function MyProvider({ children }) {
  const [data, setData] = useState({});
  const [filters, setFilter] = useState(INITIAL_FILTER_STATE);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [allPlanets, setAllPlanets] = useState([]);

  const fetchApi = useCallback(async () => {
    const response = await fetchPlanets(URL);
    response.results.forEach((element) => delete element.residents);

    setData(response);
    setFilteredPlanets(response.results);
    setAllPlanets(response.results);
  }, []);

  const handleChange = ({ target }) => {
    setFilter({
      ...filters,
      filterByName: { name: target.value },
    });
  };

  const handleClick = (filter) => {
    setFilter({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, filter],
    });
  };

  const filterPlanets = () => {
    const { filterByName: { name = '' }, filterByNumericValues } = filters;
    const regexName = new RegExp(name, 'i');

    if (!filterByNumericValues.length) {
      return allPlanets.filter((planet) => planet.name.match(regexName));
    }

    return filterByNumericValues.reduce((acc, { column, comparison, value }) => (
      acc.filter((planet) => {
        switch (comparison) {
        case 'maior que':
          return Number(planet[column]) > Number(value);
        case 'menor que':
          return Number(planet[column]) < Number(value);
        case 'igual a':
          return Number(planet[column]) === Number(value);
        default:
          return false;
        }
      })
    ), allPlanets)
      .filter((planet) => planet.name.match(regexName));
  };

  useEffect(() => {
    setFilteredPlanets(filterPlanets());
  }, [filters]);

  return (
    <div>
      <MyContext.Provider
        value={
          { data, fetchApi, filters, handleChange, handleClick, filteredPlanets }
        }
      >
        {children}
      </MyContext.Provider>
    </div>
  );
}

MyProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default MyProvider;
