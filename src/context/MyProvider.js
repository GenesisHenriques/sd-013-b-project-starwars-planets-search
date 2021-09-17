import React, { useState, useCallback } from 'react';
import propTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [data, setData] = useState();
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  const fetchApiPlanets = useCallback(async () => {
    // API DO PROJETO = https://swapi-trybe.herokuapp.com/api/planets/

    //  API DE TESTE (quando ultrapassar limite de fetchs):
    // https://swapi.dev/api/planets

    // const fetchApiPlanets = () => {
    fetch('https://swapi.dev/api/planets')
      .then((response) => response.json())
      .then((response) => {
        response.results.forEach((obj) => delete obj.residents);
        setData(response);
      });
    // };
  }, []);

  const filterByNamePlanet = (valueName) => {
    setFilters({
      ...filters,
      filterByName: {
        name: valueName,
      },
    });
  };

  return (
    <MyContext.Provider
      value={ {
        data,
        filters,
        fetchApiPlanets,
        filterByNamePlanet } }
    >
      {children}
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: propTypes.objectOf(propTypes.any).isRequired,
};

export default MyProvider;
