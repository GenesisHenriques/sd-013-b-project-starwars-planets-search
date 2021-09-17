import React, { useContext, useState } from 'react';
import Context from '../Context/MyContext';

export default function Filter() {
  const columns = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  const compare = ['maior que', 'menor que', 'igual a'];
  const [filterNumeric, setFilterNumeric] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });
  const { filters, setFilters, comparisonArr, setComparisonArr } = useContext(Context);

  const columnsResult = columns
    .filter((filter, index) => filter !== comparisonArr[index]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFilterNumeric({ ...filterNumeric, [name]: value });
  };

  const onClickSubmit = () => {
    if (filters.filterByNumericValues === undefined) {
      setFilters(
        { ...filters,
          filterByNumericValues: [filterNumeric] },
      );
      setComparisonArr([...comparisonArr, filterNumeric.column]);
      return undefined;
    }
    setComparisonArr([...comparisonArr, filterNumeric.column]);
    return setFilters(
      { ...filters,
        filterByNumericValues: [...filters.filterByNumericValues, filterNumeric] },
    );
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        name="column"
        onChange={ handleChange }
      >
        { columnsResult
          .filter((colu, index) => colu !== comparisonArr[index])
          .map((column, i) => (
            <option key={ i } value={ column }>{ column }</option>
          )) }
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ handleChange }
      >
        { compare.map((value, i) => (
          <option key={ i } value={ value }>{value }</option>
        )) }
      </select>
      <input
        type="number"
        name="value"
        data-testid="value-filter"
        onChange={ handleChange }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ onClickSubmit }
      >
        Filtrar
      </button>
    </div>
  );
}
