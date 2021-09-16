import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import getPlanetsApi from '../services/getPlanetsApi';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filterName, setFilterName] = useState('');

  const contextValue = {
    data,
    setData,
    filters: {
      filterByName: {
        name: filterName,
      },
    },
    setFilterName,
  };

  const fetchPlanets = async () => {
    const planets = await getPlanetsApi();
    planets.map((planet) => delete planet.residents);
    setData(planets);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <PlanetsContext.Provider value={ contextValue }>
      { children }
    </PlanetsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
