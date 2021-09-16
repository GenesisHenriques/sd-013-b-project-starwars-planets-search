const getAPI = async () => {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const planets = await response.json();
  console.log(planets.results);
  return planets.results;
};

export default getAPI;
