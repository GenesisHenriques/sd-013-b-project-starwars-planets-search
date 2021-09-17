import React, { useContext } from 'react';
import TableContext from '../context/TableContext';

function InputFilter() {
  const { handleChangeFiltered, filters } = useContext(TableContext);
  const { filteredByName } = filters;

  return (
    <label htmlFor="name-filter">
      Digite Planeta:
      <input
        id="name-filter"
        data-testid="name-filter"
        value={ filteredByName }
        onChange={ handleChangeFiltered }
      />
    </label>
  );
}

export default InputFilter;
