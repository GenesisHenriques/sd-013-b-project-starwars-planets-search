import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
// import fetchApi from '../service/planestsApi';

function ContextProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchApi() {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((response) => response.json());
      setData(results);
    }
    fetchApi();
  }, []);

  const contextValue = { data, setData };

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default ContextProvider;
