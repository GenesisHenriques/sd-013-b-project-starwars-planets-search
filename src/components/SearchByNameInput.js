import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetsContext';

function SearchByNameInput() {
  const { filters, setFilters, setFilterMethod } = useContext(PlanetContext);

  function handleChange({ target: { value } }) {
    if (value !== '') {
      setFilters({ ...filters, filterByName: { name: value } });
      setFilterMethod('name');
    } else {
      setFilterMethod('noFilter');
    }
  }

  return (
    <fieldset>
      <legend>
        Filtre pelo nome:
      </legend>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ handleChange }
      />
    </fieldset>
  );
}

export default SearchByNameInput;
