import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../contexts/Context';

export default function Table({ data }) {
  const { filters } = useContext(Context);
  const headers = Object.keys(data[0]);
  const mapPlanet = (planet, index) => (
    <tr key={ index }>
      { Object.values(planet)
        .map((value) => (
          <td key={ value }>
            {value}
          </td>))}
    </tr>
  );

  const filteredData = data.filter((planet) => {
    const { name } = planet;
    const { nameFilter } = filters;
    let numericMatch = true;
    for (let index = 0; index < filters.numbersFilter.length; index += 1) {
      const {
        columnFilter,
        comparisonFilter,
        valueFilter } = filters.numbersFilter[index];

      const convertedColumn = Number(planet[columnFilter]);
      const convertedValue = Number(valueFilter);

      switch (comparisonFilter) {
      case 'igual a':
        numericMatch = convertedColumn === convertedValue;
        break;
      case 'menor que':
        numericMatch = convertedColumn < convertedValue;
        break;
      case 'maior que':
        numericMatch = convertedColumn > convertedValue;
        break;
      default:
      }
      if (!numericMatch) {
        numericMatch = false;
        break;
      }
    }
    return name.toLowerCase().includes(nameFilter) && numericMatch;
  });

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => <th key={ index }>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {filteredData.map((planet, index) => mapPlanet(planet, index))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  data: PropTypes.arrayOf(Object).isRequired,
};
