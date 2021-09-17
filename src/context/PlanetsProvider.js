import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import getPlanets from '../services/API';

function PlanetsProvider({ children }) {
  const [state, setState] = useState({});

  useEffect(() => {
    async function requestGetPlanets() {
      const data = await getPlanets();
      setState(data);
    }

    requestGetPlanets();
  }, []);

  const contextValue = {
    state,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
