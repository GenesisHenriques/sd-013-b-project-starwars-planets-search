import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import ApifetchPlanets from '../Services/ApifetchPlanets';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const contextValue = { data, setData };

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

Provider.propTypes = {
  children: PropTypes.objectOf,
}.isRequired;

export default Provider;
