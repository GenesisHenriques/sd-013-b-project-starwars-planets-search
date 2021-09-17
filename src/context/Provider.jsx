import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../utils/getPlanetsAPI';
import PlanetContext from './Context';

function PlanetProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false); // no loading until await
  const [planetInfo, setPlanetInfo] = useState([]);
  const [filters, setFilters] = useState({ filterByName: { name: '' } });
  const [planetList, setPlanetList] = useState([]);

  async function getPlanetData() {
    const allPlanets = await fetchPlanets();
    setPlanetInfo(allPlanets);
    setIsLoading(true);
  }

  useEffect(() => {
    getPlanetData();
  }, []);

  useEffect(() => {
    const { filterByName: { name } } = filters;
    const filtered = planetInfo.filter((planet) => planet.name.includes(name) && planet);
    setPlanetList(filtered);
  }, [planetInfo, filters]);

  const value = {
    data: planetInfo,
    planets: planetList,
    isLoading,
    filters,
    setFilters,
  };

  return (
    <PlanetContext.Provider value={ value }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;
