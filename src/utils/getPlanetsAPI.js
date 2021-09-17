const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function fetchPlanetsAPI() {
  const requestPlanet = fetch(URL)
    .then((resolve) => resolve.json())
    .then((info) => info.results.map((planet) => {
      delete planet.residents; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
      return planet;
    }));
  return requestPlanet;
}

export default fetchPlanetsAPI;
