import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './context';
import fetchAPI from '../service/serviceAPI';

function Provider({ children }) {
  const [filters, setFilters] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const response = await fetchAPI();
      response.map((planets) => delete planets.residents);
      setData(response);
    };
    fetchPlanets();
  }, []);

  const filterByName = (name) => {
    setFilters({
      ...filters,
      filterByName: {
        name,
      },
    });
  };

  const contextValue = {
    data,
    setData,
    filters: {
      name: filterByName,
    },
    setFilters,
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
