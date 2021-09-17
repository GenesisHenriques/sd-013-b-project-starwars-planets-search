import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import PlanetsContext from './PlanetsContext';
import testData from '../testData';

const INITIAL_STATE = {
  data: testData,
};

// export const PlanetsContext = createContext(
//   { state: INITIAL_STATE,
//     addFilter: () => console.log(1),
//   },
// );

const PlanetsProvider = (props) => {
  const { children } = props;
  const [state, setState] = useState(INITIAL_STATE);

  // console.log(state);
  useEffect(() => {
    global.fetch('https://swapi-trybe.herokuapp.com/api/planets/?page=1')
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
        setState((s) => ({ ...s, data: resData }));
      });
  }, []);

  const store = { state, setState };

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
