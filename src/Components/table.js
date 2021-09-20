import React, { useState, useContext } from 'react';
import MyContext from '../Context/MyContext';

function Table() {
  const { data, newData, setFilters, filters, options, column, setColumn, comparison,
    setComparison, value, setValue } = useContext(MyContext);
  const [columnState, setColumnState] = useState('population');
  const [comparisonState, setComparisonState] = useState('maior que');
  const [valueState, setValueState] = useState(0);
  const [inputName, setInputName] = useState('');
  const valueArray = Object.keys(newData[0]);
  const filterMaior = data.filter((planet) => planet[column] > Number(value));
  const filterMenor = data.filter((planet) => planet[column] < Number(value));
  const filterIgual = data.filter((planet) => Number(planet[column]) === Number(value));
  const filterData = inputName ? data.filter((planet) => planet.name.includes(inputName))
    : data;

  function renderFilter() {
    if (inputName) {
      return filterData;
    }
    if (comparison === 'maior que') {
      return filterMaior;
    }
    if (comparison === 'menor que') {
      return filterMenor;
    }
    if (comparison === 'igual a') {
      return filterIgual;
    }
    return data;
  }

  function handleClick() {
    setColumn(columnState);
    setComparison(comparisonState);
    setValue(valueState);
    const newObject = {
      columnState,
      comparisonState,
      valueState,
    };
    setFilters({ ...filters,
      filterNumbers: [...filters.filterNumbers, newObject],
    });
  }

  return (
    <table>
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => setColumnState(target.value) }
      >
        {options.map((option) => <option key={ option }>{option}</option>)}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target }) => setComparisonState(target.value) }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ ({ target }) => setValueState(target.value) }
      />
      <button type="button" data-testid="button-filter" onClick={ handleClick }>
        Filter
      </button>
      <tr>
        <td>
          <input
            type="text"
            data-testid="name-filter"
            placeholder="search the name of the planet"
            onChange={ ({ target }) => {
              setInputName(target
                .value); setFilters({ ...filters, filterByName: { name: target.value } });
            } }
          />
        </td>
        {valueArray.map((values, index) => <th key={ index }>{values}</th>)}
      </tr>
      {renderFilter().map((planet) => (
        <tr key={ planet }>
          <td>{ planet.name }</td>
          <td>{ planet.orbital_period }</td>
          <td>{ planet.rotation_period }</td>
          <td>{ planet.diameter }</td>
          <td>{ planet.climate }</td>
          <td>{ planet.gravity }</td>
          <td>{ planet.terrain }</td>
          <td>{ planet.surface_water }</td>
          <td>{ planet.population }</td>
          <td>{ planet.films }</td>
          <td>{ planet.created }</td>
          <td>{ planet.edited }</td>
          <td>{ planet.url }</td>
        </tr>
      ))}
    </table>
  );
}

export default Table;
