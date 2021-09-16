const fetchPlanets = async () => {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  try {
    const request = await fetch(URL);
    // retorna um booleano (request.ok)
    return request.ok
    // Se for true ele resolve a promise
      ? Promise.resolve(request)
    // Se for false ele retorna o status do erro
      : Promise.reject(request.status);
  } catch (error) {
    // Exibo no console o erro
    console.log(error);
  }
};

export default fetchPlanets;
