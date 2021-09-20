import React, { useEffect, useState } from 'react';
import fetchAPI from '../service/serviceAPI';

const titles = [
  'Name',
  'Rotation Period',
  'Orbital Period',
  'Diameter',
  'Climate',
  'Gravity',
  'Terrain',
  'Surface water',
  'Population',
  'Films',
  'Created',
  'Edited',
  'URL',
];

function Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const planets = await fetchAPI();
      setData(planets.results);
    };
    fetch();
  }, []);

  return (
    <table>
      <tbody>
        <tr>
          {titles.map((title, index) => (
            <th key={ index }>
              {title}
            </th>))}
        </tr>
      </tbody>

      <tbody>
        {data.map((planet) => (
          <tr key={ planet.name }>
            <td>{ planet.name }</td>
            <td>{ planet.rotation_period }</td>
            <td>{ planet.orbital_period }</td>
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
      </tbody>
    </table>
  );
}

export default Table;
