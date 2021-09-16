const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getPlanets = async () => {
  const request = await fetch(URL);
  const response = await request.json();
  return response.results;
};

export default getPlanets;
