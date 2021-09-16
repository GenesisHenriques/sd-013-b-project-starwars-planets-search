import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const endPointAPI = 'https://swapi-trybe.herokuapp.com/api/planets/';

  useEffect(() => {
    async function fetchAPI() {
      const response = await fetch(endPointAPI);
      const { results } = await response.json;
      setPlanets(results);
    }
    fetchAPI();
  }, []);

  const data = planets;
  //  console.log(data);
  //  const contextValue = { planets, setPlanets };

  return (
    <PlanetsContext.Provider value={ data }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default PlanetsProvider;
