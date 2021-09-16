const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchPlanetsApi = async () => {
  const result = await fetch(url);
  const response = await result.json();
  return response.results;
};

export default fetchPlanetsApi;
