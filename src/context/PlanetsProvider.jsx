import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState();

  async function fetchPlanets() {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets';
    const response = await fetch(url).then((resp) => resp.json());
    setData(response);
  }

  useEffect(() => {
    fetchPlanets();
  }, []);

  const obj = {
    data,
  };
  return (
    <PlanetsContext.Provider value={ obj }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.string.isRequired,
};

export default PlanetsProvider;
