import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import PlanetsContext from './PlanetsContext';
import fetchPlanets from '../services/api';

const PlanetsProvider = (props) => {
  const { children } = props;
  const [data, setData] = useState({});
  const [filters, setFilters] = useState();

  useEffect(() => {
    fetchPlanets().then((resData) => setData(resData));
  }, []);

  return (
    <PlanetsContext.Provider value={ { data, filters, setFilters } }>
      { children }
    </PlanetsContext.Provider>
  );
};

PlanetsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PlanetsProvider;
