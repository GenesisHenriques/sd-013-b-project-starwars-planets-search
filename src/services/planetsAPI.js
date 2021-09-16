const planetsAPI = async () => {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
    //   console.log(data);
  } catch (error) {
    return error;
  }
};

export default planetsAPI;
