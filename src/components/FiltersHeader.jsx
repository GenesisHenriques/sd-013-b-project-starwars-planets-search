import React from 'react';
import NameFilters from './filters/NameFIlters';
import NumericFilters from './filters/NumericFilters';

export default function FiltersHeader() {
  return (
    <header className="header">
      <h1>Star Wars Planets</h1>
      <NameFilters />
      <NumericFilters />
    </header>
  );
}
