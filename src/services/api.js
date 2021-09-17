const fetchPlanets = () => (
  fetch('https://swapi-trybe.herokuapp.com/api/planets/?page=1')
    .then((res) => res.json())
    .then((resData) => resData)
);

export default fetchPlanets;
