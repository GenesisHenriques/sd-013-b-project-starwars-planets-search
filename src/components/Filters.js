import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const NUMERIC_FILTERS = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const COMPARSION_FILTER = [
  'maior que',
  'menor que',
  'igual a',
];

function Filters() {
  const {
    handleChange,
    setColumn,
    setComparison,
    setValue,
    handleButton,
  } = useContext(StarWarsContext);

  return (
    <>
      <label htmlFor="search-by-name">
        Pesquisa por nome:
        <input
          id="search-by-name"
          type="text"
          placeholder="Digite o nome de um Planeta"
          onChange={ handleChange }
          data-testid="name-filter"
        />
      </label>

      <label htmlFor="column-filter">
        Pesquisa numérica:
        <select
          id="column-filter"
          name="column"
          onChange={ setColumn }
          data-testid="column-filter"
        >
          {NUMERIC_FILTERS.map((option) => (
            <option key={ option } value={ option }>{option}</option>
          ))}
        </select>
      </label>

      <label htmlFor="comparison-filter">
        <select
          id="comparison-filter"
          name="comparison"
          onChange={ setComparison }
          data-testid="comparison-filter"
        >
          {COMPARSION_FILTER.map((option) => (
            <option key={ option } value={ option } name={ option }>{option}</option>
          ))}
        </select>
      </label>

      <label htmlFor="value-filter">
        <input
          id="value-filter"
          name="value"
          type="number"
          placeholder="Insira um número"
          onChange={ setValue }
          data-testid="value-filter"
        />
      </label>
      <button
        type="button"
        onClick={ handleButton }
        data-testid="button-filter"
      >
        Filtrar planetas
      </button>
    </>
  );
}

export default Filters;
