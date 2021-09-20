import React, { useContext } from 'react';
import Thead from './Thead';
import PlanetContext from '../context/PlanetContext';

export default function Table() {
  const { filter, planets } = useContext(PlanetContext);

  const mountTable = (item, index) => (
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
  );

  const filterGenerator = () => planets
    .filter(({ name }) => name.toLowerCase()
      .includes(filter.toLocaleLowerCase()))
    .map((item, index) => mountTable(item, index));
  return (
    <table>
      <Thead />
      <tbody>{filterGenerator()}</tbody>
    </table>
  );
}
