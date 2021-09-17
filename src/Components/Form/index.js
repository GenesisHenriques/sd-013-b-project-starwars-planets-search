import React, { useContext } from 'react';
import planetsContext from '../../context/planetsContext';

function Form() {
  const { name } = useContext(planetsContext);
  return (
    <form>
      <input data-testid="name-filter" onChange={ ({ target }) => name(target.value) } />
    </form>
  );
}

export default Form;
