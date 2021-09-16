import { useEffect } from 'react';

function useStarwarsApi() {
  useEffect(() => {
    async function fetchData() {
      const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(URL)
        .then((data) => data.json());
      console.log(results);
    }
    return fetchData();
  }, []);
}

export default useStarwarsApi;
