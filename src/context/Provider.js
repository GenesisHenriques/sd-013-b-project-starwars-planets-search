import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

const Provider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/').then((res) => res.json()).then((data) => setPlanets(data.results));
  }, []);
  return (
    <Context.Provider value={ planets }>
      {children}
    </Context.Provider>);
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
