import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import ContextCreat from './ContextCreat';

const PLANETS_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default function ContextProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filterName, setFilterByName] = useState([]);
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

  const filters = {
    filterByName: {
      name: filterName,
    },
  };

  return (
    <ContextCreat.Provider value={ { filters, planets, handleName } }>
      { children }
    </ContextCreat.Provider>
  );
}
ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
