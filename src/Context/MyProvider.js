import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './MyContext';

export default function MyProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filtered, setFiltered] = useState();
  const [search, setSearch] = useState();
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

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

  useEffect(() => {
    fetchDataApi();
    setLoading(true);
  }, []);

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
