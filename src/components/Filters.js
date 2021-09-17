import React, { useContext, useEffect, useState } from 'react';

import MyContext from '../context/MyContext';

import { OPTIONS_COLUMN, OPTION_COMPARISON } from '../data';
import Input from './Input';
import Select from './Select';

function Filters() {
  const {
    filters: { filterByName: { name } },
    handleChange,
    handleClick,
  } = useContext(MyContext);
  const [column, setColumn] = useState('');
  const [columns, setColumns] = useState(OPTIONS_COLUMN);
  const [counterFilters, setCounterFilters] = useState(0);
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  const handleColumn = ({ target }) => {
    setColumn(target.value);
  };

  const handleComparison = ({ target }) => {
    setComparison(target.value);
  };

  const handleValue = ({ target }) => {
    setValue(target.value);
  };

  useEffect(() => {
    setColumns((prevState) => prevState.filter((element) => element !== column));
  }, [column, counterFilters]);

  const handleButton = () => {
    handleClick({ column, comparison, value });
    setCounterFilters((prevState) => prevState + 1);
  };

  return (
    <div className="form">
      <Input
        type="text"
        name="name"
        value={ name }
        placeholder="Search name"
        onchange={ handleChange }
      />
      <div>
        <Select
          name="column"
          onChange={ handleColumn }
          options={ columns }
        />
        <Select
          name="comparison"
          onChange={ handleComparison }
          options={ OPTION_COMPARISON }
        />
        <Input
          type="number"
          name="value"
          value={ value }
          placeholder="0"
          onchange={ handleValue }
        />
        <button
          className="btn"
          type="button"
          data-testid="button-filter"
          onClick={ handleButton }
        >
          Filtrar
        </button>
      </div>
    </div>
  );
}

export default Filters;
