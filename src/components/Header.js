import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context/Provider';

function Header() {
  const [name, setName] = useState('');
  const { setFilterName } = useContext(Context);

  useEffect(() => {
    setFilterName(name);
  }, [name, setFilterName]);
  return (
    <header>
      <label htmlFor="planet-name-filter">
        <input
          id="planet-name-filter"
          data-testid="name-filter"
          type="text"
          onChange={ (event) => setName(event.target.value) }
        />
      </label>
    </header>
  );
}

export default Header;
