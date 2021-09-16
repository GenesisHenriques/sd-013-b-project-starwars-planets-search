import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function FilterName() {
  const { handleChange } = useContext(MyContext);

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        name=""
        onChange={ handleChange }
      />
    </div>
  );
}

export default FilterName;
