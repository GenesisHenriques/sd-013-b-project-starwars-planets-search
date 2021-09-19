export default async function () {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const data = await response.json();
  // Percorre o objeto data e deleta a key residents com seu valor.
  data.results.forEach((obj) => delete obj.residents);
  return data;
}
