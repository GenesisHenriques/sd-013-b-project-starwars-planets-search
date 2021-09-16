const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function fetchPlanetsAPI() {
  const requestPlanet = fetch(URL)
    .then((resolve) => resolve.json())
    .then((planetData) => planetData.results);
  return requestPlanet;
}

export default fetchPlanetsAPI;
