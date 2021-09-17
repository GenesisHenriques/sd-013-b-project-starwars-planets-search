import { useContext } from 'react';
import Context from '../context/Context';

export default function useFilter() {
  const { data, filters } = useContext(Context);
  const { name } = filters.filterByName;
  const { column, comparison, value } = filters.filterByNumericValues[0];
  const { filterActive } = filters;

  const handleFilter = () => {
    let planets = [...data];

    if (data.length) {
      planets = data.filter((planet) => (
        planet.name.includes(name.toLowerCase())
      ));

      if (comparison === 'igual a' && filterActive) {
        planets = [...data];
        planets = planets.filter((planet) => planet[column] === value);
      }
      if (comparison === 'menor que' && filterActive) {
        planets = [...data];
        planets = planets.filter((planet) => planet[column] < Number(value));
      }
      if (comparison === 'maior que' && filterActive) {
        planets = [...data];
        planets = planets.filter((planet) => planet[column] > Number(value));
      }
    }

    return planets;
  };

  return [handleFilter];
}
