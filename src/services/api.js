export default async function fetchAPI(callback) {
  try {
    const response = await (await fetch('https://swapi-trybe.herokuapp.com/api/planets/')).json();
    response.results.forEach((result) => delete result.residents);
    callback(response.results);
  } catch (err) {
    callback(err);
  }
}
