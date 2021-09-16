import React, { useState, useEffect } from 'react';

import TableHeader from './TableHeader';

export default function TableContents() {
  const [planetsList, updatePlanetsList] = useState([]);
  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((data) => data.json())
      .then((results) => results.results)
      .then((result) => updatePlanetsList(result));
  }, []);
  return (
    <table>
      { console.log(planetsList) }
      <TableHeader />
      { planetsList.length > 0 && planetsList.map((planet) => (
        <tr key={ planet.name }>
          <td>
            { planet.climate }
          </td>
          <td>
            { planet.created }
          </td>
          <td>
            { planet.diameter }
          </td>
          <td>
            { planet.edited }
          </td>
          <td>
            { planet.films.length > 0 ? planet.films.length : 0 }
          </td>
          <td>
            { planet.gravity }
          </td>
          <td>
            { planet.name }
          </td>
          <td>
            { planet.orbital_period }
          </td>
          <td>
            { planet.population }
          </td>
          <td>
            { planet.residents }
          </td>
          <td>
            { planet.rotation_period }
          </td>
          <td>
            { planet.surface_water }
          </td>
          <td>
            { planet.terrain }
          </td>
        </tr>
      )) }
    </table>
  );
}
