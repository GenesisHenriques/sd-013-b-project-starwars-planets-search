import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './Context';

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });
  const [filterData, setFilterDT] = useState([]);

  function getData(parametro) { setData(parametro); }
  function getApp(parametro) { setFilterDT(parametro); }

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const { results } = await endpoint.json();
      results.filter((result) => delete result.residents);
      getData(results);
      getApp(results);
    };
    getPlanets();
  }, []);

  useEffect(() => {
    const { filterByName, filterByNumericValues } = filters;
    const search = data.filter(
      (planet) => planet.name.toLowerCase().includes(filterByName.name),
    );
    const alteracao = search.length > 0 ? search : data;
    setFilterDT(alteracao);
    filterByNumericValues.forEach(({ column, comparison, value }) => {
      if (comparison === 'menor que') {
        const filterMinus = alteracao.filter((arObj) => arObj[column] < value);
        setFilterDT(filterMinus);
      } else if (comparison === 'maior que') {
        const filterPlus = alteracao.filter((arObj) => arObj[column] > value);
        setFilterDT(filterPlus);
      } else if (comparison === 'igual a') {
        const filterEqual = alteracao.filter((arObj) => Number(arObj[column]) === value);
        setFilterDT(filterEqual);
      }
    });
  }, [data, filters]);

  function handleChange({ target }) {
    setFilters({ ...filters, filterByName: { name: target.value.toLowerCase() } });
  }

  function handleNumericValues(column, comparison, value) {
    setFilters({ ...filters,
      filterByNumericValues:
      [...filters.filterByNumericValues, { column, comparison, value }] });
  }

  return (
    <PlanetContext.Provider
      value={ {
        handleChange,
        filters,
        filterData,
        setFilterDT,
        handleNumericValues } }
    >
      { children }
    </PlanetContext.Provider>
  );
}
// QUAL PROP ERA O CHILDREN https://stackoverflow.com/questions/42122522/reactjs-what-should-the-proptypes-be-for-this-props-children
PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;
