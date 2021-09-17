import { useCallback, useContext, useEffect } from 'react';
import StarContext from '../context/StarContext';

function useSearchPlanets() {
  const {
    data: { data },
    filters: { filterByName: { name } },
    filters: { filterByNumericValues },
    handleSetData,
  } = useContext(StarContext);

  const setFilterName = useCallback(() => {
    const newData = data.filter((planet) => (
      planet.name.toUpperCase().includes(name.toUpperCase())
    ));
    handleSetData(newData);
  }, [data, handleSetData, name]);

  const comparison = (filter, planet) => {
    switch (filter.comparison) {
    case 'maior que':
      return Number(planet[filter.column]) > Number(filter.value);
    case 'menor que':
      return Number(planet[filter.column]) < Number(filter.value);
    case 'igual a':
      return Number(planet[filter.column]) === Number(filter.value);
    default:
      break;
    }
  };

  const setFilterSelect = useCallback(() => {
    const newData = data.filter((planet) => filterByNumericValues
      .every((filter) => comparison(filter, planet)));

    handleSetData(newData);
  }, [data, filterByNumericValues, handleSetData]);

  useEffect(() => {
    setFilterName();
    setFilterSelect();
  }, [setFilterName, setFilterSelect]);
}

export default useSearchPlanets;
