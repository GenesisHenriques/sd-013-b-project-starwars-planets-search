import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getStarwarsPlanetsSearch from '../services/starwarsAPI';
import StarContext from './StarContext';

function StarProvider({ children }) {
  const [data, setData] = useState({
    data: [],
    isLoading: false,
  });

  const getPlanets = async () => {
    try {
      const planets = await getStarwarsPlanetsSearch();
      setData({ data: planets.results, isLoading: true });
    } catch (error) {
      console.error(error);
    }
    // getStarwarsPlanetsSearch().then((response) => (
    //   setData({ data: response.results, isLoading: true })
    // ));
  };

  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <StarContext.Provider value={ data }>
      { children }
    </StarContext.Provider>
  );
}

StarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarProvider;
