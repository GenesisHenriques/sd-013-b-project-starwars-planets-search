// import { useContext } from 'react';

async function fetchPlanetsApi() {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const { results } = await fetch(URL)
    .then((response) => response.json());
  return results;
}

export default fetchPlanetsApi;
