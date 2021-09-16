import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import fetchPlanets from '../services/fetchPlanets';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const getApi = async () => {
      setLoading(true);
      const getPlanets = await fetchPlanets();
      const result = await getPlanets.results;
      result.forEach((obj) => delete obj.residents);
      setData(result);
      setLoading(false);
    };
    getApi();
  }, []);

  const context = {
    isLoading,
    data,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default PlanetsProvider;
