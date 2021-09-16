import React, { useState, useCallback } from 'react';
import propTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [data, setData] = useState();

  const fetchApiPlanets = useCallback(async () => {
    // const result = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    // const response = await result.json();
    // // response.results.forEach((objeto) => delete objeto.residents);
    // setData(response);

    // const fetchApiPlanets = () => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((response) => setData(response));
    // };
  }, []);

  return (
    <MyContext.Provider value={ { data, fetchApiPlanets } }>
      {children}
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: propTypes.objectOf(propTypes.any).isRequired,
};

export default MyProvider;
