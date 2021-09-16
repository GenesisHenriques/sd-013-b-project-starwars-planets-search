import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import planetsAPI from '../services/planetsAPI';
import PlanetContext from './PlanetsContext';

function PlanetProvider(props) {
  const [data, setdata] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  useEffect(() => {
    const loading = async () => {
      try {
        setIsLoading(true);
        setLoadError(false);
        const getInfoPlanets = await planetsAPI();
        setdata(getInfoPlanets.results);
        setIsLoading(false);
      } catch (error) {
        setLoadError(true);
        setIsLoading(false);
      }
    };
    loading();
  }, []);
  const context = { data, isLoading, loadError };
  const { children } = props;
  return (

    <PlanetContext.Provider value={ context }>
      { children }
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default PlanetProvider;
