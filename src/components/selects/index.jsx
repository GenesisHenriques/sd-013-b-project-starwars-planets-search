import React, { useCallback, useState, useContext } from 'react';
import Column from './components/Column';
import Comparison from './components/Comparison';
import Value from './components/Value';
import MainContext from '../../context/MainContext';

export default function Selects() {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');

  const { hadlerFilterByComparison } = useContext(MainContext);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    hadlerFilterByComparison([{ column, comparison, value }]);
  }, [column, comparison, hadlerFilterByComparison, value]);

  return (
    <form
      onSubmit={ (e) => handleSubmit(e) }
    >
      <Column setColumn={ setColumn } />
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
