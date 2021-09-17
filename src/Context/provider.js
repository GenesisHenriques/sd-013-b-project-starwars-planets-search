import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/fetch';
import MyContext from './context';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      const results = await fetchPlanets();
      setData(results);
      // console.log(results);
    }

    fetchAPI();
  }, []);

  function handleFilterChange({ target }) {
    setName(target.value);
  }

  return (
    <main>
      <MyContext.Provider value={ { data, name, handleFilterChange } }>
        {children}
      </MyContext.Provider>
    </main>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
