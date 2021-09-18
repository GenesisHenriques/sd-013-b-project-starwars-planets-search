import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import PlanetsContext from './PlanetsContext';

const apiURL = 'https://swapi-trybe.herokuapp.com/api/planets/';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const apiRequest = await fetch(apiURL).then((res) => res.json());
      const data = apiRequest.results;
      setPlanets(data);
    }
    fetchData();
  }, []);

  return (
    <PlanetsContext.Provider value={ { planets } }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default PlanetsProvider;
