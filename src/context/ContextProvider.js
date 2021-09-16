import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import PlanetsContext from './PlanetsContext';

function ContextProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  const fetchPlanets = () => (
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((results) => setPlanets([...results.results]))
  );

  useEffect(() => {
    fetchPlanets();
  }, []);

  const contextValue = {
    planets,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      { children }
    </PlanetsContext.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
