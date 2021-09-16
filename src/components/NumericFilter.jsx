import React, { useContext } from 'react';

// import Context from '../utils/Context';

export default function NumericFilter() {
  // const { filters, setFilters } = useContext(Context);
  const firstSelectOptions = ['population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];
  const secondSelectOptions = ['maior que', 'menor que', 'igual a'];

  const optionsMap = (array) => (
    array.map((option) => <option key={ option }>{ option }</option>)
  );

  const handleClick = () => {

  };

  return (
    <div>
      <select
        data-testid="column-filter"
      >
        { optionsMap(firstSelectOptions) }
      </select>
      <select
        data-testid="comparison-filter"
      >
        { optionsMap(secondSelectOptions) }
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ (e) => (e.target.value !== Number && windows.alert) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar numericamente
      </button>
    </div>
  );
}
