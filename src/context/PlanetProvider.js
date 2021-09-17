import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [data, setPlanets] = useState([]);

  return (
    <PlanetContext.Provider value={ { data, setPlanets } }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PlanetProvider;
