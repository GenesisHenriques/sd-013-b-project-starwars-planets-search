// import { useContext } from 'react';

async function fetchPlanetsApi() {
  const URL = 'https://swapi.dev/api/planets';
  const { results } = await fetch(URL)
    .then((response) => response.json());
  return results;
}

export default fetchPlanetsApi;
