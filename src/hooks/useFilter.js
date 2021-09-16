import { useCallback, useContext, useEffect } from 'react';
import MainContext from '../context/MainContext';

const functionComparison = (comparison, a, b) => {
  switch (comparison) {
  case 'maior que':
    return parseInt(a, 10) > parseInt(b, 10);
  case 'menor que':
    return parseInt(a, 10) < parseInt(b, 10);
  case 'igual a':
    return parseInt(a, 10) === parseInt(b, 10);
  default:
    return true;
  }
};

const useFilter = () => {
  const { filters, data, hadlerFilterData } = useContext(MainContext);
  const { filterByName: { name }, filterByNumericValues } = filters;

  const filterArrayByName = useCallback(() => {
    let arrayFiltered = data.filter(((planet) => (
      planet.name
        .toUpperCase()
        .includes(name.toUpperCase())
    )));

    arrayFiltered = filterByNumericValues.length > 0
      ? filterByNumericValues.map((filter) => {
        const { column, comparison, value } = filter;
        return (
          arrayFiltered
            .filter((planet) => functionComparison(comparison, planet[column], value))
        );
      })[0] : arrayFiltered;

    hadlerFilterData(arrayFiltered);
  }, [data, filterByNumericValues, hadlerFilterData, name]);

  useEffect(() => {
    filterArrayByName();
  }, [filterArrayByName]);
};

export default useFilter;
