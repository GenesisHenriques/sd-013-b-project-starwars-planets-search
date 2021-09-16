import React, { useContext } from 'react';
import MyContext from '../MyContext/MyContext';

export default function FormFilter() {
  const value = useContext(MyContext);
  const { setFilters } = value;
  const { name } = value.filters.filterByName;
  function setState(e) {
    const digitado = e.target.value;
    setFilters({ filterByName: { name: digitado } });
    console.log(name);
  }

  return (
    <div>
      <form>
        <label htmlFor="filtro">
          Filtro por nome:
          <input
            onChange={ setState }
            data-testid="name-filter"
            type="text"
            name="nome"
            id="filtro"
          />
        </label>
      </form>
    </div>
  );
}
