import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import fetchPlanets from '../services/fetchPlanets';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });
  const [searchText, setSearchText] = useState('');

  const filterPlanets = (planets) => {
    const { filterByName: { name } } = filters;
    const filterByText = planets
      .filter((planet) => planet.name.includes(name));
    return filterByText;
  };

  useEffect(() => {
    setFilters({
      ...filters,
      filterByName: {
        name: searchText,
      },
    });
  }, [searchText]);

  useEffect(() => {
    const getApi = async () => {
      const getPlanets = await fetchPlanets();
      const result = await getPlanets.results;
      result.forEach((obj) => delete obj.residents);
      setData(result);
      setLoading(false);
    };
    getApi();
  }, []);

  const context = {
    isLoading,
    data,
    searchText,
    setSearchText,
    filterPlanets,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default PlanetsProvider;
