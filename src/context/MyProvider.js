import React, { useState, useCallback, useEffect } from 'react';
import propTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  // ESTADOS -------------------------------
  const [data, setData] = useState();

  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  const [filtered, setFiltered] = useState();

  // FETCH PARA API ---------------------------------------
  const fetchApiPlanets = useCallback(async () => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((response) => {
        // remove residents pra ter apenas 13 colunas:
        response.results.forEach((obj) => delete obj.residents);
        setData(response);
      });
  }, []);

  // ----------------------------------------------------------

  // FUNÇAO FILTRA NOME:
  const filterByNamePlanet = (valueName) => {
    setFilters({
      ...filters,
      filterByName: {
        name: valueName,
      },
    });
  };

  // GUARDA ARRAY PARA RENDERIZAR DADOS DE PLANETAS ATRAVES DA FILTRAGEM: --------------------------------------------
  useEffect(() => {
    if (filters.filterByNumericValues.length > 0) {
      const { column, value, comparison } = filters.filterByNumericValues[0];
      switch (comparison) {
      case 'maior que': {
        const resp = data.results.filter((fil) => Number(fil[column]) > Number(value));
        setFiltered(resp);
        break;
      }
      case 'menor que': {
        const resp = data.results.filter((fil) => Number(fil[column]) < Number(value));
        setFiltered(resp);
        break;
      }
      case 'igual a': {
        const resp = data.results.filter((fil) => Number(fil[column]) === Number(value));
        setFiltered(resp);
        break;
      }
      default: console.log('');
      }
    }
    console.log(filters);
  }, [filters.filterByNumericValues, data, filters]);

  // -------------------------------------------------------

  return (
    <MyContext.Provider
      value={ {
        data,
        filters,
        filtered,
        setFilters,
        fetchApiPlanets,
        filterByNamePlanet,
      } }
    >
      {children}
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: propTypes.objectOf(propTypes.any).isRequired,
};

export default MyProvider;
