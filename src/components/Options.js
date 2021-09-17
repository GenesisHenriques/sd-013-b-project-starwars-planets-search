import React, { useContext } from 'react';
import StarContext from '../context/StarContext';

function Options() {
  const { handleFilterName } = useContext(StarContext);

  const hanldeChange = ({ target: { value } }) => {
    handleFilterName(value);
  };

  return (
    <div>
      <label htmlFor="search-input">
        Pesquisar
        <input
          id="search-input"
          type="text"
          onChange={ hanldeChange }
          data-testid="name-filter"
        />
      </label>
    </div>
  );
}

export default Options;
