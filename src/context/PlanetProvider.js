import React from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

export default function PlanetProvider({ children }) {
  return <PlanetContext.Provider>{children}</PlanetContext.Provider>;
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
