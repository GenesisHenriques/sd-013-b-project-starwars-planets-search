import React, { useState, useContext } from 'react';
import PlanetContext from '../context/PlanetContext';
import Thead from './Thead';

export default function Table() {
  const { planets } = useContext(PlanetContext);
  const [nameFilter, setNameFilter] = useState('');

  return (
    <div>
      <input
        type="text"
        name="nameFilter"
        data-testid="name-filter"
        value={ nameFilter }
        onChange={ ({ target }) => setNameFilter(target.value) }
      />
      <table>
        <Thead />
        <tbody>
          {planets
            .filter(({ name }) => name.toLowerCase()
              .includes(nameFilter.toLocaleLowerCase()))
            .map((item, index) => (
              <tr id={ index } key={ index }>
                <td>{item.name}</td>
                <td>{item.rotation_period}</td>
                <td>{item.orbital_period}</td>
                <td>{item.diameter}</td>
                <td>{item.climate}</td>
                <td>{item.gravity}</td>
                <td>{item.terrain}</td>
                <td>{item.surface_water}</td>
                <td>{item.population}</td>
                <td>{item.films}</td>
                <td>{item.created}</td>
                <td>{item.edited}</td>
                <td>{item.url}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
