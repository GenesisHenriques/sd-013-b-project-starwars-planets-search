import React, { useContext, useState } from 'react';

import Context from '../utils/Context';

export default function NumericFilter() {
  const { setNumericFilter } = useContext(Context);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('100000');

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
    setNumericFilter((prevState) => [...prevState, { column, comparison, value }]);
    firstSelectOptions.pop(column);
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={ (e) => setColumn(e.target.value) }
        value={ column }
      >
        { optionsMap(firstSelectOptions) }
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ (e) => setComparison(e.target.value) }
        value={ comparison }
      >
        { optionsMap(secondSelectOptions) }
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ (e) => setValue(e.target.value) }
        value={ value }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Adicionar Filtro
      </button>
    </div>
  );
}
