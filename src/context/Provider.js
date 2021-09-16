import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

export default function Provider({ children }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((response) => {
        setData(response.results);
      });
  }, []);

  return (
    <Context.Provider value={ { data } }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.object,
}.isRequired;
