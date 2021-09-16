import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setPlanets] = useState();

  async function getPlanets() {
    const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((result) => result.json())
      .then((result) => result.results)
      .then((planets) => planets.map(({ residents, ...rest }) => ({ ...rest })));
    setPlanets(request);
  }
  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <PlanetsContext.Provider
      value={ { data } }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
};

export default PlanetsProvider;
