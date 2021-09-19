import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import apiPlanets from '../Services/Api';

function PlanetProvider({ children }) {
  const [data, SetData] = useState([]);
  const contextValue = {
    data,
    SetData,
  };
  async function fetchPlanets() {
    const response = await apiPlanets();
    SetData(response);
  }
  // Para remover a chave de um objeto
  // https://qastack.com.br/programming/208105/how-do-i-remove-a-property-from-a-javascript-object

  data.filter((element) => (
    delete element.residents
  ));

  // Executa a função tipo o componentDidMount, rodando apenas uma vez e na montagem do componente.

  useEffect(() => { fetchPlanets(); }, []);

  return (
    <PlanetContext.Provider value={ contextValue }>
      {children}
    </PlanetContext.Provider>
  );
}

// Node: Qualquer coisa que pode ser renderizada: números, strings, elementos ou uma matriz.

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;
