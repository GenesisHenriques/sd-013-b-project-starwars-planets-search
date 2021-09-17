import React, { useContext, useState } from 'react';
import MyContext from '../MyContext/MyContext';

export default function FormFilter() {
  const value = useContext(MyContext);
  const { setFilters, filters } = value;
  // const { setFilterByNumericValues } = value;
  const { filterByNumericValues } = value.filters;
  // const { name } = value.filters.filterByName;
  const [dropdown, setDropdown] = useState('population');
  const [comparsion, setComparsion] = useState('maior que');
  const [numero, setNumero] = useState(0);
  const [digitadoInput, setDigitadoInput] = useState('');

  function setState(e) {
    const digitado = e.target.value;
    console.log(digitadoInput);
    setFilters({ filterByName: { name: digitado } });
    setDigitadoInput(digitado);
  }
  function setStateNumero(e) {
    const digitado = e.target.value;
    setNumero(digitado);
  }

  function handleChange(e) {
    setDropdown(e.target.value);
  }
  function handleChangeComparsion(e) {
    setComparsion(e.target.value);
  }

  function ClickNumberFilter() {
    const obj = {
      colum: dropdown,
      comparsion,
      value: numero,
    };
    setFilters({ ...filters, filterByNumericValues: [...filterByNumericValues, obj] });
  }

  /*
    {
      colum:'',
      comparsion:'',
      value:0
    }

  */

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
        <label htmlFor="filtroNumerico">
          Escolha:
          <select
            data-testid="column-filter"
            value={ dropdown }
            onChange={ handleChange }
            id="filtroNumerico"
          >
            <option value="population">população</option>
            <option value="orbital_period">perido de orbitação</option>
            <option value="diameter">diametro</option>
            <option value="rotation_period">perido de rotação</option>
          </select>
        </label>
        <label htmlFor="filtroComparacao">
          <select
            data-testid="comparison-filter"
            value={ comparsion }
            onChange={ handleChangeComparsion }
            id="filtroComparacao"
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>

          </select>
        </label>
        <label htmlFor="Input-Number">
          Filtro por numero:
          <input
            onChange={ setStateNumero }
            data-testid="value-filter"
            type="number"
            name="numero"
            id="Input-Number"
          />
        </label>
        <button
          type="button"
          onClick={ ClickNumberFilter }
          data-testid="button-filter"
        >
          Filtrar
        </button>
      </form>
    </div>
  );
}
