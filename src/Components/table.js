import React, { useContext } from 'react';
import MyContext from '../Context/context';

const TABLE_HEADER = [
  'climate',
  'created',
  'diameter',
  'edited',
  'films',
  'gravity',
  'orbital period',
  'population',
  'rotation period',
  'name',
  'surface water',
  'terrain',
  'url',
];

function Table() {
  const { data } = useContext(MyContext);
  // console.log(data);

  return (
    <table>
      <thead>
        <tr>
          {TABLE_HEADER.map((item, index) => <th key={ index }>{item}</th>)}
        </tr>
      </thead>

      <tbody>
        {data.map((item, index) => (
          <tr key={ index }>
            <td>{item.climate}</td>
            <td>{item.created}</td>
            <td>{item.diameter}</td>
            <td>{item.edited}</td>
            <td>{item.films}</td>
            <td>{item.gravity}</td>
            <td>{item.orbital_period}</td>
            <td>{item.population}</td>
            <td>{item.rotation_period}</td>
            <td>{item.name}</td>
            <td>{item.surface_water}</td>
            <td>{item.terrain}</td>
            <td>{item.url}</td>
          </tr>))}
      </tbody>

    </table>
  );
}

export default Table;
