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
    const planetName = planet.name.toLowerCase();
    const filter = filters.name.toLowerCase();
    return planetName.match(filter);
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
