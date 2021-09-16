import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import AppContext from './AppContext';

export default function AppProvider({ children }) {
  const [data, setPlanet] = useState([]);

  async function planetsRequisition() {
    const planetsAPI = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const response = await fetch(planetsAPI);
    const respJson = await response.json();
    const planetsResults = respJson.results;
    const result = planetsResults.filter((planet) => delete planet.residents);
    setPlanet(result);
  }
  useEffect(() => {
    planetsRequisition();
  }, []);

  const contextValue = {
    data,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
