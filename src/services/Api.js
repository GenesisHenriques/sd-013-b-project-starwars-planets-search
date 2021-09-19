const Api = async () => {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const response = await (await fetch(url)).json();
  await response.results.forEach((item) => delete item.residents);
  // console.log(response.results);
  return response.results;
};

export default Api;
