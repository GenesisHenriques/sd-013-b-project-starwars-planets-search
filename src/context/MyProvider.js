import React, { useState, useCallback } from 'react';
import propTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [data, setData] = useState();
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: '100000',
      },
    ],
  });

  const fetchApiPlanets = useCallback(async () => {
    // API DO PROJETO = https://swapi-trybe.herokuapp.com/api/planets/

    //  API DE TESTE (quando ultrapassar limite de fetchs):
    // https://swapi.dev/api/planets

    // const fetchApiPlanets = () => {
    fetch('https://swapi.dev/api/planets')
      .then((response) => response.json())
      .then((response) => {
        // remove residents pra ter apenas 13 colunas:
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

  // const filterByValuesPlanet = (values) => {

  // };

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
