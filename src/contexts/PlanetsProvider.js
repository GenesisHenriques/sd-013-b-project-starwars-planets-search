import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
  data: {
    count: 0,
    results: [],
  },
};

export const PlanetsContext = createContext();

const PlanetsProvider = (props) => {
  const { children } = props;
  const [state, setState] = useState(INITIAL_STATE);

  console.log(state);

  const addFilter = (query) => {
    setState({
      ...state,
      filters: {
        filterByName: {
          name: query,
        },
      },
    });
  };

  useEffect(() => {
    global.fetch('https://swapi-trybe.herokuapp.com/api/planets/?page=1')
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
        setState({ ...state, data: resData });
      });
  }, []);

  const store = { state, addFilter };

  return (
    <PlanetsContext.Provider value={ store }>
      { children }
    </PlanetsContext.Provider>
  );
};

PlanetsProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.symbol).isRequired,
};

export default PlanetsProvider;
