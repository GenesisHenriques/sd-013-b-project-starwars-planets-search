import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const MyContext = createContext();

function MyProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      const PLANETS_API = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const response = await fetch(PLANETS_API);
      const { results } = await response.json();
      setData(results);
    };
    getPlanets();
  }, []);

  const contextValue = { data };
  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
}

export default MyProvider;

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
