import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
  data: 0,
  results: [],
};

export const PlanetsContext = createContext();

const PlanetsProvider = (props) => {
  const { children } = props;
  const [data, setData] = useState(INITIAL_STATE);

  useEffect(() => {
    global.fetch('https://swapi-trybe.herokuapp.com/api/planets/?page=1')
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
        setData(resData);
      });
  }, []);

  return (
    <PlanetsContext.Provider value={ data }>
      { children }
    </PlanetsContext.Provider>
  );
};

PlanetsProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.symbol).isRequired,
};

export default PlanetsProvider;
