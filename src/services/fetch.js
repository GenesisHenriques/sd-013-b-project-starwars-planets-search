async function fetchPlanets() {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const { results } = await fetch(URL).then((data) => data.json());
  results.filter((data) => delete data.residents);
  // console.log(results);
  return results;
}

export default fetchPlanets;
