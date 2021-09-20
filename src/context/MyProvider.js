import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

const API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

function MyProvider({ children }) { // children = props
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchApiPlanets() {
      const { results } = await fetch(API_URL).then((response) => response.json());
      setData(results);
    }
    fetchApiPlanets();
  }, []);

  return (
    <MyContext.Provider
      value={ data }
    >
      {children}
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProvider;
