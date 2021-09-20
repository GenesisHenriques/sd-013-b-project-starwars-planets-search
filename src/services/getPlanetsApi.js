const ULR = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getPlanetsApi = async () => {
  const result = await fetch(URL);
  const response = await result.json();
  return response.results;
};

export default getPlanetsApi;