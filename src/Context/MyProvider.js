import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './MyContext';

export default function MyProvider({ children }) {
  const MENOS_UM = -1;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filtered, setFiltered] = useState();
  const [search, setSearch] = useState();
  const [filterPos, setFilterPos] = useState(MENOS_UM);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });
  const [comparisonArr, setComparisonArr] = useState([]);

  useEffect(() => {
    setFilters({
      filterByName: {
        name: search,
      },
    });
  }, [search]);

  async function fetchDataApi() {
    const urlDataStarWars = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const request = await fetch(urlDataStarWars).then((dataRe) => dataRe.json());
    const result = request.results.filter((dataResult) => delete dataResult.residents);
    setData(result);
  }

  // Hook filtragem byNumeric
  useEffect(() => {
    if (filters.filterByNumericValues !== undefined) {
      const { column, value, comparison } = filters.filterByNumericValues[filterPos];
      switch (comparison) {
      case 'maior que': {
        const result = data.filter((filter) => Number(filter[column]) > Number(value));
        setFiltered(result);
        break;
      }
      case 'menor que': {
        const result = data.filter((filter) => Number(filter[column]) < Number(value));
        setFiltered(result);
        break;
      }
      case 'igual a': {
        const result = data.filter((filter) => Number(filter[column]) === Number(value));
        setFiltered(result);
        break;
      }
      default:
        console.log('default');
      }
    }
  }, [filters, data, filterPos]);

  // Hook ComponentDidMount para chamada da API
  useEffect(() => {
    fetchDataApi();
    setLoading(true);
  }, []);

  // Hook ComponentDidUpdate para filtragem pelo input
  useEffect(() => {
    if (search !== undefined) {
      const result = data.filter((planet) => planet.name.includes(search));
      setFiltered(result);
    }
  }, [search, data]);

  const props = {
    data,
    loading,
    search,
    setSearch,
    filtered,
    filters,
    setFilters,
    comparisonArr,
    setComparisonArr,
    filterPos,
    setFilterPos,
    setFiltered,
  };

  return (
    <Context.Provider value={ props }>
      { children }
    </Context.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.object).isRequired,
};
