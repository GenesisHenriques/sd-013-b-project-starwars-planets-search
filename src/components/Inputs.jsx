import React, { useContext } from 'react';
import Context from '../context/Context';
import ColumnInput from './ColumnInput';
import ComparisonInput from './ComparisonInpputs';
import NameInput from './NameInput';
import ValueInput from './ValueInput';
import ActiveFilters from './ActiveFilters';
import OrderInput from './OrderInput';

export default function Inputs() {
  const { actualFilter, filters, setFilters } = useContext(Context);

  const handleClick = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        actualFilter,
      ],
    });
  };

  return (
    <div>
      <NameInput />
      <ColumnInput />
      <ComparisonInput />
      <ValueInput />
      <OrderInput />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleClick }
      >
        Filtrar
      </button>
      <ActiveFilters />
    </div>

  );
}
