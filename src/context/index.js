import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useMemo,
  useCallback,
} from 'react';
import PropTypes from 'prop-types';

const SWContext = createContext({
  data: [],
  filters: {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  },
  numericSelectorOptions: [],
});

export const useSWContext = () => useContext(SWContext);

export const SWProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { results } = await fetch('https://swapi-trybe.herokuapp.com/api/planets').then((response) => response.json());

      results.forEach((planet) => delete planet.residents);

      setPlanets(results);
    };
    fetchData();
  }, []);

  const handleNameFilterChange = useCallback((name) => {
    setFilterByName({
      name,
    });
  }, []);

  const handleNumericValuesFilterChange = useCallback((column, comparison, value) => {
    setFilterByNumericValues((prev) => [
      ...prev,
      {
        column,
        comparison,
        value,
      },
    ]);
  }, []);

  const handleNumericValueFilter = useCallback((planet) => filterByNumericValues
    .reduce((conjuntion, { column, comparison, value }) => {
      switch (comparison) {
      case 'maior que':
        return conjuntion && (parseInt(planet[column], 10) > parseInt(value, 10));
      case 'menor que':
        return conjuntion && (parseInt(planet[column], 10) < parseInt(value, 10));
      default:
        return conjuntion && (parseInt(planet[column], 10) === parseInt(value, 10));
      }
    }, true), [filterByNumericValues]);

  const data = useMemo(() => planets.filter((planet) => {
    const filter = new RegExp(filterByName.name, 'i');
    return filter.test(planet.name) && handleNumericValueFilter(planet);
  }), [planets, filterByName.name, handleNumericValueFilter]);

  const numericSelectorOptions = useMemo(() => {
    const options = [
      'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

    return options
      .filter((option) => !filterByNumericValues
        .some(({ column }) => column === option));
  }, [filterByNumericValues]);

  const context = useMemo(() => ({
    data,
    filters: {
      filterByName,
      filterByNumericValues,
    },
    numericSelectorOptions,
    handleNameFilterChange,
    handleNumericValuesFilterChange,
  }),
  [data,
    filterByName,
    filterByNumericValues,
    handleNameFilterChange,
    handleNumericValuesFilterChange,
    numericSelectorOptions]);

  return (
    <SWContext.Provider value={ context }>
      { children }
    </SWContext.Provider>
  );
};

SWProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
