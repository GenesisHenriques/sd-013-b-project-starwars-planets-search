import React, { useContext, useState } from 'react';

import Context from '../utils/Context';

export default function NumericFilter() {
  const { filterByNumericValues, setNumericFilter } = useContext(Context);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('100000');
  const [firstSelectOptions, alterFirstSelectOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water']);

  const secondSelectOptions = ['maior que', 'menor que', 'igual a'];

  const optionsMap = (array) => (
    array.map((option) => <option key={ option }>{ option }</option>)
  );

  const handleClick = () => {
    setNumericFilter((prevState) => [...prevState, { column, comparison, value }]);
    const filterOptions = firstSelectOptions.filter((option) => option !== column);
    alterFirstSelectOptions(filterOptions);
    setColumn(filterOptions[0]);
  };

  const handleDelete = ({ target }) => {
    const { name } = target;
    const newFilter = filterByNumericValues
      .filter((eachFilter) => eachFilter.column !== name);
    setNumericFilter(newFilter);
    const newOptions = [...firstSelectOptions, name];
    alterFirstSelectOptions(newOptions);
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
      { filterByNumericValues.map((filter) => (
        <div key={ filter.column } data-testid="filter">
          <p>
            {/* `${filter.column} ${filter.comparison} ${filter.value}` */}
            { filter.column }
            {filter.comparison}
            {filter.value}
          </p>
          <button type="button" name={ filter.column } onClick={ handleDelete }>X</button>
        </div>
      )) }
    </div>
  );
}
