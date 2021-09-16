import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './starWarsContext';
import fetchPlanets from '../services/fetchAPI';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getPlanets() {
      const planets = await fetchPlanets();
      setData(planets);
    }
    getPlanets();
  }, []);

  const contextValue = {
    data,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default StarWarsProvider;
