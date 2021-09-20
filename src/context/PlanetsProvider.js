import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanetsData from '../services';

const PlanetsProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const searchPlanets = async () => {
      console.log('test');
      const planetsData = await fetchPlanetsData();
      setData(planetsData);
    };

    searchPlanets();
  }, []);

  const planetsContextValue = {
    data,
  };

  return (
    <PlanetsContext.Provider value={ planetsContextValue }>
      { children }
    </PlanetsContext.Provider>
  );
};

export default PlanetsProvider;

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
