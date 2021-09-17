import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
};

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState();
  const [filters, setFilters] = useState(INITIAL_STATE);
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  useEffect(() => {
    async function planetsRequest() {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const data = await response.json();
      data.results.forEach((planet) => {
        delete planet.residents;
      });

      setPlanets(data.results);
      setFilteredPlanets(data.results);
    }

    planetsRequest();
  }, []);

  useEffect(() => {
    if (planets) {
      const filterByName = planets
        .filter(({ name }) => name.includes(filters.filterByName.name));
      setFilteredPlanets(filterByName);
    }
  }, [filters, planets]);

  const state = {
    data: planets,
    filteredPlanets,
    filters,
    setFilters,
  };

  return (
    <StarWarsContext.Provider value={ state }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.string,
}.isRequired;

export default StarWarsProvider;
