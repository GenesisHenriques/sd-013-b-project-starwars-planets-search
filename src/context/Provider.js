import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import fetchPlanetsApi from '../services/fetchPlanetsApi';
import PlanetsContext from './PlanetsContext';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);

  // Agrupando leitura e escrita em um obj
  const contextPlanets = {
    data,
    setData,
  };

  // Guarda os dados do fetch no state
  const keepPlanets = async () => {
    const planets = await fetchPlanetsApi();
    planets.map((planet) => delete planet.residents);
    setData(planets);
  };

  useEffect(() => {
    keepPlanets();
  }, []);

  return (
    <PlanetsContext.Provider value={ contextPlanets }>
      { children }
    </PlanetsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
