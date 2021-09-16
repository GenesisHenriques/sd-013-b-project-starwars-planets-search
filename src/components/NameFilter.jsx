import React, { useContext } from 'react';

import Context from '../utils/Context';

export default function NameFilter() {
  const { name, setName } = useContext(Context);

  return (
    <input
      data-testid="name-filter"
      value={ name }
      onChange={ (e) => setName(e.target.value) }
    />
  );
}
