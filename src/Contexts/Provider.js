import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import ApifetchPlanets from '../Services/ApifetchPlanets';

function Provider({ children }) {
  const [data, setData] = useState([]);

  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [{ column: 'Population', comparison: 'Maior que', value: 0 }],
  });
  const [search, setSearch] = useState([]);

  const contextValue = {
    data, setData, filters, setFilters, search, setSearch };

  const fetchPlanets = async () => {
    const api = await ApifetchPlanets();
    console.log(api);
    api.map((planet) => delete planet.residents);
    setData(api);
  };

  // DidMount
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
