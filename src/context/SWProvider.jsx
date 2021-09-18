import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SWContext from './SWContext';

const API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

function SWProvider({ children }) {
  const [data, setData] = useState([]);
  const [theads, setTheads] = useState([]);

  useEffect(() => {
    async function getStarWarsPlanets() {
      const response = await fetch(API_URL);
      const { results } = await response.json();
      // Fonte: https://stackoverflow.com/questions/38750705/filter-object-properties-by-key-in-es6
      results.forEach((result) => {
        const denied = ['residents'];
        Object.keys(result)
          .filter((key) => denied.includes(key))
          .forEach((key) => delete result[key]);
      });
      console.log(Object.keys(results[0]));
      //-------------------------------------------
      setData(results);
      setTheads(Object.keys(results[0]));
    }
    getStarWarsPlanets();
  }, []);

  return (
    <main>
      <SWContext.Provider value={ { data, theads } }>
        { children }
      </SWContext.Provider>
    </main>
  );
}

SWProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SWProvider;
