import React from 'react';
import PropTypes from 'prop-types';

export default function Table({ data }) {
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

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => <th key={ index }>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((planet, index) => mapPlanet(planet, index))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  data: PropTypes.arrayOf(Object).isRequired,
};
