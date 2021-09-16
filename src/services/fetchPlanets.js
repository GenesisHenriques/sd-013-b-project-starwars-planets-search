const LINK_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function fetchPlanets() {
  try {
    const request = await fetch(LINK_API);
    const response = request.json();
    return response;
  } catch (error) {
    return error;
  }
}

export default fetchPlanets;
