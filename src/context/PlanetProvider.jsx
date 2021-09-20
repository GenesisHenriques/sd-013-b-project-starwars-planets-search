import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/fetchAPI';
import PlanetContext from './PlanetContext';

export default function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filter, setFilter] = useState('');
  const [filters, setFilters] = useState({
    filterByName: '',
    filterByNumericValues: [],
  });
  const [columns, setColumns] = useState('population');
  const [comparisons, setComparisons] = useState('maior que');
  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    const getPlanets = async () => {
      try {
        // Mudei aqui de acordo com o exemplo de Ícaro, mesclando await com then
        const { results } = await fetchPlanets().then((response) => response.json());
        // Salvo o resultado no state planets, mas removendo a chave residents
        setPlanets(results.filter((item) => delete item.residents));
      } catch (error) {
        console.log(error);
      }
    };
    getPlanets();
  }, []);
  // Seto o valor do input dos planetas no estado global
  const setInputPlanets = (planet) => setFilter(planet);
  // Seto o valor do select column no estado global
  const setSelectColumn = (column) => setColumns(column);
  // Seto o valor do select comparison no estado global
  const setSelectComparison = (comparison) => setComparisons(comparison);
  // Seto o valor do input numérico no estado global
  const setInputNumbers = (number) => setNumbers(number);

  const comboFilter = () => {
    // const { cue, equivalence, value } = filters.filterByNumericValues[0];
    const condition = {
      'maior que': (item) => Number(item[columns]) > Number(numbers),
      'menor que': (item) => Number(item[columns]) < Number(numbers),
      'igual a': (item) => Number(item[columns]) === Number(numbers),
    };
    // console.log(planets.filter((item) => condition[comparisons](item)));
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        { columns, comparisons, numbers },
      ],
    });
    // console.log(condition[comparisons]);
    return condition[comparisons];
  };

  return (
    <PlanetContext.Provider
      value={ {
        planets,
        setInputPlanets,
        setSelectColumn,
        setSelectComparison,
        setInputNumbers,
        filters,
        filter,
        comboFilter,
        setFilters,
      } }
    >
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
