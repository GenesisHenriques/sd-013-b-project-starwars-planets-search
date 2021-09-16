const BASE_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getPlanets = () => (
  fetch(BASE_URL)
    .then((response) => response.json()
      .then((object) => (response.ok ? Promise.resolve(object) : Promise.reject(object))))
);

export default getPlanets;
