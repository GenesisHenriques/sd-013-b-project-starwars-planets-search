// Código elaborado de acordo com a aula 18.3 da turma 12 da Trybe.
// Código elaborado de acordo com exemplos do site https://www.w3schools.com/tags.
// Código elaborado de acordo com exemplos do site https://devmedia.

import React, { useContext, useState, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data } = useContext(StarWarsContext);
  const [filteredData, setFilteredData] = useState([]);

  const [filterByName, setFilterByName] = useState('');
  const [arrayNumericFilters, setArrayNumericFilters] = useState([]);
  const [newFilter, setNewfilter] = useState({
    column: '',
    comparison: '',
    value: '',
  });

  const columns = ['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  const [filteredColumns, setFilteredColumns] = useState([...columns]);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  useEffect(() => {
    console.log(filteredColumns);
  }, [filteredColumns]);

  const applyNumberFilter = (planet) => {
    switch (newFilter.comparison) {
    case 'maior que':
      return (Number(planet[newFilter.column]) > Number(newFilter.value));
    case 'menor que':
      return (Number(planet[newFilter.column]) < Number(newFilter.value));
    case 'igual a':
      return (Number(planet[newFilter.column]) === Number(newFilter.value));
    default:
      return false;
    }
  };

  const handleAddFilter = () => {
    const contem = arrayNumericFilters.find(
      (filter) => filter.column === newFilter.column,
    );
    if (!contem) {
      setArrayNumericFilters([...arrayNumericFilters, newFilter]);
      const newData = filteredData.filter((planet) => applyNumberFilter(planet));
      setFilteredData(newData);
      console.log(newFilter);
      const newColumns = filteredColumns.filter((filter) => filter !== newFilter.column);
      setFilteredColumns(newColumns);
      console.log(newColumns);
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="filterName">
          Planet name:
          <input
            data-testid="name-filter"
            type="text"
            name="filterName"
            value={ filterByName }
            onChange={ (event) => {
              const { target: { value } } = event;
              setFilterByName(value);
              const newData = data.filter((planet) => planet.name.includes(value));
              setFilteredData(newData);
            } }
          />
        </label>
      </div>
      <br />
      <div>
        <label htmlFor="column-filter">
          <select
            name="column-filter"
            data-testid="column-filter"
            value={ newFilter.column }
            onChange={ (event) => setNewfilter({
              ...newFilter,
              column: event.target.value,
            }) }
          >
            { filteredColumns.map((column) => (
              <option key={ column } value={ column }>{column}</option>
            )) }
          </select>
        </label>
        <label htmlFor="comparison-filter">
          <select
            name="comparison-filter"
            data-testid="comparison-filter"
            value={ newFilter.comparison }
            onChange={ (event) => setNewfilter({
              ...newFilter,
              comparison: event.target.value,
            }) }
          >
            <option value=""> </option>
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <label htmlFor="value-filter">
          <input
            type="number"
            name="value-filter"
            data-testid="value-filter"
            value={ newFilter.value }
            onChange={ (event) => setNewfilter({
              ...newFilter,
              value: event.target.value,
            }) }
          />
        </label>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleAddFilter }
        >
          Adicionar

        </button>
      </div>
      <br />
      <table border="1">
        <thead>
          <tr>
            <th>name</th>
            <th>rotation_period</th>
            <th>orbital_period</th>
            <th>diameter</th>
            <th>climate</th>
            <th>gravity</th>
            <th>terrain</th>
            <th>surface_water</th>
            <th>population</th>
            <th>films</th>
            <th>created</th>
            <th>edited</th>
            <th>url</th>
          </tr>
        </thead>
        <tbody>
          {data === undefined
            ? <tr>Loading...</tr>
            : filteredData
              .map((planet, index) => (
                <tr key={ index }>
                  <td>{planet.name}</td>
                  <td>{planet.rotation_period}</td>
                  <td>{planet.orbital_period}</td>
                  <td>{planet.diameter}</td>
                  <td>{planet.climate}</td>
                  <td>{planet.gravity}</td>
                  <td>{planet.terrain}</td>
                  <td>{planet.surface_water}</td>
                  <td>{planet.population}</td>
                  <td>{planet.films}</td>
                  <td>{planet.created}</td>
                  <td>{planet.edited}</td>
                  <td>{planet.url}</td>
                </tr>))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
