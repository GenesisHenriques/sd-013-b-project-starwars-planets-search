import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {
  const [data, setData] = useState({});
  const contextValue = {
    data,
  };

  const removeResidentsKey = (dataFromAPI) => {
    dataFromAPI.map((planet) => delete planet.residents);
    console.log(dataFromAPI);
    setData(dataFromAPI);
  };

  useEffect(() => {
    const fetchPlanets = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const responseObj = await response.json();
      removeResidentsKey(responseObj.results);
    };
    fetchPlanets();
  }, []);

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
