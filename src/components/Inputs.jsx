import React, { useContext } from 'react';
import Context from '../context/Context';
import ColumnInput from './ColumnInput';
import ComparisonInput from './ComparisonInpputs';
import NameInput from './NameInput';
import ValueInput from './ValueInput';

export default function Inputs() {
  const { actualFilter, filters, setFilters } = useContext(Context);

  const newFilter = {
    ...filters,
    filterByNumericValues: [
      ...filters.filterByNumericValues,
      actualFilter,
    ],
  };

  return (
    <div>
      <NameInput />
      <ColumnInput />
      <ComparisonInput />
      <ValueInput />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => setFilters(newFilter) }
      >
        Filtrar
      </button>
    </div>

  );
}
