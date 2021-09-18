import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './planetsContext';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(false);
  const STARWARS_PLANETS_URL = 'https://swapi.dev/api/planets';

  useEffect(() => {
    async function fetchPlanets() {
      const { results } = await fetch(STARWARS_PLANETS_URL)
        .then((response) => response.json());
      setPlanets(results);
      setLoading(true);
    }

    fetchPlanets();
  }, []);

  return (
    <div>
      <planetsContext.Provider value={ { planets, loading } }>
        { children }
      </planetsContext.Provider>
    </div>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
