import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './StarWarsContext';
import fetchPlanets from '../services/Api';

function PlanetsProvider({ children }) {
  const [dados, setDados] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    async function dadosGS() {
      const planetsIn = await fetchPlanets();
      const planetsInfos = planetsIn.results;
      planetsInfos.map((planet) => delete planet.residents);
      setDados(planetsInfos);
    }
    dadosGS();
  }, []);

  return (
    <MyContext.Provider value={ { dados, setName, name } }>
      {children}
    </MyContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PlanetsProvider;
