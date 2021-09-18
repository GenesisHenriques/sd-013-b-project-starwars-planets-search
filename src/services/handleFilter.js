export default function handleFilter(filteredPlanets, filterByNumericValues) {
  filterByNumericValues.forEach(({ column, comparison, value }) => {
    if (comparison === 'igual a') {
      filteredPlanets = filteredPlanets.filter((planet) => (
        planet[column] === value));
    }

    if (comparison === 'menor que') {
      filteredPlanets = filteredPlanets.filter((planet) => (
        planet[column] < Number(value)));
    }
    if (comparison === 'maior que') {
      filteredPlanets = filteredPlanets.filter((planet) => (
        planet[column] > Number(value)));
    }
  });
  return filteredPlanets;
}
