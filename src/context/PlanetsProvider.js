import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import PlanetsContext from './PlanetsContext';
import getPlanets from '../services/planetsAPI';

// eu não faço ideia do que tô fazendo
function PlanetsProvider({ children }) {
  const [data, setData] = useState({});
  const [filters, setFilter] = useState({ filterByName: { name: '' } });
  const [headers, setHeaders] = useState([]);

  const fetchPlanets = async () => {
    const response = await getPlanets();

    setData(response);
    setHeaders(
      Object.keys(response.results[0]).filter((key) => key !== 'residents'),
    );
  };

  const filterByName = (search) => {
    setFilter({
      ...filters,
      filterByName: { ...filters.filterByName, name: search },
    });
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <PlanetsContext.Provider value={ { data, headers, filters, filterByName } }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
