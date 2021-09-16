import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../utils/getPlanetsAPI';
import PlanetContext from './Context';

function PlanetsProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [planetInfo, setPlanetInfo] = useState([]);

  async function getPlanetData() {
    const planetData = await fetchPlanets();
    setPlanetInfo(planetData);
    setIsLoading(true);
  }

  useEffect(() => {
    getPlanetData();
  }, []);

  const value = { planetInfo, isLoading };
  return (
    <PlanetContext.Provider value={ value }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
