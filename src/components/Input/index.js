import React, { useState, useContext, useEffect } from 'react';
import PlanetsContext from '../../context/PlanetsContext';

const Input = () => {
  const [name, setName] = useState('');
  const { setFilterName } = useContext(PlanetsContext);

  useEffect(() => {
    setFilterName(name);
  }, [name, setFilterName]);

  return (
    <label htmlFor="planet-name">
      Name:
      { ' ' }
      <input
        type="text"
        id="planet-name"
        data-testid="name-filter"
        onChange={ ({ target }) => setName(target.value) }
      />
    </label>
  );
};

export default Input;
