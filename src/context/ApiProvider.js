import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import ApiContext from './ApiContext';

const API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

function ApiProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    async function fetchPlanet() {
      const { results } = await fetch(API_URL).then((resp) => resp.json());
      setPlanets(results);
    }

    fetchPlanet();
  }, []);

  return (
    <ApiContext.Provider value={ { planets } }>
      {children}
    </ApiContext.Provider>
  );
}

ApiProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ApiProvider;
