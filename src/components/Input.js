import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';

function Input() {
  const [name, setName] = useState('');
  const { setFilterName } = useContext(Context);

  useEffect(() => {
    setFilterName(name);
  }, [name, setFilterName]);

  return (
    <input
      type="text"
      name=""
      id=""
      data-testid="name-filter"
      onChange={ ({ target }) => setName(target.value) }
      value={ name }
    />
  );
}

export default Input;
