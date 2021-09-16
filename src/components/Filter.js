import React, { useContext, useState } from 'react';
import Context from '../context/Context';
import './Filter.css';

const comparisonFilters = {
  column: 'population',
  comparison: 'maior que',
  value: '',
};

const columnFilterList = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

export default function Filter() {
  const { filters, setFilters } = useContext(Context);
  const { filterByNumericValues } = filters;
  const [typeFilter, setTypeFilter] = useState(comparisonFilters);

  const handleChange = ({ target: { value } }) => {
    setFilters({
      ...filters, filterByName: { name: value } });
  };

  const handleChangeFilters = ({ target: { value, name } }) => {
    setTypeFilter({
      ...typeFilter,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    setFilters(
      { ...filters,
        filterByNumericValues: [...filterByNumericValues, typeFilter] },
    );
  };

  const setColumns = () => {
    const filterColumns = filterByNumericValues.map((filter) => filter.column);
    let columnsFilter = columnFilterList;
    filterColumns.forEach((column) => {
      columnsFilter = columnsFilter.filter((option) => option !== column);
    });
    return columnsFilter;
  };

  const handleRepeatedColumns = setColumns();

  return (
    <div className="filter-container">
      <label
        className="filter-name-label"
        htmlFor="filter-name"
      >
        Filtrar por nome
        <input
          className="filter-name-input"
          data-testid="name-filter"
          onChange={ handleChange }
          placeholder="Buscar"
          type="text"
        />
      </label>
      <div className="comparison-container">
        <label
          className="column-name-label"
          htmlFor="filter-column"
        >
          Tipo
          <select
            className="column-name-input"
            data-testid="column-filter"
            name="column"
            onChange={ handleChangeFilters }
          >
            {
              handleRepeatedColumns
                .map((item, index) => <option key={ index }>{ item }</option>)
            }
          </select>
        </label>
        <label
          className="comparison-name-label"
          htmlFor="filter-comparison"
        >
          Comparar
          <select
            className="comparison-name-input"
            data-testid="comparison-filter"
            name="comparison"
            onChange={ handleChangeFilters }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <label
          className="value-name-label"
          htmlFor="filter-number"
        >
          Valor
          <input
            className="value-name-input"
            data-testid="value-filter"
            min={ 0 }
            name="value"
            onChange={ handleChangeFilters }
            type="number"
          />
        </label>
      </div>
      <button
        className="button-name-input"
        data-testid="button-filter"
        onClick={ handleSubmit }
        type="button"
      >
        Filtrar
      </button>
    </div>

  );
}
