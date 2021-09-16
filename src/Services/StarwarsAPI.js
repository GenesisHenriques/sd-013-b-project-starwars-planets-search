const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

const starWarsAPI = async () => {
  const resultFetch = await fetch(url);
  const resultJson = await resultFetch.json();
  return resultJson;
};

export default starWarsAPI;
