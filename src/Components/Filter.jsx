import React, { useContext, useState } from 'react';
import Context from '../Context/MyContext';

export default function Filter() {
  const columns = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  const compare = ['maior que', 'menor que', 'igual a'];
  const [filterNumeric, setFilterNumeric] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFilterNumeric({ ...filterNumeric, [name]: value });
  };

  const { filters, setFilters } = useContext(Context);

  return (
    <div>
      <select
        data-testid="column-filter"
        name="column"
        onChange={ handleChange }
      >
        { columns.map((column, i) => (
          <option key={ i } value={ column }>{ column }</option>
        )) }
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ handleChange }
      >
        { compare.map((value, i) => (
          <option key={ i } value={ value }>{value }</option>
        )) }
      </select>
      <input
        type="number"
        name="value"
        data-testid="value-filter"
        onChange={ handleChange }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => setFilters(
          { ...filters, filterByNumericValues: [filterNumeric] },
        ) }
      >
        Filtrar
      </button>
    </div>
  );
}
