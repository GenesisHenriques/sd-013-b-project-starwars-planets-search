const urlDataStarWars = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function fetchDataApi() {
  const request = await fetch(urlDataStarWars).then((data) => data.json());
  const result = request.results.filter((data) => delete data.residents);
  try {
    return result;
  } catch (error) {
    console.log(error);
  }
}

export default fetchDataApi;
