import React, { useState, useEffect } from 'react';
import DataContext from './DataContext';

const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

function DataProvider({ children }) {
  const [data, setData] = useState([]);

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
    <DataContext.Provider value={ { data } }>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
