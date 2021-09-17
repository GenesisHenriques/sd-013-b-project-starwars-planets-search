import React, { useState, useContext, useEffect } from 'react';
import Column from './components/Column';
import Comparison from './components/Comparison';
import Value from './components/Value';
import MainContext from '../../context/MainContext';

export default function Selects() {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');
  const [optionsSelect, setOptionsSelect] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);

  const { hadlerFilterByComparison, hadlerClearFilter } = useContext(MainContext);

  useEffect(() => {
    setOptionsSelect([
      'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
    ]);
  }, []);

  const verification = () => {
    const index = optionsSelect.indexOf(column);
    optionsSelect.splice(index, 1);
  };

  const resetValues = () => {
    setColumn(optionsSelect[0]);
    setComparison('maior que');
    setValue('0');
  };

  const handleFilter = () => {
    const obj = { column, comparison, value };
    hadlerFilterByComparison(obj);
    verification();
    resetValues();
  };

  function handleClearFilter() {
    hadlerClearFilter();
    setOptionsSelect([
      'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
    ]);
  }

  return (
    <form>
      <Column setColumn={ setColumn } optionsSelect={ optionsSelect } />
      <Comparison setComparison={ setComparison } />
      <Value setValue={ setValue } />
      <div data-testid="filter">
        <button
          type="button"
          data-testid="filter"
          onClick={ handleClearFilter }
        >
          X
        </button>
      </div>

      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleFilter }
      >
        Filtrar
      </button>

    </form>

  );
}
