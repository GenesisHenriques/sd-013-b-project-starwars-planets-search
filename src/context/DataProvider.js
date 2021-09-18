import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DataContext from './DataContext';

const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const [planet, setPlanet] = useState(
    {
      filters: {
        filterByName: {
          name: '',
        },
      },
    },
  );

  useEffect(() => {
    async function handelApi() {
      const fetchApi = await fetch(url);
      const { results } = await fetchApi.json();
      results.map((result) => delete result.residents);
      setData(results);
    }
    handelApi();
  }, []);

  return (
    <DataContext.Provider value={ { data, planet, setPlanet } }>
      {children}
    </DataContext.Provider>
  );
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataProvider;
