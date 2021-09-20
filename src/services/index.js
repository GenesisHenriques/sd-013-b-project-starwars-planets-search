const fetchPlanetsData = async () => {
  try {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    return response.json();
  } catch ({ error, message }) {
    console.log(`${error}: ${message}`);
  }
};

export default fetchPlanetsData;
