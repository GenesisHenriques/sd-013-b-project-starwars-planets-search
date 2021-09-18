const planetsAPI = async () => {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    return error;
  }
};

export default planetsAPI;
