const api = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchApi = async () => {
  const response = await fetch(api);
  const planets = await response.json();
  return planets.results;
};

export default fetchApi;
