import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { fetchPlanets } from '../services/api';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  useEffect(() => {
    async function getPlanets() {
      try {
        const { results } = await fetchPlanets();
        setData(results);
      } catch (error) {
        console.log(error);
      }
    }
    getPlanets();
  }, []);

  return (
    <PlanetsContext.Provider
      value={ { data, filters, setFilters } }
    >
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default PlanetsProvider;
