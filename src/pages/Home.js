import React, { useContext } from 'react';
import Context from '../contexts/Context';
import Table from '../components/Table';

export default function Home() {
  const { data, setFilter, filters } = useContext(Context);
  const handleChange = ({ target }) => {
    setFilter({ ...filters, name: target.value });
  };

  return (
    <>
      <input
        type="text"
        onChange={ handleChange }
        data-testid="name-filter"
      />
      {data ? <Table data={ data } /> : <p>nao me carregaram aqui</p>}
    </>
  );
}
