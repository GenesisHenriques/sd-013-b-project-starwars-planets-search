import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import planetsAPI from '../services/planetsAPI';
import PlanetsContext from './PlanetsContext';

function PlanetProvider(props) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [copyResults, setCopyResults] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  const setFilterName = (event) => {
    const { value } = event.target;
    setFilters({ ...filters, filteByName: { name: value.toLowerCase() } });
  };

  const sendFilterNumeric = (obj) => {
    const { filterByNumericValues } = filters;
    setFilters({ ...filters, filterByNumericValues: [...filterByNumericValues, obj] });
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
    sendFilterNumeric };
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
