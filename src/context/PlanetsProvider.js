import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import getPlanets from '../services/API';

function PlanetsProvider({ children }) {
  const [state, setState] = useState([]);
  const [filteredPlanetName, setFilteredPlanetName] = useState('');

  // Summer Paulinha me deu essa dica
  useEffect(() => {
    async function requestGetPlanets() {
      const data = await getPlanets();
      // Dica do Rod! (thanks)
      setState(data.results);
    }

    requestGetPlanets();
  }, []);

  function filterPlanetName(planetName) {
    setFilteredPlanetName(planetName);
  }

  // Dica da Paulinha, como boas práticas
  const contextValue = {
    state,
    filterPlanetName,
    filteredPlanetName,
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
