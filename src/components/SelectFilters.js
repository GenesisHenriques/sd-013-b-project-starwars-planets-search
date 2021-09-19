import React, { useContext, useState } from 'react';
import { Context } from '../context/Provider';

const SelectFilters = () => {
  const [selectFilters, setSelectFilters] = useState([]);

  const handleSelectChanges = ({ target }) => {
    const { id, value } = target;
    setSelectFilters({
      ...selectFilters,
      [id]: value,
    });
  };

  const { filters: { filterByNumericValues }, handleSubmit } = useContext(Context);
  const { column, comparison, value } = filterByNumericValues;
  return (
    <div>
      <select
        data-testid="column-filter"
        id="column"
        value={ column }
        onChange={ handleSelectChanges }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        id="comparison"
        value={ comparison }
        onChange={ handleSelectChanges }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        id="value"
        value={ value }
        onChange={ handleSelectChanges }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleSubmit(selectFilters) }
      >
        Filtrar
      </button>
    </div>
  );
};

export default SelectFilters;
