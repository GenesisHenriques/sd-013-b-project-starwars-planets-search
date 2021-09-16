import React, { useContext, useState } from 'react';
import Context from '../contexts/Context';
import Table from '../components/Table';

export default function Home() {
  const { data, setFilter, filters } = useContext(Context);
  const [column, setColumn] = useState();
  const [comparison, setComparison] = useState();
  const [value, setValue] = useState();

  const handleChange = ({ target }) => {
    setFilter({ ...filters, name: target.value.toLowerCase() });
  };

  const handleClick = () => {
    setFilter({
      ...filters,
      numbersFilter: {
        columnFilter: column,
        comparisonFilter: comparison,
        valueFilter: value,
      },
    });
  };

  return (
    <>
      <input
        type="text"
        onChange={ handleChange }
        data-testid="name-filter"
      />
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => setColumn(target.value) }
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target }) => setComparison(target.value) }
      >
        <option defaultValue>Selecione uma opcao</option>
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        onChange={ ({ target }) => setValue(Number(target.value)) }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleClick }
      >
        Filter
      </button>
      {data ? <Table data={ data } /> : <p>nao me carregaram aqui</p>}
    </>
  );
}
