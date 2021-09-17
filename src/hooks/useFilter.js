import { useContext } from 'react';
import Context from '../context/Context';

export default function useFilter() {
  const { data, planets, setPlanets, filters } = useContext(Context);
  const { filterByNumericValues } = filters;

  // teste
  const handleFilter = () => {
    if (planets.length) {
      const teste = planets.filter((planet) => (
        planet.name.toLowerCase().includes(filters.filterByNumericValues.name.toLowerCase())
      ));
      return teste;
    }
    return [];

    // if (filterByNumericValues.length) {
    //   const { column, comparison, value } = filterByNumericValues[0];

    //   if (comparison === 'igual a') {
    //     setPlanets(data.filter((planet) => planet[column] === value));
    //     return;
    //   }

    //   if (comparison === 'menor que') {
    //     setPlanets(data.filter((planet) => planet[column] < Number(value)));
    //     return;
    //   }
    //   if (comparison === 'maior que') {
    //     setPlanets(data.filter((planet) => planet[column] > Number(value)));
    //   }
    // }
  };

  return [handleFilter];
}
