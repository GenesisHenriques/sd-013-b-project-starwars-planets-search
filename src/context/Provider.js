import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getAPI from '../services/getAPI';

const Context = createContext();

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filterName, setFilterName] = useState([]);

  const context = {
    data,
    setData,
    filters: {
      filterByName: {
        name: filterName,
      },
    },
    setFilterName,
  };

  const fetchPlanets = async () => {
    const planets = await getAPI();
    planets.map((planet) => delete planet.residents);
    setData(planets);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export { Context, Provider };
