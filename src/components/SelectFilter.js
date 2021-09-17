import React, { useContext, useState } from 'react';
import Context from '../context/Context';

function SelectFilter() {
  const { setCompareFilter } = useContext(Context);
  const [options, setOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [column, setColumn] = useState(options[0]);
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setCompareFilter([{ column, comparison, value }]);
    setOptions((prevOptions) => prevOptions.filter((option) => option !== column));
  };

  return (
    <div>
      <select
        name=""
        id=""
        data-testid="column-filter"
        onChange={ ({ target }) => setColumn(target.value) }
      >
        {
          options.map((option) => (
            <option key={ option }>
              {option}
            </option>
          ))
        }
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target }) => setComparison(target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ ({ target }) => setValue(target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </div>
  );
}

export default SelectFilter;
