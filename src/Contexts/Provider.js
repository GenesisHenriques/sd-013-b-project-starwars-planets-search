import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import ApifetchPlanets from '../Services/ApifetchPlanets';

function Provider({ children }) {
  // Estado relacionado a API:
  const [data, setData] = useState([]);

  // Estado relacionado aos filtros da aplicação:
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [{ column: 'Population', comparison: 'Maior que', value: 0 }],
  });

  // Estado relacionado a busca no select por tamanhos:
  const [selectSearch, setSelect] = useState([]);

  // Estado relacionado a busca no input/name:
  const [search, setSearch] = useState([]);

  // Variavel para passar valores a aplicação:
  const contextValue = {
    data, setData, filters, setFilters, search, setSearch, selectSearch, setSelect,
  };

  // Requisição da API:
  const fetchPlanets = async () => {
    const api = await ApifetchPlanets();
    console.log(api);
    api.map((planet) => delete planet.residents);
    setData(api);
  };

  // DidMount - chamada da API:
  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );
}

// Foi pesquisado qual props clhiden deveria receber: https://stackoverflow.com/questions/42122522/reactjs-what-should-the-proptypes-be-for-this-props-children.
Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
