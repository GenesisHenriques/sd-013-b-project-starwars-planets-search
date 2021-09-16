import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import planetsAPI from '../services/planetsAPI';
import PlanetsContext from './PlanetsContext';

function PlanetProvider(props) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [copyResults, setCopyResults] = useState([]);
  const [allTypes, setAllTypes] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  });

  const setOrderSort = (column, sort) => {
    setFilters({ ...filters, order: { column, sort } });
  };

  const setFilterName = (event) => {
    const { value } = event.target;
    setFilters({ ...filters, filteByName: { name: value.toLowerCase() } });
  };

  const sendFilterNumeric = (obj) => {
    const { filterByNumericValues } = filters;
    setFilters({ ...filters, filterByNumericValues: [...filterByNumericValues, obj] });
  };

  const deleteFilter = (arr) => {
    setFilters({ ...filters, filterByNumericValues: arr });
  };

  const resetFilter = () => {
    setFilters({ ...filters, filterByNumericValues: [] });
  };

  const addtype = (type) => {
    setAllTypes([...allTypes, type]);
  };

  useEffect(() => {
    const loading = async () => {
      try {
        setIsLoading(true);
        setLoadError(false);
        const getInfoPlanets = await planetsAPI();
        setData(getInfoPlanets.results);
        setCopyResults(getInfoPlanets.results);
        setIsLoading(false);
      } catch (error) {
        setLoadError(true);
        setIsLoading(false);
      }
    };
    loading();
  }, []);

  const context = {
    data,
    isLoading,
    loadError,
    filters,
    setFilterName,
    setData,
    copyResults,
    sendFilterNumeric,
    deleteFilter,
    resetFilter,
    allTypes,
    addtype,
    setOrderSort };
  const { children } = props;

  return (

    <PlanetsContext.Provider value={ context }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default PlanetProvider;
