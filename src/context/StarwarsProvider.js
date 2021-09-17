import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarContext from './StarWarsContext';

const PlanetsUrlApi = 'https://swapi-trybe.herokuapp.com/api/planets/';

const INITIAL_STATE = {
  filters: {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  },
};
function StarwarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [search, setSearch] = useState(INITIAL_STATE);

  function fetchApi() {
    fetch(PlanetsUrlApi)
      .then((response) => response.json())
      .then((result) => setPlanets([...result.results]));
  }

  useEffect(() => {
    fetchApi();
  }, []);

  const contextValue = {
    planets,
    search,
    setSearch,
  };

  return (
    <StarWarContext.Provider value={ contextValue }>
      {children}
    </StarWarContext.Provider>
  );
}

StarwarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarwarsProvider;
