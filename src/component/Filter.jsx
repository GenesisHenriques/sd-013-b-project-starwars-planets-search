import React, { useContext, useState } from 'react';
import PlanetContext from '../context/PlanetContext';
import Input from '../controlled components/Input';
import Select from '../controlled components/Select';

function Filter() {
  const { filters, setFilter } = useContext(PlanetContext);
  const { filterByNumericValues } = filters;
  const [columnFilter, setColumnFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  const handleChange = ({ target: { value, name } }) => {
    setColumnFilter({
      ...columnFilter,
      [name]: value,
    });
  };

  const handleNameFilter = ({ target: { value } }) => {
    setFilter({
      ...filters,
      filterByName: {
        name: value,
      },
    });
  };

  const columnOptions = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];

  const comparisonOptions = ['maior que', 'igual a', 'menor que'];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilter({
      ...filters,
      filterByNumericValues: [
        ...filterByNumericValues,
        columnFilter,
      ],
    });
  };

  return (
    <form onSubmit={ handleSubmit }>
      <Input
        text="Search"
        type="text"
        name="search-name"
        testId="name-filter"
        handleChange={ handleNameFilter }
      />
      <Select
        name="column"
        testId="column-filter"
        options={ columnOptions }
        text="Column Filter"
        handleChange={ handleChange }
      />
      <Select
        name="comparison"
        testId="comparison-filter"
        options={ comparisonOptions }
        text="Comparison Filter"
        handleChange={ handleChange }
      />
      <Input
        text="Set a value"
        type="number"
        name="value"
        testId="value-filter"
        handleChange={ handleChange }
      />
      <button type="submit" data-testid="button-filter">Search</button>
    </form>
  );
}

export default Filter;
