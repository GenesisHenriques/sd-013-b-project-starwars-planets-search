import React, { useContext } from 'react';
import PlanetsContext from '../../context/PlanetsContext';

export default function NumericFilters() {
  const { filtersArray, filters, setFilters } = useContext(PlanetsContext);
  const values = { column: filtersArray[0], comparison: 'greater', value: '' };

  function handleSubmit(event) {
    event.preventDefault();
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        {
          column: values.column,
          comparison: values.comparison,
          value: values.value,
        }],
    });
  }

  function onChange({ target: { name, value } }) {
    values[name] = value;
  }

  return (
    <form onSubmit={ handleSubmit }>
      <select data-testid="column-filter" name="column" onChange={ onChange }>
        { filtersArray
          .map((filter) => (
            <option key={ filter } value={ filter }>{ filter }</option>
          )) }
      </select>

      <select data-testid="comparison-filter" name="comparison" onChange={ onChange }>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        data-testid="value-filter"
        type="number"
        name="value"
        placeholder="Value"
        onChange={ onChange }
      />

      <button
        type="submit"
        data-testid="button-filter"
      >
        Filter
      </button>
    </form>
  );
}
