import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import apiPlanets from '../Services/Api';

function PlanetProvider({ children }) {
  // Armazenar as informações da Api no Estado da Aplicação utilizando o useState.
  const [data, SetData] = useState([]);
  const contextValue = {
    data,
    SetData,
  };
  console.log(children);
  async function fetchPlanets() {
    const response = await apiPlanets();
    SetData(response);
  }

  // Remover chave de um objeto
  // Referência: https://qastack.com.br/programming/208105/how-do-i-remove-a-property-from-a-javascript-object
  data.filter((element) => (
    delete element.residents
  ));
  console.log(data);

  // Neste caso, a função será executada similarmente ao 'componentDidMount', rodando apenas uma vez e na montagem do componente.
  useEffect(() => { fetchPlanets(); }, []);

  return (
    <PlanetContext.Provider value={ contextValue }>
      {children}
    </PlanetContext.Provider>
  );
}

// Node: Qualquer coisa que pode ser renderizada: números, strings, elementos ou uma matriz
PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PlanetProvider;
