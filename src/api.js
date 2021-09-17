const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
async function handelApi() {
  const fetchApi = await fetch(url);
  const response = await fetchApi.json();
  response.results.map((result) => delete result.residents);
}

export default handelApi;
