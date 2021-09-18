import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const handleChange = ({ target: { name, value } }, setFilter, filters) => {
  const newArr = [...filters.filterByNumericValues];
  newArr[newArr.length - 1][name] = value;
  setFilter({ ...filters, filterByNumericValues: newArr });
};

function columnFilter(filters, setFilter, columnParams) {
  const { filterByNumericValues: { column } } = filters;
  return (
    <label htmlFor="column-filter">
      Select Column:
      <select
        data-testid="column-filter"
        name="column"
        value={ column }
        onChange={ (event) => handleChange(event, setFilter, filters) }
      >
        {columnParams.map((item) => (
          <option key={ item } value={ item }>{item}</option>
        ))}
      </select>
    </label>
  );
}

function comparisonFilter(filters, setFilter) {
  const { filterByNumericValues: { comparison } } = filters;
  return (
    <select
      data-testid="comparison-filter"
      name="comparison"
      value={ comparison }
      onChange={ (event) => handleChange(event, setFilter, filters) }
    >
      <option value="maior que">maior que</option>
      <option value="menor que">menor que</option>
      <option value="igual a">igual a</option>
    </select>
  );
}

function valueFilter(filters, setFilter) {
  const { filterByNumericValues: { value } } = filters;
  return (
    <input
      data-testid="value-filter"
      type="number"
      name="value"
      value={ value }
      onChange={ (event) => handleChange(event, setFilter, filters) }
    />
  );
}

export default function FilterNumberSelect() {
  const { setFilter, filters, setPlanets, planets, data } = useContext(PlanetsContext);
  const { filterByNumericValues } = filters;
  const [columnParams, setColumn] = useState(
    ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  );

  function filterPlanets() {
    const comparisons = {
      'maior que': (
        (planet, filter) => Number(planet[filter.column]) > Number(filter.value)),
      'menor que': (
        (planet, filter) => Number(planet[filter.column]) < Number(filter.value)),
      'igual a': (
        (planet, filter) => Number(planet[filter.column]) === Number(filter.value)),
    };

    filterByNumericValues.map((filter) => planets.filter(
      (planet) => comparisons[filter.comparison](planet, filter),
    ))
      .map((item) => setPlanets(item));
  }

  function handleClick() {
    filterPlanets();

    const newColumn = columnParams.filter(
      (item) => filterByNumericValues[filterByNumericValues.length - 1].column !== item,
    );
    setColumn(newColumn);
    setFilter({ ...filters,
      filterByNumericValues: [...filterByNumericValues, {
        column: newColumn[0],
        comparison: 'maior que',
        value: '100000',
      }] });
  }

  function filterButtons() {
    const LAST_POSITION = -1;
    const arrayButtons = [...filterByNumericValues.slice(0, LAST_POSITION)];
    return (
      arrayButtons.map((item) => (
        <div data-testid="filter" key={ item.column }>
          <button
            name={ item.column }
            type="button"
            onClick={ ({ target: { name } }) => {
              const filtered = filterByNumericValues
                .filter(({ column }) => column !== name);
              setFilter({ ...filters, filterByNumericValues: filtered });
              setColumn([...columnParams, name]);
              setPlanets(data);
            } }
          >
            X
          </button>
        </div>
      ))
    );
  }

  return (
    <>
      {columnFilter(filters, setFilter, columnParams)}
      {comparisonFilter(filters, setFilter)}
      {valueFilter(filters, setFilter)}
      <button
        type="button"
        onClick={ columnParams.length && handleClick }
        data-testid="button-filter"
      >
        Filter
      </button>
      {filterButtons()}
    </>
  );
}
