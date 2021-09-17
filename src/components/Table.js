import React, { useContext, useEffect, useState } from 'react';

import MainContext from '../context/MainContext';

import './Table.css';

function Table() {
  const {
    data: { results },
    filters: {
      filterByName: { name },
      filterByNumericValues,
      order: {
        column,
        sort,
      } },
  } = useContext(MainContext);

  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    setFilteredResults(results);
  }, [results]);

  useEffect(() => {
    setFilteredResults(results
      .filter((planet) => planet.name.toLowerCase().includes(name)));
  }, [name, results]);

  function setNumericFilter(filter, planet) {
    switch (filter.comparison) {
    case 'maior que':
      return Number(planet[filter.column]) > Number(filter.value);
    case 'menor que':
      return Number(filter.value) > Number(planet[filter.column]);
    case 'igual a':
      return Number(filter.value) === Number(planet[filter.column]);
    default:
      return null;
    }
  }

  useEffect(() => {
    if (filterByNumericValues.length === 0) {
      setFilteredResults(results);
    }
    filterByNumericValues
      .forEach((filter) => setFilteredResults((prevState) => prevState
        .filter((planet) => setNumericFilter(filter, planet))));
  }, [filterByNumericValues, results]);

  if (results.length === 0) {
    return <p>Carregando...</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          {Object.keys(results[0]).map((header, index) => (
            <th
              key={ index }
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* Referência para o sort: https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value */
        /* Ajuda do Gabs e do Cestari na descoberta da função '+' e 'isNan' */}
        {filteredResults.sort((a, b) => {
          if (Number.isNaN(+(a[column]))) {
            if (sort === 'ASC') {
              return a[column].localeCompare(b[column]);
            } return b[column].localeCompare(a[column]);
          }
          if (sort === 'ASC') {
            return Number(a[column]) - Number(b[column]);
          } return Number(b[column]) - Number(a[column]);
        }).map((planet, index) => (
          <tr key={ index }>
            {Object.values(planet).map((info, index2) => {
              if (index2 === 0) {
                return <td data-testid="planet-name" key={ info }>{info}</td>;
              } return (<td key={ index2 }>{info}</td>);
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
