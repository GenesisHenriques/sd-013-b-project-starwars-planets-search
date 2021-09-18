import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './context';
import fetchAPI from '../service/serviceAPI';

function Provider({ children }) {
  const [filterName, setFilterName] = useState({ filterByName: { name: '' } });
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const response = await fetchAPI();
      response.map((planets) => delete planets.residents);
      setData(response);
    };
    fetchPlanets();
  }, []);

  const filterByPlanet = (name) => {
    setFilterName({
      ...filterName,
      filterByName: {
        name,
      },
    });
  };

  const contextValue = {
    data,
    setData,
    filterName,
    setFilterName,
    filterByPlanet,
  };

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
