import React, { useEffect, useState } from 'react';
import StarContext from './StarContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

  useEffect(() => {
    async function fetchAPI() {
      const { results } = await fetch(url).then((res) => res.json());
      setData(results);
      await setLoading(false);
    }
    fetchAPI();
  }, []);

  const value = {
    loading,
    data,
  };

  return (
    <StarContext.Provider value={ value }>
      {children}
    </StarContext.Provider>
  );
}

export default Provider;
