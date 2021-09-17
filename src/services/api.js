const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

// export default async function fetchPlanets() {
//   const response = await fetch(URL);
//   const response1 = await response.json();
//   return response1.results;
// }

const fetchPlanets = () => (
  fetch(URL)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default fetchPlanets;
