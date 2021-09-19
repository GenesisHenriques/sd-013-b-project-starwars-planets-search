import React, { useContext, useState } from 'react';
import ApiContext from '../context/ApiContext';
import TableHead from './TableHead';

export default function Table() {
  const { planets } = useContext(ApiContext);
  const [filterNameText, setFilterNameText] = useState('');

  console.log(planets);

  return (
    <>
      <h1>Table</h1>
      <input
        type="text"
        name="nameFilter"
        onChange={ (event) => setFilterNameText(event.target.value) }
        data-testid="name-filter"
      />
      <table>
        <TableHead />
        <tbody>
          {planets
            .filter((planet) => planet.name.toLowerCase()
              .includes(filterNameText.toLowerCase()))
            .map((planet) => (
              <tr key={ planet.name }>
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
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
