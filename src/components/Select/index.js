import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../../context/PlanetsContext';

const Select = () => {
  const optionsArray = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const { filters, setFilter } = useContext(PlanetsContext);
  const { filterByNumericValues } = filters;

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const [newOptions, setNewOptions] = useState([]);

  const setFilterByNumericValues = () => {
    setFilter([...filterByNumericValues, { column, comparison, value }]);
  };

  useEffect(() => {
    const createNewOptions = () => {
      if (filterByNumericValues.length) {
        const [, ...newArray] = optionsArray;
        setNewOptions(newArray);
      } else {
        setNewOptions(optionsArray);
      }
    };
    createNewOptions();
  }, [filterByNumericValues.length]);

  return (
    <form>
      <label htmlFor="column">
        Coluna:
        { ' ' }
        <select
          name="column"
          id="column"
          data-testid="column-filter"
          onChange={ ({ target }) => setColumn(target.value) }
        >
          { newOptions.map((option) => (
            <option key={ option } value={ option }>{ option }</option>
          )) }
        </select>
      </label>

      <label htmlFor="comparison">
        { ' ' }
        Comparação:
        { ' ' }
        <select
          name="comparison"
          id="comparison"
          data-testid="comparison-filter"
          onChange={ ({ target }) => setComparison(target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>

      <label htmlFor="value">
        { ' ' }
        Valor:
        { ' ' }
        <input
          type="number"
          data-testid="value-filter"
          id="value"
          onChange={ ({ target }) => setValue(target.value) }
        />
      </label>
      { ' ' }
      <button
        type="submit"
        data-testid="button-filter"
        onClick={ (event) => {
          event.preventDefault();
          setFilterByNumericValues();
        } }
      >
        Enviar
      </button>
    </form>
  );
};

export default Select;
