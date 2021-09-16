import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import starWarsAPI from '../Services/StarwarsAPI';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    filterName: {
      name: '',
    },
  });

  useEffect(() => {
    async function api() {
      const { results } = await starWarsAPI();
      results.map((object) => delete object.residents);
      setData(results);
      setNewData(results);
      setLoading(false);
    }
    api();
  }, []);

  const store = {
    data,
    newData,
    setNewData,
    loading,
    filters,
    setFilters,
  };

  return (
    <MyContext.Provider value={ store }>
      { children }
    </MyContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
