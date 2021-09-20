import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import PlanetsContext from './PlanetsContext';
import getPlanets from '../services/API';

function PlanetsProvider({ children }) {
  const [state, setState] = useState([]);
  const [filteredPlanetName, setFilteredPlanetName] = useState('');
  const [filtroNumericoOpcoesEscolhidas, setFiltroNumericoOpcoesEscolhidas] = useState(
    {
      column: 'diameter',
      comparison: 'maior que',
      value: 0,
    },
  );

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

  function filterByNumericValues({ name, value }) {
    setFiltroNumericoOpcoesEscolhidas({
      ...filtroNumericoOpcoesEscolhidas,
      [name]: value,
    });
  }

  // Dica da Paulinha, como boas práticas
  const contextValue = {
    // Estados
    state,
    filteredPlanetName,
    filtroNumericoOpcoesEscolhidas,
    // Funções set
    filterPlanetName,
    filterByNumericValues,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
