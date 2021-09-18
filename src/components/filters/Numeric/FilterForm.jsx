import React, { useContext } from 'react';
import PlanetsContext from '../../../context/PlanetsContext';

export default function FilterForm() {
  const {
    filtersArray,
    filters,
    setFilters,
    removedFilters,
    setRemovedFilters,
  } = useContext(PlanetsContext);

  // Tem esses valores pro caso do usuário adicionar o filtro sem mudar o valor do select
  const values = { column: filtersArray[0], comparison: 'maior que', value: 0 };

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

    setRemovedFilters([...removedFilters, values.column]);
  }

  function onChange({ target: { name, value } }) {
    values[name] = value;
  }

  return (
    <form onSubmit={ handleSubmit }>
      <select data-testid="column-filter" name="column" onChange={ onChange }>
        { filtersArray
          .filter((item) => !removedFilters.includes(item))
          .map((item) => (
            <option key={ item } value={ item }>{ item }</option>
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
