import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import planetsAPI from '../services/planetsAPI';
import PlanetContext from './PlanetContext';

function PlanetProvider(props) {
  const { data, setData } = useState([]);
  const { isLoading, setIsLoading } = useState(true);
  const { loadError, setLoadError } = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        setIsLoading(true);
        setLoadError(false);
        const getPlanetsInfo = await planetsAPI();
        setData(getPlanetsInfo.results);
        setIsLoading(false);
      } catch (error) {
        setLoadError(true);
        setIsLoading(false);
      }
    };
    load();
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
