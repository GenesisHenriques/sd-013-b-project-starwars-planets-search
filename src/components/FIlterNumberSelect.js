import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const handleChange = ({ target: { name, value } }, setFilter, filters) => {
  const newArr = [...filters.filterByNumericValues];
  newArr[0][name] = value;
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
  const { setFilter, filters, setPlanets, data } = useContext(PlanetsContext);
  const { filterByNumericValues } = filters;
  const [columnParams, setColumn] = useState(
    ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  );
  // const [currentFilter, setCurrentFIlter] = useState(0);

  function handleClick() {
    const comparisons = {
      'maior que': (
        (planet, filter) => Number(planet[filter.column]) > Number(filter.value)),
      'menor que': (
        (planet, filter) => Number(planet[filter.column]) < Number(filter.value)),
      'igual a': (
        (planet, filter) => Number(planet[filter.column]) === Number(filter.value)),
    };

    const newArr = filterByNumericValues.map((filter) => data.filter(
      (planet) => comparisons[filter.comparison](planet, filter),
    ));
    setPlanets(...newArr);
    const newColumn = columnParams.filter(
      (item) => filterByNumericValues[0].column !== item,
    );
    setColumn(newColumn);
  }

  return (
    <>
      {columnFilter(filters, setFilter, columnParams)}
      {comparisonFilter(filters, setFilter)}
      {valueFilter(filters, setFilter)}
      <button
        type="button"
        onClick={ handleClick }
        data-testid="button-filter"
      >
        Filter
      </button>
    </>
  );
}
