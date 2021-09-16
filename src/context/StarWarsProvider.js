import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function ApiStarWars() {
      const urlStarWars = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const response = await fetch(urlStarWars).then((resp) => resp.json());
      setData(response.results);
    }
    ApiStarWars();
  }, []);

  const state = {
    data,
  };
  return (
    <StarWarsContext.Provider value={ state }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
