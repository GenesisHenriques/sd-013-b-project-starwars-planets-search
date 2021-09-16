async function fetchDataApi() {
  const urlDataStarWars = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const request = await fetch(urlDataStarWars).then((data) => data.json());
  const result = request.results.filter((data) => delete data.residents);
  return result;
}

export default fetchDataApi;
