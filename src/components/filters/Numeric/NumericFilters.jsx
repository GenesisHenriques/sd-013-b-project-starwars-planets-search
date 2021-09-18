import React from 'react';
import ApplyedFilters from './ApplyedFilters';
import FilterForm from './FilterForm';

export default function NumericFilters() {
  return (
    <div>
      <FilterForm />
      <ApplyedFilters />
    </div>
  );
}
