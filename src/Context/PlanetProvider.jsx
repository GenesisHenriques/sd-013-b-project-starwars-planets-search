import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [planetsState, planetsSetState] = useState();

  useEffect(() => {
    async function fetchData() {
      const data = await fetch('https://swapi-trybe.herokuapp.com/api/planets/').then((response) => response.json());
      planetsSetState(data.results);
    }
    fetchData();
  }, []);

  const planetListOnState = {
    data: planetsState,
  };

  return (
    <main>
      <PlanetContext.Provider value={ planetListOnState }>
        { children }
      </PlanetContext.Provider>
    </main>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PlanetProvider;
