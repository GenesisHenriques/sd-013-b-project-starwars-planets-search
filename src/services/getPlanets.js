const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getPlanets = async () => {
    const require = await fetch(URL);
    const response = await require.json();
    return response.result;
};

export default getPlanets;