const ApifetchPlanets = async () => {
  const result = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const response = await result.json();
  return response.results;
};

export default ApifetchPlanets;
