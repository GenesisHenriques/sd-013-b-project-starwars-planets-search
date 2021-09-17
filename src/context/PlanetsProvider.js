import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import useData from '../hooks/useData';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data] = useData();
  const [planets, setPlanets] = useState([]);
  const [filters, setFilter] = useState({
    filterByName: {
      name: '',
    },
  });

  useEffect(() => {
    setPlanets(data);
    function filterPlanetsByName(filter) {
      const filteredPlanets = (data.filter((planet) => planet.name.includes(filter)));
      return filter && filteredPlanets.length
        ? setPlanets(data
          .filter((planet) => planet.name.includes(filter)))
        : setPlanets(data);
    }
    filterPlanetsByName(filters.filterByName.name);
  }, [data, filters.filterByName.name]);

  return (
    <PlanetsContext.Provider
      value={ { data, setFilter, filters, planets } }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
};

export default PlanetsProvider;
