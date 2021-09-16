import React, { useContext } from 'react';
import StarWarsContext from '../context/starWarsContext';

function Filter() {
  const { handleChange } = useContext(StarWarsContext);
  return (
    <label htmlFor="search-by-name">
      Pesquisa por nome :
      <input
        id="search-by-name"
        type="text"
        placeholder="Digite o nome de um Planeta"
        onChange={ handleChange }
        data-testid="name-filter"
      />
    </label>
  );
}

export default Filter;
