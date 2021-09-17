import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/context';

function Filter() {
  const [name, setName] = useState('');
  const { setFilters } = useContext(Context);

  useEffect(() => {
    setFilters(name);
  }, [name, setFilters]);

  return (
    <label htmlFor="planet-search">
      Search:
      <input
        type="text"
        id="planet-search"
        data-testid="name-filter"
        onChange={ ({ target }) => setName(target.value) }
      />
    </label>
  );
}

export default Filter;
