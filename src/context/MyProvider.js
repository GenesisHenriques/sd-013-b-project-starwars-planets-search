import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import MyContext from './MyContext';
import fetchPlanets from '../services';

const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
const INITIAL_FILTER_STATE = {
  filters: {
    filterByName: {
      name: '',
    },
  },
};

function MyProvider({ children }) {
  const [data, setData] = useState({});
  const [filter, setFilter] = useState(INITIAL_FILTER_STATE);

  const fetchApi = useCallback(async () => {
    const response = await fetchPlanets(URL);
    response.results.forEach((element) => delete element.residents);

    setData(response);
  }, []);

  const handleChange = ({ target }) => {
    setFilter({ filters: { filterByName: { name: target.value } } });
  };

  const handleFilter = (planets) => {
    const { filters: { filterByName: { name } } } = filter;
    const regexName = new RegExp(name, 'i');
    console.log(planets);
    return planets.filter((planet) => planet.name.match(regexName));
    // return planets;
  };

  return (
    <div>
      <MyContext.Provider
        value={
          { data, fetchApi, filter, handleChange, handleFilter }
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
