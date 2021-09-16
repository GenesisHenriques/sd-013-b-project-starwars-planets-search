import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getPlanets from '../services';

const Context = createContext();

const Provider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const { results } = await getPlanets();
      results.forEach((element) => delete element.residents);
      setPlanets(results);
    }
    fetchData();
  }, []);

  const context = { planets, setPlanets };
  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Context, Provider };
