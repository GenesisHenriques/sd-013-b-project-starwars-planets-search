import React, { useContext } from 'react';
import Context from '../Context/MyContext';

export default function Filter() {
  const { search, setSearch } = useContext(Context);
  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        value={ search }
        onChange={ (e) => setSearch(e.target.value) }
      />
    </div>
  );
}
