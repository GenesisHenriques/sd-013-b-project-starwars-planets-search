import React, { useContext } from 'react';
import ContextCreat from '../context/ContextCreat';

function Header() {
  const { handleName } = useContext(ContextCreat);
  return (
    <header>
      <label htmlFor="name">
        Planets Filter
        <input
          data-testid="name-filter"
          type="text"
          name="name"
          id="name"
          onChange={ ({ target }) => handleName(target.value) }
        />
      </label>
    </header>
  );
}

export default Header;
