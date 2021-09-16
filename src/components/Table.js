import React, { useContext, useEffect, useState } from 'react';

import MainContext from '../context/MainContext';

import './Table.css';

function Table() {
  const { data: { results },
    filters: { filterByName: { name },
      filterByNumericValues } } = useContext(MainContext);

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
    filterByNumericValues
      .forEach((filter) => setFilteredResults((prevState) => prevState
        .filter((planet) => setNumericFilter(filter, planet))));
  }, [filterByNumericValues]);

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
        {filteredResults.map((planet, index) => (
          <tr key={ index }>
            {Object.values(planet).map((info, index2) => (
              <td
                key={ index2 }
              >
                {info}
              </td>))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
