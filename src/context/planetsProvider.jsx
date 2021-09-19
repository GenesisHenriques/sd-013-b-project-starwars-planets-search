import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './planetsContext';

function PlanetsProvider({ children }) {
  const filterByName = {
    name: '',
  };

  const [planets, setPlanets] = useState([]);
  const [loadingFetch, setLoadingFetch] = useState(false);
  const [filters, setFilters] = useState({ filterByName });
  const STARWARS_PLANETS_URL = 'https://swapi.dev/api/planets';

  useEffect(() => {
    async function fetchPlanets() {
      const { results } = await fetch(STARWARS_PLANETS_URL)
        .then((response) => response.json());
      setPlanets(results);
      setLoadingFetch(true);
    }

    fetchPlanets();
  }, []);

  return (
    <div>
      <planetsContext.Provider
        value={
          { planets,
            loadingFetch,
            filters,
            setFilters }
        }
      >
        { children }
      </planetsContext.Provider>
    </div>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
