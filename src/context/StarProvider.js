import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import getStarwarsPlanetsSearch from '../services/starwarsAPI';
import StarContext from './StarContext';

function StarProvider({ children }) {
  const [data, setData] = useState({
    data: [],
    isLoading: false,
  });

  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    dataFiltered: [],
  });

  const handleSetData = useCallback((newData) => {
    setFilters((prevState) => ({ ...prevState, dataFiltered: newData }));
  }, []);

  const handleFilterName = useCallback((name) => {
    setFilters((prevState) => ({ ...prevState, filterByName: { name } }));
  }, []);

  const handleFilterNumeric = useCallback((select) => {
    setFilters((prevState) => ({
      ...prevState,
      filterByNumericValues: [...prevState.filterByNumericValues, select] }));
  }, []);

  const getPlanets = () => {
    getStarwarsPlanetsSearch().then((response) => (
      setData({ data: response.results, isLoading: true })
    ));
  };

  const constextValue = {
    data,
    filters,
    handleSetData,
    handleFilterName,
    handleFilterNumeric,
  };

  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <StarContext.Provider value={ constextValue }>
      { children }
    </StarContext.Provider>
  );
}

StarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarProvider;
