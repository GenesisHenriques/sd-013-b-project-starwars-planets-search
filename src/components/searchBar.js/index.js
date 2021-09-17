import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../../context/PlanetsContext';

export default function SearchBar() {
  const { setFilter } = useContext(PlanetsContext);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setFilter(search);
  }, [search, setFilter]);

  return (
    <input
      type="text"
      onChange={ ({ target }) => setSearch(target.value) }
      data-testid="name-filter"
    />
  );
}
