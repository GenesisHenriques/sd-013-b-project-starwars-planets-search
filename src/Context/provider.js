import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/fetch';
import MyContext from './context';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      const results = await fetchPlanets();
      setData(results);
      // console.log(results);
    }

    fetchAPI();
  }, []);

  return (
    <main>
      <MyContext.Provider value={ { data } }>
        {children}
      </MyContext.Provider>
    </main>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PlanetsProvider;
