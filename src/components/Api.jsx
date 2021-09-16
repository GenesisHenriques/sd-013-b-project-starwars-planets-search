import React, { useEffect, useState } from 'react';

import MyContext from './MyContext';
import Table from './Table';

function Api() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const planetsPromise = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const planetsResulsts = await planetsPromise.json();
      setData([...planetsResulsts.results]);
    }
    fetchData();
  }, []);

  return (
    <MyContext.Provider value={ { data } }>
      <Table />
    </MyContext.Provider>
  );
}

export default Api;
