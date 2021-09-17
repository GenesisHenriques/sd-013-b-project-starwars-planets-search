import React, { useState, useCallback } from 'react';

import { useSWContext } from '../../context';
import FiltersList from '../FiltersList';
import Select from './Select';

const FiltersForm = () => {
  const {
    filters,
    handleNameFilterChange,
    handleNumericValuesFilterChange,
    numericSelectorOptions } = useSWContext();

  const [
    selectedNumericColumn,
    setSelectedNumericColumn] = useState(numericSelectorOptions[0]);
  const [
    selectedComparison,
    setSelectedComparison] = useState('maior que');
  const [
    compareColumnTo,
    setCompareColumnTo] = useState(0);

  const { filterByName: { name } } = filters;

  const handleClick = useCallback(() => {
    handleNumericValuesFilterChange(
      selectedNumericColumn, selectedComparison, compareColumnTo,
    );
  }, [
    compareColumnTo,
    handleNumericValuesFilterChange,
    selectedComparison,
    selectedNumericColumn]);

  return (
    <>
      <input
        data-testid="name-filter"
        type="text"
        value={ name }
        onChange={ (e) => handleNameFilterChange(e.target.value) }
      />
      <fieldset>
        <legend>Filters</legend>
        <Select
          id="column-filter"
          value={ selectedNumericColumn }
          onChange={ (e) => setSelectedNumericColumn(e.target.value) }
          options={ numericSelectorOptions }
        />
        <Select
          id="comparison-filter"
          value={ selectedComparison }
          onChange={ (e) => setSelectedComparison(e.target.value) }
          options={ ['maior que', 'menor que', 'igual a'] }
        />
        <input
          data-testid="value-filter"
          type="number"
          value={ compareColumnTo }
          onChange={ (e) => setCompareColumnTo(e.target.value) }
        />
        <button data-testid="button-filter" type="button" onClick={ handleClick }>
          Add Filter
        </button>
        <div>
          <FiltersList />
        </div>
      </fieldset>

    </>
  );
};

export default FiltersForm;
