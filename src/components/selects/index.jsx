import React, { useCallback, useState, useContext } from 'react';
import Column from './components/Column';
import Comparison from './components/Comparison';
import Value from './components/Value';
import MainContext from '../../context/MainContext';

const optionsSelect = [
  'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
];

export default function Selects() {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');

  const { hadlerFilterByComparison } = useContext(MainContext);

  const verification = useCallback(() => {
    const index = optionsSelect.indexOf(column);
    optionsSelect.splice(index, 1);
  }, [column]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const obj = { column, comparison, value };
    verification(obj);
    hadlerFilterByComparison(obj);
  }, [column, comparison, hadlerFilterByComparison, value, verification]);

  return (
    <form
      onSubmit={ (e) => handleSubmit(e) }
    >
      <Column setColumn={ setColumn } optionsSelect={ optionsSelect } />
      <Comparison setComparison={ setComparison } />
      <Value setValue={ setValue } />
      <button
        type="submit"
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </form>

  );
}
