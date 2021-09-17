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

  // puxa os planetas da api
  useEffect(() => {
    const fetchData = async () => {
      const { results } = await fetch('https://swapi-trybe.herokuapp.com/api/planets').then((response) => response.json());

      results.forEach((planet) => delete planet.residents);

      setPlanets(results);
    };
    fetchData();
  }, []);

  // função que manipula a modificação do filterByName
  const handleNameFilterChange = useCallback((name) => {
    setFilterByName({
      name,
    });
  }, []);

  // função que manipula a modificação do array filterByNumericValues
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

  // função que remove o filtro referente ao nome da coluna passada
  const removeNumericFilter = useCallback((columnToDelete) => {
    setFilterByNumericValues((prev) => prev
      .filter(({ column }) => column !== columnToDelete));
  }, []);

  // função que recebe um planeta e testa se ele passa em todos os filtros do array filterByNumericValues, retornando true se sim e false se não. Caso não ajam filtros retorna true
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

  // Cria a variavel numericSelectorOptions removendo as opções que já estiverem em uso pelos filtros. atualiza sempre que uma das dependencias muda
  const numericSelectorOptions = useMemo(() => {
    const options = [
      'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

    return options
      .filter((option) => !filterByNumericValues
        .some(({ column }) => column === option));
  }, [filterByNumericValues]);

  // Cria a váriavel data que armazena o array de planetas com todos os filtros já aplicados, se eles existirem. Atualiza o data sempre que uma das dependencias muda
  const data = useMemo(() => planets.filter((planet) => {
    const filter = new RegExp(filterByName.name, 'i');
    return filter.test(planet.name) && handleNumericValueFilter(planet);
  }), [planets, filterByName.name, handleNumericValueFilter]);

  // Cria a variável de contexto da aplicação e atualiza ela sempre que uma das dependencias muda
  const context = useMemo(() => ({
    data,
    filters: {
      filterByName,
      filterByNumericValues,
    },
    numericSelectorOptions,
    handleNameFilterChange,
    handleNumericValuesFilterChange,
    removeNumericFilter,
  }),
  [data,
    filterByName,
    filterByNumericValues,
    handleNameFilterChange,
    handleNumericValuesFilterChange,
    numericSelectorOptions,
    removeNumericFilter]);

  return (
    <SWContext.Provider value={ context }>
      { children }
    </SWContext.Provider>
  );
};

SWProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
