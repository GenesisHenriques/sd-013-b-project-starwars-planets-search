import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './planetsContext';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState();
  /* const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });
  */
  const [filtered, setFiltered] = useState();

  useEffect(() => {
    async function getData() {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const data = await response.json();
      setPlanets(data.results);
    }
    getData();
  }, []);

  function setName(name) {
    const temp = planets.filter(
      (planet) => (planet.name.toLowerCase()).includes(name.toLowerCase()),
    );
    setFiltered(temp);
  }

  const obj = {
    data: planets,
    name: (name) => setName(name),
    filtered,
  };

  return (
    <planetsContext.Provider value={ obj }>
      {children}
    </planetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default PlanetsProvider;
